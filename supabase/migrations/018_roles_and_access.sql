-- ═══════════════════════════════════════════════════════════════════════════
-- 018 · Roller, aktivitet og tilgangsstyring
--
-- customers.tripletex_id ligger i 017 og er allerede kjørt i prod. Denne
-- migrasjonen rører den ikke.
-- ═══════════════════════════════════════════════════════════════════════════

-- ─── Roller ────────────────────────────────────────────────────────────────
-- Tre nivåer. 'ansatt' er standard fordi en ny bruker skal få minst mulig
-- inntil noen bevisst gir mer — ikke omvendt.

alter table public.profiles
  add column if not exists role text not null default 'ansatt';

do $$ begin
  alter table public.profiles
    add constraint profiles_role_check check (role in ('admin', 'leder', 'ansatt'));
exception when duplicate_object then null; end $$;

-- E-post speiles hit så Ansatte-siden slipper å lese auth.users (som ikke er
-- lesbar for en vanlig klient). full_name har vært brukt som e-post til nå.
alter table public.profiles
  add column if not exists email text;

-- ─── Aktivitet ─────────────────────────────────────────────────────────────
-- TO kolonner, og forskjellen er poenget:
--
--   last_sign_in_at  når brukeren faktisk logget inn. Speiles fra auth.users,
--                    som er fasit. Oppdateres KUN ved ny innlogging.
--   last_seen_at     når portalen sist ble åpnet. Sesjoner varer i uker, så
--                    «siste innlogging» kan vise en måned gammel dato for en
--                    som bruker systemet hver dag. Den ene svarer «når fikk
--                    hun tilgang», den andre «bruker hun det».

alter table public.profiles
  add column if not exists last_sign_in_at timestamptz;

alter table public.profiles
  add column if not exists last_seen_at timestamptz;

-- ─── Speiling fra auth.users ───────────────────────────────────────────────
-- GoTrue skriver last_sign_in_at selv. En trigger holder profiles i takt, så
-- ingen klientkode trenger å huske å oppdatere noe.

create or replace function public.sync_auth_activity()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  update public.profiles
     set last_sign_in_at = new.last_sign_in_at,
         email = coalesce(new.email, email)
   where id = new.id;
  return new;
end; $$;

drop trigger if exists on_auth_user_signin on auth.users;
create trigger on_auth_user_signin
  after update on auth.users
  for each row
  when (old.last_sign_in_at is distinct from new.last_sign_in_at
        or old.email is distinct from new.email)
  execute function public.sync_auth_activity();

-- Nye brukere får e-posten med fra start.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email), new.email)
  on conflict (id) do nothing;
  return new;
end; $$;

-- Etterfyll for alle som allerede finnes.
update public.profiles p
   set email = u.email,
       last_sign_in_at = u.last_sign_in_at
  from auth.users u
 where u.id = p.id
   and (p.email is distinct from u.email
        or p.last_sign_in_at is distinct from u.last_sign_in_at);

-- ─── Eivind er admin ───────────────────────────────────────────────────────
update public.profiles p
   set role = 'admin'
  from auth.users u
 where u.id = p.id
   and lower(u.email) = 'eivind@dekmar.no';

-- ─── Ingen kan forfremme seg selv ──────────────────────────────────────────
-- profiles_update lar en bruker skrive til sin egen rad, og uten dette vernet
-- kunne hvem som helst satt role = 'admin' med ett kall fra nettleseren.
-- Triggeren, ikke policyen, er stedet: en policy som leser profiles for å
-- avgjøre om skrivingen til profiles er lov gir uendelig rekursjon.

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.profiles
     where id = auth.uid() and role = 'admin'
  );
$$;

grant execute on function public.is_admin() to authenticated, anon, service_role;

create or replace function public.protect_profile_role()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  -- service_role (edge-funksjoner) og en ekte admin får endre rolle.
  if auth.uid() is null or public.is_admin() then
    return new;
  end if;
  if new.role is distinct from old.role then
    raise exception 'Bare admin kan endre rolle';
  end if;
  -- Aktivitetsfeltene skrives av triggeren over og av portalen ved innlasting;
  -- de skal ikke kunne settes fritt til hva som helst.
  new.last_sign_in_at := old.last_sign_in_at;
  return new;
end; $$;

drop trigger if exists profiles_protect_role on public.profiles;
create trigger profiles_protect_role
  before update on public.profiles
  for each row execute function public.protect_profile_role();

-- Admin må kunne oppdatere ANDRE sine rader for å kunne endre rolle.
drop policy if exists profiles_admin_update on public.profiles;
create policy profiles_admin_update on public.profiles
  for update to authenticated using (public.is_admin());

-- ─── Tilgang på tabellnivå ─────────────────────────────────────────────────
-- Å filtrere menyen skjuler knapper. Det beskytter ingenting: hver av
-- tabellene under har i dag «for all to authenticated using (true)», så en
-- ansatt kunne lese hele kunderegisteret og alle marginer med ett kall fra
-- nettleserkonsollen uansett hva menyen viser.
--
-- Dette er derfor den egentlige låsen, og menyfiltreringen er bare det som
-- gjør at ingen møter en tom side de ikke skulle sett.

create or replace function public.is_leder()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.profiles
     where id = auth.uid() and role in ('admin', 'leder')
  );
$$;

grant execute on function public.is_leder() to authenticated, anon, service_role;

-- Kommersielt: pris, margin, kunderegister og kontrakter. Leder og admin.
do $$
declare t text;
begin
  foreach t in array array['customers','quotes','quote_elements','calculations','calc_materials','purchase_orders','contracts'] loop
    execute format('drop policy if exists %I_all on public.%I;', t, t);
    execute format('drop policy if exists %I_leder on public.%I;', t, t);
    execute format(
      'create policy %I_leder on public.%I for all to authenticated using (public.is_leder()) with check (public.is_leder());', t, t);
  end loop;
end $$;

-- Maler styrer hva alle andre skjemaer ser ut som. Kun admin skriver;
-- alle må kunne LESE dem, ellers kan ikke en ansatt fylle ut en sjekkliste.
drop policy if exists templates_all on public.templates;
drop policy if exists templates_read on public.templates;
drop policy if exists templates_admin_write on public.templates;
create policy templates_read on public.templates
  for select to authenticated using (true);
create policy templates_admin_write on public.templates
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

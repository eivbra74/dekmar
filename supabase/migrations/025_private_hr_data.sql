-- ═══════════════════════════════════════════════════════════════════════════
-- 025 · Sykefravær og timer er private (sikkerhetsfunn WEB-005)
--
-- 011 og 014 ga «for all to authenticated using (true)»: enhver ansatt kunne
-- lese, endre og slette alles sykefravær og timer fra nettleserkonsollen.
-- Sykefravær er helseopplysninger (GDPR art. 9). Nå gjelder:
--
--   lese    egne rader, eller admin/leder (public.is_leder() fra 018)
--   skrive  rader man selv har registrert, eller admin/leder
--
-- «Egen rad» betyr:
--   created_by = auth.uid()   – den som registrerte raden (portalen setter den
--                               alltid ved insert, se index.astro)
--   employee   = egen e-post  – raden gjelder meg (portalen skriver e-post i
--                               employee for timer; for sykefravær velger leder
--                               navn ELLER e-post fra listen)
-- E-posten hentes fra innloggingstokenet (auth.jwt()), ikke fra profiles:
-- en bruker kan selv endre full_name/email i sin egen profil-rad, så et
-- navne- eller profiloppslag ville latt hvem som helst gi seg ut for en kollega.
-- En rad som leder har registrert med NAVN (ikke e-post) på en ansatt, ser
-- derfor bare leder/admin og den som registrerte den.
-- En ansatt kan se, men ikke endre eller slette, fravær som leder har
-- registrert på hans e-post.
--
-- Idempotent: kan kjøres flere ganger. Kjøres manuelt i SQL Editor på
-- Dekmar KS-prosjektet (lqubxffanaxstpghiedp). IKKE kjørt i prod ennå.
-- Forutsetter 018 (public.is_leder()).
-- ═══════════════════════════════════════════════════════════════════════════

begin;

-- created_by fylles automatisk hvis en klient glemmer den, så raden ikke blir
-- «foreldreløs» (bare synlig for leder).
alter table public.sick_leaves  alter column created_by set default auth.uid();
alter table public.time_entries alter column created_by set default auth.uid();

-- ─── Sykefravær ────────────────────────────────────────────────────────────
drop policy if exists sick_leaves_all    on public.sick_leaves;
drop policy if exists sick_leaves_select on public.sick_leaves;
drop policy if exists sick_leaves_insert on public.sick_leaves;
drop policy if exists sick_leaves_update on public.sick_leaves;
drop policy if exists sick_leaves_delete on public.sick_leaves;

create policy sick_leaves_select on public.sick_leaves
  for select to authenticated using (
    created_by = (select auth.uid())
    or lower(employee) = lower((select auth.jwt() ->> 'email'))
    or (select public.is_leder())
  );

create policy sick_leaves_insert on public.sick_leaves
  for insert to authenticated with check (
    created_by = (select auth.uid())
    or (select public.is_leder())
  );

create policy sick_leaves_update on public.sick_leaves
  for update to authenticated
  using      (created_by = (select auth.uid()) or (select public.is_leder()))
  with check (created_by = (select auth.uid()) or (select public.is_leder()));

create policy sick_leaves_delete on public.sick_leaves
  for delete to authenticated using (
    created_by = (select auth.uid())
    or (select public.is_leder())
  );

-- ─── Timer ─────────────────────────────────────────────────────────────────
drop policy if exists time_entries_all    on public.time_entries;
drop policy if exists time_entries_select on public.time_entries;
drop policy if exists time_entries_insert on public.time_entries;
drop policy if exists time_entries_update on public.time_entries;
drop policy if exists time_entries_delete on public.time_entries;

create policy time_entries_select on public.time_entries
  for select to authenticated using (
    created_by = (select auth.uid())
    or lower(employee) = lower((select auth.jwt() ->> 'email'))
    or (select public.is_leder())
  );

create policy time_entries_insert on public.time_entries
  for insert to authenticated with check (
    created_by = (select auth.uid())
    or (select public.is_leder())
  );

create policy time_entries_update on public.time_entries
  for update to authenticated
  using      (created_by = (select auth.uid()) or (select public.is_leder()))
  with check (created_by = (select auth.uid()) or (select public.is_leder()));

create policy time_entries_delete on public.time_entries
  for delete to authenticated using (
    created_by = (select auth.uid())
    or (select public.is_leder())
  );

commit;

notify pgrst, 'reload schema';

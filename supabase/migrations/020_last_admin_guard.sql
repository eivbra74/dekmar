-- 020: Det må alltid være minst én administrator.
-- Oppdaterer protect_profile_role (fra 018) slik at siste admin ikke kan
-- degraderes til leder/ansatt – uansett hvem som gjør det via portalen.
-- (Management-API/superbruker omgår triggere; det er kun for utviklere.)
-- Kjørt i prod via Management API 23.09.2026.
create or replace function public.protect_profile_role()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.role is distinct from old.role then
    -- Kun admin (eller edge-funksjoner/service) kan endre rolle.
    if auth.uid() is not null and not public.is_admin() then
      raise exception 'Bare admin kan endre rolle';
    end if;
    -- Må alltid beholde minst én administrator på prosjektet.
    if old.role = 'admin' and new.role <> 'admin'
       and (select count(*) from public.profiles where role = 'admin' and id <> old.id) = 0 then
      raise exception 'Det maa alltid vaere minst en administrator paa prosjektet. Gjoer en annen bruker til administrator foerst.';
    end if;
  end if;
  -- Aktivitetsfeltene skrives kun av triggeren over / portalen ved innlasting.
  if auth.uid() is not null and not public.is_admin() then
    new.last_sign_in_at := old.last_sign_in_at;
  end if;
  return new;
end; $$;

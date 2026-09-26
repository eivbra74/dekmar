-- 021: Rollebasert lesing av profiles + navne-visning for rosters.
--
-- profiles inneholder e-post, rolle og aktivitet. En ansatt skal bare se sin
-- egen rad, en leder alle unntatt admin, og admin alle. Navneoppslag
-- (ressursplan, dokumenter, sykefravaer) trenger derimot id+full_name for ALLE
-- ansatte for at rosterne skal virke — de flyttes derfor til visningen
-- staff_names, som kun eksponerer id+full_name (ikke e-post/rolle).
--
-- Kjort i prod via Management API 26.09.2026.

-- Navne-visning: kun id + full_name. security_invoker=false gjor at den kjorer
-- som eier og forbigaar RLS paa profiles, saa alle innloggede ser alle navn
-- (som rosterne alltid har gjort). Ingen e-post eller rolle lekker.
create or replace view public.staff_names
with (security_invoker = false) as
  select id, full_name from public.profiles;

revoke all on public.staff_names from anon;
grant select on public.staff_names to authenticated;

-- Rollebasert SELECT paa profiles (erstatter den apne profiles_read).
drop policy if exists profiles_read on public.profiles;
create policy profiles_read on public.profiles for select using (
  id = auth.uid()
  or public.is_admin()
  or (public.is_leder() and role <> 'admin')
);

notify pgrst, 'reload schema';

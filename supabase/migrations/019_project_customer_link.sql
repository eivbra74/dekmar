-- 019: Koble prosjekter til kunderegisteret.
-- Kjørt i prod via Management API 23.09.2026.
alter table public.projects add column if not exists customer_id uuid references public.customers(id) on delete set null;
-- Backfill på navn for prosjekter importert før kundene fantes:
-- update projects p set customer_id=c.id from customers c
--   where p.customer_id is null and lower(trim(p.client))=lower(trim(c.name));
-- Tripletex-prosjektimport setter customer_id via Tripletex kunde-id for nye prosjekter.

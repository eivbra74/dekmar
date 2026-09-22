-- 010: Tripletex-import – idempotens-nøkler for prosjekter og materialer.
-- Kjørt i prod via Management API 22.09.2026.
alter table public.projects add column if not exists tripletex_id bigint;
alter table public.calc_materials add column if not exists tripletex_id bigint;
alter table public.calc_materials add column if not exists needs_fdv boolean default false;
create unique index if not exists calc_materials_tripletex_uidx on public.calc_materials(tripletex_id);
create unique index if not exists projects_tripletex_uidx on public.projects(tripletex_id);
-- Edge Function `tripletex` bruker TRIPLETEX_CONSUMER_TOKEN + TRIPLETEX_EMPLOYEE_TOKEN (secrets)
-- → sesjonstoken (Basic 0:sessionToken) → GET /v2/project, /v2/product.

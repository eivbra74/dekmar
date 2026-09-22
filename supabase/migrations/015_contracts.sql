-- 015: NS-kontrakter (avtaledokument). Selve NS-standardtekstene lagres IKKE
-- (opphavsrett Standard Norge) – kun kode/navn + avtaledata som henviser til dem.
-- Kjørt i prod via Management API 22.09.2026. RLS = alle innloggede full tilgang.
create table if not exists public.contracts (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete set null,
  customer_id uuid references public.customers(id) on delete set null,
  ns_standard text,
  title text,
  contract_no text,
  role text,
  sum numeric,
  start_date date,
  end_date date,
  status text default 'draft',
  data jsonb default '{}'::jsonb,
  created_by uuid,
  created_at timestamptz default now()
);
alter table public.contracts enable row level security;
-- policy "auth all": for all to authenticated using (true) with check (true)
create policy contracts_all on public.contracts for all to authenticated using (true) with check (true);

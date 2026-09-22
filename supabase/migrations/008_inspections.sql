-- 008: Befaringsmodul – befaringsrapporter med observasjoner og bilder.
-- Kjørt i prod via Management API 22.09.2026. RLS = alle innloggede full tilgang.
create table if not exists public.inspections (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete set null,
  customer_id uuid references public.customers(id) on delete set null,
  number text, title text, address text, insp_date date, present text, summary text,
  rows jsonb default '[]'::jsonb, status text default 'draft',
  created_at timestamptz default now(), created_by uuid
);
alter table public.photos add column if not exists inspection_id uuid references public.inspections(id) on delete cascade;
alter table public.inspections enable row level security;
-- policy "auth all": for all to authenticated using (true) with check (true)

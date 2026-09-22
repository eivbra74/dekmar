-- 013: Ressursplan / bemanning – hvem er satt på hvilket prosjekt hvilke dager.
-- Kjørt i prod via Management API 22.09.2026. RLS = alle innloggede full tilgang.
create table if not exists public.resource_assignments (
  id uuid primary key default gen_random_uuid(),
  employee text not null,
  project_id uuid references public.projects(id) on delete cascade,
  work_date date not null,
  note text,
  created_by uuid,
  created_at timestamptz default now(),
  unique (employee, project_id, work_date)
);
create index if not exists resource_assignments_date_idx on public.resource_assignments(work_date);
alter table public.resource_assignments enable row level security;
-- policy "auth all": for all to authenticated using (true) with check (true)
create policy resource_assignments_all on public.resource_assignments for all to authenticated using (true) with check (true);

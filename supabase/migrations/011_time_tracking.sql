-- 011: Timeføring / timebudsjett.
-- Kjørt i prod via Management API 22.09.2026. RLS = alle innloggede full tilgang.
alter table public.projects add column if not exists budget_hours numeric;
create table if not exists public.time_entries (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  work_date date not null default current_date,
  hours numeric not null default 0,
  activity text,
  note text,
  employee text,
  created_at timestamptz default now(),
  created_by uuid
);
create index if not exists time_entries_project_idx on public.time_entries(project_id);
alter table public.time_entries enable row level security;
-- policy "auth all": for all to authenticated using (true) with check (true)
create policy time_entries_all on public.time_entries for all to authenticated using (true) with check (true);

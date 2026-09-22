-- 007: Utfyllbare HMS-skjemaer per prosjekt (SJA, risikovurdering, stillaskontroll).
-- Kjørt i prod via Management API 22.09.2026. RLS = alle innloggede full tilgang.
create table if not exists public.hse_forms (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  form_type text not null, title text, data jsonb default '{}'::jsonb,
  status text default 'draft', created_at timestamptz default now(), created_by uuid
);
alter table public.hse_forms enable row level security;
-- policy "auth all": for all to authenticated using (true) with check (true)

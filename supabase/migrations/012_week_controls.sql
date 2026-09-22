-- 012: Ukekontroll – godkjenning/kontroll av timer per uke.
-- Kjørt i prod via Management API 22.09.2026. RLS = alle innloggede full tilgang.
create table if not exists public.week_controls (
  id uuid primary key default gen_random_uuid(),
  iso_year int not null,
  iso_week int not null,
  note text,
  controlled_by uuid,
  controlled_by_email text,
  controlled_at timestamptz default now(),
  created_at timestamptz default now(),
  unique (iso_year, iso_week)
);
alter table public.week_controls enable row level security;
-- policy "auth all": for all to authenticated using (true) with check (true)
create policy week_controls_all on public.week_controls for all to authenticated using (true) with check (true);

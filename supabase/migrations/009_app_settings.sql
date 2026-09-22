-- 009: Portal-innstillinger (nøkkel/verdi), bl.a. automatisk avviksvarsling.
-- Kjørt i prod via Management API 22.09.2026. RLS = alle innloggede full tilgang.
create table if not exists public.app_settings (
  key text primary key, value jsonb default '{}'::jsonb, updated_at timestamptz default now(), updated_by uuid
);
alter table public.app_settings enable row level security;
-- policy "auth all": for all to authenticated using (true) with check (true)
-- Nøkkel 'deviation_notify' = { enabled: bool, emails: string[], onlyHigh: bool }

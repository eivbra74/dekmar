-- 006: Prosjektstatus – aktive vs. leverte/arkiverte prosjekter.
-- Kjørt i prod via Management API 22.09.2026.
alter table public.projects
  add column if not exists status text default 'active',   -- 'active' | 'delivered'
  add column if not exists delivered_at timestamptz;
update public.projects set status='active' where status is null;

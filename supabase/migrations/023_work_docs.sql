-- 023: Dokumentasjon paa utfoert arbeid (as-built / sluttdokumentasjon).
-- Ett dokument pr. leveranse, lagret paa prosjektet og gjenfinnbart. Strukturerte
-- arbeidspunkter (hva/hvor/materialer/metode) i entries, og bilder gjennom hele
-- prosessen i photos-tabellen med phase (before/during/after) + entry_ref
-- (hvilket arbeidspunkt bildet hoerer til).
-- Kjort i prod via Management API 26.09.2026.
create table if not exists public.work_docs (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  title text,
  client text,
  performed_by text,
  period_from date,
  period_to date,
  summary text,
  entries jsonb default '[]'::jsonb,
  control text,
  conclusion text,
  created_by uuid,
  created_at timestamptz default now()
);

-- Bilder kan nå tilhøre et arbeidsdokument og et arbeidspunkt.
alter table public.photos add column if not exists work_doc_id uuid references public.work_docs(id) on delete cascade;
alter table public.photos add column if not exists entry_ref text;

alter table public.work_docs enable row level security;
drop policy if exists work_docs_all on public.work_docs;
create policy work_docs_all on public.work_docs for all to authenticated using (true) with check (true);

notify pgrst, 'reload schema';

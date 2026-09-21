-- Dekmar KS – utvidelse: maler, stoffkartotek, avvikssystem, HMS-artikler
-- Kjøres i Supabase → SQL Editor. Alt team-delt (innloggede har full tilgang).

-- ─────────────────────────────────────────────────────────────
-- MODUL 1: Maler (templates) for vernerunder og sjekklister
-- ─────────────────────────────────────────────────────────────
create table if not exists public.templates (
  id uuid primary key default gen_random_uuid(),
  slug text unique,                          -- for idempotent seeding av standardmaler
  name text not null,
  kind text not null default 'verneround',   -- 'verneround' | 'checklist'
  description text,
  is_standard boolean not null default false,
  sections jsonb not null default '[]'::jsonb, -- [{id,title:{no,pl,en},items:[{id,text:{no,pl,en}}]}]
  sort int not null default 0,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);
alter table public.templates enable row level security;
drop policy if exists templates_all on public.templates;
create policy templates_all on public.templates for all to authenticated using (true) with check (true);

-- checklists: husk hvilken mal + øyeblikksbilde av seksjonene (så PDF/arkiv virker selv om malen endres)
alter table public.checklists add column if not exists template_id uuid;
alter table public.checklists add column if not exists sections jsonb;

-- ─────────────────────────────────────────────────────────────
-- MODUL 2: Stoffkartotek (kjemikalier) per prosjekt
-- ─────────────────────────────────────────────────────────────
create table if not exists public.chemicals (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,  -- null = felles
  name text not null,
  supplier text,
  use_area text,             -- bruksområde
  hazards text,              -- GHS-piktogrammer / fareklasse (kommaseparert)
  signal_word text,          -- Fare / Advarsel
  quantity text,
  location text,             -- lagringssted
  sds_path text,             -- sikkerhetsdatablad i storage (ks-docs, prefix sds/)
  sds_url text,              -- ekstern lenke til SDS
  notes text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);
create index if not exists idx_chemicals_project on public.chemicals(project_id);
alter table public.chemicals enable row level security;
drop policy if exists chemicals_all on public.chemicals;
create policy chemicals_all on public.chemicals for all to authenticated using (true) with check (true);

-- ─────────────────────────────────────────────────────────────
-- MODUL 3: Avvikssystem – konfigurerbare kategorier + ansvarlige + flere felt
-- ─────────────────────────────────────────────────────────────
create table if not exists public.deviation_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sort int not null default 0,
  is_standard boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.deviation_categories enable row level security;
drop policy if exists devcat_all on public.deviation_categories;
create policy devcat_all on public.deviation_categories for all to authenticated using (true) with check (true);

create table if not exists public.deviation_responsibles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sort int not null default 0,
  created_at timestamptz not null default now()
);
alter table public.deviation_responsibles enable row level security;
drop policy if exists devresp_all on public.deviation_responsibles;
create policy devresp_all on public.deviation_responsibles for all to authenticated using (true) with check (true);

-- deviations: felt for et komplett system
alter table public.deviations add column if not exists category text;
alter table public.deviations add column if not exists severity text;   -- lav | middels | hoy
alter table public.deviations add column if not exists due_date date;
alter table public.deviations add column if not exists closed_at timestamptz;

-- ─────────────────────────────────────────────────────────────
-- MODUL 4: HMS-artikler (kunnskapsbase) – originalt Dekmar-innhold
-- ─────────────────────────────────────────────────────────────
create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique,
  title text not null,
  category text,
  summary text,
  body text,                 -- enkel HTML
  sort int not null default 0,
  is_standard boolean not null default false,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);
alter table public.articles enable row level security;
drop policy if exists articles_all on public.articles;
create policy articles_all on public.articles for all to authenticated using (true) with check (true);

-- 005: Kalkulasjonsverktøy – materialbibliotek (m/ kostpris + prisimport), kalkyler og bestillingslister.
-- Kjørt i prod via Management API 22.09.2026. RLS = alle innloggede full tilgang.
create table if not exists public.calc_materials (
  id uuid primary key default gen_random_uuid(),
  name text not null, supplier text, article_no text, unit text, cost_price numeric,
  category text, order_email text, slug text unique, sort int default 0,
  created_at timestamptz default now(), created_by uuid
);
create table if not exists public.calculations (
  id uuid primary key default gen_random_uuid(),
  name text, project_id uuid references public.projects(id) on delete set null,
  customer_id uuid references public.customers(id) on delete set null,
  lines jsonb default '[]'::jsonb, status text default 'draft',
  created_at timestamptz default now(), created_by uuid
);
create table if not exists public.purchase_orders (
  id uuid primary key default gen_random_uuid(),
  number text, supplier text, order_email text,
  project_id uuid references public.projects(id) on delete set null,
  calc_id uuid references public.calculations(id) on delete set null,
  items jsonb default '[]'::jsonb, note text, status text default 'draft', sent_at timestamptz,
  created_at timestamptz default now(), created_by uuid
);
alter table public.calc_materials enable row level security;
alter table public.calculations enable row level security;
alter table public.purchase_orders enable row level security;
-- policy "auth all" per tabell: for all to authenticated using (true) with check (true)

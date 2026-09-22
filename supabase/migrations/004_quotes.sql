-- 004: Pristilbud-modul – kunderegister, tilbud og elementbibliotek.
-- Kjørt i prod via Management API 22.09.2026. RLS = alle innloggede full tilgang (team-delt).
create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  name text not null, org_no text, contact text, email text, phone text, address text, notes text,
  created_at timestamptz default now(), created_by uuid
);
create table if not exists public.quote_elements (
  id uuid primary key default gen_random_uuid(),
  category text, spec text not null, unit text, price numeric, sort int default 0,
  slug text unique, is_standard boolean default true, created_at timestamptz default now()
);
create table if not exists public.quotes (
  id uuid primary key default gen_random_uuid(),
  number text, year int, seq int,
  customer_id uuid references public.customers(id) on delete set null,
  project_id uuid references public.projects(id) on delete set null,
  title text, address text, intro text, start_note text,
  lines jsonb default '[]'::jsonb, terms jsonb default '[]'::jsonb,
  vat_rate numeric default 25, valid_days int default 30, hourly_rate numeric default 850,
  signatory text, signatory_title text, signatory_phone text, signatory_email text,
  status text default 'draft', sent_at timestamptz,
  created_at timestamptz default now(), created_by uuid
);
alter table public.customers enable row level security;
alter table public.quote_elements enable row level security;
alter table public.quotes enable row level security;
-- policy "auth all" for hver tabell: for all to authenticated using (true) with check (true)

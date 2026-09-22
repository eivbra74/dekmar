-- 014: Sykefravær – egenmelding / sykmelding / sykt barn per ansatt.
-- Kjørt i prod via Management API 22.09.2026. RLS = alle innloggede full tilgang.
create table if not exists public.sick_leaves (
  id uuid primary key default gen_random_uuid(),
  employee text not null,
  type text not null default 'egenmelding',
  from_date date not null,
  to_date date,
  degree int default 100,
  note text,
  created_by uuid,
  created_at timestamptz default now()
);
create index if not exists sick_leaves_from_idx on public.sick_leaves(from_date);
alter table public.sick_leaves enable row level security;
-- policy "auth all": for all to authenticated using (true) with check (true)
create policy sick_leaves_all on public.sick_leaves for all to authenticated using (true) with check (true);

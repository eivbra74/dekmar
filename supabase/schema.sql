-- Dekmar KS – Supabase-skjema
-- Kjøres i Supabase → SQL Editor. Team-delt KS: alle innloggede ansatte
-- ser og redigerer felles prosjekter; created_by sporer hvem som gjorde hva.

-- ─────────────────────────────────────────────────────────────
-- 1) Profiler (kobles til auth.users)
-- ─────────────────────────────────────────────────────────────
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  created_at timestamptz not null default now()
);

-- Opprett profil automatisk når en bruker registreres
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email))
  on conflict (id) do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ─────────────────────────────────────────────────────────────
-- 2) Prosjekter
-- ─────────────────────────────────────────────────────────────
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  address text,
  client text,                       -- hovedentreprenør / byggherre
  status text not null default 'active',  -- active | done | archived
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- 3) Sjekklister (svarene lagres som jsonb)
-- ─────────────────────────────────────────────────────────────
create table if not exists public.checklists (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  type text not null default 'checklist',   -- 'checklist' | 'verneround'
  title text,
  performed_by text,
  performed_date date,
  lang text default 'no',
  answers jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);
-- Hvis tabellen finnes fra før:
alter table public.checklists add column if not exists type text not null default 'checklist';

-- ─────────────────────────────────────────────────────────────
-- 4) Avvik
-- ─────────────────────────────────────────────────────────────
create table if not exists public.deviations (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  number text,
  dev_date date,
  location text,
  description text,
  cause text,
  correction text,
  verification text,
  responsible text,
  status text not null default 'open',   -- open | closed
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- 5) Bilder (metadata; selve filen ligger i Storage-bøtta ks-photos)
-- ─────────────────────────────────────────────────────────────
create table if not exists public.photos (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  deviation_id uuid references public.deviations(id) on delete cascade,
  checklist_id uuid references public.checklists(id) on delete set null,
  storage_path text not null,
  caption text,
  phase text,                        -- before | during | after
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create index if not exists idx_checklists_project on public.checklists(project_id);
create index if not exists idx_deviations_project on public.deviations(project_id);
create index if not exists idx_photos_project on public.photos(project_id);
create index if not exists idx_photos_deviation on public.photos(deviation_id);

-- ─────────────────────────────────────────────────────────────
-- 6) Row Level Security – kun innloggede ansatte, team-delt
-- ─────────────────────────────────────────────────────────────
alter table public.profiles   enable row level security;
alter table public.projects   enable row level security;
alter table public.checklists enable row level security;
alter table public.deviations enable row level security;
alter table public.photos     enable row level security;

-- Profiler: alle innloggede kan lese; man kan redigere sin egen
drop policy if exists profiles_read on public.profiles;
create policy profiles_read on public.profiles for select to authenticated using (true);
drop policy if exists profiles_upsert on public.profiles;
create policy profiles_upsert on public.profiles for insert to authenticated with check (auth.uid() = id);
drop policy if exists profiles_update on public.profiles;
create policy profiles_update on public.profiles for update to authenticated using (auth.uid() = id);

-- Prosjekt/sjekkliste/avvik/bilder: innloggede har full tilgang (team-delt)
do $$
declare t text;
begin
  foreach t in array array['projects','checklists','deviations','photos'] loop
    execute format('drop policy if exists %I_all on public.%I;', t, t);
    execute format(
      'create policy %I_all on public.%I for all to authenticated using (true) with check (true);', t, t);
  end loop;
end $$;

-- ─────────────────────────────────────────────────────────────
-- 7) Storage-bøtte for bilder (privat) + policyer
-- ─────────────────────────────────────────────────────────────
insert into storage.buckets (id, name, public)
values ('ks-photos', 'ks-photos', false)
on conflict (id) do nothing;

drop policy if exists ks_photos_read on storage.objects;
create policy ks_photos_read on storage.objects for select to authenticated
  using (bucket_id = 'ks-photos');
drop policy if exists ks_photos_insert on storage.objects;
create policy ks_photos_insert on storage.objects for insert to authenticated
  with check (bucket_id = 'ks-photos');
drop policy if exists ks_photos_update on storage.objects;
create policy ks_photos_update on storage.objects for update to authenticated
  using (bucket_id = 'ks-photos');
drop policy if exists ks_photos_delete on storage.objects;
create policy ks_photos_delete on storage.objects for delete to authenticated
  using (bucket_id = 'ks-photos');

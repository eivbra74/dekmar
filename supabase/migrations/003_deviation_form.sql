-- 003: Utvider avviksskjemaet til å dekke Dekmars offisielle «Enkelt avviksskjema»
-- (rolledeling avviksmelder / avviksansvarlig, iht. Internkontrollforskriften § 5).
-- Kjørt i prod via Management API 22.09.2026.
alter table public.deviations
  add column if not exists reporter text,            -- avviksmelder (navn)
  add column if not exists improvement text,         -- forslag til forbedring
  add column if not exists preventive text,          -- forebyggende tiltak (hindre gjentakelse)
  add column if not exists reporter_informed date;   -- avviksmelder informert om håndtering

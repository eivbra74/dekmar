-- 016: FDV-arkiv – støtte for opplastet SDS-fil (i tillegg til URL).
-- Filen lagres i Storage-bøtta ks-docs under prefiks sds/fdv/, åpnes via signert URL.
-- Kjørt i prod via Management API 22.09.2026.
alter table public.fdv_products add column if not exists sds_path text;

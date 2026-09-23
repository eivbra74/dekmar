-- 017: Tripletex kundesync – idempotens-nøkkel på customers.
-- Kjørt i prod via Management API 22.09.2026.
alter table public.customers add column if not exists tripletex_id bigint;
create unique index if not exists customers_tripletex_uidx on public.customers(tripletex_id);
-- Edge Function `tripletex` action 'customers' → GET /v2/customer.
-- Prosjektimport kobler projects.customer_id via Tripletex kunde-id når kunder er importert.

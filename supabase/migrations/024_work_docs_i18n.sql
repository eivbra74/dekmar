-- 024: Flerspraaklig innhold i arbeidsdokumentasjon.
-- Tekstfeltene (tittel, sammendrag, egenkontroll, konklusjon) og hvert
-- arbeidspunkt (sted/utfoert/materialer/metode) auto-oversettes til no/pl/en
-- ved lagring, med kilde = spraaket brukeren skrev paa. Doc-nivaa lagres i
-- work_docs.i18n {no:{...},pl:{...},en:{...}}, arbeidspunkt-nivaa i entries[i].i18n.
-- Navn (performed_by) og firma (client) oversettes ikke.
-- Kjort i prod via Management API 26.09.2026.
alter table public.work_docs add column if not exists i18n jsonb;

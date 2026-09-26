-- 022: Flerspraaklig listenavn paa sjekklister/vernerunder.
-- title lagres fortsatt (kildespraaket), men title_i18n {no,pl,en} gjor at
-- navnet vises paa innlogget spraak. Fylles ved lagring (auto-oversatt via
-- translate-funksjonen) og etterfylt for eksisterende rader.
-- Kjort i prod via Management API 26.09.2026.
alter table public.checklists add column if not exists title_i18n jsonb;

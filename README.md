# Dekmar AS — nettside

Ny, kundevennlig one-pager for **Dekmar AS** — takentreprenør og blikkenslagerverksted i Oslo og Viken.

Bygget som en enkel statisk side (HTML/CSS/JS, ingen byggesteg) med ekte prosjektbilder og innhold fra dekmar.no.

## Innhold
- `index.html` — norsk versjon (bokmål)
- `index-en.html` — engelsk versjon
- `styles.css` — stiler (navy + kobber, Barlow/Inter)
- `script.js` — meny, scroll-avsløring, tellere, skjemavalidering (språkbevisst NO/EN)
- `img/` — bilder (tak, flate tak, blikkenslager) + `dekmar-logo.png` (offisiell Dekmar-logo)

Språkbytte (NO/EN) ligger i menyen på begge sidene. Dekmar-logoen brukes i header, footer og som favicon.

## Seksjoner
Hero · nøkkeltall · tjenester (bento) · referanseprosjekter (7 prosjekter med bildegalleri/lightbox) · hvorfor oss · slik jobber vi · leverandører · vanlige spørsmål (FAQ) · kontaktskjema.

## Referanseprosjekter
7 prosjekter fra dekmar.no med alle prosjektbildene (142 bilder totalt) i `img/projects/<slug>/`:
Frogner kirke (30) · Kolbotn kirke (16) · Bjøråsen skole (16) · Darresgate 2 (24) · Ole Deviks vei 2‑4‑6 (12) · Jacob Aalls gate 14 (24) · Åshallen (20). Klikk et prosjektkort for å åpne lightbox-galleri med piltaster, miniatyrstripe og teller.

## Kjør lokalt
```bash
python -m http.server 5577
# åpne http://localhost:5577
```

## Forbedringer vs. gammel side
- Ekte prosjektbilder i stedet for illustrasjoner
- Nøkkeltall og trygghetssignaler (SINTEF-godkjent, fast pris, gratis befaring)
- Ekte referanseprosjekter og leverandører (Rockwool, Copernit, Aiwell)
- FAQ-seksjon som svarer på de vanligste kundespørsmålene
- Tydeligere og gjentatte oppfordringer til handling (Be om tilbud / gratis befaring)

## Gjenstår
- Telefonnummer og org.nr. (mangler — legg inn når tilgjengelig)
- Bytt ut/utvid bildegalleriet med flere ekte prosjektbilder

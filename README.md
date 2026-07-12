# Dekmar AS — nettside

Ny, kundevennlig one-pager for **Dekmar AS** — takentreprenør og blikkenslagerverksted i Oslo og Viken.

Bygget som en enkel statisk side (HTML/CSS/JS, ingen byggesteg) med ekte prosjektbilder og innhold fra dekmar.no.

## Innhold
- `index.html` — hele siden
- `styles.css` — stiler (navy + kobber, Barlow/Inter)
- `script.js` — meny, scroll-avsløring, tellere, skjemavalidering
- `img/` — bilder (tak, flate tak, blikkenslager, logo)

## Seksjoner
Hero · nøkkeltall · tjenester (bento) · arbeidet vårt (galleri + referanser) · hvorfor oss · slik jobber vi · leverandører · vanlige spørsmål (FAQ) · kontaktskjema.

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

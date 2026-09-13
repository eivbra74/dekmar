# Dekmar AS – nettside

Ny nettside for **Dekmar AS** (taktekker og blikkenslager i Oslo og Viken), bygget med
[Astro](https://astro.build). Statisk side som erstatter den gamle WordPress-siden – rask, enkel å
vedlikeholde og gratis å drifte på f.eks. Netlify eller GitHub Pages.

## Kom i gang

```bash
npm install
npm run dev      # utviklingsserver på http://localhost:4321
npm run build    # bygger statisk side til /dist
npm run preview  # forhåndsvis produksjonsbygget
```

> **Merk (Google Drive / G:-disk):** `npm install` kan feile på et Google Drive-mount. Kjør heller
> `npm install` i en vanlig mappe på C: og kopier `node_modules` over, eller la Netlify/GitHub kjøre
> installasjonen ved deploy.

## Struktur

```
public/images/        Alle bilder (logo, hero, tjenester, referanser)
src/data/             Innhold som datafiler:
  site.ts             Firmainfo, kontakt, meny, salgspunkter
  services.ts         Alle tjenester (tekst + bilde)
  references.ts       Referanseprosjekter (bildegallerier)
src/components/        Header, Footer, kort, galleri, kontaktskjema, CTA
src/layouts/           Felles sidemal (SEO-meta, fonter)
src/pages/             Sidene (Astro genererer én HTML-fil per side)
```

## Redigere innhold

- **Tekst på en tjeneste:** rediger `src/data/services.ts`.
- **Nytt referanseprosjekt:** legg bildene i `public/images/references/<navn>/` (01.jpg, 02.jpg …)
  og legg til en oppføring i `src/data/references.ts`.
- **Kontaktinfo / meny:** `src/data/site.ts`.

## Kontaktskjema

Skjemaet på `/kontakt` bruker **Netlify Forms** og fungerer automatisk når siden ligger på Netlify.
Innsendinger vises under «Forms» i Netlify-dashbordet (sett gjerne opp e-postvarsling der). Ved
hosting utenfor Netlify må skjemaet kobles til en annen tjeneste (f.eks. Formspree) eller byttes til
en `mailto:`-lenke.

## Deploy

**Netlify (anbefalt):** koble GitHub-repoet til Netlify. `netlify.toml` er ferdig satt opp
(build: `npm run build`, publish: `dist`).

**GitHub Pages:** bygg med `npm run build` og publiser `dist/` (f.eks. via GitHub Actions).

## Innhold hentet fra dekmar.no

Alt innhold og alle bilder er hentet fra den eksisterende siden. Merk:

- Flere tjenestesider var **tomme** i WordPress (Takstein, Gummimembran, Diffusjonsåpne
  takløsninger, Takmembran, Shingel, Snøfangere). Disse har fått et **utkast til tekst** (markert med
  `draft: true` i `services.ts`) basert på forsidens tekst og bransjekunnskap – bytt gjerne ut med
  egen tekst.
- Referanseprosjektene hadde kun bilder på originalsiden. Korte beskrivelser er lagt til basert på
  byggtype.
- Personvernerklæringen er skrevet på nytt på norsk, tilpasset en statisk side med kontaktskjema
  (den gamle var standard engelsk WordPress-tekst).

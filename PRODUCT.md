# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Håndverkere i felt (rolle `ansatt`)**: tak- og blikkenslagere, mange polske. Bruker telefonen på tak og byggeplass, ofte med hansker, i sol eller regn, med ustabilt nett og korte avbrudd (kamera, telefon). Jobben: melde avvik, fylle ut sjekklister og vernerunder, ta før/under/etter-bilder av utført arbeid.
- **Formann / prosjektleder (rolle `leder`)**: planlegger ressurser, følger opp avvik, lager tilbud og kalkyler, inviterer ansatte. Veksler mellom telefon i felt og PC på kontoret.
- **Eier / administrator (rolle `admin`)**: styrer systemet (roller, passord, maler, Tripletex-import), leverer dokumentasjon til oppdragsgiver. Primært PC.

## Product Purpose

Dekmars interne HMS/KS- og driftsportal på dekmar.no/portal: internkontroll (avvik, sjekklister, vernerunder, SHA-plan, stoffkartotek, HMS-håndbok), prosjektdrift (ressursplan, sykefravær, FDV, dokumentasjon av utført arbeid med bilder) og salg (befaring, kalkyle, tilbud, NS-kontrakter, kunder). Suksess: alt som skjer på byggeplassen blir registrert én gang, havner i registeret, og kan leveres som ryddig PDF til oppdragsgiver.

## Positioning

Bygget for ett norsk tak- og blikkenslagerfirma, ikke en generisk HMS-app: fagspråket (SJA, vernerunde, FDV, NS 8406/8407, TG-grader), Internkontrollforskriften § 5 og byggherreforskriften er innebygd, og alt innhold finnes på norsk, polsk og engelsk med automatisk oversettelse av det brukerne skriver.

## Operating Context

- Tripletex er kilden for kunder og prosjekter (prosjektnummer = innledende siffer i prosjektnavnet, f.eks. «10357 Waldemar Thranes gate 57»).
- Oppdragsgivere (f.eks. Flotte Bygårder AS) mottar PDF-er: avviksrapport, sluttdokumentasjon/as-built, FDV, SHA-plan.
- Avvik håndteres iht. Internkontrollforskriften § 5; registeret må være komplett.
- Systemet er i daglig drift med ekte kunde- og prosjektdata. Push til `main` = live deploy.

## Capabilities and Constraints

- Astro 5 + Supabase (Postgres, Auth, Storage, Edge Functions) + Netlify. Hele portalen er én fil: `src/pages/portal/index.astro`.
- Roller admin / leder / ansatt håndheves i RLS, ikke bare i menyen. Rollelesing feiler lukket (til `ansatt`).
- Språk NO/PL/EN via `data-no/pl/en` (statisk) og `p()`/`t()` (dynamisk); brukerinnhold oversettes med DeepL og er redigerbart.
- Timer og Ukekontroll er deaktivert (kode beholdt).

## Brand Commitments

- Navn: Dekmar AS. Logo `public/images/brand/dekmar-logo.png`.
- Eksisterende portal-uttrykk: mørk sidemeny, Dekmar-rød (#cc1f2a) som aksent, Archivo til overskrifter, Inter til brødtekst.

## Evidence on Hand

- Ekte prosjekter (10357 WT57, 10334 Gabels gate 37), ekte standardmaler for sjekklister/vernerunder, HMS-håndbøker og FDV-produkter ligger i `src/data/`.
- Ingen kundeuttalelser, priser eller tall skal finnes på.

## Product Principles

1. Én registrering, ett register: det som meldes i felt skal alltid havne i databasen, aldri bare på én telefon.
2. Feltet først: de fire tingene en håndverker gjør (dagens jobb, bilder, avvik, sjekkliste) skal nås med tommelen på sekunder.
3. Ingenting forsvinner: ulagret arbeid overlever avbrudd, språkbytte og innloggingsfornyelse.
4. Språket er likeverdig: polsk og engelsk er fullverdige, ikke oversatte ettertanker.
5. Minste privilegium: tilgang håndheves i databasen, og feil gir mindre tilgang, ikke mer.

## Accessibility & Inclusion

- Brukes utendørs på telefon: store trykkflater (≥ 44 px), høy kontrast, primærhandlinger innen tommelrekkevidde.
- Tre språk (NO/PL/EN) på lik linje; lengre polske tekster må få plass.
- WCAG 2.1 AA som mål for kontrast og tastaturfokus.

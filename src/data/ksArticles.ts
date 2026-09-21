// HMS-artikler (kunnskapsbase) for KS-portalen – ORIGINALT Dekmar-innhold.
// Skrevet fritt for Dekmar; ikke kopiert fra andre leverandørers portaler.
// Seedes idempotent til `articles` (nøkkel = slug). Kan redigeres i portalen.
export interface StandardArticle {
  slug: string;
  title: string;
  category: string;
  summary: string;
  body: string; // enkel HTML
  sort: number;
}

export const standardArticles: StandardArticle[] = [
  {
    slug: 'internkontroll',
    title: 'Internkontroll og systematisk HMS-arbeid',
    category: 'System',
    summary: 'Hva internkontrollforskriften krever, og hvordan Dekmar jobber systematisk med helse, miljø og sikkerhet.',
    sort: 10,
    body: `<p>Internkontroll betyr at vi systematisk passer på at arbeidet vårt foregår i tråd med kravene i arbeidsmiljøloven og tilhørende forskrifter. Ansvaret ligger hos ledelsen, men alle ansatte bidrar.</p>
<h3>Dette skal være på plass</h3>
<ul>
<li>Mål for HMS-arbeidet og oversikt over ansvar og oppgaver.</li>
<li>Kartlegging av risiko og tiltak for å redusere den (se risikovurdering og SJA).</li>
<li>Rutiner for å melde og behandle avvik.</li>
<li>Stoffkartotek med sikkerhetsdatablad for kjemikalier vi bruker.</li>
<li>Rutiner for vernerunder og oppfølging av funn.</li>
</ul>
<h3>Slik gjør vi det i praksis</h3>
<p>Hvert prosjekt opprettes i KS-portalen. Der samler vi sjekklister, vernerunder, avvik, stoffkartotek og dokumentasjon av utført arbeid. På den måten har både den ansatte og ledelsen alltid oppdatert oversikt.</p>`,
  },
  {
    slug: 'verneombud-amu',
    title: 'Verneombud og vernearbeid',
    category: 'System',
    summary: 'Verneombudets rolle, valg og hva du kan ta opp med verneombudet.',
    sort: 20,
    body: `<p>Verneombudet skal ivareta de ansattes interesser i saker som angår arbeidsmiljøet. Verneombudet velges av og blant de ansatte.</p>
<h3>Verneombudet skal blant annet</h3>
<ul>
<li>Passe på at arbeidet er tilrettelagt slik at hensynet til sikkerhet og helse er ivaretatt.</li>
<li>Delta i vernerunder og ved behandling av avvik og hendelser.</li>
<li>Bli tatt med på råd ved planlegging av arbeid som har betydning for arbeidsmiljøet.</li>
</ul>
<p>Har du forslag eller bekymringer knyttet til sikkerhet, ta det opp med verneombudet eller nærmeste leder. Alt kan også meldes som avvik i portalen.</p>`,
  },
  {
    slug: 'risikovurdering-sja',
    title: 'Risikovurdering og sikker jobbanalyse (SJA)',
    category: 'Planlegging',
    summary: 'Slik vurderer vi risiko før arbeidet starter, og når du skal gjøre en SJA.',
    sort: 30,
    body: `<p>Før vi starter en jobb skal vi vurdere hva som kan gå galt, hvor sannsynlig det er, og hvor alvorlige konsekvensene kan bli. Deretter setter vi inn tiltak.</p>
<h3>Framgangsmåte</h3>
<ul>
<li>Kartlegg farene ved arbeidet (fall, varmt arbeid, tunge løft, vær, trafikk osv.).</li>
<li>Vurder risiko = sannsynlighet × konsekvens.</li>
<li>Bestem tiltak som fjerner eller reduserer risikoen.</li>
<li>Kommuniser tiltakene til alle som er involvert.</li>
</ul>
<h3>Sikker jobbanalyse (SJA)</h3>
<p>Ved arbeid med særlig risiko – for eksempel arbeid i høyden uten fast rekkverk, varmt arbeid eller uvante operasjoner – gjør vi en SJA rett før oppstart, sammen med dem som skal utføre jobben.</p>`,
  },
  {
    slug: 'arbeid-i-hoyden',
    title: 'Arbeid i høyden og fallsikring',
    category: 'Tak- og fasadearbeid',
    summary: 'Krav til rekkverk, stillas, stiger og personlig fallsikringsutstyr ved takarbeid.',
    sort: 40,
    body: `<p>Fall er den vanligste årsaken til alvorlige ulykker i vår bransje. Kollektiv sikring (rekkverk/stillas) skal alltid prioriteres foran personlig fallsikringsutstyr.</p>
<h3>Før arbeidet</h3>
<ul>
<li>Monter rekkverk langs takkant der det er mulig.</li>
<li>Sikre eller tildekk takluker, lyskupler og hull.</li>
<li>Kontroller at stillas er skiltet (grønt skilt), forankret og stabilt.</li>
<li>Bruk godkjent stige som er sikret og rager minst 1 m over taket.</li>
</ul>
<h3>Personlig fallsikring</h3>
<p>Der rekkverk ikke er mulig, brukes fallsele med forankring i godkjent forankringspunkt. Utstyret skal kontrolleres før bruk, og du skal ha fått opplæring i bruken.</p>
<p>Arbeid stanses ved sterk vind, is eller glatt underlag.</p>`,
  },
  {
    slug: 'varmt-arbeid',
    title: 'Varmt arbeid – tekking med åpen flamme',
    category: 'Tak- og fasadearbeid',
    summary: 'Krav til sertifikat, arbeidstillatelse, brannvakt og etterkontroll ved varmt arbeid.',
    sort: 50,
    body: `<p>Varmt arbeid omfatter arbeid med åpen flamme, for eksempel tekking med gassbrenner. Slikt arbeid har høy brannrisiko og krever ekstra tiltak.</p>
<h3>Krav</h3>
<ul>
<li>Den som utfører varmt arbeid skal ha gyldig sertifikat for varmt arbeid.</li>
<li>Arbeidstillatelse for varmt arbeid fylles ut før oppstart.</li>
<li>Godkjent slokkeutstyr skal være lett tilgjengelig på arbeidsstedet.</li>
<li>Brannvakt holder vakt under arbeidet og i tilstrekkelig tid etterpå.</li>
</ul>
<h3>Gass og utstyr</h3>
<p>Slanger, regulator og flasker kontrolleres for skade og lekkasje. Gassflasker lagres stående og ventilert. Etterkontroll gjennomføres etter endt arbeid for å avdekke ulming.</p>`,
  },
  {
    slug: 'stoffkartotek',
    title: 'Stoffkartotek og kjemikaliehåndtering',
    category: 'Kjemikalier',
    summary: 'Hvorfor stoffkartotek er lovpålagt, og hvordan du håndterer kjemikalier trygt.',
    sort: 60,
    body: `<p>Alle virksomheter som bruker helsefarlige kjemikalier skal ha et stoffkartotek. Det gir ansatte rask tilgang til informasjon om farer og riktig bruk.</p>
<h3>Stoffkartoteket skal inneholde</h3>
<ul>
<li>Sikkerhetsdatablad for hvert kjemikalie.</li>
<li>Informasjon om faremerking, bruksområde og verneutstyr.</li>
<li>Hvor produktet oppbevares og i hvilken mengde.</li>
</ul>
<h3>Trygg bruk</h3>
<p>Les faremerkingen og bruk anbefalt verneutstyr. Sørg for god ventilasjon ved bruk av løsemidler, primer og bitumen. Oppbevar kjemikalier riktig og håndter farlig avfall separat.</p>
<p>I KS-portalen legges kjemikaliene inn under det enkelte prosjektet, med sikkerhetsdatablad vedlagt.</p>`,
  },
  {
    slug: 'avviksbehandling',
    title: 'Avvik og avviksbehandling',
    category: 'System',
    summary: 'Hva et avvik er, hvordan du melder det, og hvordan det følges opp til lukking.',
    sort: 70,
    body: `<p>Et avvik er et brudd på krav, en uønsket hendelse eller en nestenulykke. Å melde avvik er ikke å «henge ut» noen – det er slik vi lærer og hindrer at ting gjentar seg.</p>
<h3>Slik melder du</h3>
<ul>
<li>Registrer avviket i portalen med beskrivelse, kategori og gjerne bilde.</li>
<li>Sett alvorlighetsgrad og ansvarlig for oppfølging.</li>
</ul>
<h3>Behandling</h3>
<p>Avviket får status <em>Åpen</em>, går videre til <em>Under arbeid</em> når tiltak iverksettes, og settes til <em>Lukket</em> når årsak er utbedret og verifisert. Ledelsen ser statistikk over alle avvik og kan følge opp trender.</p>`,
  },
  {
    slug: 'personlig-verneutstyr',
    title: 'Personlig verneutstyr (PVU)',
    category: 'Utstyr',
    summary: 'Hvilket verneutstyr som kreves, og ditt ansvar for å bruke og vedlikeholde det.',
    sort: 80,
    body: `<p>Personlig verneutstyr er siste barriere når andre tiltak ikke fjerner risikoen helt. Utstyret skal være tilpasset arbeidet og deg.</p>
<h3>Vanlig utstyr ved tak- og blikkenslagerarbeid</h3>
<ul>
<li>Vernehjelm med hakestropp.</li>
<li>Vernesko og arbeidshansker.</li>
<li>Fallsele med forankring der det er nødvendig.</li>
<li>Hørselvern og øyevern ved kapping/sliping.</li>
</ul>
<h3>Ditt ansvar</h3>
<p>Kontroller utstyret før bruk, meld skader, og bruk det slik du har fått opplæring i. Skadet utstyr skal ikke brukes.</p>`,
  },
  {
    slug: 'forstehjelp-beredskap',
    title: 'Førstehjelp og ulykkesberedskap',
    category: 'Beredskap',
    summary: 'Hva du gjør ved en ulykke, og hvilken beredskap som skal være på plass.',
    sort: 90,
    body: `<p>Ved en ulykke teller de første minuttene. Alle skal vite hvor førstehjelpsutstyret er og hvordan de varsler.</p>
<h3>Ved en hendelse</h3>
<ul>
<li>Sikre skadestedet så det ikke skjer flere skader.</li>
<li>Gi førstehjelp og ring 113 ved alvorlig skade.</li>
<li>Varsle nærmeste leder.</li>
<li>Meld hendelsen som avvik i portalen etterpå.</li>
</ul>
<h3>Beredskap på arbeidsstedet</h3>
<p>Førstehjelpsutstyr skal være tilgjengelig og komplett. Ved varmt arbeid skal slokkeutstyr være på plass. Rømningsveier holdes frie.</p>`,
  },
];

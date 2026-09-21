// HMS-artikler (kunnskapsbase) for KS-portalen – ORIGINALT Dekmar-innhold.
// Skrevet fritt for Dekmar; ikke kopiert fra andre leverandørers portaler.
// Trespråklig (NO/PL/EN). Seedes/oppdateres idempotent til `articles` (nøkkel = slug).
type T = { no: string; pl: string; en: string };
export interface StandardArticle {
  slug: string;
  title: T;
  category: T;
  summary: T;
  body: T; // enkel HTML
  sort: number;
}

const CAT = {
  system: { no: 'System', pl: 'System', en: 'System' },
  planlegging: { no: 'Planlegging', pl: 'Planowanie', en: 'Planning' },
  tak: { no: 'Tak- og fasadearbeid', pl: 'Prace dachowe i elewacyjne', en: 'Roof and façade work' },
  kjemikalier: { no: 'Kjemikalier', pl: 'Substancje chemiczne', en: 'Chemicals' },
  utstyr: { no: 'Utstyr', pl: 'Sprzęt', en: 'Equipment' },
  beredskap: { no: 'Beredskap', pl: 'Gotowość', en: 'Preparedness' },
};

export const standardArticles: StandardArticle[] = [
  {
    slug: 'internkontroll',
    category: CAT.system,
    sort: 10,
    title: { no: 'Internkontroll og systematisk HMS-arbeid', pl: 'Kontrola wewnętrzna i systematyczna praca BHP', en: 'Internal control and systematic HSE work' },
    summary: { no: 'Hva internkontrollforskriften krever, og hvordan Dekmar jobber systematisk med helse, miljø og sikkerhet.', pl: 'Czego wymaga rozporządzenie o kontroli wewnętrznej i jak Dekmar systematycznie dba o BHP.', en: 'What the internal-control regulation requires, and how Dekmar works systematically with health, safety and environment.' },
    body: {
      no: `<p>Internkontroll betyr at vi systematisk passer på at arbeidet vårt foregår i tråd med kravene i arbeidsmiljøloven og tilhørende forskrifter. Ansvaret ligger hos ledelsen, men alle ansatte bidrar.</p>
<h3>Dette skal være på plass</h3>
<ul><li>Mål for HMS-arbeidet og oversikt over ansvar og oppgaver.</li><li>Kartlegging av risiko og tiltak for å redusere den.</li><li>Rutiner for å melde og behandle avvik.</li><li>Stoffkartotek med sikkerhetsdatablad for kjemikalier vi bruker.</li><li>Rutiner for vernerunder og oppfølging av funn.</li></ul>
<h3>Slik gjør vi det i praksis</h3>
<p>Hvert prosjekt opprettes i KS-portalen. Der samler vi sjekklister, vernerunder, avvik, stoffkartotek og dokumentasjon av utført arbeid, slik at både den ansatte og ledelsen alltid har oppdatert oversikt.</p>`,
      pl: `<p>Kontrola wewnętrzna oznacza, że systematycznie dbamy o to, aby nasza praca odbywała się zgodnie z wymaganiami prawa pracy i powiązanych przepisów. Odpowiedzialność spoczywa na kierownictwie, ale wszyscy pracownicy się do niej przyczyniają.</p>
<h3>Co musi być na miejscu</h3>
<ul><li>Cele pracy BHP oraz przegląd odpowiedzialności i zadań.</li><li>Ocena ryzyka i działania ograniczające je.</li><li>Procedury zgłaszania i obsługi niezgodności.</li><li>Rejestr substancji z kartami charakterystyki używanych chemikaliów.</li><li>Procedury obchodów BHP i reagowania na ustalenia.</li></ul>
<h3>Jak robimy to w praktyce</h3>
<p>Każdy projekt zakładamy w portalu KS. Zbieramy tam listy kontrolne, obchody BHP, niezgodności, rejestr substancji i dokumentację wykonanych prac, aby zarówno pracownik, jak i kierownictwo miało zawsze aktualny obraz.</p>`,
      en: `<p>Internal control means we systematically ensure our work complies with the Working Environment Act and related regulations. The responsibility rests with management, but every employee contributes.</p>
<h3>What must be in place</h3>
<ul><li>Goals for HSE work and an overview of responsibilities and tasks.</li><li>Risk assessment and measures to reduce risk.</li><li>Routines for reporting and handling deviations.</li><li>A chemical register with safety data sheets for the chemicals we use.</li><li>Routines for safety rounds and follow-up of findings.</li></ul>
<h3>How we do it in practice</h3>
<p>Every project is created in the KS portal. There we gather checklists, safety rounds, deviations, the chemical register and documentation of completed work, so both the employee and management always have an up-to-date overview.</p>`,
    },
  },
  {
    slug: 'verneombud-amu',
    category: CAT.system,
    sort: 20,
    title: { no: 'Verneombud og vernearbeid', pl: 'Społeczny inspektor pracy i działania ochronne', en: 'Safety representative and safety work' },
    summary: { no: 'Verneombudets rolle, valg og hva du kan ta opp med verneombudet.', pl: 'Rola inspektora pracy, jego wybór i co możesz z nim omówić.', en: 'The safety representative’s role, election, and what you can raise with them.' },
    body: {
      no: `<p>Verneombudet skal ivareta de ansattes interesser i saker som angår arbeidsmiljøet, og velges av og blant de ansatte.</p>
<h3>Verneombudet skal blant annet</h3>
<ul><li>Passe på at arbeidet er tilrettelagt slik at hensynet til sikkerhet og helse er ivaretatt.</li><li>Delta i vernerunder og ved behandling av avvik og hendelser.</li><li>Bli tatt med på råd ved planlegging av arbeid som har betydning for arbeidsmiljøet.</li></ul>
<p>Har du forslag eller bekymringer knyttet til sikkerhet, ta det opp med verneombudet eller nærmeste leder. Alt kan også meldes som avvik i portalen.</p>`,
      pl: `<p>Społeczny inspektor pracy dba o interesy pracowników w sprawach dotyczących środowiska pracy i jest wybierany przez pracowników spośród nich.</p>
<h3>Inspektor pracy między innymi</h3>
<ul><li>Dba, aby praca była zorganizowana z uwzględnieniem bezpieczeństwa i zdrowia.</li><li>Uczestniczy w obchodach BHP oraz w obsłudze niezgodności i zdarzeń.</li><li>Jest konsultowany przy planowaniu prac istotnych dla środowiska pracy.</li></ul>
<p>Masz propozycje lub obawy dotyczące bezpieczeństwa? Zgłoś je inspektorowi pracy lub bezpośredniemu przełożonemu. Wszystko można też zgłosić jako niezgodność w portalu.</p>`,
      en: `<p>The safety representative protects employees’ interests in matters concerning the working environment, and is elected by and among the employees.</p>
<h3>The safety representative shall, among other things</h3>
<ul><li>Ensure work is arranged so that safety and health are safeguarded.</li><li>Take part in safety rounds and in handling deviations and incidents.</li><li>Be consulted when planning work that affects the working environment.</li></ul>
<p>If you have suggestions or concerns about safety, raise them with the safety representative or your nearest manager. Anything can also be reported as a deviation in the portal.</p>`,
    },
  },
  {
    slug: 'risikovurdering-sja',
    category: CAT.planlegging,
    sort: 30,
    title: { no: 'Risikovurdering og sikker jobbanalyse (SJA)', pl: 'Ocena ryzyka i analiza bezpiecznej pracy (SJA)', en: 'Risk assessment and safe job analysis (SJA)' },
    summary: { no: 'Slik vurderer vi risiko før arbeidet starter, og når du skal gjøre en SJA.', pl: 'Jak oceniamy ryzyko przed rozpoczęciem pracy i kiedy wykonać SJA.', en: 'How we assess risk before work starts, and when to do an SJA.' },
    body: {
      no: `<p>Før vi starter en jobb skal vi vurdere hva som kan gå galt, hvor sannsynlig det er, og hvor alvorlige konsekvensene kan bli. Deretter setter vi inn tiltak.</p>
<h3>Framgangsmåte</h3>
<ul><li>Kartlegg farene ved arbeidet (fall, varmt arbeid, tunge løft, vær, trafikk osv.).</li><li>Vurder risiko = sannsynlighet × konsekvens.</li><li>Bestem tiltak som fjerner eller reduserer risikoen.</li><li>Kommuniser tiltakene til alle som er involvert.</li></ul>
<h3>Sikker jobbanalyse (SJA)</h3>
<p>Ved arbeid med særlig risiko – for eksempel arbeid i høyden uten fast rekkverk, varmt arbeid eller uvante operasjoner – gjør vi en SJA rett før oppstart, sammen med dem som skal utføre jobben.</p>`,
      pl: `<p>Przed rozpoczęciem pracy oceniamy, co może pójść nie tak, jak jest to prawdopodobne i jak poważne mogą być skutki. Następnie wdrażamy działania.</p>
<h3>Sposób postępowania</h3>
<ul><li>Zidentyfikuj zagrożenia (upadek, prace gorące, ciężkie podnoszenie, pogoda, ruch itp.).</li><li>Oceń ryzyko = prawdopodobieństwo × skutek.</li><li>Ustal działania, które usuwają lub ograniczają ryzyko.</li><li>Przekaż działania wszystkim zaangażowanym.</li></ul>
<h3>Analiza bezpiecznej pracy (SJA)</h3>
<p>Przy pracach szczególnie ryzykownych – np. praca na wysokości bez stałych balustrad, prace gorące lub nietypowe operacje – wykonujemy SJA tuż przed rozpoczęciem, wspólnie z osobami wykonującymi pracę.</p>`,
      en: `<p>Before we start a job we assess what could go wrong, how likely it is, and how serious the consequences could be. Then we put measures in place.</p>
<h3>Procedure</h3>
<ul><li>Identify the hazards (falls, hot work, heavy lifting, weather, traffic, etc.).</li><li>Assess risk = likelihood × consequence.</li><li>Decide measures that remove or reduce the risk.</li><li>Communicate the measures to everyone involved.</li></ul>
<h3>Safe job analysis (SJA)</h3>
<p>For work with particular risk – such as work at height without fixed guardrails, hot work or unfamiliar operations – we do an SJA right before starting, together with those who will carry out the job.</p>`,
    },
  },
  {
    slug: 'arbeid-i-hoyden',
    category: CAT.tak,
    sort: 40,
    title: { no: 'Arbeid i høyden og fallsikring', pl: 'Praca na wysokości i ochrona przed upadkiem', en: 'Work at height and fall protection' },
    summary: { no: 'Krav til rekkverk, stillas, stiger og personlig fallsikringsutstyr ved takarbeid.', pl: 'Wymagania dot. balustrad, rusztowań, drabin i ŚOI przy pracach dachowych.', en: 'Requirements for guardrails, scaffolding, ladders and personal fall protection in roof work.' },
    body: {
      no: `<p>Fall er den vanligste årsaken til alvorlige ulykker i vår bransje. Kollektiv sikring (rekkverk/stillas) skal alltid prioriteres foran personlig fallsikringsutstyr.</p>
<h3>Før arbeidet</h3>
<ul><li>Monter rekkverk langs takkant der det er mulig.</li><li>Sikre eller tildekk takluker, lyskupler og hull.</li><li>Kontroller at stillas er skiltet (grønt skilt), forankret og stabilt.</li><li>Bruk godkjent stige som er sikret og rager minst 1 m over taket.</li></ul>
<h3>Personlig fallsikring</h3>
<p>Der rekkverk ikke er mulig, brukes fallsele med forankring i godkjent forankringspunkt. Utstyret skal kontrolleres før bruk, og du skal ha fått opplæring i bruken. Arbeid stanses ved sterk vind, is eller glatt underlag.</p>`,
      pl: `<p>Upadek jest najczęstszą przyczyną poważnych wypadków w naszej branży. Zabezpieczenie zbiorowe (balustrady/rusztowanie) ma zawsze pierwszeństwo przed środkami indywidualnymi.</p>
<h3>Przed pracą</h3>
<ul><li>Zamontuj balustrady wzdłuż krawędzi dachu tam, gdzie to możliwe.</li><li>Zabezpiecz lub przykryj klapy dachowe, świetliki i otwory.</li><li>Sprawdź, czy rusztowanie jest oznakowane (zielona tabliczka), zakotwione i stabilne.</li><li>Używaj dopuszczonej drabiny, zabezpieczonej i wystającej co najmniej 1 m ponad dach.</li></ul>
<h3>Indywidualna ochrona przed upadkiem</h3>
<p>Gdy balustrady nie są możliwe, stosuje się szelki z zaczepieniem w dopuszczonym punkcie kotwiącym. Sprzęt należy sprawdzić przed użyciem, a Ty musisz być przeszkolony. Pracę wstrzymuje się przy silnym wietrze, lodzie lub śliskim podłożu.</p>`,
      en: `<p>Falls are the most common cause of serious accidents in our industry. Collective protection (guardrails/scaffolding) always takes priority over personal fall-protection equipment.</p>
<h3>Before the work</h3>
<ul><li>Fit guardrails along the roof edge where possible.</li><li>Secure or cover roof hatches, skylights and openings.</li><li>Check that the scaffold is tagged (green tag), anchored and stable.</li><li>Use an approved ladder that is secured and extends at least 1 m above the roof.</li></ul>
<h3>Personal fall protection</h3>
<p>Where guardrails are not possible, use a harness anchored to an approved anchor point. The equipment must be checked before use, and you must be trained in its use. Work is stopped in strong wind, ice or slippery surfaces.</p>`,
    },
  },
  {
    slug: 'varmt-arbeid',
    category: CAT.tak,
    sort: 50,
    title: { no: 'Varmt arbeid – tekking med åpen flamme', pl: 'Prace gorące – krycie otwartym ogniem', en: 'Hot work – torch-on roofing' },
    summary: { no: 'Krav til sertifikat, arbeidstillatelse, brannvakt og etterkontroll ved varmt arbeid.', pl: 'Wymagania: certyfikat, pozwolenie, nadzór ppoż. i kontrola po pracach gorących.', en: 'Requirements for certificate, work permit, fire watch and post-work check for hot work.' },
    body: {
      no: `<p>Varmt arbeid omfatter arbeid med åpen flamme, for eksempel tekking med gassbrenner. Slikt arbeid har høy brannrisiko og krever ekstra tiltak.</p>
<h3>Krav</h3>
<ul><li>Den som utfører varmt arbeid skal ha gyldig sertifikat for varmt arbeid.</li><li>Arbeidstillatelse for varmt arbeid fylles ut før oppstart.</li><li>Godkjent slokkeutstyr skal være lett tilgjengelig på arbeidsstedet.</li><li>Brannvakt holder vakt under arbeidet og i tilstrekkelig tid etterpå.</li></ul>
<h3>Gass og utstyr</h3>
<p>Slanger, regulator og flasker kontrolleres for skade og lekkasje. Gassflasker lagres stående og ventilert. Etterkontroll gjennomføres etter endt arbeid for å avdekke ulming.</p>`,
      pl: `<p>Prace gorące obejmują pracę z otwartym ogniem, np. krycie palnikiem gazowym. Takie prace niosą wysokie ryzyko pożaru i wymagają dodatkowych środków.</p>
<h3>Wymagania</h3>
<ul><li>Osoba wykonująca prace gorące musi mieć ważny certyfikat do prac gorących.</li><li>Pozwolenie na prace gorące wypełnia się przed rozpoczęciem.</li><li>Dopuszczony sprzęt gaśniczy musi być łatwo dostępny na stanowisku.</li><li>Nadzór przeciwpożarowy pełni wartę podczas pracy i przez odpowiedni czas po niej.</li></ul>
<h3>Gaz i sprzęt</h3>
<p>Węże, reduktor i butle sprawdza się pod kątem uszkodzeń i nieszczelności. Butle gazowe przechowuje się pionowo i w wentylowanym miejscu. Po zakończeniu pracy przeprowadza się kontrolę w celu wykrycia tlenia.</p>`,
      en: `<p>Hot work includes work with an open flame, for example torch-on roofing with a gas burner. Such work carries a high fire risk and requires extra measures.</p>
<h3>Requirements</h3>
<ul><li>The person doing hot work must hold a valid hot-work certificate.</li><li>A hot-work permit is completed before starting.</li><li>Approved fire-extinguishing equipment must be readily available at the work site.</li><li>A fire watch is kept during the work and for a sufficient time afterwards.</li></ul>
<h3>Gas and equipment</h3>
<p>Hoses, regulator and cylinders are checked for damage and leaks. Gas cylinders are stored upright and ventilated. A post-work check is carried out after the work to detect smouldering.</p>`,
    },
  },
  {
    slug: 'stoffkartotek',
    category: CAT.kjemikalier,
    sort: 60,
    title: { no: 'Stoffkartotek og kjemikaliehåndtering', pl: 'Rejestr substancji i obchodzenie się z chemikaliami', en: 'Chemical register and handling chemicals' },
    summary: { no: 'Hvorfor stoffkartotek er lovpålagt, og hvordan du håndterer kjemikalier trygt.', pl: 'Dlaczego rejestr substancji jest wymagany prawem i jak bezpiecznie obchodzić się z chemikaliami.', en: 'Why the chemical register is legally required, and how to handle chemicals safely.' },
    body: {
      no: `<p>Alle virksomheter som bruker helsefarlige kjemikalier skal ha et stoffkartotek. Det gir ansatte rask tilgang til informasjon om farer og riktig bruk.</p>
<h3>Stoffkartoteket skal inneholde</h3>
<ul><li>Sikkerhetsdatablad for hvert kjemikalie.</li><li>Informasjon om faremerking, bruksområde og verneutstyr.</li><li>Hvor produktet oppbevares og i hvilken mengde.</li></ul>
<h3>Trygg bruk</h3>
<p>Les faremerkingen og bruk anbefalt verneutstyr. Sørg for god ventilasjon ved bruk av løsemidler, primer og bitumen. Oppbevar kjemikalier riktig og håndter farlig avfall separat. I KS-portalen legges kjemikaliene inn under det enkelte prosjektet, med sikkerhetsdatablad vedlagt.</p>`,
      pl: `<p>Każda firma używająca chemikaliów szkodliwych dla zdrowia musi mieć rejestr substancji. Daje on pracownikom szybki dostęp do informacji o zagrożeniach i prawidłowym stosowaniu.</p>
<h3>Rejestr substancji powinien zawierać</h3>
<ul><li>Kartę charakterystyki dla każdej substancji.</li><li>Informacje o oznaczeniu zagrożeń, zastosowaniu i środkach ochrony.</li><li>Gdzie i w jakiej ilości produkt jest przechowywany.</li></ul>
<h3>Bezpieczne stosowanie</h3>
<p>Przeczytaj oznaczenie zagrożeń i używaj zalecanych środków ochrony. Zapewnij dobrą wentylację przy rozpuszczalnikach, primerze i bitumie. Przechowuj chemikalia prawidłowo, a odpady niebezpieczne obsługuj osobno. W portalu KS chemikalia wprowadza się w poszczególnym projekcie, wraz z kartą charakterystyki.</p>`,
      en: `<p>Every business that uses health-hazardous chemicals must have a chemical register. It gives employees quick access to information about hazards and correct use.</p>
<h3>The register must contain</h3>
<ul><li>A safety data sheet for each chemical.</li><li>Information about hazard labelling, use area and protective equipment.</li><li>Where the product is stored and in what quantity.</li></ul>
<h3>Safe use</h3>
<p>Read the hazard labelling and use the recommended protective equipment. Ensure good ventilation when using solvents, primer and bitumen. Store chemicals correctly and handle hazardous waste separately. In the KS portal, chemicals are entered under each project, with the safety data sheet attached.</p>`,
    },
  },
  {
    slug: 'avviksbehandling',
    category: CAT.system,
    sort: 70,
    title: { no: 'Avvik og avviksbehandling', pl: 'Niezgodności i ich obsługa', en: 'Deviations and deviation handling' },
    summary: { no: 'Hva et avvik er, hvordan du melder det, og hvordan det følges opp til lukking.', pl: 'Czym jest niezgodność, jak ją zgłosić i jak jest obsługiwana do zamknięcia.', en: 'What a deviation is, how to report it, and how it is followed up to closure.' },
    body: {
      no: `<p>Et avvik er et brudd på krav, en uønsket hendelse eller en nestenulykke. Å melde avvik er ikke å «henge ut» noen – det er slik vi lærer og hindrer at ting gjentar seg.</p>
<h3>Slik melder du</h3>
<ul><li>Registrer avviket i portalen med beskrivelse, kategori og gjerne bilde.</li><li>Sett alvorlighetsgrad og ansvarlig for oppfølging.</li></ul>
<h3>Behandling</h3>
<p>Avviket får status <em>Åpen</em>, går videre til <em>Under arbeid</em> når tiltak iverksettes, og settes til <em>Lukket</em> når årsak er utbedret og verifisert. Ledelsen ser statistikk over alle avvik og kan følge opp trender.</p>`,
      pl: `<p>Niezgodność to naruszenie wymagań, zdarzenie niepożądane lub sytuacja o mały włos. Zgłaszanie niezgodności nie służy „piętnowaniu” kogokolwiek – tak się uczymy i zapobiegamy powtórkom.</p>
<h3>Jak zgłosić</h3>
<ul><li>Zarejestruj niezgodność w portalu z opisem, kategorią i najlepiej zdjęciem.</li><li>Ustaw stopień ważności i osobę odpowiedzialną za obsługę.</li></ul>
<h3>Obsługa</h3>
<p>Niezgodność otrzymuje status <em>Otwarta</em>, przechodzi w <em>W toku</em> po wdrożeniu działań i zostaje ustawiona na <em>Zamknięta</em>, gdy przyczyna zostanie usunięta i zweryfikowana. Kierownictwo widzi statystyki wszystkich niezgodności i może śledzić trendy.</p>`,
      en: `<p>A deviation is a breach of requirements, an unwanted incident or a near miss. Reporting deviations is not about blaming anyone – it is how we learn and prevent things from recurring.</p>
<h3>How to report</h3>
<ul><li>Register the deviation in the portal with a description, category and ideally a photo.</li><li>Set the severity and the person responsible for follow-up.</li></ul>
<h3>Handling</h3>
<p>The deviation gets the status <em>Open</em>, moves to <em>In progress</em> when measures are started, and is set to <em>Closed</em> when the cause has been corrected and verified. Management sees statistics for all deviations and can follow up on trends.</p>`,
    },
  },
  {
    slug: 'personlig-verneutstyr',
    category: CAT.utstyr,
    sort: 80,
    title: { no: 'Personlig verneutstyr (PVU)', pl: 'Środki ochrony indywidualnej (ŚOI)', en: 'Personal protective equipment (PPE)' },
    summary: { no: 'Hvilket verneutstyr som kreves, og ditt ansvar for å bruke og vedlikeholde det.', pl: 'Jakie ŚOI są wymagane i Twoja odpowiedzialność za ich używanie i utrzymanie.', en: 'What protective equipment is required, and your responsibility to use and maintain it.' },
    body: {
      no: `<p>Personlig verneutstyr er siste barriere når andre tiltak ikke fjerner risikoen helt. Utstyret skal være tilpasset arbeidet og deg.</p>
<h3>Vanlig utstyr ved tak- og blikkenslagerarbeid</h3>
<ul><li>Vernehjelm med hakestropp.</li><li>Vernesko og arbeidshansker.</li><li>Fallsele med forankring der det er nødvendig.</li><li>Hørselvern og øyevern ved kapping/sliping.</li></ul>
<h3>Ditt ansvar</h3>
<p>Kontroller utstyret før bruk, meld skader, og bruk det slik du har fått opplæring i. Skadet utstyr skal ikke brukes.</p>`,
      pl: `<p>Środki ochrony indywidualnej to ostatnia bariera, gdy inne działania nie usuwają ryzyka całkowicie. Sprzęt musi być dopasowany do pracy i do Ciebie.</p>
<h3>Typowy sprzęt przy pracach dekarskich i blacharskich</h3>
<ul><li>Kask ochronny z paskiem pod brodę.</li><li>Obuwie ochronne i rękawice robocze.</li><li>Szelki bezpieczeństwa z zaczepieniem tam, gdzie to konieczne.</li><li>Ochrona słuchu i wzroku przy cięciu/szlifowaniu.</li></ul>
<h3>Twoja odpowiedzialność</h3>
<p>Sprawdź sprzęt przed użyciem, zgłaszaj uszkodzenia i używaj go zgodnie z przeszkoleniem. Uszkodzonego sprzętu nie wolno używać.</p>`,
      en: `<p>Personal protective equipment is the last barrier when other measures do not remove the risk entirely. The equipment must suit the work and you.</p>
<h3>Common equipment in roof and sheet-metal work</h3>
<ul><li>Safety helmet with chin strap.</li><li>Safety boots and work gloves.</li><li>Fall-arrest harness with anchoring where needed.</li><li>Hearing and eye protection when cutting/grinding.</li></ul>
<h3>Your responsibility</h3>
<p>Check the equipment before use, report damage, and use it as you were trained to. Damaged equipment must not be used.</p>`,
    },
  },
  {
    slug: 'forstehjelp-beredskap',
    category: CAT.beredskap,
    sort: 90,
    title: { no: 'Førstehjelp og ulykkesberedskap', pl: 'Pierwsza pomoc i gotowość na wypadki', en: 'First aid and emergency preparedness' },
    summary: { no: 'Hva du gjør ved en ulykke, og hvilken beredskap som skal være på plass.', pl: 'Co robić w razie wypadku i jaka gotowość musi być zapewniona.', en: 'What to do in an accident, and what preparedness must be in place.' },
    body: {
      no: `<p>Ved en ulykke teller de første minuttene. Alle skal vite hvor førstehjelpsutstyret er og hvordan de varsler.</p>
<h3>Ved en hendelse</h3>
<ul><li>Sikre skadestedet så det ikke skjer flere skader.</li><li>Gi førstehjelp og ring 113 ved alvorlig skade.</li><li>Varsle nærmeste leder.</li><li>Meld hendelsen som avvik i portalen etterpå.</li></ul>
<h3>Beredskap på arbeidsstedet</h3>
<p>Førstehjelpsutstyr skal være tilgjengelig og komplett. Ved varmt arbeid skal slokkeutstyr være på plass. Rømningsveier holdes frie.</p>`,
      pl: `<p>W razie wypadku liczą się pierwsze minuty. Każdy musi wiedzieć, gdzie jest apteczka i jak powiadomić.</p>
<h3>W razie zdarzenia</h3>
<ul><li>Zabezpiecz miejsce zdarzenia, aby nie doszło do kolejnych obrażeń.</li><li>Udziel pierwszej pomocy i przy poważnym urazie zadzwoń pod 113.</li><li>Powiadom bezpośredniego przełożonego.</li><li>Następnie zgłoś zdarzenie jako niezgodność w portalu.</li></ul>
<h3>Gotowość na stanowisku</h3>
<p>Apteczka musi być dostępna i kompletna. Przy pracach gorących musi być sprzęt gaśniczy. Drogi ewakuacyjne pozostają wolne.</p>`,
      en: `<p>In an accident, the first minutes count. Everyone must know where the first-aid equipment is and how to raise the alarm.</p>
<h3>In an incident</h3>
<ul><li>Secure the scene so no further injuries occur.</li><li>Give first aid and call 113 for serious injury.</li><li>Notify your nearest manager.</li><li>Report the incident as a deviation in the portal afterwards.</li></ul>
<h3>Preparedness at the work site</h3>
<p>First-aid equipment must be available and complete. For hot work, fire-extinguishing equipment must be in place. Escape routes are kept clear.</p>`,
    },
  },
];

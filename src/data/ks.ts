// KS-modul: trespråklig innhold (norsk / polsk / engelsk).
// Brukes av sjekkliste, avviksrapport og bruksanvisning under /ks/.
export type KsLang = 'no' | 'pl' | 'en';
export const ksLangs: { code: KsLang; label: string }[] = [
  { code: 'no', label: 'Norsk' },
  { code: 'pl', label: 'Polski' },
  { code: 'en', label: 'English' },
];

type T = Record<KsLang, string>;

export type CheckItem = { id: string; text: T };
export type CheckSection = { id: string; title: T; items: CheckItem[] };

export const checklist: CheckSection[] = [
  {
    id: 'forberedelse',
    title: {
      no: 'Før oppstart / HMS-forberedelser',
      pl: 'Przed rozpoczęciem / przygotowania BHP',
      en: 'Before start / HSE preparations',
    },
    items: [
      { id: 'sha', text: {
        no: 'SHA-plan og risikovurdering (SJA) lest og forstått; tilgjengelig på byggeplass',
        pl: 'Plan BIOZ i ocena ryzyka (JSA) przeczytane i zrozumiane; dostępne na budowie',
        en: 'SHA plan and risk assessment (JSA) read and understood; available on site' } },
      { id: 'verktoy', text: {
        no: 'Verktøy og utstyr kontrollert (bl.a. riktig spikerlengde i spikerpistol)',
        pl: 'Narzędzia i sprzęt sprawdzone (m.in. prawidłowa długość gwoździ w gwoździarce)',
        en: 'Tools and equipment checked (incl. correct nail length in nail gun)' } },
      { id: 'verneutstyr', text: {
        no: 'Personlig verneutstyr på plass (hjelm, vernesko, fallsele ved behov)',
        pl: 'Środki ochrony osobistej gotowe (kask, obuwie ochronne, szelki w razie potrzeby)',
        en: 'Personal protective equipment ready (helmet, safety boots, harness if needed)' } },
      { id: 'var', text: {
        no: 'Værforhold vurdert; åpne kun tak som kan tettes samme dag',
        pl: 'Oceniono warunki pogodowe; otwierać tylko dach, który da się zamknąć tego samego dnia',
        en: 'Weather assessed; only open roof that can be closed the same day' } },
      { id: 'asbest', text: {
        no: 'Uavklarte/eldre materialer håndteres som mulig asbest til kartlegging foreligger',
        pl: 'Niezidentyfikowane/stare materiały traktowane jako możliwy azbest do czasu badania',
        en: 'Unclear/old materials treated as possible asbestos until surveyed' } },
    ],
  },
  {
    id: 'fallsikring',
    title: {
      no: 'Fallsikring og stillas',
      pl: 'Ochrona przed upadkiem i rusztowania',
      en: 'Fall protection and scaffolding',
    },
    items: [
      { id: 'kollektiv', text: {
        no: 'Kollektiv fallsikring prioritert; personlig fallsikring kun der kollektiv ikke er mulig',
        pl: 'Priorytet dla zbiorowej ochrony przed upadkiem; osobista tylko gdy zbiorowa niemożliwa',
        en: 'Collective fall protection prioritised; personal only where collective is not possible' } },
      { id: 'apninger', text: {
        no: 'Åpninger og takkant sikret fortløpende og sammenhengende',
        pl: 'Otwory i krawędź dachu zabezpieczane na bieżąco i w sposób ciągły',
        en: 'Openings and roof edge secured continuously and without gaps' } },
      { id: 'baereevne', text: {
        no: 'Bæreevne kontrollert sonevis før inngrep; stans ved råte/skade og avklar med konstruktør',
        pl: 'Nośność sprawdzana strefowo przed ingerencją; wstrzymać przy zgniliźnie/uszkodzeniu i skonsultować z konstruktorem',
        en: 'Load-bearing capacity checked zone by zone before work; stop at rot/damage and consult engineer' } },
      { id: 'stillas', text: {
        no: 'Stillas kontrollert av kompetent person; grønt stillasskilt; endres ikke av utførende selv',
        pl: 'Rusztowanie sprawdzone przez osobę kompetentną; zielona tabliczka; nie modyfikować samodzielnie',
        en: 'Scaffold checked by competent person; green scaffold tag; not modified by workers themselves' } },
    ],
  },
  {
    id: 'omrade',
    title: {
      no: 'Sikring av området og tredjeperson',
      pl: 'Zabezpieczenie terenu i osób trzecich',
      en: 'Site and third-party safety',
    },
    items: [
      { id: 'avsperring', text: {
        no: 'Rigg- og faresoner avsperret og skiltet; sikret mot fallende gjenstander',
        pl: 'Strefy zaplecza i niebezpieczne ogrodzone i oznakowane; zabezpieczone przed spadającymi przedmiotami',
        en: 'Rigging and hazard zones cordoned off and signed; secured against falling objects' } },
      { id: 'adkomst', text: {
        no: 'Sikker adkomst til oppganger opprettholdt; beboere varslet ved berørt adkomst',
        pl: 'Utrzymany bezpieczny dostęp do klatek; mieszkańcy powiadomieni gdy dostęp jest naruszony',
        en: 'Safe access to entrances maintained; residents notified when access is affected' } },
      { id: 'nabo', text: {
        no: 'Nabo/branngavl: samtykke og koordinering avklart; nabotak sikret mot nedfall',
        pl: 'Sąsiad/ściana ppoż.: zgoda i koordynacja ustalone; dach sąsiada zabezpieczony przed spadaniem',
        en: 'Neighbour/fire gable: consent and coordination agreed; neighbour roof protected from falling debris' } },
      { id: 'ryddig', text: {
        no: 'Byggeplass ryddig; avfall og overskuddsmateriell fjernet fortløpende',
        pl: 'Budowa uporządkowana; odpady i nadmiar materiału usuwane na bieżąco',
        en: 'Site kept tidy; waste and surplus materials removed continuously' } },
    ],
  },
  {
    id: 'taktekking',
    title: {
      no: 'Taktekking – utførelse',
      pl: 'Krycie dachu – wykonanie',
      en: 'Roofing – execution',
    },
    items: [
      { id: 'undertak', text: {
        no: 'Undertak/underlagsbelegg montert forskriftsmessig og tett (skjøter, klemming)',
        pl: 'Membrana wstępnego krycia zamontowana zgodnie z przepisami i szczelnie (zakłady, mocowania)',
        en: 'Underlay/sub-roof installed correctly and watertight (laps, fixing)' } },
      { id: 'lekter', text: {
        no: 'Sløyfer og lekter i riktig dimensjon og avstand; god ventilering',
        pl: 'Kontrłaty i łaty o właściwym wymiarze i rozstawie; dobra wentylacja',
        en: 'Counter-battens and battens correct size and spacing; good ventilation' } },
      { id: 'tekking', text: {
        no: 'Tekking (stein/membran/shingel) lagt etter leverandørens anvisning',
        pl: 'Pokrycie (dachówka/membrana/gont) ułożone zgodnie z instrukcją producenta',
        en: 'Covering (tiles/membrane/shingle) laid per manufacturer instructions' } },
      { id: 'festemiddel', text: {
        no: 'Riktig festemiddel og lengde brukt; kontrollert at ingen spiker/skrue stikker ut',
        pl: 'Użyto właściwych łączników i długości; sprawdzono, że gwoździe/wkręty nie wystają',
        en: 'Correct fasteners and length used; verified no nail/screw protrudes' } },
      { id: 'membran', text: {
        no: 'Membran/sveis: overlapp, sveisekant og detaljer kontrollert og tette',
        pl: 'Membrana/zgrzewanie: zakłady, krawędzie zgrzewów i detale sprawdzone i szczelne',
        en: 'Membrane/welds: laps, welded seams and details checked and watertight' } },
    ],
  },
  {
    id: 'blikkenslager',
    title: {
      no: 'Blikkenslager – beslag og tetting',
      pl: 'Blacharstwo – obróbki i uszczelnienia',
      en: 'Sheet metal – flashing and sealing',
    },
    items: [
      { id: 'beslag', text: {
        no: 'Beslag tilvirket og montert; overlapp og fall for vannavrenning',
        pl: 'Obróbki blacharskie wykonane i zamontowane; zakłady i spadek do odprowadzenia wody',
        en: 'Flashings fabricated and fitted; overlaps and fall for water drainage' } },
      { id: 'gjennomforinger', text: {
        no: 'Tetting rundt gjennomføringer (pipe, takvindu, karnapp, lufterør) kontrollert',
        pl: 'Uszczelnienia wokół przejść (komin, okno dachowe, wykusz, kominek wentylacyjny) sprawdzone',
        en: 'Sealing around penetrations (chimney, roof window, bay, vent pipe) checked' } },
      { id: 'renner', text: {
        no: 'Takrenner og nedløp montert med fall; forsvarlig innfestet',
        pl: 'Rynny i rury spustowe zamontowane ze spadkiem; solidnie zamocowane',
        en: 'Gutters and downpipes installed with fall; securely fixed' } },
      { id: 'taksikring', text: {
        no: 'Snøfangere og taksikringsutstyr montert etter snølast og krav',
        pl: 'Płotki przeciwśniegowe i zabezpieczenia dachu zamontowane wg obciążenia śniegiem i wymogów',
        en: 'Snow guards and roof safety equipment fitted per snow load and requirements' } },
    ],
  },
  {
    id: 'sluttkontroll',
    title: {
      no: 'Sluttkontroll og dokumentasjon',
      pl: 'Kontrola końcowa i dokumentacja',
      en: 'Final inspection and documentation',
    },
    items: [
      { id: 'tetthet', text: {
        no: 'Tak visuelt kontrollert for tetthet; ingen synlige feil eller manglende detaljer',
        pl: 'Dach skontrolowany wizualnie pod kątem szczelności; brak widocznych wad i braków',
        en: 'Roof visually checked for watertightness; no visible defects or missing details' } },
      { id: 'foto', text: {
        no: 'Foto tatt før, under og etter arbeid; lastet inn i KS',
        pl: 'Zdjęcia zrobione przed, w trakcie i po pracy; wgrane do systemu KS',
        en: 'Photos taken before, during and after work; uploaded to the QA system' } },
      { id: 'avvik', text: {
        no: 'Eventuelle avvik registrert med utbedring og verifikasjon',
        pl: 'Ewentualne niezgodności zarejestrowane z naprawą i weryfikacją',
        en: 'Any deviations logged with corrective action and verification' } },
      { id: 'opprydding', text: {
        no: 'Området ryddet og avfall fjernet; verktøy og utstyr samlet inn',
        pl: 'Teren uprzątnięty, odpady usunięte; narzędzia i sprzęt zebrane',
        en: 'Area cleaned and waste removed; tools and equipment collected' } },
      { id: 'fdv', text: {
        no: 'FDV/overleveringsdokumentasjon utarbeidet og klar for hovedentreprenør/byggherre',
        pl: 'Dokumentacja przekazania (FDV) sporządzona i gotowa dla generalnego wykonawcy/inwestora',
        en: 'Handover (FDV) documentation prepared and ready for main contractor/client' } },
    ],
  },
];

// UI-strenger for KS-modulen
export const ksUi: Record<string, T> = {
  brand: { no: 'Dekmar KS', pl: 'Dekmar KS', en: 'Dekmar QA' },
  home: { no: 'KS-forside', pl: 'Strona główna KS', en: 'QA home' },
  checklist: { no: 'Sjekkliste', pl: 'Lista kontrolna', en: 'Checklist' },
  deviation: { no: 'Avviksrapport', pl: 'Raport niezgodności', en: 'Deviation report' },
  help: { no: 'Bruksanvisning', pl: 'Instrukcja obsługi', en: 'User guide' },
  ksTitle: {
    no: 'KS – kvalitetssikring',
    pl: 'KS – zapewnienie jakości',
    en: 'QA – quality assurance',
  },
  ksIntro: {
    no: 'Sjekklister og avviksdokumentasjon for tak- og blikkenslagerprosjekter. Fyll ut på mobil på byggeplassen og last ned en PDF du kan sende hovedentreprenør eller byggherre.',
    pl: 'Listy kontrolne i dokumentacja niezgodności dla projektów dekarskich i blacharskich. Wypełnij na telefonie na budowie i pobierz PDF do wysłania generalnemu wykonawcy lub inwestorowi.',
    en: 'Checklists and deviation documentation for roofing and sheet metal projects. Fill in on your phone on site and download a PDF to send to the main contractor or client.',
  },
  project: { no: 'Prosjekt', pl: 'Projekt', en: 'Project' },
  address: { no: 'Adresse', pl: 'Adres', en: 'Address' },
  date: { no: 'Dato', pl: 'Data', en: 'Date' },
  performedBy: { no: 'Utført av', pl: 'Wykonał', en: 'Performed by' },
  ok: { no: 'OK', pl: 'OK', en: 'OK' },
  na: { no: 'Ikke aktuelt', pl: 'Nie dotyczy', en: 'N/A' },
  note: { no: 'Merknad', pl: 'Uwaga', en: 'Note' },
  notePlaceholder: { no: 'Merknad (valgfritt)', pl: 'Uwaga (opcjonalnie)', en: 'Note (optional)' },
  downloadPdf: { no: 'Last ned PDF', pl: 'Pobierz PDF', en: 'Download PDF' },
  reset: { no: 'Nullstill', pl: 'Wyczyść', en: 'Reset' },
  saved: { no: 'Lagret lokalt', pl: 'Zapisano lokalnie', en: 'Saved locally' },
  generating: { no: 'Lager PDF …', pl: 'Tworzenie PDF …', en: 'Generating PDF …' },
  // Avvik-felt
  devNo: { no: 'Avviksnr.', pl: 'Nr niezgodności', en: 'Deviation no.' },
  location: { no: 'Lokalisering', pl: 'Lokalizacja', en: 'Location' },
  description: { no: 'Beskrivelse av avvik', pl: 'Opis niezgodności', en: 'Description of deviation' },
  cause: { no: 'Årsak', pl: 'Przyczyna', en: 'Cause' },
  correction: { no: 'Utbedringsmetode', pl: 'Metoda naprawy', en: 'Corrective method' },
  verification: { no: 'Verifikasjon / kontroll', pl: 'Weryfikacja / kontrola', en: 'Verification / check' },
  responsible: { no: 'Ansvarlig', pl: 'Odpowiedzialny', en: 'Responsible' },
  status: { no: 'Status', pl: 'Status', en: 'Status' },
  statusOpen: { no: 'Åpen', pl: 'Otwarta', en: 'Open' },
  statusClosed: { no: 'Lukket', pl: 'Zamknięta', en: 'Closed' },
  photos: { no: 'Bilder', pl: 'Zdjęcia', en: 'Photos' },
  addPhotos: { no: 'Legg til bilder', pl: 'Dodaj zdjęcia', en: 'Add photos' },
  photoHint: {
    no: 'Ta bilde eller velg fra galleri. Bildene legges inn i PDF-en.',
    pl: 'Zrób zdjęcie lub wybierz z galerii. Zdjęcia trafiają do PDF.',
    en: 'Take a photo or choose from gallery. Photos are added to the PDF.',
  },
  handoverTitle: { no: 'KS-dokumentasjon', pl: 'Dokumentacja KS', en: 'QA documentation' },
  toContractor: {
    no: 'Send PDF-en til hovedentreprenør/byggherre som dokumentasjon.',
    pl: 'Wyślij PDF do generalnego wykonawcy/inwestora jako dokumentację.',
    en: 'Send the PDF to the main contractor/client as documentation.',
  },
};

// Bruksanvisning (brukes på hjelp-siden)
export const help: { h: T; p: T[] }[] = [
  {
    h: { no: 'Hva er dette?', pl: 'Co to jest?', en: 'What is this?' },
    p: [{
      no: 'Dette er Dekmars KS-verktøy for tak- og blikkenslagerarbeid. Her fyller du ut sjekklister og avviksrapporter, legger ved bilder, og lager en PDF som dokumenterer utført arbeid overfor hovedentreprenør og byggherre.',
      pl: 'To jest narzędzie KS firmy Dekmar do prac dekarskich i blacharskich. Wypełniasz tu listy kontrolne i raporty niezgodności, dołączasz zdjęcia i tworzysz PDF dokumentujący wykonaną pracę dla generalnego wykonawcy i inwestora.',
      en: 'This is Dekmar’s QA tool for roofing and sheet metal work. Here you fill in checklists and deviation reports, attach photos, and create a PDF that documents completed work for the main contractor and client.',
    }],
  },
  {
    h: { no: 'Velg språk', pl: 'Wybierz język', en: 'Choose language' },
    p: [{
      no: 'Bruk språkvelgeren øverst (Norsk / Polski / English). Valget huskes på enheten din.',
      pl: 'Użyj przełącznika języka u góry (Norsk / Polski / English). Wybór jest zapamiętywany na urządzeniu.',
      en: 'Use the language switch at the top (Norsk / Polski / English). Your choice is remembered on your device.',
    }],
  },
  {
    h: { no: 'Fylle ut en sjekkliste', pl: 'Wypełnianie listy kontrolnej', en: 'Filling in a checklist' },
    p: [{
      no: '1) Skriv inn prosjekt, adresse, dato og hvem som utfører. 2) Kryss av OK eller Ikke aktuelt for hvert punkt, og skriv merknad ved behov. 3) Trykk «Last ned PDF». Alt du fyller inn lagres automatisk på enheten til du nullstiller.',
      pl: '1) Wpisz projekt, adres, datę i wykonawcę. 2) Zaznacz OK lub Nie dotyczy dla każdego punktu i dodaj uwagę w razie potrzeby. 3) Naciśnij „Pobierz PDF”. Wszystko zapisuje się automatycznie na urządzeniu do czasu wyczyszczenia.',
      en: '1) Enter project, address, date and who is performing the work. 2) Tick OK or N/A for each point and add a note if needed. 3) Tap “Download PDF”. Everything you enter is saved automatically on your device until you reset.',
    }],
  },
  {
    h: { no: 'Melde et avvik', pl: 'Zgłaszanie niezgodności', en: 'Reporting a deviation' },
    p: [{
      no: 'Åpne «Avviksrapport». Beskriv hva avviket er, hvor det er (lokalisering), årsak, hvordan det utbedres og hvordan det verifiseres. Sett status Åpen eller Lukket. Legg ved bilder før/under/etter. Trykk «Last ned PDF» for å lage dokumentet.',
      pl: 'Otwórz „Raport niezgodności”. Opisz na czym polega niezgodność, gdzie występuje (lokalizacja), przyczynę, sposób naprawy i weryfikacji. Ustaw status Otwarta lub Zamknięta. Dołącz zdjęcia przed/w trakcie/po. Naciśnij „Pobierz PDF”, aby utworzyć dokument.',
      en: 'Open “Deviation report”. Describe what the deviation is, where it is (location), the cause, how it is corrected and how it is verified. Set status Open or Closed. Attach before/during/after photos. Tap “Download PDF” to create the document.',
    }],
  },
  {
    h: { no: 'Overlevere til hovedentreprenør', pl: 'Przekazanie generalnemu wykonawcy', en: 'Handover to main contractor' },
    p: [{
      no: 'PDF-en som lastes ned inneholder all informasjon og bilder. Send den på e-post eller last den opp der hovedentreprenøren ber om KS-dokumentasjon. PDF-en er svaret på henvendelser om KS og avvik.',
      pl: 'Pobrany PDF zawiera wszystkie informacje i zdjęcia. Wyślij go e-mailem lub prześlij tam, gdzie generalny wykonawca prosi o dokumentację KS. PDF jest odpowiedzią na zapytania dotyczące KS i niezgodności.',
      en: 'The downloaded PDF contains all information and photos. Send it by email or upload it where the main contractor requests QA documentation. The PDF is the answer to inquiries about QA and deviations.',
    }],
  },
];

// Standardmaler for KS-portalen (vernerunder + sjekklister).
// Seedes idempotent til Supabase-tabellen `templates` (nøkkel = slug) fra klienten.
// Innhold er trespråklig (NO/PL/EN) og tilpasset taktekker- og blikkenslagerarbeid.
import { checklist, safetyRound } from './ks';

type T = { no: string; pl: string; en: string };
export interface TplItem { id: string; text: T }
export interface TplSection { id: string; title: T; items: TplItem[] }
export interface StandardTemplate {
  slug: string;
  name: string;
  kind: 'verneround' | 'checklist';
  description: string;
  sort: number;
  sections: TplSection[];
}

// Hjelper: bygg en seksjon der hvert punkt er kort
const sec = (id: string, title: T, items: [string, T][]): TplSection => ({
  id,
  title,
  items: items.map(([iid, text]) => ({ id: iid, text })),
});

// ── Generelle HMS-kategorier (jf. vanlig vernerunde) ──────────────
const generalCats: TplSection[] = [
  sec('orden', { no: 'Orden, renhold og oppbevaring', pl: 'Porządek, czystość i przechowywanie', en: 'Order, cleaning and storage' }, [
    ['ryddig', { no: 'Arbeidsplassen er ryddig og fri for snublefarer', pl: 'Miejsce pracy uporządkowane, bez ryzyka potknięcia', en: 'Workplace tidy and free of trip hazards' }],
    ['lagring', { no: 'Materialer og utstyr lagres forsvarlig', pl: 'Materiały i sprzęt przechowywane bezpiecznie', en: 'Materials and equipment stored safely' }],
  ]),
  sec('avfall', { no: 'Forurensning og avfallshåndtering', pl: 'Zanieczyszczenia i gospodarka odpadami', en: 'Pollution and waste handling' }, [
    ['sortering', { no: 'Avfall sorteres og fjernes jevnlig', pl: 'Odpady segregowane i regularnie usuwane', en: 'Waste sorted and removed regularly' }],
    ['farlig', { no: 'Farlig avfall håndteres separat', pl: 'Odpady niebezpieczne obsługiwane osobno', en: 'Hazardous waste handled separately' }],
  ]),
  sec('belysning', { no: 'Belysning og dagslys', pl: 'Oświetlenie i światło dzienne', en: 'Lighting and daylight' }, [
    ['tilstrekkelig', { no: 'Tilstrekkelig belysning på arbeidsstedet', pl: 'Wystarczające oświetlenie w miejscu pracy', en: 'Adequate lighting at the work area' }],
  ]),
  sec('inneklima', { no: 'Inneklima/innemiljø', pl: 'Klimat/środowisko wewnętrzne', en: 'Indoor climate/environment' }, [
    ['temp', { no: 'Akseptabel temperatur og luftkvalitet', pl: 'Akceptowalna temperatura i jakość powietrza', en: 'Acceptable temperature and air quality' }],
  ]),
  sec('ventilasjon', { no: 'Ventilasjon', pl: 'Wentylacja', en: 'Ventilation' }, [
    ['avtrekk', { no: 'Tilstrekkelig ventilasjon/avtrekk ved støv og gass', pl: 'Wystarczająca wentylacja przy pyle i gazie', en: 'Adequate ventilation/extraction for dust and gas' }],
  ]),
  sec('ergonomi', { no: 'Ergonomi', pl: 'Ergonomia', en: 'Ergonomics' }, [
    ['loft', { no: 'Tunge løft planlagt, hjelpemidler brukes', pl: 'Ciężkie podnoszenie zaplanowane, używane pomoce', en: 'Heavy lifts planned, aids used' }],
    ['arbeidsstilling', { no: 'Gode arbeidsstillinger, unngår ensidig belastning', pl: 'Dobre pozycje pracy, bez jednostronnego obciążenia', en: 'Good working postures, avoid repetitive strain' }],
  ]),
  sec('stoy', { no: 'Støy og vibrasjoner', pl: 'Hałas i wibracje', en: 'Noise and vibration' }, [
    ['horselvern', { no: 'Hørselvern tilgjengelig og brukes ved støy', pl: 'Ochrona słuchu dostępna i używana przy hałasie', en: 'Hearing protection available and used' }],
  ]),
  sec('kjemikalier', { no: 'Kjemikalier', pl: 'Substancje chemiczne', en: 'Chemicals' }, [
    ['sds', { no: 'Sikkerhetsdatablad finnes i stoffkartoteket', pl: 'Karty charakterystyki są w rejestrze substancji', en: 'Safety data sheets present in the register' }],
    ['merking', { no: 'Kjemikalier er riktig merket og oppbevart', pl: 'Substancje prawidłowo oznakowane i przechowywane', en: 'Chemicals correctly labelled and stored' }],
  ]),
  sec('verneutstyr', { no: 'Personlig verneutstyr og førstehjelpsutstyr', pl: 'ŚOI i apteczka', en: 'PPE and first-aid equipment' }, [
    ['ppe', { no: 'Nødvendig verneutstyr er tilgjengelig og brukes', pl: 'Niezbędne ŚOI dostępne i używane', en: 'Required PPE available and used' }],
    ['forstehjelp', { no: 'Førstehjelpsutstyr finnes og er komplett', pl: 'Apteczka dostępna i kompletna', en: 'First-aid kit present and complete' }],
  ]),
  sec('sikkerhet', { no: 'Sikkerhet-/vernetekniske forhold (utstyr og maskiner)', pl: 'Bezpieczeństwo techniczne (sprzęt i maszyny)', en: 'Safety/technical conditions (equipment and machines)' }, [
    ['verneinnr', { no: 'Verneinnretninger på maskiner er intakte', pl: 'Osłony maszyn są sprawne', en: 'Machine guards intact' }],
    ['kontroll', { no: 'Utstyr er kontrollert og godkjent', pl: 'Sprzęt sprawdzony i dopuszczony', en: 'Equipment inspected and approved' }],
  ]),
  sec('elanlegg', { no: 'El-anlegg', pl: 'Instalacja elektryczna', en: 'Electrical installations' }, [
    ['kabler', { no: 'Kabler og skjøteledninger er hele og forsvarlig lagt', pl: 'Kable i przedłużacze całe i bezpiecznie ułożone', en: 'Cables and extension leads intact and safely routed' }],
  ]),
  sec('brannvern', { no: 'Brannvern', pl: 'Ochrona przeciwpożarowa', en: 'Fire protection' }, [
    ['slokke', { no: 'Slokkeutstyr er tilgjengelig og kontrollert', pl: 'Sprzęt gaśniczy dostępny i sprawdzony', en: 'Fire extinguishers available and checked' }],
    ['rommingsvei', { no: 'Rømningsveier er frie', pl: 'Drogi ewakuacyjne są wolne', en: 'Escape routes clear' }],
  ]),
  sec('data', { no: 'Dataarbeidsplassen', pl: 'Stanowisko komputerowe', en: 'Computer workstation' }, [
    ['skjerm', { no: 'Skjerm, tastatur og stol er riktig innstilt', pl: 'Monitor, klawiatura i krzesło poprawnie ustawione', en: 'Screen, keyboard and chair correctly set up' }],
  ]),
  sec('vold', { no: 'Vold og trusler', pl: 'Przemoc i groźby', en: 'Violence and threats' }, [
    ['rutiner', { no: 'Rutiner ved vold/trusler er kjent', pl: 'Procedury dot. przemocy/gróźb są znane', en: 'Procedures for violence/threats are known' }],
  ]),
  sec('ovrig', { no: 'Øvrige forhold', pl: 'Pozostałe warunki', en: 'Other conditions' }, [
    ['annet', { no: 'Andre forhold av betydning for HMS', pl: 'Inne istotne warunki BHP', en: 'Other conditions relevant to HSE' }],
  ]),
];

// Detaljert variant: legg til ekstra kontrollpunkter i utvalgte kategorier
const generalCatsDetailed: TplSection[] = generalCats.map((s) => {
  const extra: Record<string, [string, T][]> = {
    orden: [['adkomst', { no: 'Adkomstveier og trapper er ryddige og sikret', pl: 'Drogi dojścia i schody uporządkowane i zabezpieczone', en: 'Access routes and stairs tidy and secured' }]],
    kjemikalier: [['eksponering', { no: 'Eksponering for støv/damp er vurdert og redusert', pl: 'Ekspozycja na pył/opary oceniona i ograniczona', en: 'Exposure to dust/vapour assessed and reduced' }]],
    sikkerhet: [['stromkilde', { no: 'Provisorisk strøm og fordelinger er jordfeilbeskyttet', pl: 'Zasilanie tymczasowe zabezpieczone różnicowoprądowo', en: 'Temporary power protected by RCD' }]],
    verneutstyr: [['opplaering', { no: 'Ansatte har fått opplæring i bruk av verneutstyr', pl: 'Pracownicy przeszkoleni w użyciu ŚOI', en: 'Staff trained in the use of PPE' }]],
  };
  const add = extra[s.id];
  return add ? { ...s, items: [...s.items, ...add.map(([iid, text]) => ({ id: iid, text }))] } : s;
});

// ── Roofing / sheet-metal specific safety round ──────────────────
const takBlikkVernerunde: TplSection[] = [
  sec('fallsikring', { no: 'Fallsikring og arbeid i høyden', pl: 'Ochrona przed upadkiem i praca na wysokości', en: 'Fall protection and work at height' }, [
    ['rekkverk', { no: 'Rekkverk/kollektiv sikring montert langs takkant', pl: 'Balustrady/zbiorowe zabezpieczenie na krawędzi dachu', en: 'Guardrails/collective protection along roof edge' }],
    ['sele', { no: 'Fallsele og forankring brukes der rekkverk mangler', pl: 'Szelki i punkt kotwiący używane bez balustrad', en: 'Harness and anchor used where guardrails are missing' }],
    ['hull', { no: 'Takluker, lyskupler og hull er sikret/tildekket', pl: 'Klapy, świetliki i otwory zabezpieczone/przykryte', en: 'Roof hatches, skylights and openings secured/covered' }],
  ]),
  sec('stillas', { no: 'Stillas og rekkverk', pl: 'Rusztowania i balustrady', en: 'Scaffolding and guardrails' }, [
    ['godkjent', { no: 'Stillas er kontrollert og skiltet (grønt skilt)', pl: 'Rusztowanie skontrolowane i oznakowane (zielona tabliczka)', en: 'Scaffold inspected and tagged (green tag)' }],
    ['forankring', { no: 'Stillas er forankret og står stabilt', pl: 'Rusztowanie zakotwione i stabilne', en: 'Scaffold anchored and stable' }],
  ]),
  sec('stiger', { no: 'Stiger og adkomst', pl: 'Drabiny i dostęp', en: 'Ladders and access' }, [
    ['stige', { no: 'Stiger er hele, sikret mot skliing og rager 1 m over tak', pl: 'Drabiny sprawne, zabezpieczone, wystają 1 m ponad dach', en: 'Ladders intact, secured, extend 1 m above roof' }],
  ]),
  sec('varmt', { no: 'Varmt arbeid (tekking med åpen flamme)', pl: 'Prace gorące (krycie otwartym ogniem)', en: 'Hot work (torch-on roofing)' }, [
    ['tillatelse', { no: 'Arbeidstillatelse for varmt arbeid er utfylt', pl: 'Pozwolenie na prace gorące wypełnione', en: 'Hot-work permit completed' }],
    ['brannvakt', { no: 'Brannvakt og godkjent slokkeutstyr er på plass', pl: 'Nadzór ppoż. i sprzęt gaśniczy na miejscu', en: 'Fire watch and approved extinguisher in place' }],
    ['etterkontroll', { no: 'Etterkontroll utført etter endt varmt arbeid', pl: 'Kontrola po zakończeniu prac gorących', en: 'Post-work check after hot work' }],
  ]),
  sec('gass', { no: 'Gass og propan', pl: 'Gaz i propan', en: 'Gas and propane' }, [
    ['slanger', { no: 'Slanger, regulator og flasker er hele og tette', pl: 'Węże, reduktor i butle sprawne i szczelne', en: 'Hoses, regulator and cylinders intact and tight' }],
    ['lagring', { no: 'Gassflasker lagres stående og ventilert', pl: 'Butle gazowe przechowywane pionowo i wentylowane', en: 'Gas cylinders stored upright and ventilated' }],
  ]),
  sec('loft', { no: 'Løfteutstyr og kran', pl: 'Sprzęt do podnoszenia i dźwig', en: 'Lifting equipment and crane' }, [
    ['sertifikat', { no: 'Løfteutstyr er sertifisert og kontrollert', pl: 'Sprzęt do podnoszenia certyfikowany i sprawdzony', en: 'Lifting equipment certified and inspected' }],
  ]),
  sec('verktoy', { no: 'Verktøy og maskiner (fals, kantpresse, vinkelsliper)', pl: 'Narzędzia i maszyny (zaginarka, gilotyna, szlifierka)', en: 'Tools and machines (folder, press brake, angle grinder)' }, [
    ['vern', { no: 'Verneinnretninger og vern er intakte', pl: 'Osłony i zabezpieczenia sprawne', en: 'Guards and safety devices intact' }],
    ['kutt', { no: 'Kappe-/slipeutstyr brukes med riktig verneutstyr', pl: 'Cięcie/szlifowanie z właściwymi ŚOI', en: 'Cutting/grinding used with correct PPE' }],
  ]),
  sec('var', { no: 'Vær, vind og underlag', pl: 'Pogoda, wiatr i podłoże', en: 'Weather, wind and surface' }, [
    ['vind', { no: 'Arbeid stanses ved sterk vind, is eller glatt tak', pl: 'Praca wstrzymana przy silnym wietrze, lodzie, śliskim dachu', en: 'Work stopped in strong wind, ice or slippery roof' }],
  ]),
  sec('materiell', { no: 'Materialhåndtering på tak', pl: 'Obsługa materiałów na dachu', en: 'Material handling on the roof' }, [
    ['sikret', { no: 'Materialer er sikret mot vind og fall ned', pl: 'Materiały zabezpieczone przed wiatrem i spadnięciem', en: 'Materials secured against wind and falling' }],
  ]),
  sec('ppe-tak', { no: 'Personlig verneutstyr', pl: 'Środki ochrony indywidualnej', en: 'Personal protective equipment' }, [
    ['hjelm', { no: 'Hjelm med hakestropp, vernesko og hansker brukes', pl: 'Kask z paskiem, obuwie ochronne i rękawice używane', en: 'Helmet with chin strap, safety boots and gloves used' }],
  ]),
];

export const standardTemplates: StandardTemplate[] = [
  {
    slug: 'generell-vernerunde',
    name: 'Generell Vernerunde',
    kind: 'verneround',
    description: 'Verktøy for kartlegging og kontroll av HMS-status og risikoforhold. Malen er generell. Ved behov anbefaler vi å opprette egne, mer spesifikke maler.',
    sort: 10,
    sections: generalCats,
  },
  {
    slug: 'generell-vernerunde-detaljert',
    name: 'Generell Vernerunde Detaljert',
    kind: 'verneround',
    description: 'Verktøy for detaljert kartlegging og kontroll av HMS-status og risikoforhold. Malen er generell. Ved behov anbefaler vi å opprette egne, mer spesifikke maler.',
    sort: 20,
    sections: generalCatsDetailed,
  },
  {
    slug: 'vernerunde-tak-blikk',
    name: 'Vernerunde – Tak- og blikkenslagerarbeid',
    kind: 'verneround',
    description: 'Vernerunde tilpasset arbeid på tak og blikkenslagerarbeid: fallsikring, stillas, varmt arbeid, gass, verktøy og vær.',
    sort: 30,
    sections: takBlikkVernerunde,
  },
  {
    slug: 'vernerunde-basis',
    name: 'Vernerunde – basis (Dekmar)',
    kind: 'verneround',
    description: 'Dekmars grunnleggende vernerunde for byggeplass.',
    sort: 40,
    sections: safetyRound as unknown as TplSection[],
  },
  {
    slug: 'sjekkliste-sluttkontroll-tak',
    name: 'Sluttkontroll tak (taktekking)',
    kind: 'checklist',
    description: 'Teknisk sluttkontroll og HMS-sjekkliste for taktekkingsarbeid.',
    sort: 50,
    sections: checklist as unknown as TplSection[],
  },
  {
    slug: 'egenkontroll-blikkenslager',
    name: 'Egenkontroll blikkenslager',
    kind: 'checklist',
    description: 'Egenkontroll av blikkenslagerarbeid: beslag, renner, nedløp og tetting.',
    sort: 60,
    sections: [
      sec('beslag', { no: 'Beslag og inndekking', pl: 'Obróbki blacharskie', en: 'Flashings and cladding' }, [
        ['fall', { no: 'Beslag har riktig fall og overlapp', pl: 'Obróbki mają właściwy spadek i zakład', en: 'Flashings have correct fall and overlap' }],
        ['feste', { no: 'Beslag er festet iht. vindlast og med riktig innfesting', pl: 'Obróbki zamocowane wg obciążenia wiatrem', en: 'Flashings fixed per wind load with correct fixings' }],
      ]),
      sec('renner', { no: 'Takrenner', pl: 'Rynny', en: 'Gutters' }, [
        ['renne-fall', { no: 'Renner har fall mot nedløp og er tette', pl: 'Rynny mają spadek do rur i są szczelne', en: 'Gutters fall towards downpipes and are watertight' }],
        ['kroker', { no: 'Rennekroker har riktig avstand og innfesting', pl: 'Haki rynnowe w odpowiednich odstępach', en: 'Gutter brackets correctly spaced and fixed' }],
      ]),
      sec('nedlop', { no: 'Nedløp', pl: 'Rury spustowe', en: 'Downpipes' }, [
        ['nedlop-fest', { no: 'Nedløp er festet og fører vann bort fra grunnmur', pl: 'Rury zamocowane, odprowadzają wodę od fundamentu', en: 'Downpipes fixed and drain water from the foundation' }],
      ]),
      sec('tetting', { no: 'Tetting og gjennomføringer', pl: 'Uszczelnienia i przejścia', en: 'Sealing and penetrations' }, [
        ['piper', { no: 'Piper, lufterør og gjennomføringer er tette', pl: 'Kominy, wywietrzniki i przejścia szczelne', en: 'Chimneys, vent pipes and penetrations sealed' }],
        ['fuger', { no: 'Fuger og loddede skjøter er tette og pene', pl: 'Fugi i luty szczelne i estetyczne', en: 'Joints and soldered seams tight and neat' }],
      ]),
      sec('overflate', { no: 'Overflate og finish', pl: 'Powierzchnia i wykończenie', en: 'Surface and finish' }, [
        ['skader', { no: 'Ingen riper, bulker eller korrosjon på synlige flater', pl: 'Brak rys, wgnieceń i korozji na widocznych powierzchniach', en: 'No scratches, dents or corrosion on visible surfaces' }],
      ]),
    ],
  },
];

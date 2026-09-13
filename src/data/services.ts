export type ServiceBlock = { heading?: string; paragraphs: string[] };

export type Service = {
  slug: string;
  title: string;
  /** Kort ingress – brukes i kort, meny og meta-beskrivelse */
  intro: string;
  /** Bilde i /public/images/services/… (valgfritt) */
  image?: string;
  /** Brødtekst */
  body: ServiceBlock[];
  /**
   * true = teksten er skrevet av oss som utkast fordi den opprinnelige
   * WordPress-siden var tom. Bytt gjerne ut med egen tekst.
   */
  draft?: boolean;
};

export const services: Service[] = [
  {
    slug: 'taktekking',
    title: 'Taktekking',
    intro:
      'Takentreprenør med egne fast ansatte håndverkere. Vi leverer høy kvalitet og komplette løsninger der alt er inkludert.',
    image: '/images/services/skratak.jpg',
    body: [
      {
        heading: 'Kvalitet og komplette løsninger',
        paragraphs: [
          'Dekmar AS er en takentreprenør som verner om våre fagarbeidere og arbeidskraft. Vi benytter oss kun av våre egne fast ansatte håndverkere. Årsaken er at vi er en takentreprenør som ønsker å levere høy kvalitet og komplette løsninger der alt er inkludert.',
          'I tillegg til å være taktekker er vi en takentreprenør med eget blikkenslagerverksted. Det gjør at vi kan tilby alt innen tilvirking av beslag, takrenner, ventilasjon, taksikringsutstyr og annet detaljarbeid til tak.',
        ],
      },
      {
        heading: 'Oppdatert på teknologi og utvikling',
        paragraphs: [
          'En taktekkers arbeidsoppgaver omfatter tekking av tak på nybygg, boligblokker, småhus, industribygg, jorddekkende konstruksjoner, membraner, reparasjoner og vedlikehold av tak. Vi er stolte av å levere takarbeid til fast konkurransedyktig pris og til avtalt tid.',
          'Vi er opptatt av at du som kunde ivaretas på best mulig måte. Derfor følger vi utviklingen i bransjen tett og er oppdatert på det nyeste innen kravspesifikasjoner, teknikker, verktøy og hjelpemidler.',
        ],
      },
    ],
  },
  {
    slug: 'takrenner',
    title: 'Takrenner',
    intro:
      'Takrenner i god kvalitet som avleder regnvann effektivt og hindrer fukt­skader – i stål, kobber eller sink.',
    image: '/images/services/blikkenslager.jpg',
    body: [
      {
        paragraphs: [
          'Takrenner i god kvalitet tåler stor belastning, avleder regnvann effektivt bort fra hus og boliger, og hindrer lekkasjer og fuktskader i tak og vegger. Vi kan levere spesialtilpassede takrenner med større vannkapasitet enn standard takrenner. Dette er bare én av grunnene til å velge oss som din leverandør av takrenner.',
        ],
      },
      {
        heading: 'Takrenner tilpasset din bolig',
        paragraphs: [
          'Vi leverer standard takrenner i plastisolbelagt galvanisert stål, i dimensjoner på 100 mm, 125 mm og 150 mm. Nedløpene er enten i 75 mm, 87 mm eller 100 mm, og tilpasses for hvert enkelt produkt. Vi har et bredt fargeutvalg på takrennene og nedløpene våre, og benytter oss, i tillegg til stål, av materialene kobber eller sink.',
          'Galvanisert stål sikrer stor stabilitet og lang levetid. Kobber er et levende og vedlikeholdsfritt materiale, og er gjerne sett på som det mest eksklusive takrennesystemet. Sink er et 100 % naturlig materiale, og oppnår med tiden et matt, beskyttende lag. Om du er usikker på hva som er det beste valget for din bolig kan du gjerne rådføre deg med oss.',
        ],
      },
      {
        heading: 'Takrenner som gir en penere fasade',
        paragraphs: [
          'Våre takrenner er kjent for å være elegante. En takrenne skal gå godt sammen med husets øvrige struktur, utforming og farger, og ikke stikke seg ut negativt. Takrennene våre skal gi huset ditt et utseendemessig løft og en penere fasade.',
        ],
      },
    ],
  },
  {
    slug: 'omlegging-av-tak',
    title: 'Omlegging av tak',
    intro:
      'Taket er husets «hatt». Vi hjelper deg hele veien – fra start til ferdig tak – og tilbyr gratis befaring i Oslo og Viken.',
    image: '/images/services/skratak-2.jpg',
    body: [
      {
        heading: 'Omlegging av tak i Oslo og Viken',
        paragraphs: [
          'Taket er husets «hatt» og det øverste beskyttelseslaget, og er derfor en viktig investering. Som blikkenslager og takentreprenør er taket en av Dekmar sine ekspertområder, og vi hjelper deg hele veien; – fra start til ferdig tak. Vi tilbyr gratis befaring for våre kunder i Oslo og Viken.',
        ],
      },
      {
        heading: 'Hvorfor det er viktig å ta tak i taket',
        paragraphs: [
          'Taket er en av de viktigste vedlikeholdsområdene for en bygning, og om det ikke er oppgradert og ivaretatt tilstrekkelig, kan taket bli en økonomisk fallgruve. Bytter du derimot ut et gammelt tak med et nytt, vil du oppleve en stor verdiøkning i boligen om du skal selge. Dette er en engangsinvestering som gir god avkastning. I tillegg koster det ofte mindre enn å pusse opp bad eller kjøkken.',
          'Omlegging av tak krever høy kompetanse og lang erfaring for optimal resultatoppnåelse. Det er med andre ord ikke en oppgave for ufaglærte. Omlegging av tak kan ta alt fra en uke til en måned, alt etter sesong, vind, vær, og selvfølgelig takprosjektets omfang. Vi holder alltid våre kunder oppdatert på prosessen og prosjektets fremgang, slik at du kontinuerlig vil få tilstrekkelig informasjon.',
        ],
      },
      {
        heading: 'Ta tak i dag',
        paragraphs: [
          'Som nevnt ligger det store verdier i tak, men det er ikke alltid enkelt å vite om akkurat ditt tak trenger en oppgradering, omlegging eller andre tiltak. Om du er usikker, så benytt deg gjerne av vår kostnadsfrie befaring. Du kan også kontakte oss om du har spørsmål eller ønsker mer informasjon angående tak.',
        ],
      },
    ],
  },
  {
    slug: 'blikkenslager',
    title: 'Blikkenslager',
    intro:
      'Vi utfører alle blikkenslageroppdrag i egen regi med egne fast ansatte håndverkere – beslag og detaljer i kobber, sink, stål og aluminium.',
    image: '/images/services/blikkenslager.jpg',
    body: [
      {
        paragraphs: [
          'Dekmar AS er en blikkenslager som utfører oppdrag i Oslo og Viken, og som etter beste evne tar vare på våre kunder. Vi er en blikkenslager som utfører alle oppdrag i egen regi. Videre er vi en blikkenslager som kun bruker egne fast ansatte norske håndverkere.',
        ],
      },
      {
        heading: 'Hva gjør en blikkenslager?',
        paragraphs: [
          'En blikkenslager er en håndverker som lager beslag og detaljer til tak og ventilasjonsanlegg. Taktekking er ofte en av hovedoppgavene til en blikkenslager. Isolering og brannsikring er andre arbeidsoppgaver som en blikkenslager som regel kan utføre. En blikkenslager jobber med metaller i form av tynnplater. Eksempler på metaller en blikkenslager jobber med er kobber, sink og stål. I tillegg jobber en blikkenslager ofte med aluminium.',
          'Til taktekking brukes ofte takstein, skifer og papp. En blikkenslager arbeider både innendørs og utendørs. Arbeidssteder en blikkenslager jobber på inkluderer verksteder og forskjellige byggeplasser.',
        ],
      },
      {
        heading: 'Takarbeid og beslag',
        paragraphs: [
          'Takarbeider som en blikkenslager ofte utfører inkluderer tilvirkning og montering av beslag og takrenner. I tillegg er taktekking med takstein, skifer og plater av metall vanlige arbeidsoppgaver. Taktekking er et stort fagfelt. På større tak har ofte en blikkenslager montert beslag og takrenner. Dagens marked etterspør i økende grad mer bruk av tradisjonsrike materialer som sink, kobber og skifer til tekking. En blikkenslager monterer også ofte taksikringsutstyr.',
        ],
      },
    ],
  },
  {
    slug: 'flate-tak',
    title: 'Flate tak',
    intro:
      'Komplette løsninger for flate tak – fall- og isolasjonsløsninger, SINTEF-godkjent sveisemembran, sluk og smarte varmesystemer. Vi leverer også torv- og sedumtak.',
    image: '/images/services/flate-tak.jpg',
    body: [
      {
        paragraphs: [
          'Vi leverer det meste innen løsninger til flate tak. Vi benytter oss blant annet av fall- og isolasjonsløsninger fra Rockwool, høykvalitets SINTEF-godkjent asfalt sveisemembran fra Copernit, samt sluk og intelligente varmestyringssystemer fra Aiwell. Vi kan også levere torvtak og sedumtak.',
        ],
      },
      {
        heading: 'Membraner og belegg',
        paragraphs: [
          'Flate tak stiller strenge krav til tett membran og god vannavrenning. Vi leverer og monterer membraner og belegg for flate tak, balkonger og terrasser, og sørger for riktige detaljer rundt sluk, gjennomføringer og oppkanter slik at taket blir tett og varig.',
        ],
      },
    ],
  },
  {
    slug: 'takstein',
    title: 'Takstein',
    intro:
      'Vi leverer og legger de fleste materialtyper – betongtakstein, tegltakstein og takpanner – med alt nødvendig tilbehør tilpasset ditt tak.',
    image: '/images/services/skratak.jpg',
    draft: true,
    body: [
      {
        paragraphs: [
          'Vi leverer de fleste materialtyper som betongtakstein, tegltakstein og takpanner. Takstein er et robust og velprøvd tekkemateriale med lang levetid, og finnes i mange former og farger som passer til ulike hus og stilarter.',
          'Vi leverer alt av nødvendig tilbehør tilpasset og dimensjonert for ditt tak – det være seg takrenner, beslag, snøfangere eller takstiger med mer. Dekmar utfører også inndekning av takvinduer og annet detaljarbeid.',
        ],
      },
    ],
  },
  {
    slug: 'gummimembran',
    title: 'Gummimembran',
    intro:
      'EPDM-gummimembran for flate og lavthellende tak, terrasser og balkonger – en robust og aldringsbestandig løsning i store baner med få skjøter.',
    draft: true,
    body: [
      {
        paragraphs: [
          'Gummimembran (EPDM) er en fleksibel og svært aldringsbestandig membran som egner seg godt til flate og lavthellende tak, terrasser og balkonger. Materialet legges i store baner, noe som gir få skjøter og et tett og driftssikkert tak.',
          'Vi vurderer riktig løsning ut fra takets utforming og bruk, og utfører alt av tilhørende detaljer rundt sluk, oppkanter og gjennomføringer. Ta kontakt for en uforpliktende befaring, så finner vi den beste membranløsningen for ditt bygg.',
        ],
      },
    ],
  },
  {
    slug: 'diffusjonsapne-taklosninger',
    title: 'Diffusjonsåpne takløsninger',
    intro:
      'Moderne, diffusjonsåpne undertak som lar konstruksjonen «puste» og reduserer faren for kondens og fuktskader.',
    draft: true,
    body: [
      {
        paragraphs: [
          'Diffusjonsåpne takløsninger lar fukt slippe ut av konstruksjonen samtidig som taket holder vann og vind ute. Det gir et sunnere tak med mindre fare for kondens og fuktskader, og er i dag en anbefalt løsning på de fleste skråtak.',
          'Vi leverer både tradisjonelle og diffusjonsåpne løsninger, og gir deg råd om hva som passer best for din bygning. Ønsker du mer informasjon, er du velkommen til å ta kontakt for en gratis befaring.',
        ],
      },
    ],
  },
  {
    slug: 'takmembran',
    title: 'Takmembran',
    intro:
      'Tette membranløsninger for flate tak, terrasser og balkonger – riktig utført for et varig og driftssikkert resultat.',
    draft: true,
    body: [
      {
        paragraphs: [
          'Takmembran er selve tettesjiktet på flate og lavthellende tak. Vi leverer og monterer membraner og belegg for tak, balkonger og terrasser, med SINTEF-godkjente materialer og korrekt utførte detaljer rundt sluk, oppkanter og gjennomføringer.',
          'God membran og riktig utførelse er avgjørende for et tett tak med lang levetid. Ta kontakt, så hjelper vi deg med å velge riktig løsning for ditt prosjekt.',
        ],
      },
    ],
  },
  {
    slug: 'shingel',
    title: 'Shingel',
    intro:
      'Takshingel er en rimelig og fleksibel tekking som passer godt på boder, garasjer, hytter og tak med kompleks geometri.',
    draft: true,
    body: [
      {
        paragraphs: [
          'Takshingel er et lett og fleksibelt tekkemateriale som er enkelt å tilpasse tak med vinkler og detaljer. Det er en rimelig løsning som egner seg godt på boder, garasjer, hytter og mindre bygg, og finnes i flere farger og profiler.',
          'Vi leverer og legger shingel med riktig underlag og detaljer for et tett og pent resultat. Kontakt oss for en uforpliktende prat om ditt prosjekt.',
        ],
      },
    ],
  },
  {
    slug: 'skratak',
    title: 'Skråtak',
    intro:
      'Komplette løsninger for skråtak – takstein, takpanner og alt av tilbehør tilpasset og dimensjonert for ditt tak.',
    image: '/images/services/skratak.jpg',
    body: [
      {
        paragraphs: [
          'Vi leverer de fleste materialtyper som betongtakstein, tegltakstein og takpanner. Vi leverer alt av nødvendig tilbehør tilpasset og dimensjonert for deres skråtak. Det være seg takrenner, beslag, snøfangere eller takstiger med mer. Dekmar utfører også inndekning av takvinduer og annet.',
        ],
      },
      {
        heading: 'Tradisjonelle og diffusjonsåpne løsninger',
        paragraphs: [
          'Vi leverer både tradisjonelle og diffusjonsåpne løsninger for skråtak, og gir deg råd om hva som passer best for din bygning. Alt arbeid utføres av egne fast ansatte håndverkere, til fast pris og avtalt tid.',
        ],
      },
    ],
  },
  {
    slug: 'snofangere',
    title: 'Snøfangere',
    intro:
      'Snøfangere og annet taksikringsutstyr som hindrer snøras og gir trygg ferdsel rundt bygget – levert og montert etter gjeldende krav.',
    draft: true,
    body: [
      {
        paragraphs: [
          'Snøfangere hindrer at snø og is raser ukontrollert ned fra taket, og er viktig for sikkerheten til mennesker og eiendom under takfoten. Vi leverer og monterer snøfangere tilpasset taktype og snølast, i tråd med gjeldende krav.',
          'Vi leverer også annet taksikringsutstyr som takstiger og takbroer, og fjerner snø og is fra tak og takrenner ved behov. Ta kontakt for en vurdering av taksikringen på ditt bygg.',
        ],
      },
    ],
  },
  {
    slug: 'pipebeslag-hetter',
    title: 'Pipebeslag / hetter',
    intro:
      'Pipebeslag, luftehatter og andre beslag produsert i eget blikkenslagerverksted – med montering og oppfølging fra bestilling til ferdig resultat.',
    image: '/images/services/blikkenslager.jpg',
    body: [
      {
        heading: 'Pipebeslag',
        paragraphs: [
          'Pipebeslag, luftehatter og andre typer beslag er noen av produktene vi lager i vårt blikkenslagerverksted. I tillegg til å produsere disse produktene tilbyr vi også monteringstjenester, og kan gi deg som kunde oppfølging gjennom hele prosessen – fra bestilling til ferdig montert pipebeslag.',
        ],
      },
      {
        heading: 'Pipebeslag og luftehatter',
        paragraphs: [
          'Pipebeslagets hovedfunksjon er å hindre lekkasjer inn i pipa. Beslaget legges halvveis eller helt rundt pipa, også kalt fottekking og heltekking. Materiellutvalget til pipebeslag er stort, og mulighetene til utforming er mange. Her påvirker kundens smak og behag hvordan sluttproduktet vil se ut, men også hensyn til for eksempel feier.',
          'En luftehatt på toppen av pipa er nødvendig for å hindre snø og regn i å trekke inn i pipesystemet. Uten luftehatt kan pipa bli våtere og få dårligere trekk, da mer varme går med til å fordampe fuktighet til fordel for oppvarming.',
        ],
      },
      {
        heading: 'Tilleggstjenester for pipe',
        paragraphs: [
          'Dekmar AS utfører også andre tjenester relatert til pipebeslag, som utskifting av takrenner, nedløp, luftehatter og tekkinger. Vi fjerner også snø og is fra takrenner og tak, og leverer og monterer taksikringsutstyr som snøfangere, takstiger og takbroer.',
        ],
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

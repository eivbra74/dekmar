import type { Lang } from '../i18n/ui';

type L<T> = { nb: T; en: T };
export type ServiceBlock = { heading?: string; paragraphs: string[] };

export type Service = {
  slug: string;
  title: L<string>;
  /** Kort ingress – brukes i kort, meny og meta-beskrivelse */
  intro: L<string>;
  /** Bilde i /public/images/services/… (valgfritt) */
  image?: string;
  /** Brødtekst */
  body: L<ServiceBlock[]>;
  /**
   * true = teksten er skrevet av oss som utkast fordi den opprinnelige
   * WordPress-siden var tom. Bytt gjerne ut med egen tekst.
   */
  draft?: boolean;
};

export const services: Service[] = [
  {
    slug: 'taktekking',
    title: { nb: 'Taktekking', en: 'Roofing' },
    intro: {
      nb: 'Takentreprenør med egne fast ansatte håndverkere. Vi leverer høy kvalitet og komplette løsninger der alt er inkludert.',
      en: 'A roofing contractor with our own permanently employed craftsmen. We deliver high quality and complete solutions with everything included.',
    },
    image: '/images/services/skratak.jpg',
    body: {
      nb: [
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
      en: [
        {
          heading: 'Quality and complete solutions',
          paragraphs: [
            'Dekmar AS is a roofing contractor that looks after its skilled workers. We use only our own permanently employed craftsmen. The reason is that we are a roofing contractor who wants to deliver high quality and complete solutions where everything is included.',
            'In addition to being a roofer, we are a roofing contractor with our own sheet metal workshop. This means we can offer everything within the fabrication of flashings, gutters, ventilation, roof safety equipment and other detailed roof work.',
          ],
        },
        {
          heading: 'Up to date on technology and development',
          paragraphs: [
            "A roofer's tasks include roofing on new buildings, apartment blocks, houses, industrial buildings, earth-covered structures, membranes, repairs and roof maintenance. We are proud to deliver roof work at a fixed, competitive price and on the agreed schedule.",
            'We care that you as a customer are looked after in the best possible way. That is why we follow developments in the industry closely and stay up to date on the latest requirements, techniques, tools and equipment.',
          ],
        },
      ],
    },
  },
  {
    slug: 'takrenner',
    title: { nb: 'Takrenner', en: 'Gutters' },
    intro: {
      nb: 'Takrenner i god kvalitet som avleder regnvann effektivt og hindrer fukt­skader – i stål, kobber eller sink.',
      en: 'High-quality gutters that drain rainwater efficiently and prevent moisture damage – in steel, copper or zinc.',
    },
    image: '/images/services/blikkenslager.jpg',
    body: {
      nb: [
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
      en: [
        {
          paragraphs: [
            'Good-quality gutters withstand heavy loads, drain rainwater efficiently away from houses and buildings, and prevent leaks and moisture damage in roofs and walls. We can supply custom gutters with greater water capacity than standard gutters. This is just one of the reasons to choose us as your gutter supplier.',
          ],
        },
        {
          heading: 'Gutters tailored to your home',
          paragraphs: [
            'We supply standard gutters in plastisol-coated galvanised steel, in sizes of 100 mm, 125 mm and 150 mm. Downpipes come in 75 mm, 87 mm or 100 mm and are adapted to each individual product. We offer a wide range of colours for our gutters and downpipes, and in addition to steel we work with copper and zinc.',
            'Galvanised steel provides great stability and a long lifespan. Copper is a living, maintenance-free material and is often regarded as the most exclusive gutter system. Zinc is a 100% natural material that develops a matte, protective layer over time. If you are unsure what is the best choice for your home, you are welcome to consult us.',
          ],
        },
        {
          heading: 'Gutters that give a nicer façade',
          paragraphs: [
            "Our gutters are known for being elegant. A gutter should work well with the rest of the house's structure, design and colours, and not stand out negatively. Our gutters are meant to give your house a visual lift and a nicer façade.",
          ],
        },
      ],
    },
  },
  {
    slug: 'omlegging-av-tak',
    title: { nb: 'Omlegging av tak', en: 'Re-roofing' },
    intro: {
      nb: 'Taket er husets «hatt». Vi hjelper deg hele veien – fra start til ferdig tak – og tilbyr gratis befaring i Oslo og Viken.',
      en: "The roof is the house's hat. We help you all the way – from start to finished roof – and offer a free inspection in Oslo and Viken.",
    },
    image: '/images/services/skratak-2.jpg',
    body: {
      nb: [
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
      en: [
        {
          heading: 'Re-roofing in Oslo and Viken',
          paragraphs: [
            "The roof is the house's hat and its top protective layer, and is therefore an important investment. As a sheet metal worker and roofing contractor, the roof is one of Dekmar's areas of expertise, and we help you all the way – from start to finished roof. We offer a free inspection for our customers in Oslo and Viken.",
          ],
        },
        {
          heading: 'Why it matters to take care of the roof',
          paragraphs: [
            'The roof is one of the most important maintenance areas of a building, and if it is not upgraded and looked after properly it can become a financial pitfall. If, on the other hand, you replace an old roof with a new one, you will see a significant increase in the value of your home if you sell. This is a one-time investment that gives a good return. It also often costs less than renovating a bathroom or kitchen.',
            'Re-roofing requires high competence and long experience to achieve the best result. In other words, it is not a task for the unskilled. Re-roofing can take anything from a week to a month, depending on season, wind, weather and, of course, the scope of the project. We always keep our customers updated on the process and the progress of the project, so that you are continuously kept well informed.',
          ],
        },
        {
          heading: 'Take action today',
          paragraphs: [
            'As mentioned, there are great values tied up in a roof, but it is not always easy to know whether your particular roof needs an upgrade, re-roofing or other measures. If you are unsure, feel free to make use of our free inspection. You are also welcome to contact us if you have questions or want more information about roofing.',
          ],
        },
      ],
    },
  },
  {
    slug: 'blikkenslager',
    title: { nb: 'Blikkenslager', en: 'Sheet metal work' },
    intro: {
      nb: 'Vi utfører alle blikkenslageroppdrag i egen regi med egne fast ansatte håndverkere – beslag og detaljer i kobber, sink, stål og aluminium.',
      en: 'We carry out all sheet metal work in-house with our own permanently employed craftsmen – flashings and details in copper, zinc, steel and aluminium.',
    },
    image: '/images/services/blikkenslager.jpg',
    body: {
      nb: [
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
      en: [
        {
          paragraphs: [
            'Dekmar AS is a sheet metal worker carrying out projects in Oslo and Viken, taking the best possible care of our customers. We are a sheet metal contractor who performs all work in-house. Furthermore, we use only our own permanently employed Norwegian craftsmen.',
          ],
        },
        {
          heading: 'What does a sheet metal worker do?',
          paragraphs: [
            'A sheet metal worker is a craftsman who makes flashings and details for roofs and ventilation systems. Roofing is often one of the main tasks. Insulation and fire protection are other tasks a sheet metal worker can usually perform. A sheet metal worker works with metals in the form of thin sheets. Examples of metals used are copper, zinc and steel. In addition, aluminium is often used.',
            'For roofing, roof tiles, slate and felt are often used. A sheet metal worker works both indoors and outdoors. Workplaces include workshops and various construction sites.',
          ],
        },
        {
          heading: 'Roof work and flashings',
          paragraphs: [
            'Roof work that a sheet metal worker often performs includes the fabrication and installation of flashings and gutters. In addition, roofing with tiles, slate and metal sheets are common tasks. Roofing is a large field. On larger roofs, a sheet metal worker has often installed the flashings and gutters. The market increasingly demands the use of traditional materials such as zinc, copper and slate for roofing. A sheet metal worker also frequently installs roof safety equipment.',
          ],
        },
      ],
    },
  },
  {
    slug: 'flate-tak',
    title: { nb: 'Flate tak', en: 'Flat roofs' },
    intro: {
      nb: 'Komplette løsninger for flate tak – fall- og isolasjonsløsninger, SINTEF-godkjent sveisemembran, sluk og smarte varmesystemer. Vi leverer også torv- og sedumtak.',
      en: 'Complete solutions for flat roofs – fall and insulation systems, SINTEF-approved welded membrane, drains and smart heating systems. We also supply turf and sedum roofs.',
    },
    image: '/images/services/flate-tak.jpg',
    body: {
      nb: [
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
      en: [
        {
          paragraphs: [
            'We supply most solutions for flat roofs. Among other things, we use fall and insulation systems from Rockwool, high-quality SINTEF-approved bituminous welded membrane from Copernit, as well as drains and intelligent heating control systems from Aiwell. We can also supply turf roofs and sedum roofs.',
          ],
        },
        {
          heading: 'Membranes and coverings',
          paragraphs: [
            'Flat roofs place strict demands on a watertight membrane and good drainage. We supply and install membranes and coverings for flat roofs, balconies and terraces, and ensure the correct details around drains, penetrations and upstands so that the roof becomes tight and durable.',
          ],
        },
      ],
    },
  },
  {
    slug: 'takstein',
    title: { nb: 'Takstein', en: 'Roof tiles' },
    intro: {
      nb: 'Vi leverer og legger de fleste materialtyper – betongtakstein, tegltakstein og takpanner – med alt nødvendig tilbehør tilpasset ditt tak.',
      en: 'We supply and lay most material types – concrete tiles, clay tiles and roof pantiles – with all the necessary accessories tailored to your roof.',
    },
    image: '/images/services/skratak.jpg',
    draft: true,
    body: {
      nb: [
        {
          paragraphs: [
            'Vi leverer de fleste materialtyper som betongtakstein, tegltakstein og takpanner. Takstein er et robust og velprøvd tekkemateriale med lang levetid, og finnes i mange former og farger som passer til ulike hus og stilarter.',
            'Vi leverer alt av nødvendig tilbehør tilpasset og dimensjonert for ditt tak – det være seg takrenner, beslag, snøfangere eller takstiger med mer. Dekmar utfører også inndekning av takvinduer og annet detaljarbeid.',
          ],
        },
      ],
      en: [
        {
          paragraphs: [
            'We supply most material types such as concrete tiles, clay tiles and roof pantiles. Roof tiles are a robust and well-proven roofing material with a long lifespan, and come in many shapes and colours to suit different houses and styles.',
            'We supply all the necessary accessories tailored and dimensioned for your roof – whether that is gutters, flashings, snow guards or roof ladders and more. Dekmar also carries out flashing around roof windows and other detailed work.',
          ],
        },
      ],
    },
  },
  {
    slug: 'gummimembran',
    title: { nb: 'Gummimembran', en: 'Rubber membrane' },
    intro: {
      nb: 'EPDM-gummimembran for flate og lavthellende tak, terrasser og balkonger – en robust og aldringsbestandig løsning i store baner med få skjøter.',
      en: 'EPDM rubber membrane for flat and low-pitch roofs, terraces and balconies – a robust, ageing-resistant solution in large sheets with few seams.',
    },
    draft: true,
    body: {
      nb: [
        {
          paragraphs: [
            'Gummimembran (EPDM) er en fleksibel og svært aldringsbestandig membran som egner seg godt til flate og lavthellende tak, terrasser og balkonger. Materialet legges i store baner, noe som gir få skjøter og et tett og driftssikkert tak.',
            'Vi vurderer riktig løsning ut fra takets utforming og bruk, og utfører alt av tilhørende detaljer rundt sluk, oppkanter og gjennomføringer. Ta kontakt for en uforpliktende befaring, så finner vi den beste membranløsningen for ditt bygg.',
          ],
        },
      ],
      en: [
        {
          paragraphs: [
            'Rubber membrane (EPDM) is a flexible and highly ageing-resistant membrane well suited to flat and low-pitch roofs, terraces and balconies. The material is laid in large sheets, which means few seams and a tight, reliable roof.',
            'We assess the right solution based on the shape and use of the roof, and carry out all the associated details around drains, upstands and penetrations. Get in touch for a no-obligation inspection and we will find the best membrane solution for your building.',
          ],
        },
      ],
    },
  },
  {
    slug: 'diffusjonsapne-taklosninger',
    title: { nb: 'Diffusjonsåpne takløsninger', en: 'Breathable roof solutions' },
    intro: {
      nb: 'Moderne, diffusjonsåpne undertak som lar konstruksjonen «puste» og reduserer faren for kondens og fuktskader.',
      en: 'Modern, breathable (diffusion-open) sub-roofs that let the structure breathe and reduce the risk of condensation and moisture damage.',
    },
    draft: true,
    body: {
      nb: [
        {
          paragraphs: [
            'Diffusjonsåpne takløsninger lar fukt slippe ut av konstruksjonen samtidig som taket holder vann og vind ute. Det gir et sunnere tak med mindre fare for kondens og fuktskader, og er i dag en anbefalt løsning på de fleste skråtak.',
            'Vi leverer både tradisjonelle og diffusjonsåpne løsninger, og gir deg råd om hva som passer best for din bygning. Ønsker du mer informasjon, er du velkommen til å ta kontakt for en gratis befaring.',
          ],
        },
      ],
      en: [
        {
          paragraphs: [
            'Breathable roof solutions let moisture escape from the structure while the roof keeps water and wind out. This gives a healthier roof with less risk of condensation and moisture damage, and is today a recommended solution on most pitched roofs.',
            'We supply both traditional and breathable solutions, and advise you on what suits your building best. If you would like more information, you are welcome to get in touch for a free inspection.',
          ],
        },
      ],
    },
  },
  {
    slug: 'takmembran',
    title: { nb: 'Takmembran', en: 'Roof membrane' },
    intro: {
      nb: 'Tette membranløsninger for flate tak, terrasser og balkonger – riktig utført for et varig og driftssikkert resultat.',
      en: 'Watertight membrane solutions for flat roofs, terraces and balconies – correctly executed for a durable and reliable result.',
    },
    draft: true,
    body: {
      nb: [
        {
          paragraphs: [
            'Takmembran er selve tettesjiktet på flate og lavthellende tak. Vi leverer og monterer membraner og belegg for tak, balkonger og terrasser, med SINTEF-godkjente materialer og korrekt utførte detaljer rundt sluk, oppkanter og gjennomføringer.',
            'God membran og riktig utførelse er avgjørende for et tett tak med lang levetid. Ta kontakt, så hjelper vi deg med å velge riktig løsning for ditt prosjekt.',
          ],
        },
      ],
      en: [
        {
          paragraphs: [
            'The roof membrane is the actual waterproofing layer on flat and low-pitch roofs. We supply and install membranes and coverings for roofs, balconies and terraces, using SINTEF-approved materials and correctly executed details around drains, upstands and penetrations.',
            'A good membrane and correct workmanship are decisive for a watertight roof with a long lifespan. Get in touch and we will help you choose the right solution for your project.',
          ],
        },
      ],
    },
  },
  {
    slug: 'shingel',
    title: { nb: 'Shingel', en: 'Shingles' },
    intro: {
      nb: 'Takshingel er en rimelig og fleksibel tekking som passer godt på boder, garasjer, hytter og tak med kompleks geometri.',
      en: 'Roofing shingles are an affordable, flexible covering well suited to sheds, garages, cabins and roofs with complex geometry.',
    },
    draft: true,
    body: {
      nb: [
        {
          paragraphs: [
            'Takshingel er et lett og fleksibelt tekkemateriale som er enkelt å tilpasse tak med vinkler og detaljer. Det er en rimelig løsning som egner seg godt på boder, garasjer, hytter og mindre bygg, og finnes i flere farger og profiler.',
            'Vi leverer og legger shingel med riktig underlag og detaljer for et tett og pent resultat. Kontakt oss for en uforpliktende prat om ditt prosjekt.',
          ],
        },
      ],
      en: [
        {
          paragraphs: [
            'Roofing shingles are a light and flexible covering that is easy to adapt to roofs with angles and details. It is an affordable solution well suited to sheds, garages, cabins and smaller buildings, and comes in several colours and profiles.',
            'We supply and lay shingles with the correct underlay and details for a tight, attractive result. Contact us for a no-obligation chat about your project.',
          ],
        },
      ],
    },
  },
  {
    slug: 'skratak',
    title: { nb: 'Skråtak', en: 'Pitched roofs' },
    intro: {
      nb: 'Komplette løsninger for skråtak – takstein, takpanner og alt av tilbehør tilpasset og dimensjonert for ditt tak.',
      en: 'Complete solutions for pitched roofs – tiles, pantiles and all accessories tailored and dimensioned for your roof.',
    },
    image: '/images/services/skratak.jpg',
    body: {
      nb: [
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
      en: [
        {
          paragraphs: [
            'We supply most material types such as concrete tiles, clay tiles and roof pantiles. We supply all the necessary accessories tailored and dimensioned for your pitched roof – whether that is gutters, flashings, snow guards or roof ladders and more. Dekmar also carries out flashing around roof windows and more.',
          ],
        },
        {
          heading: 'Traditional and breathable solutions',
          paragraphs: [
            'We supply both traditional and breathable solutions for pitched roofs, and advise you on what suits your building best. All work is carried out by our own permanently employed craftsmen, at a fixed price and on the agreed schedule.',
          ],
        },
      ],
    },
  },
  {
    slug: 'snofangere',
    title: { nb: 'Snøfangere', en: 'Snow guards' },
    intro: {
      nb: 'Snøfangere og annet taksikringsutstyr som hindrer snøras og gir trygg ferdsel rundt bygget – levert og montert etter gjeldende krav.',
      en: 'Snow guards and other roof safety equipment that prevent snow slides and keep the area around the building safe – supplied and installed to current requirements.',
    },
    draft: true,
    body: {
      nb: [
        {
          paragraphs: [
            'Snøfangere hindrer at snø og is raser ukontrollert ned fra taket, og er viktig for sikkerheten til mennesker og eiendom under takfoten. Vi leverer og monterer snøfangere tilpasset taktype og snølast, i tråd med gjeldende krav.',
            'Vi leverer også annet taksikringsutstyr som takstiger og takbroer, og fjerner snø og is fra tak og takrenner ved behov. Ta kontakt for en vurdering av taksikringen på ditt bygg.',
          ],
        },
      ],
      en: [
        {
          paragraphs: [
            'Snow guards prevent snow and ice from sliding uncontrolled off the roof, and are important for the safety of people and property below the eaves. We supply and install snow guards adapted to the roof type and snow load, in line with current requirements.',
            'We also supply other roof safety equipment such as roof ladders and roof walkways, and remove snow and ice from roofs and gutters when needed. Get in touch for an assessment of the roof safety on your building.',
          ],
        },
      ],
    },
  },
  {
    slug: 'pipebeslag-hetter',
    title: { nb: 'Pipebeslag / hetter', en: 'Chimney flashing / caps' },
    intro: {
      nb: 'Pipebeslag, luftehatter og andre beslag produsert i eget blikkenslagerverksted – med montering og oppfølging fra bestilling til ferdig resultat.',
      en: 'Chimney flashing, vent caps and other flashings made in our own sheet metal workshop – with installation and follow-up from order to finished result.',
    },
    image: '/images/services/blikkenslager.jpg',
    body: {
      nb: [
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
      en: [
        {
          heading: 'Chimney flashing',
          paragraphs: [
            'Chimney flashing, vent caps and other types of flashing are some of the products we make in our sheet metal workshop. In addition to producing these products, we also offer installation services and can give you as a customer follow-up throughout the whole process – from order to finished, installed chimney flashing.',
          ],
        },
        {
          heading: 'Chimney flashing and vent caps',
          paragraphs: [
            "The main function of the chimney flashing is to prevent leaks into the chimney. The flashing is laid halfway or all the way around the chimney, also known as partial and full flashing. The choice of materials for chimney flashing is large, and the design options are many. Here the customer's taste and preferences influence how the final product will look, as well as considerations such as the chimney sweep.",
            'A vent cap on top of the chimney is necessary to prevent snow and rain from being drawn into the chimney system. Without a vent cap, the chimney can become wetter and get poorer draught, as more heat is used to evaporate moisture rather than for heating.',
          ],
        },
        {
          heading: 'Additional chimney services',
          paragraphs: [
            'Dekmar AS also carries out other services related to chimney flashing, such as replacing gutters, downpipes, vent caps and coverings. We also remove snow and ice from gutters and roofs, and supply and install roof safety equipment such as snow guards, roof ladders and roof walkways.',
          ],
        },
      ],
    },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export type { Lang };

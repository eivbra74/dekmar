// Pristilbud – standardinnhold hentet fra Dekmars egne tilbudsbrev.
// Elementbibliotek (varelinjer), standard forbehold og brevmal. Norsk (tilbud går til norske kunder).

export interface QuoteElement { category: string; spec: string; unit: string; price: number; slug: string; sort: number }

export const standardQuoteElements: QuoteElement[] = [
  // Flatt tak – tekking/omlegg (PVC-folie / asfaltpapp / membran)
  { category: 'Flatt tak – tekking/omlegg', spec: 'Rive arbeid – 2 lag PE-folie + 2 ganger underlagsfilt', unit: 'm2', price: 0, slug: 'flat-riv-pe-filt', sort: 10 },
  { category: 'Flatt tak – tekking/omlegg', spec: 'Riving av eksisterende 3 x asfaltpapp (tak + vegger)', unit: 'm2', price: 220, slug: 'flat-riv-3-papp', sort: 11 },
  { category: 'Flatt tak – tekking/omlegg', spec: 'Taktekking med PVC SE-folie', unit: 'm2', price: 600, slug: 'flat-pvc-se', sort: 12 },
  { category: 'Flatt tak – tekking/omlegg', spec: 'Ett lags asfaltbasert tekking – 1 x asfaltpapp (underpapp)', unit: 'm2', price: 350, slug: 'flat-underpapp', sort: 13 },
  { category: 'Flatt tak – tekking/omlegg', spec: 'Ett lags asfaltbasert tekking – 1 x asfaltpapp (toppapp)', unit: 'm2', price: 380, slug: 'flat-toppapp', sort: 14 },
  { category: 'Flatt tak – tekking/omlegg', spec: 'Merarbeid oppkanter', unit: 'lm', price: 300, slug: 'flat-oppkanter', sort: 15 },
  { category: 'Flatt tak – tekking/omlegg', spec: 'Merarbeid kanter tak (2 x asfaltpapp)', unit: 'lm', price: 195, slug: 'flat-kanter-2papp', sort: 16 },
  { category: 'Flatt tak – tekking/omlegg', spec: 'Nytt sluk (av rørlegger)', unit: 'stk', price: 14000, slug: 'flat-sluk', sort: 17 },
  { category: 'Flatt tak – tekking/omlegg', spec: 'Merarbeid inntekking av gjennomføringer', unit: 'stk', price: 1500, slug: 'flat-inntekking', sort: 18 },
  { category: 'Flatt tak – tekking/omlegg', spec: 'Båndtekking av små tak/vegger i stål (riving, ny underlagspapp, detaljer)', unit: 'm2', price: 1850, slug: 'flat-bandtekking', sort: 19 },

  // Skråtak – TRP/stål
  { category: 'Skråtak – TRP/stål', spec: 'Riving av eksisterende takplater, sløyfer og lekter. Kontroll av undertak', unit: 'm2', price: 210, slug: 'sk-riv-plater', sort: 20 },
  { category: 'Skråtak – TRP/stål', spec: 'Montering av undertaksbelegg', unit: 'm2', price: 199, slug: 'sk-undertak', sort: 21 },
  { category: 'Skråtak – TRP/stål', spec: 'Montering av sløyfer og lekter (+ sløyfebånd)', unit: 'm2', price: 235, slug: 'sk-sloyfer-lekter', sort: 22 },
  { category: 'Skråtak – TRP/stål', spec: 'Montering av nye TRP-plater', unit: 'm2', price: 488, slug: 'sk-trp-plater', sort: 23 },
  { category: 'Skråtak – TRP/stål', spec: 'Montering av mønebeslag i stål, standard farge', unit: 'lm', price: 520, slug: 'sk-monebeslag', sort: 24 },
  { category: 'Skråtak – TRP/stål', spec: 'Ny snøfanger (2-rørs)', unit: 'lm', price: 740, slug: 'sk-snofanger', sort: 25 },
  { category: 'Skråtak – TRP/stål', spec: 'Montering av beslag i gradrenner, stål, standard farge', unit: 'lm', price: 1200, slug: 'sk-gradrenne', sort: 26 },

  // Blikkenslager/beslag
  { category: 'Blikkenslager/beslag', spec: 'Produksjon og montering av gesimsbeslag i stål', unit: 'lm', price: 655, slug: 'blikk-gesims', sort: 30 },
  { category: 'Blikkenslager/beslag', spec: 'Produksjon og montering av takbeslag i stål', unit: 'lm', price: 450, slug: 'blikk-takbeslag', sort: 31 },
  { category: 'Blikkenslager/beslag', spec: 'Gavl-/gesimsbeslag i stål, standard farge', unit: 'lm', price: 850, slug: 'blikk-gavl-gesims', sort: 32 },
  { category: 'Blikkenslager/beslag', spec: 'Montering av gavlbeslag på brannmur', unit: 'lm', price: 0, slug: 'blikk-gavl-brannmur', sort: 33 },
  { category: 'Blikkenslager/beslag', spec: 'Nye takrenner + beslag, fargebelagt stål, standard farge 150 mm', unit: 'lm', price: 690, slug: 'blikk-takrenner', sort: 34 },
  { category: 'Blikkenslager/beslag', spec: 'Nye nedløpsrør, fargebelagt stål, standard farge 100 mm', unit: 'lm', price: 610, slug: 'blikk-nedlop', sort: 35 },
  { category: 'Blikkenslager/beslag', spec: 'Nytt pipebeslag, fottekking inkl. pipetopp', unit: 'stk', price: 12800, slug: 'blikk-pipebeslag', sort: 36 },
  { category: 'Blikkenslager/beslag', spec: 'Nye takhatter/beslag', unit: 'stk', price: 5600, slug: 'blikk-takhatt', sort: 37 },
  { category: 'Blikkenslager/beslag', spec: 'Produksjon og montering av beslag på soil', unit: 'stk', price: 2900, slug: 'blikk-soil', sort: 38 },
  { category: 'Blikkenslager/beslag', spec: 'Produksjon og montering av beslag på branngavel', unit: 'lm', price: 1260, slug: 'blikk-branngavel', sort: 39 },
  { category: 'Blikkenslager/beslag', spec: 'Utskifting av takluke', unit: 'stk', price: 7100, slug: 'blikk-takluke', sort: 40 },

  // Fasade
  { category: 'Fasade', spec: 'Montering sløyfe + lekter 36x73 mm horisontal', unit: 'm2', price: 460, slug: 'fas-sloyfe-lekter', sort: 50 },
  { category: 'Fasade', spec: 'Montering av fasadekledning 4 mm aluminium komposittplater', unit: 'm2', price: 1680, slug: 'fas-kompositt', sort: 51 },
  { category: 'Fasade', spec: 'Omramming av nye vinduer + dør, stål beslag cap 150–250 mm', unit: 'lm', price: 470, slug: 'fas-omramming-vindu', sort: 52 },
  { category: 'Fasade', spec: 'Omramming av ny garasjedør, stål beslag', unit: 'lm', price: 350, slug: 'fas-omramming-garasje', sort: 53 },
  { category: 'Fasade', spec: 'Montering av nye gesims cap 450–550 mm', unit: 'lm', price: 850, slug: 'fas-gesims-cap', sort: 54 },
  { category: 'Fasade', spec: 'Etablering av lufting for fasade/vindu, perforert beslag', unit: 'lm', price: 370, slug: 'fas-lufting', sort: 55 },
  { category: 'Fasade', spec: 'Teknisk utskjæring for el.kabler, ventilasjonsrør etc.', unit: 'stk', price: 170, slug: 'fas-utskjaring', sort: 56 },

  // Rigg, drift og felles
  { category: 'Rigg, drift og felles', spec: 'Kraning / kranhjelp', unit: 'stk', price: 10000, slug: 'rigg-kran', sort: 60 },
  { category: 'Rigg, drift og felles', spec: 'Stillas – swing stillas', unit: 'stk', price: 35000, slug: 'rigg-swing', sort: 61 },
  { category: 'Rigg, drift og felles', spec: 'Stillas og takoverbygg', unit: 'stk', price: 0, slug: 'rigg-takoverbygg', sort: 62 },
  { category: 'Rigg, drift og felles', spec: 'Leie av stillas / materialheis, brakke og toalett', unit: 'RS', price: 0, slug: 'rigg-stillas-heis', sort: 63 },
  { category: 'Rigg, drift og felles', spec: 'Avfallshåndtering', unit: 'RS', price: 0, slug: 'rigg-avfall', sort: 64 },
  { category: 'Rigg, drift og felles', spec: 'Rigg og drift', unit: 'RS', price: 0, slug: 'rigg-drift', sort: 65 },
  { category: 'Rigg, drift og felles', spec: 'Prosjektoppfølging eget arbeid – HMS, KS og FDV', unit: 'RS', price: 0, slug: 'rigg-prosjektopp', sort: 66 },
  { category: 'Rigg, drift og felles', spec: 'Byggeledelse, oppfølging, HMS/SHA-arbeider', unit: 'RS', price: 0, slug: 'rigg-byggeledelse', sort: 67 },
  { category: 'Rigg, drift og felles', spec: 'Administrasjon, HMS etc.', unit: '%', price: 5, slug: 'rigg-adm-prosent', sort: 68 },
  { category: 'Rigg, drift og felles', spec: 'Prosjektering, heising, etc.', unit: '%', price: 8, slug: 'rigg-prosjektering-prosent', sort: 69 },
  { category: 'Rigg, drift og felles', spec: 'Stillas/Taksikring holdes av totalentreprenør (TE)', unit: 'RS', price: 0, slug: 'rigg-te-stillas', sort: 70 },
];

export interface QuoteTerm { id: string; text: string; on: boolean }
// {rate} erstattes med valgt timerate ved generering.
export const standardTerms: QuoteTerm[] = [
  { id: 'uforutsett', on: true, text: 'Utbedring av eventuelle uforutsette/underliggende ting (herunder råte o.l.) er ikke inkludert i tilbudet.' },
  { id: 'enhetspris-mva', on: true, text: 'Alle våre enhetspriser er eksklusive merverdiavgift og pr. i dag med eventuell justering etter SSBs indeks A.' },
  { id: 'fremdrift', on: true, text: 'Våre priser forutsetter kontinuerlig fremdrift.' },
  { id: 'ns8406', on: true, text: 'Tilbudet er basert på NS 8406, 3420 regulerbare mengder, måles i fellesskap med BH.' },
  { id: 'mengder', on: true, text: 'Alle mengder avregnes og faktureres etter faktisk medgått m2, lm og antall. Pristilbudet gjelder kun prisede poster.' },
  { id: 'tillatelser', on: true, text: 'At oppdragsgiver har ansvaret for alle offentlige tillatelser og eventuelle andre tillatelser.' },
  { id: 'timerate', on: true, text: 'Arbeider utført utover avtale utføres etter en timerate på kr {rate},- eks. mva.' },
  { id: 'tilkomst', on: true, text: 'At det foreligger ordinær tilkomst og at arbeidet kan utføres rasjonelt innenfor ordinær arbeidstid. Dersom det ikke gis anledning til sammenhengende drift eller manglende tilkomst av planlagte aktiviteter kan det kreves tillegg for urasjonell drift mv.' },
  { id: 'ventilasjon', on: false, text: 'Tilbudet inkluderer ikke merkostnader til demontering / remontering av ventilasjonsutstyr eller annet installert utstyr som er utplassert på taket.' },
  { id: 'materialindeks', on: false, text: 'Materialkostnadene i tilbudet indeksreguleres fra dato tilbudet er gitt til dato leveranse finner sted.' },
  { id: 'faktureringsplan', on: false, text: 'Betaling i henhold til vedlagte faktureringsplan.' },
  { id: 'te-stillas', on: false, text: 'Stillas/Taksikring holdes av totalentreprenør (TE).' },
];

export const quoteLetter = {
  intro: 'Vi viser til hyggelig forespørsel vedrørende rehabilitering med tilhørende arbeider på overnevnte adresse og har gleden av å fremsende følgende tilbud basert på befaring.',
  guarantee: 'Alle arbeider garanteres håndverksmessig godt utført og etter gjeldende standarder og forskrifter.',
  validityLine: 'Tilbudet er gyldig i {days} dager fra d.d. Vi håper vårt tilbud er av interesse og kan danne grunnlag for en avtale. Vi ser frem til å høre fra Dem.',
  vatDefault: 25,
  validDaysDefault: 30,
  hourlyDefault: 850,
  company: { name: 'Dekmar AS', address: 'Gimleveien 17b, 0265 Oslo', phone: '98 09 60 90', web: 'www.dekmar.no', orgno: '915162703 MVA', bank: '1503.58.84804', startbank: '143275' },
  signatories: [
    { name: 'Pawel Sasin', title: 'Daglig Leder', phone: '96804144', email: 'pawel@dekmar.no' },
    { name: 'Eivind Bråthen', title: 'Daglig Leder', phone: '98660000', email: 'eivind@dekmar.no' },
  ],
};

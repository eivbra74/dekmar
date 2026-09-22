// Befaringsmaler for Dekmar – ferdige takbefaringspunkter som fyller inn
// observasjonstabellen. Punktene er startpunkter; befareren fyller inn faktisk
// observasjon + anbefaling, tilstandsgrad og prioritet på stedet.
// area = fagområde, obs = hva som skal kontrolleres (redigeres til funn på befaring).

export interface InspectPoint { area: string; obs: string; }
export interface InspectTemplate { slug: string; name: string; points: InspectPoint[]; }

export const inspectionTemplates: InspectTemplate[] = [
  {
    slug: 'flatt-tak',
    name: 'Flatt tak (membran / tekking)',
    points: [
      { area: 'Takflate / membran', obs: 'Kontroller membran for sprekker, blærer, rynker og skjøter' },
      { area: 'Sluk og nedløp', obs: 'Kontroller sluk for tett løv/skit, klemring og fall til sluk' },
      { area: 'Gesims og beslag', obs: 'Kontroller gesimsbeslag, innfesting og tetting mot membran' },
      { area: 'Gjennomføringer', obs: 'Kontroller mansjetter/tetting rundt lufterør og gjennomføringer' },
      { area: 'Ventilasjon / lufting', obs: 'Kontroller taklufting og ev. kondens/fukt under membran' },
      { area: 'Fallsikring / HMS', obs: 'Kontroller feste for fallsikring, rekkverk og adkomst' },
      { area: 'Innvendig', obs: 'Se etter lekkasjespor, misfarging og fukt i himling/underlag' },
    ],
  },
  {
    slug: 'skraatak',
    name: 'Skråtak (takstein / shingel / plater)',
    points: [
      { area: 'Taktekking', obs: 'Kontroller stein/plater/shingel for knuste, forskjøvne el. manglende enheter' },
      { area: 'Renner og nedløp', obs: 'Kontroller takrenner for skade, fall og tette nedløp' },
      { area: 'Beslag / gesims', obs: 'Kontroller vindskibeslag, gesims og fotbeslag' },
      { area: 'Pipe / gjennomføringer', obs: 'Kontroller beslag og tetting rundt pipe og gjennomføringer' },
      { area: 'Snøfangere / sikring', obs: 'Kontroller snøfangere, takstiger og feste' },
      { area: 'Undertak / lekting', obs: 'Kontroller synlig undertak/lekting for fukt og råte' },
      { area: 'Fallsikring / HMS', obs: 'Kontroller sikringsutstyr, stige og adkomst' },
    ],
  },
  {
    slug: 'fasade-blikk',
    name: 'Fasade / blikkenslagerarbeid',
    points: [
      { area: 'Beslag / vindski', obs: 'Kontroller beslag, vindski og innfesting' },
      { area: 'Vannbrett', obs: 'Kontroller vannbrett over vinduer/dører for tetting og fall' },
      { area: 'Fuger / tettinger', obs: 'Kontroller fuger og overganger mot fasade for sprekker' },
      { area: 'Nedløp', obs: 'Kontroller nedløp, bend og utkast' },
      { area: 'Overganger', obs: 'Kontroller overganger tak/fasade og innfestinger' },
    ],
  },
];

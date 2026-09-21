// FDV-arkiv: standardbibliotek over produkter Dekmar bruker mest.
// Seedet fra faktiske innkjøp (Ventistål AS). Kjemikalier (is_chemical) kan
// hentes automatisk inn i et prosjekts stoffkartotek. FDV/SDS-lenker legges
// til av bruker. Seedes idempotent til `fdv_products` (nøkkel = slug).
export interface FdvProduct {
  slug: string;
  name: string;
  supplier: string;
  category: string;
  use_area: string;
  is_chemical: boolean;
  hazards?: string;       // GHS-koder (kommaseparert) – for kjemikalier
  signal_word?: string;   // Fare / Advarsel
  unit?: string;
  notes?: string;
  sort: number;
}

export const standardFdv: FdvProduct[] = [
  // ── Kjemikalier (hentes til stoffkartotek) ─────────────────────
  {
    slug: 'abra-seal-fix-mshybrid',
    name: 'Abra Seal & Fix (MS-hybrid fugemasse/lim)',
    supplier: 'Ventistål AS',
    category: 'Fugemasse og lim',
    use_area: 'Tetting og liming av beslag, renner og gjennomføringer (sort/brun)',
    is_chemical: true,
    hazards: 'helsefare',
    signal_word: 'Advarsel',
    unit: 'patron',
    notes: 'MS-polymer. Last opp gjeldende sikkerhetsdatablad (SDS) fra leverandør.',
    sort: 10,
  },
  // ── Tekking / membran (FDV; brannfare ved varmt arbeid) ────────
  {
    slug: 'katepal-litebase',
    name: 'Papp Katepal Litebase 1x25 m',
    supplier: 'Ventistål AS',
    category: 'Tekking og membran',
    use_area: 'Underlagsbelegg / undertak ved taktekking',
    is_chemical: false,
    unit: 'rull',
    notes: 'Bitumenbasert. Brannfare ved varmt arbeid – se rutine for varmt arbeid. FDV-blad fra Katepal.',
    sort: 20,
  },
  {
    slug: 'delta-multiband-flex',
    name: 'Delta Multibånd Flex',
    supplier: 'Ventistål AS',
    category: 'Tetteteip og tettemidler',
    use_area: 'Tetting av overganger, undertak og gjennomføringer',
    is_chemical: false,
    unit: 'rull',
    notes: 'Selvklebende tetteteip. FDV-blad fra Dörken/Delta.',
    sort: 30,
  },
  // ── Takrenner og nedløp (GreenCoat stål) ───────────────────────
  {
    slug: 'greencoat-takrenne',
    name: 'Takrenne GreenCoat stål (A.Renne 125/150)',
    supplier: 'Ventistål AS',
    category: 'Takrenner og nedløp',
    use_area: 'Takrenner, farget GreenCoat-stål',
    is_chemical: false,
    unit: 'stk',
    notes: 'Fargebelagt stål. FDV-blad fra Ventistål/GreenCoat.',
    sort: 40,
  },
  {
    slug: 'greencoat-nedlop',
    name: 'Nedløp GreenCoat stål (A.Nedløp 75/90)',
    supplier: 'Ventistål AS',
    category: 'Takrenner og nedløp',
    use_area: 'Nedløpsrør med bend, kum og utkast',
    is_chemical: false,
    unit: 'stk',
    notes: 'Fargebelagt stål. FDV-blad fra Ventistål/GreenCoat.',
    sort: 50,
  },
  {
    slug: 'rennekrok-kombi',
    name: 'Rennekrok / kombikrok (L.Kombi)',
    supplier: 'Ventistål AS',
    category: 'Takrenner og nedløp',
    use_area: 'Innfesting av takrenner',
    is_chemical: false,
    unit: 'stk',
    sort: 60,
  },
  // ── Plater og beslag ───────────────────────────────────────────
  {
    slug: 'greencoat-plate',
    name: 'Takplate / beslagplate GreenCoat (Plate GC)',
    supplier: 'Ventistål AS',
    category: 'Plater og beslag',
    use_area: 'Beslag, inndekking og tekking i fargebelagt stål',
    is_chemical: false,
    unit: 'plate',
    notes: 'GreenCoat fargebelagt stål (0,6 mm). FDV-blad fra SSAB/GreenCoat.',
    sort: 70,
  },
  {
    slug: 'perforert-plate-galv',
    name: 'Perforert plate galvanisert',
    supplier: 'Ventistål AS',
    category: 'Plater og beslag',
    use_area: 'Lufting/ventilering av konstruksjoner',
    is_chemical: false,
    unit: 'plate',
    sort: 80,
  },
];

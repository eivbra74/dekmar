export type Reference = {
  slug: string;
  title: string;
  /** Kort beskrivelse / byggtype */
  summary: string;
  /** Bildefiler i /public/images/references/<slug>/ */
  images: string[];
};

/** Bygger en liste med bildestier: 01..count med gitt filendelse */
function gallery(slug: string, count: number, ext: string): string[] {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    return `/images/references/${slug}/${n}.${ext}`;
  });
}

export const references: Reference[] = [
  {
    slug: 'darresgate-2',
    title: 'Darresgate 2',
    summary: 'Rehabilitering og omlegging av tak på bygård i Oslo.',
    images: gallery('darresgate-2', 24, 'jpg'),
  },
  {
    slug: 'frogner-kirke',
    title: 'Frogner kirke',
    summary: 'Takarbeid og blikkenslagerarbeid på kirkebygg.',
    images: gallery('frogner-kirke', 30, 'jpg'),
  },
  {
    slug: 'ole-deviks-vei',
    title: 'Ole Deviks vei 2-4-6',
    summary: 'Takarbeid på nærings- og kontorbygg.',
    images: gallery('ole-deviks-vei', 12, 'jpeg'),
  },
  {
    slug: 'ashallen',
    title: 'Åshallen',
    summary: 'Takarbeid på idrettshall.',
    images: gallery('ashallen', 20, 'jpeg'),
  },
  {
    slug: 'jacob-aalsgt-14',
    title: 'Jacob Aalls gate 14',
    summary: 'Rehabilitering av tak på bygård i Oslo.',
    images: gallery('jacob-aalsgt-14', 24, 'jpeg'),
  },
  {
    slug: 'bjorasen-skole',
    title: 'Bjøråsen skole',
    summary: 'Takarbeid på skolebygg.',
    images: gallery('bjorasen-skole', 16, 'jpeg'),
  },
  {
    slug: 'kolbotn-kirke',
    title: 'Kolbotn kirke',
    summary: 'Takarbeid og blikkenslagerarbeid på kirkebygg.',
    images: gallery('kolbotn-kirke', 16, 'jpeg'),
  },
];

export const getReference = (slug: string) => references.find((r) => r.slug === slug);

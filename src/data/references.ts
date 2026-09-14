import type { Lang } from '../i18n/ui';

type L<T> = { nb: T; en: T };

export type Reference = {
  slug: string;
  title: string;
  /** Kort beskrivelse / byggtype */
  summary: L<string>;
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
    summary: {
      nb: 'Rehabilitering og omlegging av tak på bygård i Oslo.',
      en: 'Rehabilitation and re-roofing of an apartment building in Oslo.',
    },
    images: gallery('darresgate-2', 24, 'jpg'),
  },
  {
    slug: 'frogner-kirke',
    title: 'Frogner kirke',
    summary: {
      nb: 'Takarbeid og blikkenslagerarbeid på kirkebygg.',
      en: 'Roofing and sheet metal work on a church building.',
    },
    images: gallery('frogner-kirke', 30, 'jpg'),
  },
  {
    slug: 'ole-deviks-vei',
    title: 'Ole Deviks vei 2-4-6',
    summary: {
      nb: 'Takarbeid på nærings- og kontorbygg.',
      en: 'Roofing on commercial and office buildings.',
    },
    images: gallery('ole-deviks-vei', 12, 'jpeg'),
  },
  {
    slug: 'ashallen',
    title: 'Åshallen',
    summary: {
      nb: 'Takarbeid på idrettshall.',
      en: 'Roofing on a sports hall.',
    },
    images: gallery('ashallen', 20, 'jpeg'),
  },
  {
    slug: 'jacob-aalsgt-14',
    title: 'Jacob Aalls gate 14',
    summary: {
      nb: 'Rehabilitering av tak på bygård i Oslo.',
      en: 'Roof rehabilitation of an apartment building in Oslo.',
    },
    images: gallery('jacob-aalsgt-14', 24, 'jpeg'),
  },
  {
    slug: 'bjorasen-skole',
    title: 'Bjøråsen skole',
    summary: {
      nb: 'Takarbeid på skolebygg.',
      en: 'Roofing on a school building.',
    },
    images: gallery('bjorasen-skole', 16, 'jpeg'),
  },
  {
    slug: 'kolbotn-kirke',
    title: 'Kolbotn kirke',
    summary: {
      nb: 'Takarbeid og blikkenslagerarbeid på kirkebygg.',
      en: 'Roofing and sheet metal work on a church building.',
    },
    images: gallery('kolbotn-kirke', 16, 'jpeg'),
  },
];

export const getReference = (slug: string) => references.find((r) => r.slug === slug);
export type { Lang };

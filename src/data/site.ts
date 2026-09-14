import type { Lang } from '../i18n/ui';

export const site = {
  name: 'Dekmar AS',
  url: 'https://www.dekmar.no',
  email: 'post@dekmar.no',
  area: 'Oslo og Viken',
  tagline: {
    nb: 'Din taktekker og blikkenslager',
    en: 'Your roofer and sheet metal worker',
  },
  description: {
    nb: 'Dekmar AS er en takentreprenør og blikkenslager i Oslo og Viken. Vi leverer komplette takløsninger med fast pris til avtalt tid – taktekking, omlegging, flate tak, blikkenslagerarbeid og mer.',
    en: 'Dekmar AS is a roofing contractor and sheet metal worker in Oslo and the Viken region of Norway. We deliver complete roofing solutions at a fixed price and on schedule – roofing, re-roofing, flat roofs, sheet metal work and more.',
  },
  contact: {
    name: 'Pawel Sasin',
    role: { nb: 'Daglig leder', en: 'Managing director' },
    email: 'pawel@dekmar.no',
    phone: '968 04 144',
    phoneHref: '+4796804144',
  },
  usps: {
    nb: [
      'Vi leverer komplette løsninger med alt inkludert',
      'Vi benytter kun anerkjente kvalitetsprodukter',
      'Gratis befaring med påfølgende uforpliktende tilbud',
      'Kun fast ansatte håndverkere i egen bedrift',
    ],
    en: [
      'We deliver complete solutions with everything included',
      'We use only recognised quality products',
      'Free inspection followed by a no-obligation quote',
      'Only permanently employed craftsmen in our own company',
    ],
  },
};

/** Navigasjonspunkter: href er alltid den norske (rot-)stien; lokaliseres i Header. */
export const navItems: { href: string; key: string }[] = [
  { href: '/', key: 'nav.home' },
  { href: '/tjenester/', key: 'nav.services' },
  { href: '/referanser/', key: 'nav.references' },
  { href: '/samarbeidspartnere/', key: 'nav.partners' },
  { href: '/om-oss/', key: 'nav.about' },
  { href: '/kontakt/', key: 'nav.contact' },
];

export type Site = typeof site;
export type { Lang };

export type Lang = 'nb' | 'en';

export const defaultLang: Lang = 'nb';

export const languages: Record<Lang, string> = {
  nb: 'Norsk',
  en: 'English',
};

/** Finn språk ut fra URL-stien (/en/... = engelsk, ellers norsk). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  return seg === 'en' ? 'en' : 'nb';
}

/**
 * Bytt språk for en gitt sti. Norsk ligger på roten, engelsk under /en/.
 * localizePath('/tjenester/', 'en') => '/en/tjenester/'
 * localizePath('/en/tjenester/', 'nb') => '/tjenester/'
 */
export function localizePath(pathname: string, lang: Lang): string {
  // Fjern evt. eksisterende /en-prefiks
  let base = pathname.replace(/^\/en(\/|$)/, '/');
  if (!base.startsWith('/')) base = '/' + base;
  if (lang === 'en') {
    return base === '/' ? '/en/' : `/en${base}`;
  }
  return base;
}

/** Gir stien til samme side på det andre språket (for språkvelgeren). */
export function alternatePath(pathname: string, to: Lang): string {
  return localizePath(pathname, to);
}

/** Kort helper for et lokalt felt: pick(lang, { nb, en }) */
export function pick<T>(lang: Lang, value: { nb: T; en: T }): T {
  return value[lang];
}

type Dict = Record<string, string>;

export const ui: Record<Lang, Dict> = {
  nb: {
    'nav.home': 'Forside',
    'nav.services': 'Tjenester',
    'nav.references': 'Referanser',
    'nav.partners': 'Samarbeidspartnere',
    'nav.about': 'Om oss',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Meny',
    'cta.quote': 'Be om tilbud',
    'cta.services': 'Se våre tjenester',
    'cta.readMore': 'Les mer',
    'cta.allServices': 'Alle tjenester',
    'cta.allReferences': 'Se alle referanser',
    'cta.moreAbout': 'Mer om oss',
    'cta.call': 'Ring',
    'cta.home': 'Til forsiden',
    'cta.send': 'Send melding',
    'skip': 'Hopp til innhold',
    'lang.switch': 'In English',
    'cta.band.title': 'Trenger du hjelp med taket?',
    'cta.band.text':
      'Vi tilbyr gratis befaring med et påfølgende uforpliktende tilbud. Ta kontakt, så finner vi den beste løsningen for ditt prosjekt.',
    'cta.band.eyebrow': 'Gratis befaring',
    'crumb.services': 'Tjenester',
    'crumb.references': 'Referanser',
    'ref.images': 'bilder',
    'ref.hint': 'Klikk på et bilde for å se det i full størrelse.',
    'footer.services': 'Tjenester',
    'footer.shortcuts': 'Snarveier',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Alle rettigheter reservert.',
    'footer.tagline': 'Takentreprenør og blikkenslager i',
    'form.name': 'Ditt navn',
    'form.email': 'Din e-post',
    'form.subject': 'Emne',
    'form.message': 'Din melding',
    'form.or': 'Eller send en e-post direkte til',
    'form.required': '*',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.references': 'References',
    'nav.partners': 'Partners',
    'nav.about': 'About us',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'cta.quote': 'Request a quote',
    'cta.services': 'See our services',
    'cta.readMore': 'Read more',
    'cta.allServices': 'All services',
    'cta.allReferences': 'See all references',
    'cta.moreAbout': 'More about us',
    'cta.call': 'Call',
    'cta.home': 'Back to home',
    'cta.send': 'Send message',
    'skip': 'Skip to content',
    'lang.switch': 'På norsk',
    'cta.band.title': 'Need help with your roof?',
    'cta.band.text':
      'We offer a free, no-obligation inspection and quote. Get in touch and we will find the best solution for your project.',
    'cta.band.eyebrow': 'Free inspection',
    'crumb.services': 'Services',
    'crumb.references': 'References',
    'ref.images': 'photos',
    'ref.hint': 'Click an image to view it full size.',
    'footer.services': 'Services',
    'footer.shortcuts': 'Shortcuts',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'Roofing contractor and sheet metal worker in',
    'form.name': 'Your name',
    'form.email': 'Your email',
    'form.subject': 'Subject',
    'form.message': 'Your message',
    'form.or': 'Or send an email directly to',
    'form.required': '*',
  },
};

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['nb']): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

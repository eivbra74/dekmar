export const site = {
  name: 'Dekmar AS',
  tagline: 'Din taktekker og blikkenslager',
  description:
    'Dekmar AS er en takentreprenør og blikkenslager i Oslo og Viken. Vi leverer komplette takløsninger med fast pris til avtalt tid – taktekking, omlegging, flate tak, blikkenslagerarbeid og mer.',
  url: 'https://www.dekmar.no',
  email: 'post@dekmar.no',
  area: 'Oslo og Viken',
  contact: {
    name: 'Pawel Sasin',
    role: 'Daglig leder',
    email: 'pawel@dekmar.no',
    phone: '968 04 144',
    phoneHref: '+4796804144',
  },
  // Hovedmeny
  nav: [
    { label: 'Forside', href: '/' },
    { label: 'Tjenester', href: '/tjenester/' },
    { label: 'Referanser', href: '/referanser/' },
    { label: 'Samarbeidspartnere', href: '/samarbeidspartnere/' },
    { label: 'Om oss', href: '/om-oss/' },
    { label: 'Kontakt', href: '/kontakt/' },
  ],
  // Korte salgspunkter (fra dagens forside)
  usps: [
    'Vi leverer komplette løsninger med alt inkludert',
    'Vi benytter kun anerkjente kvalitetsprodukter',
    'Gratis befaring med påfølgende uforpliktende tilbud',
    'Kun fast ansatte håndverkere i egen bedrift',
  ],
};

export type Site = typeof site;

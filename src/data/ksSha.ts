// Standard SHA-plan-innhold (plan for sikkerhet, helse og arbeidsmiljø) etter
// byggherreforskriften, tilpasset tak- og blikkenslagerarbeid. Brukes som
// forhåndsutfylt utgangspunkt når man oppretter en prosjektspesifikk SHA-plan.
// På norsk (formelt byggeplassdokument).

export const shaRoles = [
  { role: 'Byggherre (BH)', company: '', contact: '' },
  { role: 'SHA-koordinator prosjektering (KP)', company: '', contact: '' },
  { role: 'SHA-koordinator utførelse (KU)', company: '', contact: '' },
  { role: 'Hovedbedrift (HB)', company: '', contact: '' },
  { role: 'Utførende – takarbeid', company: 'Dekmar AS', contact: '' },
];

export const shaMilestones = [
  { name: 'Oppstart prosjektering', date: '' },
  { name: 'Byggestart', date: '' },
  { name: 'Ferdigstillelse', date: '' },
  { name: 'Overtakelse / overlevering', date: '' },
];

// Spesifikke risikoreduserende tiltak (nr, aktivitet, fare/risiko, tiltak, ansvarlig)
export const shaSpecific = [
  {
    activity: 'Åpning av eksisterende takkonstruksjon',
    risk: 'Gjennomtramp, fall gjennom åpninger og svikt i eldre takkonstruksjon.',
    measure: 'Bæreevne kontrolleres sonevis før inngrep. Ved tvil, råte eller skade stanses arbeidet og konstruktør avklarer. Åpninger sikres fortløpende med kollektiv sikring. Personlig fallsikring kun der kollektiv sikring ikke er mulig.',
    responsible: 'TE / utførende',
  },
  {
    activity: 'Arbeid ved takkant, takvinduer, karnapper og piper',
    risk: 'Fall fra høyde ved lokale fallutsatte områder og skiftende arbeidsnivå.',
    measure: 'Kollektiv fallsikring prioriteres og tilpasses faktisk arbeidsnivå. Overganger og åpninger skal være sammenhengende sikret. Unntak håndteres etter dokumentert SJA.',
    responsible: 'TE / utførende',
  },
  {
    activity: 'Stillas som kollektiv sikring og adkomst',
    risk: 'Mangelfull høyde, avstivning, forankring eller grensesnitt mot tak kan gi fallfare.',
    measure: 'Stillas kontrolleres av kompetent person og er i samsvar med monteringsveiledning. Stillasskilt (grønt) kontrolleres. Utførende endrer ikke stillaset selv.',
    responsible: 'TE / stillasleverandør',
  },
  {
    activity: 'Beboere og tredjeperson',
    risk: 'Eksponering for fallende gjenstander, løft, riggtrafikk og arbeid over innganger/ferdselsarealer.',
    measure: 'Rigg- og faresoner avsperres og skiltes. Sikker adkomst til oppganger opprettholdes. Områder under arbeid sikres mot fallende gjenstander. Berørte beboere varsles før arbeid som påvirker adkomst.',
    responsible: 'BH / TE',
  },
  {
    activity: 'Varmt arbeid (tekking med åpen flamme)',
    risk: 'Brann og ulming ved bruk av gassbrenner/åpen flamme.',
    measure: 'Sertifikat for varmt arbeid. Arbeidstillatelse fylles ut. Godkjent slokkeutstyr tilgjengelig. Brannvakt under arbeidet og etterkontroll etter endt arbeid.',
    responsible: 'TE / utførende',
  },
  {
    activity: 'Ukjente materialer / mulig asbest',
    risk: 'Eldre takkonstruksjon er ikke miljøkartlagt; asbest eller miljøfarlige materialer kan forekomme.',
    measure: 'Uavklarte områder håndteres som mulig asbestholdige. Inngrep starter ikke før nødvendig kartlegging foreligger. Ved mistanke stanses arbeidet, området sperres og BH/TE varsles.',
    responsible: 'BH / TE',
  },
  {
    activity: 'Værforhold ved takarbeid',
    risk: 'Vind, nedbør, glatt flate, snø/is og lave temperaturer øker fall- og skaderisiko.',
    measure: 'Arbeidet tilpasses værforholdene. Arbeid stanses ved uforsvarlige forhold. Åpning av tak begrenses til det som kan tettes samme dag. Vintertiltak avklares i forkant.',
    responsible: 'TE / utførende',
  },
  {
    activity: 'Flere aktører og samtidige arbeider',
    risk: 'Takarbeid, stillas, blikkenslager- og murarbeid kan gi farlige grensesnitt.',
    measure: 'TE koordinerer rekkefølge og arbeidsområder. Arbeid rett over/under hverandre unngås. Soner sperres ved heising og materialhåndtering. Nye aktører meldes inn før oppstart.',
    responsible: 'TE',
  },
];

// Forebyggende tiltak (nr, tiltak, ansvarlig)
export const shaPreventive = [
  { measure: 'Byggeplassen holdes ryddig; adkomst til arbeidsområder og ferdselsveier holdes frie og sikre.', responsible: 'HB' },
  { measure: 'Byggeplass og arbeidsområder sikres mot uvedkommende, samtidig som sikker adkomst for beboere ivaretas.', responsible: 'HB' },
  { measure: 'Lagring av materialer organiseres for sikker ferdsel. Avfall og overskuddsmateriell håndteres og fjernes fortløpende.', responsible: 'HB / arbeidsgivere' },
  { measure: 'Anlegg og utstyr kontrolleres og vedlikeholdes slik at feil som kan påvirke SHA avdekkes og utbedres.', responsible: 'HB' },
  { measure: 'Personlig verneutstyr (hjelm med hakestropp, vernesko, hansker, fallsele der påkrevd) brukes av alle på tak.', responsible: 'Arbeidsgivere' },
];

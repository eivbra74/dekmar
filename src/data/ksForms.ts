// Utfyllbare HMS-skjemaer: SJA, Risikovurdering og Stillaskontroll.
// Skjemaene lagres per prosjekt i `hse_forms` (data jsonb). Norsk.
export interface FormFieldDef { key: string; label: string; type: 'text' | 'date' | 'textarea' | 'select'; options?: string[]; full?: boolean }
export interface FormColDef { key: string; label: string; type: 'text' | 'select' | 'sk'; options?: string[]; w?: number }
export interface FormCheckDef { key: string; label: string }
export interface HseFormType {
  type: string; title: string; intro?: string;
  header: FormFieldDef[];
  rowsLabel?: string; rowCols?: FormColDef[]; rowMode?: 'plain' | 'risk';
  checksLabel?: string; checks?: FormCheckDef[]; checkScale?: string[];
  footer: FormFieldDef[];
}

const YESNO = ['Ja', 'Nei', 'Ikke aktuelt'];
const SCALE15 = ['1', '2', '3', '4', '5'];

export const hseFormTypes: HseFormType[] = [
  {
    type: 'sja',
    title: 'Sikker jobb-analyse (SJA)',
    intro: 'SJA gjennomføres før oppstart av arbeid med særlig risiko. Alle deltakere skal gjennomgå analysen før arbeidet starter.',
    header: [
      { key: 'dato', label: 'Dato', type: 'date' },
      { key: 'sted', label: 'Sted / bygningsdel', type: 'text' },
      { key: 'oppgave', label: 'Arbeidsoppgave', type: 'text', full: true },
      { key: 'deltakere', label: 'Deltakere', type: 'textarea', full: true },
      { key: 'ansvarlig', label: 'Ansvarlig for arbeidet', type: 'text' },
    ],
    rowsLabel: 'Deloppgaver, farer og tiltak',
    rowCols: [
      { key: 'deloppgave', label: 'Deloppgave / arbeidstrinn', type: 'text', w: 30 },
      { key: 'fare', label: 'Fare / uønsket hendelse', type: 'text', w: 28 },
      { key: 'tiltak', label: 'Tiltak', type: 'text', w: 30 },
      { key: 'ansvarlig', label: 'Ansvarlig', type: 'text', w: 12 },
    ],
    checksLabel: 'Sjekkpunkter før oppstart',
    checkScale: YESNO,
    checks: [
      { key: 'pvu', label: 'Nødvendig personlig verneutstyr tilgjengelig og i bruk' },
      { key: 'omrade', label: 'Arbeidsområdet er sikret/avsperret' },
      { key: 'kompetanse', label: 'Nødvendig opplæring/kompetanse for oppgaven' },
      { key: 'hoyde', label: 'Fallsikring/redningsplan ved arbeid i høyden' },
      { key: 'gjennomgatt', label: 'SJA gjennomgått med alle deltakere' },
    ],
    footer: [
      { key: 'godkjentAv', label: 'Godkjent av', type: 'text' },
      { key: 'godkjentDato', label: 'Dato', type: 'date' },
    ],
  },
  {
    type: 'risiko',
    title: 'Risikovurdering',
    intro: 'Risiko = sannsynlighet × konsekvens (skala 1–5). Vurder tiltak til restrisikoen er akseptabel.',
    header: [
      { key: 'dato', label: 'Dato', type: 'date' },
      { key: 'omrade', label: 'Aktivitet / område som vurderes', type: 'text', full: true },
      { key: 'vurdertAv', label: 'Vurdert av', type: 'text' },
    ],
    rowsLabel: 'Farer og risiko',
    rowMode: 'risk',
    rowCols: [
      { key: 'fare', label: 'Fare / uønsket hendelse', type: 'text', w: 26 },
      { key: 's', label: 'S', type: 'sk', options: SCALE15, w: 8 },
      { key: 'k', label: 'K', type: 'sk', options: SCALE15, w: 8 },
      { key: 'tiltak', label: 'Tiltak', type: 'text', w: 30 },
      { key: 'restrisiko', label: 'Restrisiko', type: 'text', w: 16 },
      { key: 'ansvarlig', label: 'Ansvarlig', type: 'text', w: 12 },
    ],
    footer: [
      { key: 'godkjentAv', label: 'Godkjent av', type: 'text' },
      { key: 'godkjentDato', label: 'Dato', type: 'date' },
    ],
  },
  {
    type: 'stillas',
    title: 'Stillaskontroll',
    intro: 'Kontroll av stillas før bruk og deretter minst hver 7. dag, samt etter uvær eller endringer. Stillaskort skal være montert.',
    header: [
      { key: 'dato', label: 'Dato', type: 'date' },
      { key: 'stillastype', label: 'Stillastype', type: 'text' },
      { key: 'plassering', label: 'Plassering', type: 'text' },
      { key: 'lastklasse', label: 'Lastklasse', type: 'select', options: ['1', '2', '3', '4', '5', '6'] },
      { key: 'kontrollor', label: 'Kontrollør', type: 'text' },
    ],
    checksLabel: 'Kontrollpunkter',
    checkScale: ['OK', 'Avvik', 'Ikke aktuelt'],
    checks: [
      { key: 'fundament', label: 'Fundament/underlag er bæredyktig og avrettet' },
      { key: 'lodd', label: 'Stillaset står i lodd og vater' },
      { key: 'avstivning', label: 'Avstivning/diagonaler er montert' },
      { key: 'forankring', label: 'Forankring til bygg er tilstrekkelig' },
      { key: 'rekkverk', label: 'Rekkverk komplett – håndlist, knelist og fotlist' },
      { key: 'dekker', label: 'Komplette arbeidsdekker uten farlige åpninger' },
      { key: 'adkomst', label: 'Sikker adkomst / leider' },
      { key: 'skilt', label: 'Stillaskort/skilting montert og fylt ut' },
      { key: 'merking', label: 'Ufullstendig stillas er sperret og merket' },
      { key: 'strom', label: 'Forsvarlig avstand til strømførende linjer' },
      { key: 'ryddig', label: 'Stillaset er ryddig og fritt for løse gjenstander' },
    ],
    footer: [
      { key: 'konklusjon', label: 'Konklusjon', type: 'select', options: ['Godkjent til bruk', 'Godkjent med merknad', 'Ikke godkjent'] },
      { key: 'nesteKontroll', label: 'Neste kontroll', type: 'date' },
      { key: 'sign', label: 'Kontrollørens signatur', type: 'text' },
    ],
  },
];

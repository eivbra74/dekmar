// NS-kontrakter: avtaledokument-verktøy for Dekmar.
// MERK: Selve NS-standardtekstene er opphavsrettsbeskyttet (Standard Norge) og
// gjengis IKKE her. Vi lagrer kun standardens kode/navn (fakta) og genererer et
// avtaledokument som HENVISER til standarden. Alle default-tekster nedenfor er
// egne, generiske formuleringer – ikke utdrag fra standardene.

export interface NsStandard { code: string; name: string; use: string; role: string; }

export const nsStandards: NsStandard[] = [
  { code: 'NS 8406', name: 'Forenklet norsk bygge- og anleggskontrakt', use: 'Enklere utførelsesentrepriser', role: 'hoved' },
  { code: 'NS 8405', name: 'Norsk bygge- og anleggskontrakt', use: 'Større utførelsesentrepriser', role: 'hoved' },
  { code: 'NS 8407', name: 'Alminnelige kontraktsbestemmelser for totalentrepriser', use: 'Totalentreprise (prosjektering + utførelse)', role: 'hoved' },
  { code: 'NS 8416', name: 'Forenklet norsk underentreprisekontrakt', use: 'Underentreprise (til NS 8406)', role: 'under' },
  { code: 'NS 8415', name: 'Norsk underentreprisekontrakt', use: 'Underentreprise (til NS 8405)', role: 'under' },
  { code: 'NS 8417', name: 'Norsk totalunderentreprisekontrakt', use: 'Total-underentreprise (til NS 8407)', role: 'under' },
];

// Egne, generiske standardformuleringer til avtaledokumentet ({ns} byttes ut).
export const contractDefaults = {
  basis: 'Avtalen bygger på {ns} med de endringer og suppleringer som følger av dette avtaledokumentet. Ved motstrid gjelder dette avtaledokumentet foran {ns}.',
  dagmulkt: 'Dagmulkt påløper i samsvar med {ns} (som hovedregel 1 ‰ av kontraktssummen per hverdag ved forsinkelse).',
  sikkerhet: 'Partene stiller sikkerhet i samsvar med {ns}.',
  betaling: 'Avdragsnotaer sendes månedlig basert på utført og dokumentert arbeid. Betalingsfrist 30 kalenderdager fra fakturadato. Alle beløp er eks. mva.',
  endringer: 'Endringer, tillegg og fradrag håndteres etter reglene i {ns}. Endringsordre skal være skriftlig før arbeidet utføres.',
  saerlige: '',
};

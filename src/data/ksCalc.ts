// Kalkulasjonsverktøy – materialbibliotek (kostpriser fylles via prisimport fra faktura/CSV).
// Seedet med produkter Dekmar bruker mest (Ventistål m.fl.). Idempotent på slug til `calc_materials`.
export interface CalcMaterial { slug: string; name: string; supplier: string; article_no?: string; unit: string; category: string; sort: number }

export const standardMaterials: CalcMaterial[] = [
  // Tekking / membran
  { slug: 'm-katepal-litebase', name: 'Papp Katepal Litebase 1x25 m', supplier: 'Ventistål AS', unit: 'rull', category: 'Tekking og membran', sort: 10 },
  { slug: 'm-underlagspapp', name: 'Underlagspapp / undertaksbelegg', supplier: 'Ventistål AS', unit: 'rull', category: 'Tekking og membran', sort: 11 },
  { slug: 'm-pvc-se-folie', name: 'PVC SE takfolie', supplier: 'Ventistål AS', unit: 'm2', category: 'Tekking og membran', sort: 12 },
  { slug: 'm-delta-multiband', name: 'Delta Multibånd Flex tetteteip', supplier: 'Ventistål AS', unit: 'rull', category: 'Tetteteip og tettemidler', sort: 13 },
  // Stål / plater / beslag (GreenCoat)
  { slug: 'm-greencoat-plate', name: 'GreenCoat takplate/beslagplate 0,6 mm', supplier: 'Ventistål AS', unit: 'plate', category: 'Plater og beslag', sort: 20 },
  { slug: 'm-trp-plate', name: 'TRP-takplate stål', supplier: 'Ventistål AS', unit: 'm2', category: 'Plater og beslag', sort: 21 },
  { slug: 'm-perforert-plate', name: 'Perforert plate galvanisert (lufting)', supplier: 'Ventistål AS', unit: 'plate', category: 'Plater og beslag', sort: 22 },
  { slug: 'm-moneplate', name: 'Mønebeslag stål, standard farge', supplier: 'Ventistål AS', unit: 'lm', category: 'Plater og beslag', sort: 23 },
  { slug: 'm-gesimsbeslag', name: 'Gesims-/gavlbeslag stål, standard farge', supplier: 'Ventistål AS', unit: 'lm', category: 'Plater og beslag', sort: 24 },
  // Takrenner og nedløp
  { slug: 'm-takrenne', name: 'Takrenne GreenCoat stål 125/150', supplier: 'Ventistål AS', unit: 'lm', category: 'Takrenner og nedløp', sort: 30 },
  { slug: 'm-nedlop', name: 'Nedløpsrør GreenCoat stål 75/90', supplier: 'Ventistål AS', unit: 'lm', category: 'Takrenner og nedløp', sort: 31 },
  { slug: 'm-rennekrok', name: 'Rennekrok / kombikrok', supplier: 'Ventistål AS', unit: 'stk', category: 'Takrenner og nedløp', sort: 32 },
  // Lekter / trevirke
  { slug: 'm-sloyfe', name: 'Sløyfe 36x48 mm', supplier: 'Byggevare', unit: 'lm', category: 'Trevirke og lekter', sort: 40 },
  { slug: 'm-lekter', name: 'Lekter 36x73 mm', supplier: 'Byggevare', unit: 'lm', category: 'Trevirke og lekter', sort: 41 },
  // Fasade
  { slug: 'm-kompositt-4mm', name: 'Aluminium komposittplate 4 mm', supplier: 'Ventistål AS', unit: 'm2', category: 'Fasade', sort: 50 },
  // Feste / forbruk / kjemi
  { slug: 'm-abra-sealfix', name: 'Abra Seal & Fix MS-hybrid fugemasse', supplier: 'Ventistål AS', unit: 'patron', category: 'Fugemasse og lim', sort: 60 },
  { slug: 'm-skruer-selvborende', name: 'Selvborende skruer m/ tetning', supplier: 'Ventistål AS', unit: 'pk', category: 'Feste og forbruk', sort: 61 },
  { slug: 'm-takstige', name: 'Takstige / taksikring', supplier: 'Ventistål AS', unit: 'stk', category: 'Sikring', sort: 62 },
  { slug: 'm-snofanger', name: 'Snøfanger 2-rørs m/ konsoll', supplier: 'Ventistål AS', unit: 'lm', category: 'Sikring', sort: 63 },
];

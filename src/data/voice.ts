/* =========================================================================
   Voce & ton Safebiz Solutions — reguli de scriere a copy-ului.

   SURSA UMANĂ: C:/MasterC-data/projects/safebiz/branding/voice.md + team.md
   Acest fișier e OGLINDA acelei surse, ca Claude Design să vadă regulile.
   Direcția de sincronizare: branding/voice.md  →  acest fișier. Niciodată invers.

   De ce există: DS-ul cunoștea doar adresarea „tu". Regula de brand cere ȘI
   persoana întâi plural („noi"). Fără jumătatea „noi", copy-ul generat sună
   impersonal, ceea ce e explicit interzis.
   ========================================================================= */

/* ---- Persoana: DOUĂ jumătăți, ambele obligatorii ------------------------ */

export const person = {
  us: 'persoana întâi plural — „noi am implementat", „am observat", „noi recomandăm", „am configurat"',
  reader: 'persoana a doua singular — „tu", „afacerea ta". Cald, dar profesional.',
  never: 'impersonal. „Se recomandă", „este important să se" — interzis.',
  minUsMentions: 3, // de câte ori trebuie să apară perspectiva „noi" într-un articol
  example:
    'Taglineul folosește ambele: „Noi gestionăm complexitatea tehnologiei, pentru ca tu să primești înapoi timpul necesar afacerii tale."',
}

/* ---- Cei 4 piloni strategici — minim 1 per conținut -------------------- */

export interface Pillar {
  key: string
  name: string
  what: string
  phrasings: string[]
}

export const pillars: Pillar[] = [
  {
    key: 'tehnic',
    name: 'Know-how tehnic',
    what: 'Expertiză prin detalii concrete: stack-uri reale, decizii arhitecturale, lecții din incidente reale.',
    phrasings: [
      'Am rulat acest pipeline pe 6 site-uri timp de 90 zile',
      'Cron-ul declanșează zilnic la 01:30 UTC',
      'Folosim FluentCRM cu webhook-uri custom',
    ],
  },
  {
    key: 'timp',
    name: 'Time Saving',
    what: 'Beneficiul se cuantifică în timp. NU „te economisește timp" — ci cifra.',
    phrasings: [
      '200 comenzi/lună × 3 minute manual = 10 ore. Cu automatizarea — 0 minute.',
      'Recuperezi un weekend pe lună.',
      '70% reducere task-uri repetitive',
    ],
  },
  {
    key: 'allinone',
    name: 'All-in-One',
    what: 'Pachete complete, nu servicii fragmentate. Un articol despre un singur tool închide cu CTA către pachetul integrat.',
    phrasings: [
      'Tu te ocupi de afacere, noi de tot ce ține de tehnologie.',
      'Un singur partener pentru site, hosting, marketing și conformitate.',
    ],
  },
  {
    key: 'juridic',
    name: 'Diferențiator juridic',
    what: 'Avocat GDPR in-house. Pe conținut cu impact legal (GDPR, e-commerce, semnătură electronică, T&C) se accentuează — niciun competitor pur tehnic nu poate oferi asta.',
    phrasings: [
      'Verificat din punct de vedere juridic de avocatul echipei',
      'Conformitate GDPR garantată prin audit juridic intern',
      'Tehnic + juridic, sub același acoperiș.',
    ],
  },
]

export const minPillarsPerPiece = 1

/* ---- Ton ---------------------------------------------------------------- */

export const tone = {
  is: ['profesional', 'pragmatic', 'prietenos', 'direct, fără diluare', 'empatic față de antreprenor'],
  isNot: ['clișee', 'cuvinte de umplutură', 'superlative goale', 'hype', 'efecte inutile'],
  directness:
    '„Nu folosi Glovo dacă vrei să-ți păstrezi marja" bate „Există anumite considerente legate de comisioane când lucrezi cu agregatori".',
  numbers: {
    rule: 'Cifre concrete, nu adjective. „comision 31-35%", nu „comisioane mari".',
    minPerPiece: 2,
  },
  diacritics: 'ă î â ș ț — obligatoriu, non-negociabil. NU s/t simple.',
  personalExample: 'Exemplu propriu când e relevant: „În proiectul X am observat că…" (anonimizat dacă e nevoie).',
  sellsOutcomes: 'Vinde rezultate, nu funcții.',
}

/* ---- Casing ------------------------------------------------------------- */

export const casing = {
  body: 'sentence case',
  headlines: 'Title Case selectiv — ex. „Soluții Stabile pentru Prezența Online a Afacerii tale"',
  eyebrow: 'UPPERCASE cu letter-spacing 0.08em — ex. „CE FACEM"',
  brandName: 'Safebiz Solutions — S mare, b mic. NU „SafeBiz", NU „SAFEBIZ Solutions".',
  emoji: 'zero emoji în proză. Iconițele sunt Lucide, nu emoji.',
}

/* ---- Structura CTA în articole ----------------------------------------- */

export const ctaStructure = {
  minPerArticle: 2,
  rule: 'Minim 2 CTA-uri intercalate, NICIODATĂ doar la final.',
  first: {
    position: '30–40% din articol',
    tone: 'soft, educațional',
    examples: ['Vezi cum implementăm asta concret →', 'Citește audit-ul nostru intern →'],
  },
  second: {
    position: 'la final',
    tone: 'direct, transacțional',
    examples: ['Solicită audit gratuit', 'Vezi pachete', 'Programează un call'],
  },
  /* Un singur CTA per poziție. Un articol cu mai multe tag-uri are exact un
     tag PRINCIPAL, care alege oferta; celelalte tag-uri servesc navigării.
     Criteriu de alegere a tagului principal: oferta care ARE deja formular. */
  onePrimaryPerPosition: true,
  /* ⚠️ TENSIUNE DE RECONCILIAT în implementarea WordPress:
     hook-urile Kadence disponibile sunt `kadence_inside_the_content_after_p1..p4`.
     `after_p1` e mai sus decât 30–40% din articol. Pentru articole lungi,
     `after_p3`/`after_p4` sunt mai aproape de regula de brand.
     Poziția se alege per lungime de articol, nu global. */
  wordpressHooks: ['kadence_inside_the_content_after_p1', '…after_p2', '…after_p3', '…after_p4', 'kadence_after_content'],
}

/* ---- Lungimi pe tip de conținut ---------------------------------------- */

export interface ContentType {
  key: string
  words: [number, number]
  toneShift: string
}

export const contentTypes: ContentType[] = [
  { key: 'tutorial_site', words: [800, 1500], toneShift: 'instrucțional, pas cu pas, screenshot-friendly' },
  { key: 'case_study', words: [1000, 1800], toneShift: 'storytelling: context → problemă → soluție → metrici → lecție' },
  { key: 'comparison', words: [900, 1400], toneShift: 'analitic, cu tabele, recomandare clară la final' },
  { key: 'checklist', words: [700, 1200], toneShift: 'pe listă, lead-magnet-abil, versiune PDF descărcabilă' },
  { key: 'thought_leadership', words: [800, 1300], toneShift: 'opinie, contrarian dacă e cazul, cu argumente solide' },
]

/* ---- Audiență ---------------------------------------------------------- */

export const audience = {
  who: 'antreprenori locali din România, manageri IMM, decidenți tehnici',
  focus: ['HORECA', 'e-commerce', 'freelanceri', 'prestatori de servicii locale'],
  location: 'Sfântu Gheorghe, județul Covasna — bilingv RO/HU (site în ambele limbi prin WPML)',
}

/* ---- Semnături de autor ------------------------------------------------
   Formele EXACTE de semnătură pentru articole. Numele afișate în secțiunea
   „Despre noi" sunt cele din `content.ts` → `team` (nume legale complete);
   aici sunt formele de AUTOR, care diferă intenționat.
   ------------------------------------------------------------------------ */

export interface Signature {
  key: string
  label: string
  when: string
}

export const signatures: Signature[] = [
  { key: 'tehnic', label: 'Zoltán Takács, Safebiz Solutions', when: 'articol tehnic, autor unic' },
  { key: 'juridic', label: 'Kata Takács (avocat), Safebiz Solutions', when: 'articol juridic, autor unic' },
  { key: 'co', label: 'Echipa Safebiz — Zoltán Takács & Kata Takács', when: 'GDPR + tehnic; AICI e diferențiatorul' },
  { key: 'generic', label: 'Echipa Safebiz Solutions', when: 'generic / studiu de caz' },
]

/* ---- Verificare finală înainte de publicare ---------------------------- */

export const prePublishChecklist = [
  'atinge minim 1 din cei 4 piloni, explicit',
  'are minim 2 CTA-uri intercalate',
  'conține cel puțin 2 cifre concrete',
  'folosește perspectiva „noi" cel puțin de 3 ori',
  'zero fraze din lista forbidden (vezi phrases.ts)',
  'cel puțin 1 frază signature prezentă (vezi phrases.ts)',
  'diacritice corecte',
]

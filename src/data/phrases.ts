/* =========================================================================
   Fraze interzise & signature — Safebiz Solutions.

   SURSA UMANĂ: C:/MasterC-data/projects/safebiz/branding/forbidden_phrases.txt
                C:/MasterC-data/projects/safebiz/branding/signature_phrases.txt
   Acest fișier e OGLINDA acelor liste. Direcția de sincronizare:
   branding/*.txt  →  acest fișier. Niciodată invers.

   `forbidden` e APLICAT: etapa de editor din Article Engine respinge articolul
   dacă apare vreuna (case-insensitive, pe cuvânt întreg).
   `signature` e CERUT: minim una per articol.

   Atenție la copy de UI: mai multe fraze interzise sunt exact ce ar ajunge pe
   un buton („click aici", „acționează acum", „nu rata", „ofertă limitată").
   ========================================================================= */

export interface PhraseGroup {
  key: string
  label: string
  phrases: string[]
}

/* ---- INTERZISE ---------------------------------------------------------- */

export const forbiddenGroups: PhraseGroup[] = [
  {
    key: 'superlative',
    label: 'Superlative',
    phrases: [
      'cel mai bun',
      'cea mai bună',
      'cel mai eficient',
      'imbatabil',
      'de neegalat',
      'garantat 100%',
      'soluția perfectă',
      'absolut perfect',
      'nicio greșeală',
      'fără excepție',
    ],
  },
  {
    key: 'ai-cliche',
    label: 'Clișee AI (red flags pentru conținut generat)',
    phrases: [
      'în era digitală',
      'în lumea modernă',
      'în lumea de astăzi',
      'fără doar și poate',
      'în mod cert',
      'în mod evident',
      'este de la sine înțeles',
      'indubitabil',
      'revolutionar',
      'revoluționar',
      'inovator',
      'de ultimă generație',
    ],
  },
  {
    key: 'spam',
    label: 'Spam / urgency triggers — atenție specială la butoane și CTA',
    phrases: [
      'click aici',
      'apasă aici',
      'ofertă limitată',
      'acționează acum',
      'nu rata',
      'oferta expiră',
      'ultimele locuri',
      'gratis garantat',
      '100% gratis',
      'oferta valabilă doar',
      'super promotie',
      'super promoție',
      'mega oferta',
      'mega ofertă',
    ],
  },
  {
    key: 'weak-openers',
    label: 'Închideri / deschideri generice',
    phrases: [
      'în concluzie',
      'pentru a încheia',
      'în final',
      'ca o concluzie',
      'pentru a rezuma',
      'în cele din urmă',
      'ultimul aspect',
    ],
  },
  {
    key: 'hyperbole',
    label: 'Hiperbolă nepotrivită pentru B2B',
    phrases: [
      'îți va schimba viața',
      'îți va transforma afacerea peste noapte',
      'te va îmbogăți',
      'secrete pe care',
      'trucuri ascunse',
      'hack-uri șocante',
      'te vei șoca',
      'nu vei crede',
    ],
  },
  {
    key: 'filler',
    label: 'Filler / weasel words',
    // 'de fapt' e permis rar; interzis în exces.
    phrases: ['foarte mult', 'extraordinar de', 'practic', 'basically', 'de fapt'],
  },
  {
    key: 'competitor',
    label: 'Atacuri vagi la concurență — nu poziționăm negativ direct',
    phrases: ['concurența noastră', 'ce nu spun alții', 'ce ascund competitorii'],
  },
]

export const forbidden: string[] = forbiddenGroups.flatMap((g) => g.phrases)

/* ---- SIGNATURE — minim 1 per articol ----------------------------------- */

export const signatureGroups: PhraseGroup[] = [
  {
    key: 'tagline',
    label: 'Tagline & motto',
    phrases: [
      'soluții stabile pentru prezența online',
      'noi gestionăm complexitatea tehnologiei',
      'timpul necesar afacerii tale',
      'pentru siguranța afacerii tale',
      'fii online',
    ],
  },
  {
    key: 'pillars',
    label: 'Piloni strategici — referințe explicite',
    phrases: [
      'audit intern',
      'audit din interior',
      'am implementat',
      'am observat',
      'am configurat',
      'noi recomandăm',
      'am rulat acest pipeline',
      'verificat din punct de vedere juridic',
    ],
  },
  {
    key: 'differentiator',
    label: 'Diferențiator combinat tehnic + juridic',
    phrases: [
      'expertiză tehnică și juridică',
      'echipa combinată Zoltán + Kata',
      'avocat in-house',
      'conformitate garantată',
    ],
  },
  {
    key: 'timesaving',
    label: 'Time saving',
    phrases: ['recuperezi timp', 'ore economisite pe lună', 'weekend liber', 'nu te mai ocupi tu de asta'],
  },
  {
    key: 'allinone',
    label: 'All-in-One',
    phrases: [
      'un singur partener',
      'pachet integrat',
      'totul într-un singur loc',
      'tu te ocupi de afacere, noi de tehnologie',
    ],
  },
  {
    key: 'anti-agregator',
    label: 'Anti-agregator — vinde site propriu',
    phrases: [
      '0% comision',
      'fără comisioane platforme',
      'controlul complet asupra clientului',
      'site-ul tău, regulile tale',
      'fidelizare directă',
    ],
  },
  {
    key: 'tone-markers',
    label: 'Markeri de ton',
    phrases: ['pragmatic', 'concret', 'fără diluare', 'cu cifre reale'],
  },
]

export const signature: string[] = signatureGroups.flatMap((g) => g.phrases)

/* ---- Helper ------------------------------------------------------------- */

/** Întoarce frazele interzise găsite într-un text (case-insensitive). */
export function findForbidden(text: string): string[] {
  const haystack = text.toLowerCase()
  return forbidden.filter((p) => haystack.includes(p.toLowerCase()))
}

/** true dacă textul conține cel puțin o frază signature. */
export function hasSignature(text: string): boolean {
  const haystack = text.toLowerCase()
  return signature.some((p) => haystack.includes(p.toLowerCase()))
}

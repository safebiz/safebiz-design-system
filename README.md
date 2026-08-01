# Safebiz Solutions — Design System

Sistem de design (tokeni + componente React) pentru **Safebiz Solutions**, companie B2B româno-maghiară de web development, tehnologie și GDPR/juridic. Acest repo servește ca **sursă de brand pentru Claude Design** (claude.ai/design) la redesign-ul safebiz.ro.

## Cum e folosit de Claude Design

Repo-ul e gândit ca „frontend-focused subfolder": tokeni + componente React care predau brand-ul. Claude Design citește:
- **`PROMPT-CLAUDE-DESIGN.md`** — **specificația de generare**: ce se desenează, ce se refolosește, ce e interzis. Punctul de intrare.
- `src/styles/tokens.css` — sursa unică de adevăr pentru culori, fonturi, spacing, radii
- `src/components/*` — componentele reale
- `src/data/content.ts` — conținut REAL Safebiz (fără lorem ipsum), inclusiv catalogul complet de servicii
- `src/data/voice.ts` — **regulile de voce**: persoană, cei 4 piloni, ton, casing, structura CTA, semnături de autor
- `src/data/phrases.ts` — **fraze interzise (~60) și signature (~30)**, cu helperi de verificare
- `public/logo/*` — toate variantele de logo
- `src/App.tsx` — pagina-showcase care compune totul

### Componente disponibile
Core: `Button`, `Badge`, `Card`, `SectionHeading`.
Marketing/pagini: `Header`, `Hero`, `Footer`, `ServiceCard`, `ServicesOverview` (toate serviciile grupate pe 6 categorii), `PricingPlans` (planuri mentenanță Start/Pro/VIP), `AuditLanding` (șablon „audit gratuit → formular", reutilizabil pt GDPR/retragere/SEO), `FAQ` (accordion), `Testimonials`, `EmailTemplate` (șablon email marketing de brand).

### Catalogul de servicii (6 categorii, în `content.ts`)
1. **Web & Magazine** · 2. **SEO & Vizibilitate** · 3. **Conformitate & Legal** · 4. **Automatizări & Integrări** · 5. **Mentenanță & Suport** · 6. **Marketing & Branding**. Plus flagship **All-In-One**.
Fiecare serviciu are un `status`: `live` (pe site) / `ready` (gata, ofertat) / `blocked` (conținut gata, publicare gată separat).

⚠️ **Servicii `blocked` (design OK, publicare NU fără GO):** „Audit retragere online (OUG 18/2026)" și „Conformitate HoReCa (948/2026)" — copy generic-sigur, fără claim-uri juridice neverificate. Nu publica paginile lor reale fără aprobare + sign-off avocat.

📧 **EmailTemplate** e un mockup de brand. În producție se traduce în HTML table-based cu stiluri inline pentru FluentCRM / SureContact.
🗣️ **Testimonials** conține PLACEHOLDER — înlocuiește cu recenzii reale (cu acord) înainte de publicare; nu folosi text inventat.

## Reguli de brand (OBLIGATORII)

### LOCKED — nu modifica
- **Logo:** toate variantele în `public/logo/`. NU distorsiona, NU recolora, NU shadow/glow/3D. Clear space ≥ 1× înălțimea „S" din SOLUTIONS.
- **Culori:** paleta din `tokens.css` (hex exact). NU folosi roșu / portocaliu pentru CTA.
- **Nume brand:** „Safebiz Solutions" — S mare, b mic. NU „SafeBiz", NU „SAFEBIZ Solutions".

### FLEXIBLE — poți reinventa
- **Layout** — orice structură modernă, aerisită.
- **Tipografie** — fonturile NOI sunt Sora (titluri) + Inter (body). Vechile Playfair Display / Source Sans Pro sunt abandonate.

## Ton & poziționare
Profesional, pragmatic, „încredere + tehnologie". Fără clișee, fără efecte inutile.
**Diferențiator unic de evidențiat:** avocat GDPR **in-house** — tehnic + juridic sub același acoperiș.
Diacritice românești corecte obligatoriu (ă, î, â, ș, ț).

## Voice & copy rules (OBLIGATORII)

> Detaliile executabile sunt în `src/data/voice.ts` + `src/data/phrases.ts`. **Citește-le înainte de a scrie orice copy.**

### Persoana — DOUĂ jumătăți, ambele obligatorii
- **„noi"** = Safebiz: „am implementat", „am observat", „noi recomandăm". Minim **3 apariții** per articol.
- **„tu"** = cititorul: „afacerea ta". Cald, dar profesional.
- **Impersonal e INTERZIS.** „Se recomandă", „este important să se" — nu.

Taglineul folosește ambele: *„**Noi** gestionăm complexitatea tehnologiei, pentru ca **tu** să primești înapoi timpul necesar afacerii tale."*

### Cei 4 piloni — minim 1 per conținut
**Know-how tehnic** (stack-uri și decizii reale) · **Time Saving** (cuantificat: „5 ore/lună", nu „economisești timp") · **All-in-One** (pachet integrat, un singur partener) · **Diferențiator juridic** (avocat in-house, pe conținut cu impact legal).

### Cifre, nu adjective
Minim **2 cifre concrete** per articol. „comision 31-35%" bate „comisioane mari". „43% din trafic ajunge pe poziția 1" bate „mult trafic".

### Structura CTA în articole
Minim **2 CTA-uri intercalate**, niciodată doar la final:
- **primul la 30–40% din articol** — soft, educațional: „Vezi cum implementăm asta concret →"
- **al doilea la final** — direct, transacțional: „Solicită audit gratuit", „Vezi pachete"

**Exact un CTA per poziție.** Un articol cu mai multe tag-uri are un singur tag *principal*, care alege oferta — criteriul: oferta care **are** deja formular.

### Casing
Sentence case în body · Title Case selectiv la titluri · eyebrow UPPERCASE cu letter-spacing · **zero emoji în proză** (iconițele sunt Lucide).

### 🔴 Fraze interzise — atenție la butoane
`phrases.ts` → `forbidden` are ~60 de fraze **aplicate automat** (etapa de editor respinge articolul). Câteva ar ajunge direct pe un CTA: **„click aici", „apasă aici", „acționează acum", „nu rata", „ofertă limitată", „oferta expiră", „ultimele locuri", „100% gratis", „garantat 100%"**. Plus superlative („cel mai bun"), clișee AI („în era digitală"), închideri generice („în concluzie").

`phrases.ts` → `signature` are ~30 de fraze de identitate; **minim una** per articol.

### Semnături de autor
`Zoltán Takács, Safebiz Solutions` (tehnic) · `Kata Takács (avocat), Safebiz Solutions` (juridic) · `Echipa Safebiz — Zoltán Takács & Kata Takács` (GDPR + tehnic — aici e diferențiatorul) · `Echipa Safebiz Solutions` (generic).
*Notă: numele afișate în „Despre noi" (`content.ts` → `team`) sunt cele legale complete; formele de semnătură diferă intenționat.*

### Sursa umană și direcția de sincronizare
`voice.ts` și `phrases.ts` sunt **oglinda** fișierelor din `projects/safebiz/branding/` (`voice.md`, `forbidden_phrases.txt`, `signature_phrases.txt`). Sincronizarea merge **doar** dinspre `branding/` spre repo. Nu edita regulile aici întâi — s-ar crea o a patra sursă care se învechește.

## Mobile-first — regulă de sistem (OBLIGATORIE)

Stilurile de **bază** din `app.css` sunt cele de **telefon**. Tot ce e mai mare se adaugă prin `@media (min-width: …)`. **Nu introduce `max-width`** — ar inversa direcția sistemului.

Trei praguri, atât: **640px** · **900px** · **1200px**.

| Regulă | Valoare |
|---|---|
| Zonă minimă de atins (înălțime **și** lățime) | `--tap-min: 44px` — orice link, buton, control |
| Font minim în inputuri | `1rem` — sub 16px, Safari pe iOS dă zoom la focus |
| Padding lateral | `1rem` pe mobil → `1.5rem` de la 640px |
| Grile | o coloană pe mobil, se lățesc progresiv |
| Header | bară de 60px + meniu desfășurabil; un rând de la 900px |
| Lățimi minime în px pe conținut | **interzise** — garantează depășirea pe ecran mic |
| `prefers-reduced-motion` | respectat (inclusiv `.card:hover`) |

**Verificare, obligatorie înainte de push:**

```bash
node C:/MasterC-data/wat/tools/responsive-audit.js --url http://localhost:4173/ --open-selector ".header__toggle"
```

Exit 0 = trece. Exit 1 = cel puțin un prag cade, cu lista exactă a defectelor.

> **De ce e scris aici:** până la 2026-07-31 acest template era desktop-first și avea
> `@media (max-width: 720px) { .header__nav { display: none } }` — adică pe telefon
> site-ul rămânea **fără navigație**, ascunsă fără nimic în loc. Plus 11 ținte de
> atingere sub 44px. Fiecare client clonat de aici moștenea problemele.
> Acum trece auditul la 320 / 375 / 768 / 900 / 1024 / 1440.

## Rulare locală (opțional)
```bash
npm install
npm run dev
```

## Stack
Vite + React + TypeScript. Stiluri prin CSS custom properties (fără framework), ca tokenii să fie citibili direct.

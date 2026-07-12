# Safebiz Solutions — Design System

Sistem de design (tokeni + componente React) pentru **Safebiz Solutions**, companie B2B româno-maghiară de web development, tehnologie și GDPR/juridic. Acest repo servește ca **sursă de brand pentru Claude Design** (claude.ai/design) la redesign-ul safebiz.ro.

## Cum e folosit de Claude Design

Repo-ul e gândit ca „frontend-focused subfolder": tokeni + componente React care predau brand-ul. Claude Design citește:
- `src/styles/tokens.css` — sursa unică de adevăr pentru culori, fonturi, spacing, radii
- `src/components/*` — componentele reale (Button, Card, ServiceCard, Hero, Header, Footer…)
- `src/data/content.ts` — conținut REAL Safebiz (fără lorem ipsum)
- `public/logo/*` — toate variantele de logo
- `src/App.tsx` — pagina-showcase care compune totul (hero + servicii + despre + footer + style guide)

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

## Rulare locală (opțional)
```bash
npm install
npm run dev
```

## Stack
Vite + React + TypeScript. Stiluri prin CSS custom properties (fără framework), ca tokenii să fie citibili direct.

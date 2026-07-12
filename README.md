# Safebiz Solutions — Design System

Sistem de design (tokeni + componente React) pentru **Safebiz Solutions**, companie B2B româno-maghiară de web development, tehnologie și GDPR/juridic. Acest repo servește ca **sursă de brand pentru Claude Design** (claude.ai/design) la redesign-ul safebiz.ro.

## Cum e folosit de Claude Design

Repo-ul e gândit ca „frontend-focused subfolder": tokeni + componente React care predau brand-ul. Claude Design citește:
- `src/styles/tokens.css` — sursa unică de adevăr pentru culori, fonturi, spacing, radii
- `src/components/*` — componentele reale
- `src/data/content.ts` — conținut REAL Safebiz (fără lorem ipsum), inclusiv catalogul complet de servicii
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

## Rulare locală (opțional)
```bash
npm install
npm run dev
```

## Stack
Vite + React + TypeScript. Stiluri prin CSS custom properties (fără framework), ca tokenii să fie citibili direct.

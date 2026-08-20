# Când și cum se folosește fiecare componentă

> **Proveniență:** notele au fost scrise de agentul de construcție al Claude Design la generarea
> panoului și **aduse înapoi aici la 2026-08-20**. Trăiau doar în panou; la o reîmprospătare din
> GitHub, care citește depozitul, s-ar fi pierdut tăcut.
>
> Ele nu repetă manualul de brand — adaugă **regula de folosire**: unde are voie o piesă și unde nu.
>
> ⚠️ Componentele fără notă aici (`FAQ`, `Exclusions`, `PricingPlans`, `RelatedServiceCard`,
> `Testimonials`, `Timeline`) n-au primit una în panou. Nu înseamnă că n-au reguli — înseamnă că
> regulile lor stau doar în cod și în `PROMPT-CLAUDE-DESIGN.md`.

---

## 🔴 `Slot` — piesa care ține tot sistemul onest

Placeholder **vizibil** pentru o valoare necunoscută: preț, cifră, nume de client, termen.
Eticheta începe întotdeauna cu „Slot".

Se folosește **ORIUNDE ar fi tentant să inventăm un număr plauzibil.** Are variantă `onDark`
(inel punctat alb) pentru benzile pe gradient. Restul componentelor de mai jos îl cheamă singure
când le lipsește o valoare — nu-l scoate ca să „arate mai curat".

---

## Nucleu

### `Button`
Pastilă în paleta Safebiz; pentru acțiuni primare/secundare și peste fundaluri închise.

- `primary` — fill Zomp, text **alb**; la hover trece pe Fern Green.
- `secondary` — contur Zomp, text de link; la hover se umple Zomp cu text alb.
- `on-dark` — fill alb, text ink; pentru benzile hero/ink.
- `ghost-on-dark` — contur alb pe transparent; se inversează la hover.

Randează `<a>` când are `href`, altfel `<button>`.
🔴 **Niciodată recolorat în roșu/portocaliu** — în afara paletei pentru CTA.

**🔴 Tipografia butonului e BLOCATĂ (pachet de contrast).** Textul e fixat la
`--fs-lead` + `--fw-bold` + `--ls-button`. Alb pe Zomp `#14a68b` dă **3,06:1**, care trece
**doar ca text mare** (prag 3:1); la `--fs-body`/`--fw-semibold` ar cădea sub pragul de 4,5:1
pentru text normal. **Cele trei valori și textul alb sunt o singură decizie** — dacă mărimea sau
greutatea scad vreodată, textul trebuie să revină la `--text-on-brand` (ink).

🔴 **NU redefini `--text-on-brand` la alb ca să „repari" asta.** Tokenul ăla rămâne ink: e folosit
de badge-uri, de paginarea activă, de pastila de limbă activă din antet și de bifele ✓ din pastilele
verzi — toate la `--fs-small`, unde albul chiar cade.

### `Badge`
Pastilă mică pentru stări, categorii și roluri de echipă.
Variante: `default`, `brand` (fill Zomp, text alb — pentru elementul **activ** dintr-o bandă de
filtre, la fel ca paginarea activă), `success`, `ink`, `outline`.
Ține eticheta scurtă — un cuvânt, două.

### `Card`
Suprafața albă de bază. Radius 22px, bordură 1px, umbră mică în repaus care crește la hover.
`hover={false}` pentru panouri statice.

### `SectionHeading`
Deschiderea standard a unei secțiuni: eyebrow Zomp majuscule, H2 Sora bold, subtitlu estompat.
Centrat implicit (max 640px); `align="left"` pentru layouturi asimetrice.
Ține eyebrow-urile la două–trei cuvinte.

---

## Marketing

### `Header`
Bara de sus: logo orizontal color în stânga, linkuri + CTA principal în dreapta.
Dă `logoSrc` ca **drum relativ corect** către `logo-horizontal-color.png` din pagina ta.

### `Footer`
Subsol Oxford Blue: logo alb orizontal, motto accent-light, coloane de linkuri, bară de copyright.
Dă `logoSrc` către `logo-horizontal-white.png`.

### `Hero`
Banda de sus a paginii principale: `--gradient-hero`, titlu alb Sora, lead alb estompat, pereche de
CTA `on-dark` + `secondary`, tagline accent-light. Conținut la stânga, plafonat la 760px.
🔴 **Ține CTA-ul principal `on-dark` (alb)**, ca să se citească pe gradientul închis.

### `ServiceCard`
Dala de serviciu din grila safebiz.ro. `icon` acceptă orice nod — SVG Lucide (recomandat) sau
emoji, cum e stocat în conținutul sursă. Pentru o grilă de 3.
Linkul se lipește de baza cardului, ca textele de lungimi diferite să rămână aliniate.

### `Checklist`
Listă de incluziuni cu bifă verde — **când confirmi ce intră în preț**.

Bifa e o glifă albă pe cerc `--color-success` (fill, deci prag 3:1); **textul rândului rămâne ink** —
🔴 verdele nu devine niciodată culoare de text. Două coloane pe desktop, una sub ~700px, fără media query.

**Perechea ei negativă e `Exclusions`** („Ce NU include"): minus în cerc `--color-border`, text
estompat, ton neutru. 🔴 **Folosește-le împreună pe paginile de vânzare, niciodată una în locul
celeilalte** — și **nu colora minusurile roșu**.

### `MetricGrid`
Rezultate măsurate cu diferențe, pentru studiul de caz. 3–4 cifre mari Fern; o coloană sub 640px.

🔴 **Direcția se comunică prin SEMN și printr-un CUVÂNT, niciodată prin culoare** — paleta n-are
roșu/portocaliu, deci săgeata verde/roșie nu există.
🔴 **Cifrele lipsă randează un `Slot` — nu inventa o măsurătoare.**

### `VerdictBox`
Cardul de verdict al unei recenzii: scor mare, verdict într-o propoziție, „pentru cine e" /
„pentru cine nu e", preț și CTA. **Stă sus pe pagină, imediat sub introducere**, ca cititorul care
vrea doar concluzia s-o aibă din primul ecran.

Inel Zomp 2px; scorul e Fern. Lista negativă folosește un minus în inel `--border-strong` cu text
estompat — 🔴 **niciodată roșu**.
🔴 **Scorul și prețul neverificate randează `Slot`.**

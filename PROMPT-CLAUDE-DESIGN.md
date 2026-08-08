# Prompt Claude Design — Safebiz Solutions

> **Ce e acest fișier:** specificația pe care Claude Design o urmează când generează ecrane pentru safebiz.ro/.hu. Trăiește în repo ca să fie versionat împreună cu designul și citit la fiecare rebuild.
> **Cum îl folosește taki** — în Claude Design, lipește doar:
>
> > Recitește sursa din **https://github.com/safebiz/safebiz-design-system** și urmează `PROMPT-CLAUDE-DESIGN.md` din rădăcina repo-ului. Generează **Batch 1** (§5).
>
> Restul e aici, nu în chat — ca să nu divergă între conversații.

---

## 0. Sursa de adevăr

Citește din repo, nu din memorie:

| Fișier | Ce conține |
|---|---|
| `src/styles/tokens.css` | **sursa unică** pentru culori, fonturi, spacing, radii, umbre, tranziție |
| `src/data/content.ts` | conținut REAL — servicii (6 categorii + flagship), planuri, FAQ, echipă, footer, email |
| `src/data/voice.ts` | **regulile de copy** — persoană, cei 4 piloni, ton, casing, structura CTA, semnături |
| `src/data/phrases.ts` | **59 fraze interzise + 34 signature** |
| `src/components/*.tsx` | 14 componente reale |
| `public/logo/*` | 9 variante de logo + favicon |

🔴 **Repo-ul e lista COMPLETĂ — și pentru tokeni, și pentru variantele de componentă. Nu folosi nimic care nu e acolo.**

Totul se regenerează din repo la fiecare rebuild, deci orice ai inventa în design dispare la următoarea generare — **tăcut, fără eroare**:

- **token inexistent** → variabila CSS nedefinită invalidează *toată* declarația: fundal de hero pierdut, eyebrow la mărimea body-ului;
- **variantă de componentă inexistentă** (`Badge variant="brand"`, `variant="outline"`) → cade pe `default`, iar banda de filtre își pierde complet distincția activ/inactiv.

Dacă îți lipsește ceva, **spune-o explicit în livrare** ca să fie adăugat întâi în repo. Nu-l folosi direct.

---

## 1. LOCKED — nu modifica

- **Logo:** folosește fișierele reale din `public/logo/`. Nu redesena scutul, nu recolora, nu distorsiona, fără shadow/glow/3D. Clear space ≥ 1× înălțimea „S" din SOLUTIONS.
  ⚠️ **Cere toate 9 variantele**, nu doar 4. Footerul are nevoie de `logo-white-70.png`; fundalurile închise de `logo-horizontal-dark-bg.png` / `logo-vertical-white.png`.
- **Culori:** hex exact din `tokens.css`. **NICIODATĂ roșu sau portocaliu pentru CTA.**
- **Nume brand:** „Safebiz Solutions" — S mare, b mic. NU „SafeBiz", NU „SAFEBIZ Solutions".
- **Diacritice** românești complete (ă î â ș ț) — non-negociabil.

**FLEXIBIL:** layoutul. Familiile de fonturi sunt însă fixate — **Sora** (titluri) + **Inter** (body). Playfair Display / Source Sans Pro sunt abandonate.

---

## 2. Ce EXISTĂ deja — refolosește, nu reinventa

Repo-ul are **14 componente**. Batch 1 le refolosește:

| Am nevoie de | Folosește |
|---|---|
| pill de categorie / etichetă | **`Badge`** (`default` / `success` / `ink` / `outline`) |
| card de articol | **`Card`** — alb, border 1px, radius 22, shadow-sm → shadow-md + `translateY(-4px)` |
| deschidere de secțiune | **`SectionHeading`** — eyebrow + H2 Sora + subtitlu |
| butoane | **`Button`** — `primary` / `secondary` / `on-dark` |
| **CTA amplu pe fundal închis** | **secțiunea Flagship** — `background: ink`, grid 1.4fr/0.9fr, eyebrow accent-light, H2 alb, p alb 85%, CTA la dreapta |
| **CTA card deschis** | **CTA band** — card `accent-light`, centrat, **fără border, fără shadow, hover dezactivat** |
| acordeon | **`FAQ`** — max-width 820px, centrat, hairline sus/jos, iconiță `+` care se rotește 45° |
| citate cu autor | **`Testimonials`** — stele Zomp (ls 2px) → citat → **nume bold → rol muted** |
| bandă de încredere | **Trust strip** — bg-alt, border-bottom, flex space-between, iteme semibold fs-small cu iconiță Zomp |
| bifă în listă | pill 22px, bg `--color-success`, glifă albă |
| câmp de formular | radius `sm`, border 1px, focus → border Zomp |
| linie de consimțământ | fs-small, muted, checkbox + linkuri subliniate |
| iconiță de serviciu | **Lucide**, `stroke-width` 1.75, chip **56×56 radius `md`, bg accent-light, culoare ink** |
| hero de pagină interioară | `--gradient-hero`, eyebrow accent-light, H1 alb max-780px, p alb 85% fs-lead max-640px |

**Consecință pentru Batch 1:** din cele 2 sloturi de CTA, cel de jos e **Flagship refolosit**. Singura componentă CTA genuin nouă e cea **compactă** (§5, secțiunea 6).

Pentru Batch 2 există deja `PricingPlans` (Start/Pro/VIP cu `plan--highlight` + `plan__ribbon`), `AuditLanding` (șablon „audit gratuit → formular"), `ServicesOverview`, `EmailTemplate`.

---

## 3. Fundații — și trei avertismente

**Tipografie fluidă**, nu px fixe: `--fs-hero` clamp 38→56px · `--fs-h1` 32→44 · `--fs-h2` 26→36 · `--fs-h3` 22 · **`--fs-h4` 19 (titlu de card / sidebar)** · `--fs-lead` 19 · `--fs-body` 17 · `--fs-small`/`--fs-eyebrow` 14. Sora `--lh-tight` 1.15 / `--ls-heading` −0.01em; Inter `--lh-body` 1.6. Greutăți: `--fw-regular/medium/semibold/bold` + `--fw-extrabold` **doar** pentru numerale decorative.

**Scara e deliberat rară și e completă** — `--fs-h4` a fost adăugat exact ca să nu mai fie nevoie de mărimi intermediare. Nu există nimic sub `--fs-small`.

**Eyebrow:** UPPERCASE, `--ls-eyebrow` 0.08em, semibold — **Zomp pe fundal deschis, accent-light pe fundal închis**.

**Layout:** `--container-max` 1160px, padding lateral `--space-6`, secțiuni `--space-24` vertical, grid gap `--space-6`.

**Radii:** doar `sm` 8 (inputuri) · `md` 14 (chip-uri) · `lg` 22 (carduri) · `pill` 999. Nu 12, nu 16, nu 20.

**Umbre:** `--shadow-sm` la repaus → `--shadow-md` la hover. Fără glow, fără umbre colorate.

**Mișcare:** un singur `--transition: 180ms ease`. **Ridicarea cardului e singura mișcare de semnătură.** Fără parallax, bounce, bucle infinite. La apăsare se schimbă culoarea, nu scala.

**Un singur gradient:** `--gradient-hero`, doar pe banda de hero. `--gradient-brand` doar decorativ, rar.

### 🔴 Avertisment 1 — spacing: exact 9 pași, nimic altfel

`tokens.css` definește **doar** `--space-1, 2, 3, 4, 6, 8, 12, 16, 24`.

**`--space-5`, `--space-10` și `--space-20` NU există.** O variabilă CSS nedefinită invalidează **toată** declarația, **tăcut**. La generarea anterioară a celor 6 ecrane, `site/app.css` le-a folosit oricum și s-au pierdut 4 declarații: padding-ul vertical al hero-ului interior, gap-ul de newsletter, padding-ul întrebărilor din FAQ și marginea răspunsurilor. **Nu repeta.** Dacă ai nevoie de o valoare intermediară, alege pasul existent cel mai apropiat în jos.

### 🔴 Avertisment 2 — nu există culoare de avertisment

Paleta are `success` (`#69b578`), dar **nicio** culoare de warning/error, și roșul/portocaliul sunt interzise pentru CTA. Pentru note inline, casete de atenție sau alerte: bordură stânga 4px `--color-ink` + bg `--color-bg-alt` + iconiță Lucide ink. Nu inventa o nuanță.

### 🔴 Avertisment 3 — butonul on-dark

`Button.jsx` definește `on-dark` ca **fill alb, text ink → accent-light la hover**. Cardul de specimen `components/core/core.card.html` îl randează **invers** (ink cu text alb), printr-un override inline pus ca butonul să fie vizibil pe fundalul deschis al cardului. **Componenta e sursa, nu cardul.** Când regenerezi cardul, pune butonul pe un swatch închis, fără override inline.

### 🔴 Avertisment 4 — zero valori brute, fără excepție

Fiecare mărime de font, spațiere, rază, culoare și greutate vine dintr-un **token**. Interzis: `font-size:1.1rem`, `padding:0.7rem 1rem`, `font-size:2.6rem`, `color:#fff`, `border-radius:12px`.

Motivul e mecanic, nu estetic: designul devine blocuri Kadence native, iar fiecare valoare în afara tokenilor se transformă într-o **setare de tipografie per bloc**, făcută de mână, care apoi trebuie întreținută separat pe zeci de blocuri (§6.9). La generarea anterioară a Batch 1 au apărut ~15 titluri de card la `1.1rem` brut — de aceea există acum `--fs-h4`.

Alb pe fundal închis = **`var(--color-text-on-dark)`**, nu `#fff`. Singura excepție permisă: `rgba(255,255,255,α)` pentru text cu opacitate (paragraf 85%, notă 65%) și overlay-uri în degradeu — tokenii de paletă pierd canalul alpha.

### 🔴 Avertisment 5 — `accent-light` NU e culoare de text pe fundal deschis

`--color-accent-light` (`#d0db97`) pe `--color-bg-alt` dă un contrast de **1,37:1** — practic invizibil. E o culoare de **fundal** și de eyebrow **pe ink**, nimic altceva.

Pentru numerale decorative mari (01/02/03) pe fundal deschis folosește **`--color-brand-hover`** (Fern `#3a7d44`) — **4,74:1** pe bg-alt. Zomp ar da 2,90:1, sub pragul de 3:1 pentru text mare. Pe fundal ink, accent-light e corect.

### 🔴 Avertisment 6 — pe fill Zomp și Success, textul e INK, nu alb

Zomp și Success sunt destul de deschise încât albul să cadă sub prag:

| | alb | ink |
|---|---|---|
| pe `--color-brand` `#14a68b` | 3,06:1 ❌ | **5,27:1 ✅** |
| pe `--color-success` `#69b578` | 2,42:1 ❌ | **6,66:1 ✅** |

Deci butonul primary, `Badge variant="brand"`, paginarea activă și glifele ✓ din pastilele verzi folosesc **`var(--text-on-brand)`** / **`var(--text-on-success)`** — ambele = ink. Paleta rămâne LOCKED; se schimbă doar culoarea de deasupra.

Albul rămâne corect pe **ink** (`--color-text-on-dark`) și pe hover-ul Fern al butonului primary (5,04:1).

### 🔴 Avertisment 7 — Zomp nu e culoare de TEXT pe fundal deschis

Aceeași cifră, arie mult mai mare: `#14a68b` pe alb = **3,06:1**, pe bg-alt = 2,90:1.

| rol | culoare |
|---|---|
| **text** pe fundal deschis — linkuri, eyebrow, eticheta `secondary`, `Badge outline`, bife în liste | **`var(--text-link)`** = Fern, **5,00:1** ✅ |
| **fill**, contur, iconițe, stele decorative (prag 3:1) | `--color-brand` (Zomp) rămâne ✅ |
| text pe **ink** | alb sau accent-light — Zomp trece tehnic (5,27:1) dar nu-l folosi |

Deci butonul `secondary` are **contur Zomp cu etichetă Fern**, iar `Badge outline` la fel: inelul rămâne brand, textul devine lizibil.

**Hover-ul depinde de fundal, nu de variantă:** pe fundal deschis → **Fern**; pe bandă închisă → **accent-light**. Fern pe ink e aproape invizibil — se pierde în gradient. Un buton primary așezat pe hero-ul închis primește hover accent-light, nu Fern.

**Contrast minim, verificat înainte de livrare:** 4,5:1 text normal · 3:1 text mare (≥24px, sau ≥19px bold) și componente.

---

## 3b. 🔴 Mobilul e cazul principal, nu excepția

**Date reale, GA4 `safebiz.ro`, 12 luni (30 iul 2025 → 30 iul 2026):**

| Dispozitiv | Sesiuni | % | Engagement rate |
|---|---:|---:|---:|
| **mobile** | **1.284** | **67%** | **0,64** |
| desktop | 612 | 32% | 0,52 |
| tabletă | 11 | 0,6% | 0,91 |

Mobilul e majoritar în **11 din 12 luni** și are engagement **mai bun** decât desktopul. Deci un ecran care „arată bine pe desktop și se stivuiește acceptabil pe mobil" e proiectat pentru minoritate.

**Fiecare ecran livrează două previzualizări, nu una.** În `data-props`, pe lângă `$preview` de desktop, dă și o previzualizare la **390×844**. Un ecran fără previzualizare mobilă nu e livrat — regulile de breakpoint pot fi corecte în CSS și totuși greșite pe ecran, iar nimeni nu le vede dacă previzualizarea e doar 1280.

**Reguli care nu se negociază pe mobil:**

1. **Zero scroll orizontal.** Nimic nu depășește lățimea ecranului la 360px. Tabelele, blocurile de cod și rândurile late scrolează în containerul lor, nu împing pagina.
2. **Ținte de atingere ≥ 44×44px** pentru orice element pe care se apasă — inclusiv iconițele de share și de social, care sunt cel mai des sub prag.
3. **Un singur CTA persistent pe mobil.** Când sidebarul dispare, CTA-ul din el dispare cu tot cu coloană. Desenează explicit **bara CTA lipită jos** care îl înlocuiește: apare după derulare, nu de la început, și lasă loc sub ea ca să nu acopere finalul paginii.
4. **Ce se pliază, ce se ascunde, ce rămâne.** Pentru fiecare secțiune spune explicit una din trei. „Se stivuiește" nu e o decizie — e ce face browserul dacă nu decizi tu.
5. **Nu introduce mărimi noi pentru mobil.** Scara din §3 e deja fluidă (`clamp`) și capetele ei de jos SUNT valorile mobile: H1 32px, H2 26px, corp 17px. Verificate pe implementare, se potrivesc exact.
6. **Ordinea contează mai mult decât pe desktop.** Pe desktop cititorul vede sidebarul din prima; pe mobil vede doar primul ecran. Spune ce intră în primele 844px.

**Ce e deja construit în Kadence și NU trebuie contrazis** (stager, 31 iul):
sidebarul dispare complet sub 1024px pe articole · bara CTA lipită jos apare după 700px de derulare, doar pe mobil · cuprinsul e pliat implicit pe mobil și deschis pe desktop · iconițele de share au minim 44px. Dacă designul cere altceva, spune-o explicit ca schimbare, nu tăcut.

---

## 4. Voce & copy — citește `src/data/voice.ts` și `phrases.ts`

> ### ⚠️ Textul de articol este PLACEHOLDER
>
> Conținutul editorial real (corp de articol, titluri de articole, statistici, studii de caz) e produs separat de echipa de copywriting. **Nu e livrabilul tău și nu va fi publicat ca atare.**
>
> Ce contează la text pentru tine e **forma**, nu afirmația: lungimi realiste de paragraf, titluri de 1–2 rânduri, excerpturi de 2–3 rânduri, etichete de buton de 2–4 cuvinte. Un design testat pe „Lorem ipsum" cade la text real — de asta scriem propoziții plauzibile în română, cu diacritice.
>
> Nu te opri să verifici dacă o cifră e adevărată. **Scrie cifre plauzibile ca să vezi cum arată rândul.**
>
> **Excepția — chrome-ul de UI e livrabil de design**, nu placeholder: etichete de buton, titluri de secțiune, eyebrow-uri, texte de formular și de consimțământ, stări goale, navigație. Astea rămân în design și se traduc direct în Kadence — pentru ele regulile de mai jos se aplică integral, în special lista de fraze interzise.

**Persoana are DOUĂ jumătăți, ambele obligatorii:**

- **„noi"** = Safebiz — „am implementat", „am observat", „noi recomandăm". Minim **3 apariții** per articol.
- **„tu"** = cititorul — „afacerea ta". Cald, dar profesional.
- **Impersonalul e INTERZIS.** „Se recomandă", „este important să se" — nu.

Taglineul le folosește pe ambele: *„**Noi** gestionăm complexitatea tehnologiei, pentru ca **tu** să primești înapoi timpul necesar afacerii tale."*

**Cei 4 piloni, minim 1:** know-how tehnic · time saving **cuantificat** („5 ore/lună", nu „economisești timp") · all-in-one · **diferențiator juridic** — avocat GDPR in-house, *„Tehnic + juridic, sub același acoperiș."*

**Minim 2 cifre concrete.** „comision 31-35%" bate „comisioane mari".

**Casing:** sentence case în body · Title Case selectiv la titluri · eyebrow UPPERCASE · **zero emoji în proză**.

### 🔴 Fraze interzise — atenție la butoane

`phrases.ts` → `forbidden` are 59 de fraze respinse automat. Câteva ar ajunge direct pe un CTA: **„click aici", „apasă aici", „acționează acum", „nu rata", „ofertă limitată", „oferta expiră", „ultimele locuri", „100% gratis", „garantat 100%"**. Plus superlative („cel mai bun"), clișee AI („în era digitală"), închideri generice („în concluzie").

Folosește **minim 1 frază signature**: „un singur partener", „pachet integrat", „avocat in-house", „verificat din punct de vedere juridic", „recuperezi timp", „0% comision", „site-ul tău, regulile tale"…

### Structura CTA

Minim **2 CTA-uri intercalate**, niciodată doar la final:

- **primul la 30–40% din articol** — soft, educațional: „Vezi cum implementăm asta concret →"
- **al doilea la final** — direct, transacțional: „Solicită audit gratuit", „Vezi pachete"

🔴 **Exact UN CTA per poziție.** Un articol poate avea mai multe etichete, dar doar una e *principală* și ea alege oferta. Nu desena sloturi de CTA stivuite.

### Ce NU generăm deloc

- **JSON-LD / schema markup.** Nu produce structured data, în niciun ecran. Se generează determinist prin SureRank și se validează cu Rich Results Test. Markup-ul plauzibil-dar-eronat eșuează tăcut, iar din mockup ar ajunge copiat în producție.
- **Nume și fotografii de persoane reale** în testimoniale — inițiale sau „Client, domeniul X". Restul textului de umplere e liber (vezi caseta de la începutul secțiunii).

---

## 5. Batch 1 — trunchiul editorial

Trei ecrane: **`Safebiz Articol.html`** · **`Safebiz Categorie.html`** · **`Safebiz Blog.html`**.

**De ce acestea primele:** există deja 21 de articole publicate și 16 categorii, iar articolele nu duc nicăieri. Batch 1 le dă structură și 2 sloturi de CTA, deci conținutul deja scris începe să convertească fără să scriem articole noi.

### Ecran 1 — `Safebiz Articol.html`

Conținut realist: titlu **„Consimțământ GDPR: ce trebuie să știi despre consimțământul online"**, categorie **GDPR**, ~6 paragrafe, 3 subtitluri H2, o listă cu bife, un citat.

**Layout:** desktop 1440px = articol ~740px + sidebar dreapta ~340px, gap `--space-8`. Mobil 375px = o coloană, **sidebar-ul dispare complet** (nu se stivuiește dedesubt).

| # | Secțiune | Detalii |
|---|---|---|
| 1 | Bandă breadcrumb | bg-alt, text muted fs-small: Acasă › Blog › GDPR › titlu trunchiat |
| 2 | Cap de articol | `Badge` categorie · H1 (`--fs-h1`) · rând meta: dată · autor cu avatar · „6 min de citit" |
| 3 | Imagine featured | 16:9, radius `lg`, shadow-sm |
| 4 | Cuprins | card bg-alt, border 1px, radius `lg` — titlu + 4 ancore. Colapsabil pe mobil |
| 5 | Intro + prima secțiune | primul paragraf la `--fs-lead`, apoi primul H2 + 2 paragrafe |
| 6 | **🎯 SLOT CTA #1 — compact, soft/educațional** | **singura componentă nouă.** Orizontal, joasă: bg accent-light, radius `lg`, fără border/shadow. Stânga: chip Lucide 56px (radius `md`, bg `--color-bg`) + titlu o linie + subtitlu o linie. Dreapta: buton **primary**. Se stivuiește pe mobil.<br>🔴 **Poziția: după prima secțiune H2, la ~30–40% din articol** — nu imediat sub intro. `voice.ts` → `ctaStructure` cere 30–40%; în Kadence asta e hook-ul `after_p3`, nu `after_p1` |
| 7 | Corp, continuare | încă 2 H2 + paragrafe + listă cu bifă `success` + citat: bordură stânga 4px Zomp, bg bg-alt, italic |
| 8 | Notă inline | bordură stânga 4px **ink** + bg bg-alt + iconiță Lucide ink. **Fără roșu/portocaliu** (§3, avertisment 2) |
| 9 | Etichete | `Badge` variantă `outline`, discrete |
| 10 | Bară de share | „Distribuie:" + 4 iconițe Lucide circulare cu contur |
| 11 | **Card autor** | bg-alt, radius `lg` — avatar 72px rotund · nume · rol (muted, fs-small) · 2 rânduri bio · 2 linkuri Zomp. **Trebuie să suporte 1 persoană, 2 persoane sau „Echipa"** — vezi `voice.ts` → `signatures`, 4 forme. Pe articolele GDPR forma co-autorată **este** diferențiatorul |
| 12 | **🎯 SLOT CTA #2 — amplu, transacțional** | **Flagship refolosit:** bg ink, eyebrow accent-light UPPERCASE, H2 alb, 2 rânduri p alb 85%, 3 bife `success` pe un rând, buton **on-dark**, sub el o linie de reasigurare. Copy = diferențiatorul GDPR |
| 13 | Newsletter | **grid 2 coloane pe fundal deschis** (nu bandă închisă): stânga eyebrow + H2 + o frază; dreapta câmp email (radius `sm`) + buton primary + linie de consimțământ dedesubt |
| 14 | Articole similare | `SectionHeading` „Citește și" + 3 × `Card`: imagine 16:9, `Badge` categorie, titlu 2 rânduri, dată |
| 15 | Navigare prev/next | 2 zone, „← Articolul anterior" / „Articolul următor →" cu titluri |

**Sidebar (doar desktop):** a) CTA sticky — card ink, radius `lg`, titlu scurt + buton on-dark · b) categorii cu număr · c) 4 articole populare, miniatură 64×64 · d) card „Audit gratuit" pe accent-light cu buton secondary.

### Ecran 2 — `Safebiz Categorie.html`

Arhiva categoriei **GDPR**, cu 4 articole reale: Consimțământ GDPR · Parola sigură · Consent Mode v2 · Partea legală a unui magazin online.

| # | Secțiune | Detalii |
|---|---|---|
| 1 | Hero de categorie | **`.page-hero`** — `--gradient-hero`, breadcrumb cu linkuri accent-light, H1 alb, **paragraf descriere 2–3 rânduri** fs-lead alb 85%, rând meta „4 articole" |
| 2 | Bandă filtre | `Badge`-uri orizontale scrollabile; activ = fill Zomp, restul `outline`. Sortare „Cele mai noi ▾" în dreapta |
| 3 | Articol featured | `Card` lat, 2 coloane: imagine 4:3 stânga / text dreapta (Badge, H2, excerpt 3 rânduri, meta, „Citește mai mult →") |
| 4 | Grilă articole | **componentă separată** — devine `replace_loop_content` în Kadence: `Card` + imagine 16:9 radius `lg` + `Badge` suprapus jos-stânga + H3 2 rânduri + excerpt 2 rânduri + meta. Hover = ridicarea de semnătură |
| 5 | **🎯 CTA de categorie** | Flagship, după al doilea rând de carduri. Pe GDPR = auditul cu diferențiatorul |
| 6 | Paginare | numere + „Înainte →", activ fill Zomp, radius `sm` |
| 7 | Newsletter | idem ecran 1 |
| 8 | Teme conexe | 4–6 `Badge` mari cu iconiță Lucide |

Fără sidebar — grila are nevoie de toată lățimea.

⚠️ **Grid:** `app.css` face `.grid--3` → **1 coloană** sub 900px, fără pas intermediar. Pentru carduri de articol propun **3 → 2 → 1**. E o *extindere* a sistemului — desenează-o, dar marchează-o ca atare.

### Ecran 3 — `Safebiz Blog.html`

| # | Secțiune | Detalii |
|---|---|---|
| 1 | Hero blog | mai deschis decât cel de categorie: bg-alt (nu gradient), H1 „Blog", subtitlu fs-lead, **câmp de căutare** lat radius `pill` cu iconiță Lucide |
| 2 | Bandă categorii | 8–10 `Badge` cu numărul de articole. Cele goale nu apar |
| 3 | Featured mare | cel mai recent articol: imagine 21:9 cu overlay ink în degradeu jos, text peste imagine (`Badge` + H2 alb + meta) |
| 4 | „Cele mai citite" | 3 carduri orizontale numerotate 01/02/03 — număr mare `--fs-h1` / `--fw-extrabold` **în `--color-brand`** (NU accent-light, §3 avertisment 5) stânga, titlu + meta dreapta |
| 5 | Grilă „Toate articolele" | același card ca ecran 2 — **primul rând, 3 carduri** |
| 6 | **🎯 CTA generic** | Flagship — „Nu știi de unde să începi?" |
| 7 | Grilă, continuare | **obligatoriu: încă un rând de 3 carduri, DUPĂ CTA.** CTA-ul trebuie să fie intercalat în grilă, nu lipit la coada paginii. Fără acest rând, Flagship + newsletter + „Încarcă mai multe" se stivuiesc toate trei la final |
| 8 | Newsletter | idem |
| 9 | „Încarcă mai multe" | buton **secondary**, centrat, lat |

---

## 6. Constrângeri de traducere în Kadence

Designul devine blocuri Kadence native pe staging. Astea nu sunt preferințe — sunt limitele blocurilor.

1. **Nu există bloc „person"** (0 din 237 înregistrate). Cardul de autor se face din rowlayout + imagine + text.
2. **Ordinea din cardul de testimonial e fixă:** citat → nume → rol. Coincide cu `Testimonials` din repo ✓ — nu o inversa.
3. **Fiecare CTA e bloc autonom** — nu depinde de ce e deasupra sau dedesubt. Va fi injectat ca Kadence Element, în 12 variante de copy, în poziții diferite.
4. **Cardul de articol** trebuie să funcționeze la 1 / 2 / 3 coloane cu **același** markup.
5. **Radiusuri doar din set:** 8 / 14 / 22 / 999.
6. **Culori doar tokeni** — inclusiv albul, care e `--color-text-on-dark`. Excepție documentată: umbrele și overlay-urile cer `rgba()` cu alpha, fiindcă tokenii de paletă pierd canalul alpha în Kadence.
7. **Contrast minim** 4.5:1 text normal, 3:1 text mare și componente. Pe ink: alb sau accent-light — **niciodată Zomp**. Pe fundal deschis: **niciodată accent-light** (§3, avertisment 5).
8. **Butoane: doar cele 3 variante.** Fără a patra.
9. **Nu cere variații micro-tipografice pe elemente individuale** dacă tema le poate da global — în Kadence, un sub-obiect de atribut parțial sparge editorul; obiectul trebuie complet sau absent.
10. **Sidebar-ul nu e per-device în Kadence** — layoutul hibrid se face cu Element desktop-only + CSS care ascunde toată coloana. Desenează ambele stări explicit.

---

## 7. Ce NU desenăm în Batch 1

Header, footer (batch separat), comentarii, pop-up-uri, pagina de vânzare, Despre noi, portofoliu. Pentru header/footer folosește-le pe cele existente ca placeholder.

---

## 8. După livrare

Cele 3 ecrane se traduc în patterns Kadence: card articol (loop) · cuprins · card autor · articole similare · breadcrumb bar · **CTA compact** · citat evidențiat · notă inline · paginare · newsletter 2 coloane. CTA-ul amplu refolosește patternul Flagship deja construit.

Detaliul de implementare: `projects/plans/Safebiz-Redesign/PLAN-ARHITECTURA-CONTINUT-SAFEBIZ-2026-07-30.md`.

---

## 9. Revizuire mobilă a Batch 1 — sarcină de sine stătătoare

Batch 1 a fost livrat cu previzualizare doar la 1280px. Regulile de breakpoint există în CSS, dar nimeni nu a văzut ecranele randate pe mobil, iar mobilul e 67% din trafic (§3b).

**Asta e o revizuire, nu o regenerare.** Nu redesena desktopul, nu schimba tokeni, nu rescrie copy. Atinge doar ce se rupe sub 768px.

Pentru fiecare din `templates/{articol,categorie,blog}`:

1. Adaugă în `data-props` o a doua previzualizare la **390×844**, pe lângă cea de desktop.
2. Parcurge lista de reguli din §3b (1–6) și **raportează** ce încalcă fiecare ecran, cu numele secțiunii.
3. Repară doar încălcările. Fiecare reparație primește un comentariu de o linie care spune ce regulă rezolvă.
4. Adaugă bara CTA lipită jos, mobil-only, în ecranul **Articol** — nu există în design, dar există deja în implementare (§3b).
5. La final, spune explicit ce ai lăsat neschimbat și de ce.

Ce **nu** face parte din revizuire: header, footer, meniul de navigație (batch separat).

---

## 10. Batch 2 — trunchiul comercial

Patru ecrane: **`Safebiz Pagina Vanzare.html`** · **`Safebiz Despre Noi.html`** · **`Safebiz Portofoliu.html`** · **`Safebiz Multumim.html`**.

**🔴 Înainte de orice: mobilul se desenează de la început, nu se repară la final.** Batch 1 a fost livrat cu previzualizare doar la 1280px și a cerut o rundă întreagă de revizuire (§9). Pentru Batch 2, fiecare ecran primește **din prima** două previzualizări în `data-props`: **1280** și **390×844**. Regulile 1–6 din §3b sunt condiție de livrare, nu sugestii.

**De ce acest batch acum:** cele 9 pagini de serviciu existente sunt construite fiecare altfel — nu au nimic în comun în afară de header. Un singur șablon din care se reconstruiesc toate e cel mai mare câștig unitar din tot redesign-ul. Iar „Despre noi" și „Portofoliu" **nu există deloc**: un site de agenție fără dovezi și fără oameni cere încredere pe care nu o arată nicăieri.

### Ecran 4 — `Safebiz Pagina Vanzare.html` 🔴 prioritatea 1

**Instanța de desenat: serviciul „Magazin online".** Alege-l fiindcă are cifre reale și verificabile: agregatorii de livrare iau **31–35% comision** pe fiecare comandă, iar un magazin propriu ia 0%. Folosește-le — §4 cere minim 2 cifre concrete.

**Dar desenează un ȘABLON, nu o pagină.** Aceleași secțiuni trebuie să funcționeze pentru: site de prezentare · conformitate GDPR · automatizări · mentenanță WordPress · Google My Business · tracking și analytics · licențe premium · pensiune și hotel. Deci nicio secțiune nu presupune e-commerce în structură, ci doar în copy.

| # | Secțiune | Detalii |
|---|---|---|
| 1 | Hero de serviciu | `--gradient-hero`, breadcrumb accent-light, eyebrow = categoria de serviciu, H1 = promisiunea (nu numele serviciului), p fs-lead alb 85%, **2 butoane**: `primary` „Cere ofertă" + `on-dark` „Vezi pachete". Dreapta: dovadă vizuală (mockup 4:3 sau bloc de cifră mare) |
| 2 | Bandă încredere | **Trust strip existent** — 4 iteme cu iconiță Zomp |
| 3 | Problema | 3 dureri în limbajul clientului, nu al nostru. 3 coloane, iconiță Lucide + titlu scurt + 2 rânduri. **Fără roșu** (§3, avertisment 2) — durerile se marchează cu ink, nu cu alarmă |
| 4 | Ce include | grilă de 6 infoboxuri cu bifă `success`, 3→2→1 coloane |
| 5 | **🎯 Cum lucrăm — COMPONENTĂ NOUĂ: `Timeline`** | 4 pași orizontali pe desktop, verticali pe mobil. Fiecare pas: număr în cerc (`--color-brand`, text ink — §3 avertisment 6), titlu, 2 rânduri, durată estimată. Linia care leagă pașii = 2px `--color-border`, **nu** gradient |
| 6 | Rezultat | o cifră mare (`--fs-h1`, `--fw-extrabold`, `--color-brand`) + context într-o frază + un citat scurt de client. Trimite spre studiul de caz complet |
| 7 | **🎯 Pachete** | 3 coloane. Verifică ÎNTÂI dacă `PricingPlans` (Start/Pro/VIP, `plan--highlight`, `plan__ribbon`) acoperă cazul. Dacă da, **refolosește-l** și spune asta explicit. Dacă nu, extinde-l — nu construi o a doua componentă de preț |
| 8 | **🎯 Ce NU include — COMPONENTĂ NOUĂ** | listă cu 4 iteme, iconiță „minus" în cerc `--color-border`, text muted. Ton neutru, informativ. Scade cererile nepotrivite și e o formă de respect, nu un disclaimer |
| 9 | Testimoniale | **`Testimonials` existent**, filtrate pe serviciu (2–3) |
| 10 | FAQ | **`FAQ` existent**, 5 întrebări specifice serviciului |
| 11 | **🎯 Servicii conexe — COMPONENTĂ NOUĂ** | 3 carduri de cross-sell, mai mici decât `ServiceCard`: iconiță + titlu + o linie + „Vezi serviciul →" |
| 12 | CTA final | **Flagship refolosit** |
| 13 | Formular inline | câmpuri reale: nume, email, telefon, „ce ai acum" (select), mesaj + linie de consimțământ. **Nu inventa câmpuri** — se leagă la un SureForms existent |

**Maximum 4 componente noi**: `Timeline`, „Ce NU include", „Servicii conexe", plus eventual extinderea `PricingPlans`. Restul e refolosire. Dacă ajungi la a cincea, oprește-te și spune de ce.

### Ecran 5 — `Safebiz Despre Noi.html`

Date reale, nu placeholder: **Sfântu Gheorghe, județul Covasna** · trilingv RO/HU/EN · avocat in-house (rolul, nu numele, în design) · parteneri tehnici Kadence, WPML, xCloud.

| # | Secțiune | Detalii |
|---|---|---|
| 1 | Hero | gradient, H1 despre ce facem pentru client — **nu** „Despre noi" ca titlu |
| 2 | Povestea | 2 coloane: text (3 paragrafe) + imagine. Persoana I plural, obligatoriu (§4) |
| 3 | Cifre | 4 cifre mari pe bg-alt: ani, site-uri administrate, timp mediu de răspuns, limbi |
| 4 | Diferențiatorul | bandă ink: **„Tehnic + juridic, sub același acoperiș"** — argumentul central al firmei, cu 3 bife |
| 5 | Echipa | **🔴 nu există bloc „person" în Kadence** (§6.1). Card compus: foto rotundă 120px, nume, rol, 2 rânduri, 2 linkuri. Grid 3→2→1. **Trebuie să arate bine și cu 2 persoane, și cu 5** |
| 6 | Cum lucrăm | refolosește `Timeline` din ecranul 4 |
| 7 | Parteneri | logo-uri pe un rând, grayscale → color la hover |
| 8 | Acoperire | Covasna, Harghita, Mureș + „lucrăm la distanță în toată țara" |
| 9 | CTA final | Flagship |

### Ecran 6 — `Safebiz Portofoliu.html`

**🔴 Constrângere care nu e negociabilă:** nu s-a decis dacă publicăm nume de clienți. Desenează cu **etichete de tip „Magazin online, Covasna"** în loc de nume de firmă, și lasă un slot vizibil unde numele ar intra. Nu inventa nume de clienți reali.

| # | Secțiune | Detalii |
|---|---|---|
| 1 | Hero | mai scurt decât cel de serviciu, cu 2 cifre de context |
| 2 | Filtru | `Badge`-uri pe tip de serviciu — aceeași bandă ca la Categorie (§5, ecran 2) |
| 3 | Grilă proiecte | 3→2→1. Card: captură 16:10, `Badge` serviciu, titlu, **o cifră de rezultat vizibilă pe card**, „Vezi proiectul →". Cifra pe card e ce diferențiază un portofoliu de o galerie |
| 4 | Bandă de logo-uri | opțională, dependentă de decizia de mai sus — marcheaz-o ca atare |
| 5 | CTA final | Flagship |

### Ecran 7 — `Safebiz Multumim.html`

Ecran scurt, dar face muncă reală: confirmă, spune ce urmează, și recuperează atenția în loc s-o piardă.

| # | Secțiune | Detalii |
|---|---|---|
| 1 | Confirmare | iconiță bifă mare `--color-success` (text ink pe ea, §3 avertisment 6), H1 „Am primit cererea ta", o frază cu ce am primit |
| 2 | Ce urmează | 3 pași numerotați cu **timpi reali**: „răspundem în aceeași zi lucrătoare" |
| 3 | Între timp | 3 carduri: un articol relevant, un serviciu conex, auditul gratuit |
| 4 | Contact direct | pentru cine nu vrea să aștepte — email, telefon, program |

Fără header complet și fără footer complet: e o pagină de conversie. Nav redus la logo + un link înapoi.

---

## 11. Batch 3 — editorial specializat

Patru ecrane: **`Safebiz Studiu de Caz.html`** · **`Safebiz Recenzie.html`** · **`Safebiz Ghid.html`** · **`Safebiz 404 si Cautare.html`**.

**Aceeași regulă de mobil ca la Batch 2: două previzualizări din prima.**

**🔴 Simplificare cerută explicit:** „studiu de caz" și „single proiect din portofoliu" sunt **același ecran**, cu două intrări. Nu desena două. Dacă crezi că trebuie separate, spune de ce înainte să le desenezi.

### Ecran 8 — `Safebiz Studiu de Caz.html`

Instanța: **automatizarea comenzilor** — 200 de comenzi × 3 minute de procesare manuală, mutate în cron, măsurate 90 de zile, ~10 ore recuperate lunar.

| # | Secțiune | Detalii |
|---|---|---|
| 1 | Hero | breadcrumb, `Badge` serviciu, H1 = rezultatul, nu numele clientului. Bandă cu 3 cifre-cheie imediat sub H1 |
| 2 | Fișa clientului | card lateral sau bandă: domeniu, mărime, servicii folosite, durată |
| 3 | Provocarea | 2–3 paragrafe, în cuvintele clientului |
| 4 | Ce am făcut | listă numerotată cu ce s-a implementat concret, cu nume de tehnologii |
| 5 | **🎯 Rezultate — COMPONENTĂ NOUĂ: `MetricGrid`** | 3–4 cifre mari cu delta („−10 ore/lună", „+31% marjă"). **Săgeata verde/roșie e interzisă** — direcția se arată prin semn și cuvânt, nu prin culoare de alarmă (§3, avertisment 2) |
| 6 | Tehnologii | `Badge` outline |
| 7 | Citat client | `Testimonials` existent, o singură intrare, mare |
| 8 | Înainte/după | opțional, 2 capturi comparate |
| 9 | CTA final | Flagship, cu copy care leagă de serviciul folosit |
| 10 | Alte studii | 3 carduri |

### Ecran 9 — `Safebiz Recenzie.html`

Există deja 5 recenzii în draft. Instanța: o recenzie de plugin WordPress.

| # | Secțiune | Detalii |
|---|---|---|
| 1 | Cap de recenzie | ca articolul, plus `Badge` „Recenzie" |
| 2 | **🎯 Verdict box** | card cu bordură 2px `--color-brand`: scor mare (`--fs-h1`), o frază de verdict, „pentru cine e" / „pentru cine nu e", preț, buton. Sus, imediat sub intro — cititorul care vrea doar concluzia o primește în primul ecran |
| 3 | Pro / contra | 2 coloane: bife `success` stânga, minusuri în cerc `--color-border` dreapta. **Contra NU se colorează roșu** |
| 4 | Corpul recenziei | ca articolul: H2, paragrafe, capturi |
| 5 | Tabel comparativ | vs. 2 alternative, 4–5 criterii. Trebuie să deruleze orizontal pe mobil, în containerul lui |
| 6 | **🎯 CTA de implementare** | diferențiatorul: „îl instalăm și îl configurăm noi". Ăsta e motivul comercial pentru care scriem recenzii |
| 7 | FAQ + articole conexe | componente existente |

### Ecran 10 — `Safebiz Ghid.html`

Long-form pilon, 3000+ cuvinte. Diferă de articolul obișnuit prin **navigație**, nu prin stil.

| # | Secțiune | Detalii |
|---|---|---|
| 1 | Hero de ghid | H1, subtitlu, „25 min de citit", data ultimei actualizări **vizibilă** — pe un pilon, prospețimea e semnal de încredere |
| 2 | Cuprins sticky | pe desktop coloană stânga lipită, cu secțiunea curentă evidențiată. Pe mobil, pliat sus (deja implementat în Kadence) |
| 3 | Capitole ancorate | H2 cu ancoră vizibilă la hover |
| 4 | CTA după capitole | slot repetabil, **maximum 3 pe toată pagina** — §4 cere un singur CTA per poziție |
| 5 | Bară de progres | subțire, sus, `--color-brand` |
| 6 | Descarcă PDF | card la final |
| 7 | „Înapoi sus" | flotant, mobil |

### Ecran 11 — `Safebiz 404 si Cautare.html`

Două ecrane mici într-un fișier, separate clar.

- **404:** H1 uman (nu „Eroare 404"), câmp de căutare, 4 linkuri utile, buton spre acasă. Fără imagine amuzantă — brandul e sobru.
- **Rezultate căutare:** câmp cu termenul păstrat, numărul de rezultate, listă de carduri, stare goală cu sugestii. **Starea goală se desenează explicit** — e cea mai des ratată și cea mai des văzută.

---

## 12. Ordinea de lucru și ce raportezi

1. Batch 2 întâi, în ordinea 4 → 5 → 6 → 7. Ecranul 4 e prioritatea reală; celelalte se sprijină pe componentele lui.
2. Batch 3 după ce Batch 2 e acceptat.
3. La finalul fiecărui batch raportează: **ce componente noi ai creat** (cu motivul), **ce ai refolosit**, **ce ai extins**, și **ce nu ai putut face din tokenii existenți** — ultima categorie e cea mai utilă, fiindcă arată unde sistemul e prea sărac.
4. Nu adăuga tokeni. Scala de spațiere are 9 pași deliberat (§3, avertisment 1). Dacă ai nevoie de un pas care nu există, spune-o în raport în loc să-l inventezi.

---

## 13. Batch 4 — Header, Footer, Meniuri

Două ecrane: **`Safebiz Header.html`** · **`Safebiz Footer.html`**.

**De ce acum:** Batch 1 și 2 au folosit header/footer existente ca placeholder (§7). Sunt singurele componente prezente pe **toate** paginile — deci și singurele care, greșite, se văd pe fiecare pagină, în ambele limbi.

**Regula de mobil din §3b rămâne condiție de livrare: două previzualizări din prima, 1280 și 390×844.** Aici mobilul nu e un breakpoint, e un ecran de sine stătător: meniul mobil e o pagină întreagă, nu un meniu de desktop strâns.

### 13.0 Starea reală, măsurată pe `stager.safebiz.ro` (2026-07-31)

Nu desena „ce ar trebui să fie" fără să știi ce este. Astea sunt citite din configurația live a temei și din HTML-ul randat, nu din documentație:

| Ce | Starea de acum |
|---|---|
| Rândul de sus (desktop) | stânga: telefon · email · adresă (iconițe). Dreapta: 3 social + meniul „Top Bar Menu" |
| „Top Bar Menu" | **0 iteme proprii** — ce se vede acolo e **comutatorul de limbă WPML**, injectat în slotul acelui meniu |
| Rândul principal | logo stânga · navigație centru · buton „Cerere ofertă" + căutare dreapta. **Sticky cu shrink** pe rândul principal |
| Meniul principal | **19 iteme pe 3 niveluri** (Servicii › Creare site › Site de prezentare SEO) |
| 🔴 4 iteme nu duc nicăieri | „Servicii", „GDPR", „SEO", „Despre noi" sunt **ancore `#…` pe pagina de start**, nu pagini |
| Mobil | logo + buton hamburger → popup cu: meniu mobil, buton, social |
| 🔴 Meniul mobil | e un **al doilea meniu**, „Mobile Ro", cu 18 iteme întreținute separat de cel de desktop |
| Footer | 6 zone de widgeturi cu blocuri `core/*` (nu DS), meniu „Footer menu" (5) + „Legal" (5) |
| 🔴 Linkuri moarte în footer | **3 din 5** iteme din „Footer menu" trimit la pagina de start („Creare magazin online", „Optimizare SEO", „GDPR Online & Offline") |
| 🔴 Logo vechi în footer | imagine din 2020, cu textul alternativ **„SafeBiz solutions Logo"** — casing greșit (§1) |
| HU | toate meniurile au traducere WPML (`PrimaryMenu HU` etc.) ⇒ orice structură nouă se traduce, nu se duplică |
| Mega menu | Kadence Pro îl are, dar **nu e folosit pe niciun item** |

### 13.1 Date noi în repo — folosește-le, nu inventa

`src/data/content.ts` a primit două exporturi noi, exact pentru acest batch:

- **`contact`** — telefon `+40 721 737 597`, `office@safebiz.ro`, adresă completă, link Maps, program `Luni–vineri, 10:00–17:00`, 3 rețele (Facebook, WhatsApp, Google Reviews). **Sunt date reale, citite din configurația live.** Nu le rescrie, nu adăuga rețele pe care nu le avem.
- **`nav`** — arhitectura propusă: 5 intrări de nivel 1 în loc de 19 iteme plate, plus categoriile de blog nevide și cele două limbi.

`nav.primary` conține câmpul `pending: true` pe „Servicii", „Prețuri" și „Despre noi" — **paginile acelea nu există încă**. Desenează-le ca linkuri normale, dar nu inventa conținut de destinație pentru ele.

Serviciile cu `status: 'blocked'` (OUG 18/2026, HoReCa 948/2026) **nu apar în meniu.**

### 13.2 Ce trebuie să încapă în Kadence — constrângeri verificate în cod, nu preferințe

1. **Headerul e construit din rânduri cu sloturi fixe** (sus / principal / jos, fiecare cu 5 poziții: stânga, stânga-centru, centru, dreapta-centru, dreapta). Designul trebuie să se exprime prin *ce pui în sloturi*, nu printr-un layout liber. Dacă ai nevoie de altceva, spune-o explicit — alternativa e un header complet custom, care ne costă toate setările native.
2. **Mega menu = setare per item de meniu**, cu lățime (conținut / lat / custom), număr de coloane (implicit 3) și layout. **Coloanele se construiesc din subitemele meniului** — deci un panou cu 6 coloane de servicii e realizabil doar dacă structura de meniu chiar are 6 subiteme.
3. **Un item de meniu poate fi înlocuit integral cu un Kadence Element** (randat prin `[kadence_element id="…"]`). Ăsta e mecanismul prin care un panou cu carduri, iconițe și CTA devine posibil. **Consecință de design: panoul de mega menu trebuie să fie un bloc autonom**, care arată corect și scos din meniu — exact ca CTA-urile din §6.3.
4. **Meniul mobil e un meniu separat în WordPress.** Desenează-l ca atare și spune explicit dacă structura ta cere ca mobilul și desktopul să aibă **același** conținut (recomandat — altfel se întreține de două ori, în două limbi).
5. **Comutatorul de limbă nu e o componentă a temei** — e injectat de WPML într-un slot de meniu. Poate arăta ca text (`RO` / `HU`), ca steag, sau ambele. Desenează varianta **text**, cu limba curentă evidențiată; steagurile sunt o alegere proastă pentru limbi (steagul e țară, nu limbă).
6. **Header condiționat** există (modul Kadence Pro) ⇒ headerul redus pentru pagina „Mulțumim" (§10, ecran 7) e realizabil fără cod.
7. **Footerul e format din zone de widgeturi**, nu dintr-un layout liber: 3 coloane sus, 1 zonă mijloc, 2 zone jos. Coloanele tale trebuie să încapă în asta.

### 13.3 🔴 O contradicție de rezolvat înainte să desenezi

§6.7 spune: *„Pe ink: alb sau accent-light — niciodată Zomp."* Dar Zomp pe ink măsoară **5,27:1**, adică trece pragul de 4,5:1, iar footerul actual din DS chiar folosește Zomp ca hover de link.

**Regula corectă, mai precisă:** pe ink, Zomp e permis **doar ca stare de hover pentru linkuri**. Niciodată pentru text de corp, titluri sau fundal de buton pe ink — acolo rămân alb și accent-light. Aplic-o și spune în raport dacă ai folosit-o altfel.

### Ecran 12 — `Safebiz Header.html`

Un fișier, **7 stări separate vizual, etichetate**. Nu 7 fișiere.

| # | Stare | Detalii |
|---|---|---|
| 1 | **Desktop, repaus** | Rând sus: telefon + email stânga (iconițe Lucide 16px, text `--fs-small` muted), dreapta social + comutator `RO / HU`. Fundal `--color-bg-alt`, hairline jos. Rând principal: logo `logo-horizontal-color.png` (înălțime 42–48px), 5 linkuri de nivel 1, căutare (iconiță), buton **primary** „Cerere ofertă" |
| 2 | **Desktop, sticky** | Ce se schimbă la derulare: rândul de sus dispare, rândul principal se strânge, apare o umbră `--shadow-sm`. Desenează starea, nu animația — mișcarea rămâne `--transition` |
| 3 | **Mega menu „Servicii" deschis** | Panoul: **6 coloane = cele 6 categorii** din `serviceGroups`, fiecare cu titlu de categorie (`--fs-h4`, Sora) + serviciile ei ca linkuri cu iconiță Lucide 20px. Sub grilă, o bandă cu CTA-ul flagship **All-In-One** pe `--color-bg-alt`. Lățime = lățimea conținutului (1160px), nu tot ecranul. Serviciile `blocked` lipsesc.<br>🔴 6 coloane la 1160px = ~180px/coloană. Dacă titlurile se rup urât, **spune-o și propune 3×2** în loc să micșorezi tipografia sub scală |
| 4 | **Dropdown simplu „Blog"** | Cele 6 categorii din `nav.blogCategories` + un rând separat „Toate articolele →". O coloană, card alb, radius `lg`, `--shadow-md`, hairline. Ăsta e stilul implicit pentru orice dropdown care nu e mega |
| 5 | **Mobil, repaus** | Logo + hamburger. **Ținta de atingere ≥44px** (§3b). Butonul „Cerere ofertă" **nu** intră în bara mobilă — ar concura cu bara CTA lipită jos care există deja în articole |
| 6 | **Mobil, meniu deschis** | Ecran plin, nu dropdown. De sus în jos: rând cu logo + „×" · cele 5 intrări la `--fs-h4`, cu separatoare hairline · „Servicii" ca **acordeon** care descoperă cele 6 categorii (nu o listă de 22 de servicii — categoriile duc mai departe) · buton primary lat „Cerere ofertă" · telefon și email ca rânduri apăsabile · comutator `RO / HU` · social. Derulabil, cu rândul de sus fix |
| 7 | **Header redus** | Pentru „Mulțumim" și pagini de conversie: logo + un singur link „← Înapoi la site". Fără meniu, fără CTA |

**Ce NU pui în header:** numărul de telefon ca buton mare, „program de lucru", bară de anunțuri. Rândul de sus are deja 3 informații — a patra le face pe toate invizibile.

### Ecran 13 — `Safebiz Footer.html`

Un fișier, **2 variante + starea mobilă**.

| # | Secțiune | Detalii |
|---|---|---|
| 1 | **Bandă newsletter** | Deasupra footerului, pe `--color-bg-alt`: grid 2 coloane — text stânga, câmp email + buton primary dreapta, linie de consimțământ dedesubt. **Aceeași componentă ca în Batch 1**, nu o variantă nouă |
| 2 | **Corpul footerului** — fundal `--color-ink` | 4 coloane pe desktop: **(a)** logo alb + motto (Sora, accent-light) + tagline 2 rânduri + cele 3 rețele · **(b)** Servicii — cele 6 linkuri din `footerLinks.servicii` · **(c)** Resurse — Blog, Prețuri, Despre noi, Cerere ofertă · **(d)** Contact — telefon, email, adresă, program, „Vezi pe hartă →" |
| 3 | Titluri de coloană | Sora, `--fs-h4`, alb. Linkuri: alb 80% → **hover Zomp** (§13.3). Spațiere între linkuri `--space-2` |
| 4 | **Bară de jos** | Hairline `rgba(255,255,255,0.12)` deasupra. Stânga: `© 2018–2026 Safebiz Solutions`. Dreapta: cele 4 linkuri legale + comutatorul `RO / HU`. Pe mobil se stivuiește, legalul rămâne pe un rând derulabil |
| 5 | **Variantă scurtă** | Pentru „Mulțumim" și landing: doar bara de jos — logo mic, copyright, 4 linkuri legale. Fără coloane, fără newsletter |
| 6 | **Mobil** | 4 coloane → 1. Coloanele de linkuri devin **acordeoane pliate** (deschise ar da un footer de 3 ecrane); coloana de contact rămâne **desfășurată** — pe telefon, contactul e cel mai des motivul pentru care omul ajunge în footer |

🔴 **Logo:** `logo-horizontal-white.png` pe ink. **Nu** cel din 2020 care e încă pe site, și nicăieri textul „SafeBiz".

### 13.4 Ce NU desenăm în Batch 4

Pop-up-uri și exit-intent (decizie separată), bannerul de cookie-uri (îl randează SureCookie, cu propriul stil), bara CTA lipită jos pe mobil (există deja, §3b), breadcrumb-ul (e în Batch 1), pagina de căutare (Batch 3, ecran 11).

### 13.5 Ce raportezi la final

Pe lângă raportul standard din §12:

1. **Dacă mega menu-ul cu 6 coloane încape** la 1160px fără să cobori sub scala de tipografie — și ce ai făcut dacă nu.
2. **Ce se pierde** dacă meniul mobil trebuie să fie identic cu cel de desktop.
3. Dacă ai avut nevoie de o stare pe care sloturile de header din Kadence **nu** o pot exprima (§13.2.1).

## 14. Batch 5 — Pagina de vânzare REALĂ: „Creare site web de prezentare"

Un singur ecran: **`Safebiz Creare Site Prezentare.html`** — prima INSTANȚĂ reală a șablonului
de vânzare din §10, cu text final scris și confirmat de fondator.

### 14.1 Regula care domină tot batch-ul: textul e DECIS

Tot copy-ul vine din **`src/data/salespage-creare-site.ts`** și se folosește **VERBATIM** —
nicio reformulare, nicio prescurtare, niciun sinonim, nicio completare. Ai libertate totală pe
așezare, ritm vizual, ierarhie și alb — și zero libertate pe cuvinte. Dacă o secțiune „nu încape",
schimbi layoutul, nu textul; dacă tot nu încape, raportezi la final, nu tai.

De ce așa: pagina asta a trecut prin trei runde de feedback pe conținut. Fiecare frază e verificată
factual (prețuri, termene, garanții — toate din registrul de fapte al firmei). O reformulare
„nevinovată" poate transforma o afirmație adevărată într-una neacoperită.

### 14.2 Maparea secțiunilor pe componente

Ordinea de mai jos e ordinea de citit a paginii — e un fir, nu o listă. Refolosește tot ce există;
componente noi permise: **una** (lista cu bife verzi), plus adaptarea `PricingPlans` la 2 coloane.

| # | Secțiune (cheia din date) | Componentă |
|---|---|---|
| 1 | `hero` | Hero de serviciu (§10.1): gradient, H1 = `hero.h1` EXACT (poartă sintagma SEO), intro + promisiunea ca lead, 2 butoane |
| 2 | `trustStrip` | Trust strip existent, 4 iteme |
| 3 | `problema` | Proză pe 1 coloană, max 720px lățime de text; al doilea paragraf conține firul AI — dă-i respirație (e hook-ul paginii), NU-l transforma în listă |
| 4 | `ceInclude` | Titlu + 3 infoboxuri (§10.4), textele complete din `casete` |
| 5 | `listaInclusa` | 🎯 COMPONENTĂ NOUĂ „Checklist": listă cu bife verzi `--color-success` (iconiță check în cerc, text ink), 2 coloane pe desktop → 1 pe mobil, 10 iteme |
| 6 | `proces` | `Timeline` existent (4 pași) |
| 7 | `pret` | `PricingPlans` ADAPTAT la **2 coloane** (nu 3): cardul 2 = `plan--highlight`. Sub carduri, `pret.notaTva` ca paragraf muted centrat — face parte din secțiune, nu e disclaimer de subsol |
| 8 | `cuFara` | 2 coloane: stânga bife verzi (`cu`), dreapta X-uri neutre (`fara`) — NU roșu (§3 avertisment 2); sub ele, `semnatura` ca citat evidențiat (pattern „Citat" din §11) — e fraza-semnătură a firmei |
| 9 | `ceNuInclude` | Componenta „Ce NU include" din §10.8 (minus în cerc, ton neutru), 5 iteme |
| 10 | `garantii` | 3 blocuri titlu+text; primul („Dacă întârziem noi, plătim noi") primește greutate vizuală — e singura garanție asumată în scris a firmei |
| 11 | `continuitate` | Proză 2 paragrafe + sub-blocul `licente` ca bandă ink (à la „diferențiator" din §10, ecran 5) — argumentul licențelor premium incluse e diferențiator, tratează-l ca atare |
| 12 | `multilingv` | Secțiune scurtă pe bg-alt, titlu + un paragraf; nu-i da mai mult decât cere |
| 13 | `dovada` | 🔴 `slot: true` — desenează SLOT vizibil cu eticheta din `slotNote`. NU inventa clienți, sigle, capturi sau cifre |
| 14 | `faq` | `FAQ` existent, toate cele 10 întrebări |
| 15 | `ctaFinal` | Flagship refolosit + formularul (câmpurile din §10.13, se leagă la SureForms existent) |

### 14.3 Condiții de livrare

1. Ambele previzualizări din prima: **1280** și **390×844** (§3b integral).
2. **Un singur CTA principal** vizibil per viewport (regula din §5); „Cere o ofertă" din hero și
   Flagship-ul final sunt același verb, nu concurenți.
3. H1 conține sintagma „creare site web de prezentare" NEfragmentată (vine deja corect din date).
4. JSON-LD nu se generează aici (garda din §5 rămâne) — schema vine din alt sistem.
5. Raport final pe §12 plus: unde ai simțit nevoia să tai text (și n-ai făcut-o) — ca fondatorul
   să știe unde designul și copy-ul se tensionează.

### 14.4 Runda 2 — imagini și aer (feedback fondator pe prima livrare)

Prima livrare e acceptată ca structură. Două probleme de rezolvat: pagina e prea densă în text pe
alocuri, și nu are niciun element vizual în afara componentelor. Reguli întâi, sarcini apoi.

**Regula textului se NUANȚEAZĂ, nu se ridică:**

- Cuvintele rămân verbatim — nicio reformulare, niciun sinonim, nimic tăiat.
- SE PERMITE segmentarea la granițe de frază: o frază întreagă poate deveni un item de listă, un
  lead separat sau un pull-quote, cu cuvintele exact cum sunt.
- O singură spargere de frază e permisă, exact aceasta: titlul blocului de licențe devine
  eyebrow „Avantajul pe care puține agenții îl oferă" + H2 „Licențele premium sunt incluse".

**Imagini — cu constrângerea §6 (pagina se traduce în Kadence) mereu în minte:**

1. **Hero, coloana dreaptă:** un mockup de browser stilizat (fereastră cu bara de sus + blocuri
   „greeked" — bare de text, nu text fals lizibil) care sugerează un site de prezentare curat.
   FĂRĂ brand inventat, FĂRĂ conținut lizibil. Alternativ, păstrează caseta de cifre dacă
   mockupul nu iese curat din tokeni.
2. **`problema`:** fraza „Un prompt îți face un site. Nu îți face un site bun." iese din paragraf
   și devine pull-quote vizual (patternul de citat din §11) — e cârligul paginii, trateaz-o ca atare.
   Restul paragrafelor primesc mai mult alb între ele.
3. **Sloturi de imagine reale, nu decor inventat:** în `continuitate` și, opțional, lângă `proces`,
   desenează câte un slot de imagine 16:10 etichetat („fotografie / captură reală — vine de la
   fondator") — ca layoutul să fie gata pentru imagini adevărate, fără să inventezi conținut vizual.
4. Interzis, ca și până acum: fotografii de oameni, sigle, capturi de site-uri „reale" inventate.

**Aerisirea, secțiune cu secțiune:**

- **`pret`:** descrierea fiecărui card se desface la granițe de frază — prima frază rămâne lead sub
  numele pachetului, frazele următoare devin bife în card. Nota TVA devine casetă discretă de info
  (bg-alt, iconiță info), textul integral, nu paragraf plutitor.
- **`continuitate`:** al doilea paragraf (găzduire, actualizări, monitorizare, backup, suport) se
  desface în mini-listă cu bife la granițe de propoziție — cuvintele identice. Primul paragraf
  rămâne proză.
- **`garantii`:** cele 3 blocuri devin 3 carduri; primul („Dacă întârziem noi, plătim noi.")
  primește greutate vizuală clară.
- **`cuFara`, `faq`, `listaInclusa`** rămân cum sunt.

**Condiții de livrare:** ambele previzualizări (1280 + 390×844) refăcute; raport final: unde
pagina tot nu respiră după aceste schimbări — cu propunerea ta, fără să o aplici.

### 14.5 Defecte MĂSURATE pe exportul rundei 1 — se repară odată cu §14.4

Fondatorul a exportat `Safebiz Creare Site Prezentare.html` și pagina a fost verificată în browser
real la 390×844. Conținutul e 100% fidel datelor (verificat programatic, frază cu frază). Trei
defecte de mobil, toate măsurate, nu presupuse:

1. **Headerul de mobil NU există.** La 390px se randează navul complet de desktop (5 linkuri + CTA,
   582px lățime) — fără hamburger, fără vreo regulă care să-l ascundă. E recidiva exactă a
   defectului din Batch 3/4; regula de atunci rămâne: butonul hamburger există în DOM, iar
   regulile de helmet dețin comutarea — zero `display` inline pe butoane.
2. **Derulare orizontală la 390px** (scrollWidth 760 vs viewport) — cauzată de navul de mai sus.
   După fix, pagina trebuie să nu aibă NICIO derulare orizontală la 390.
3. **Bara CTA lipită jos pe mobil lipsește din export.** Dacă a fost implementată doar în starea
   de Tweak „390", mut-o în comportamentul implicit al paginii (media query reală), nu în comutator
   de previzualizare: exportul și pagina finală trebuie să fie responsive REAL, nu pe stări.

Criteriu de acceptare pentru §14.4 + §14.5 împreună: exportul HTML deschis într-un browser la
390×844 are meniu funcțional, zero overflow orizontal și bara CTA jos — fără nicio intervenție.

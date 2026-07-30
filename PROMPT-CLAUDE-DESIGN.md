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

**Contrast minim, verificat înainte de livrare:** 4,5:1 text normal · 3:1 text mare (≥24px, sau ≥19px bold) și componente.

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

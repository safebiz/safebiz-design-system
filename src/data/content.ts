/* =========================================================================
   Conținut REAL Safebiz Solutions. NU lorem ipsum, NU recenzii fabricate.
   Sursă catalog servicii: wat/tools/offer-pricing.json + product-facts.md.
   Status serviciu: 'live' (pe site) | 'ready' (gata/ofertat) | 'blocked' (conținut gata, publicare gată separat: decizie juridică/preț).
   ========================================================================= */

export const brand = {
  name: 'Safebiz Solutions', // S mare, b mic — obligatoriu
  tagline:
    'Noi gestionăm complexitatea tehnologiei, pentru ca tu să primești înapoi timpul necesar afacerii tale.',
  motto: 'Pentru siguranța afacerii tale',
  differentiator: 'Tehnic + juridic sub același acoperiș — avocat GDPR in-house, unic în piață.',
}

export const hero = {
  headline: 'Soluții Stabile pentru Prezența Online a Afacerii tale',
  subheadline:
    'Creare și întreținere website, magazin online, SEO, GDPR și automatizări — un singur partener pentru tot ce înseamnă prezența ta digitală.',
  ctaPrimary: 'Cerere ofertă',
  ctaSecondary: 'Vezi serviciile',
}

/* ---- Catalog complet, grupat pe 6 categorii ---------------------------- */
export type ServiceStatus = 'live' | 'ready' | 'blocked'
export interface Service {
  slug: string
  icon: string
  title: string
  text: string
  status: ServiceStatus
}
export interface ServiceGroup {
  category: string
  blurb: string
  services: Service[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    category: 'Web & Magazine',
    blurb: 'De la site de prezentare la magazin online — construit profesional, rapid, optimizat.',
    services: [
      { slug: 'creare-site-web-de-prezentare', icon: '🌐', title: 'Creare site de prezentare', text: 'Site WordPress responsive, profesional, mobil-friendly și optimizat SEO din construcție.', status: 'live' },
      { slug: 'magazin-online-woocommerce', icon: '🛒', title: 'Magazin online WooCommerce', text: 'Magazin complet: produse nelimitate, plată cu card, livrare, cupoane și checkout optimizat.', status: 'ready' },
      { slug: 'creare-site-restaurant-cu-comenzi-online', icon: '🍽️', title: 'Site restaurant cu comenzi online', text: 'Meniu digital + comenzi cu livrare/ridicare fără comision, notificări și QR la masă.', status: 'live' },
      { slug: 'platforma-cursuri-online', icon: '🎓', title: 'Platformă cursuri online', text: 'LMS cu module, quiz, membri și plată online — pentru educație și traininguri.', status: 'ready' },
      { slug: 'redesign-site', icon: '🎨', title: 'Redesign site existent', text: 'Reîmprospătăm designul, migrăm conținutul și optimizăm SEO on-page.', status: 'ready' },
    ],
  },
  {
    category: 'SEO & Vizibilitate',
    blurb: 'Poziționare reală în Google și în răspunsurile AI — măsurabilă, fără promisiuni goale.',
    services: [
      { slug: 'site-de-prezentare-cu-optimizare-seo', icon: '📈', title: 'Optimizare SEO / GEO (SEO + AI)', text: 'Poziționare în Google și în răspunsurile AI — audit, optimizare tehnică și conținut.', status: 'live' },
      { slug: 'optimizare-on-site', icon: '⚡', title: 'Optimizare on-site', text: 'Viteză, structură și Core Web Vitals — un site rapid convertește mai bine și urcă în Google.', status: 'live' },
      { slug: 'seo-recurent-lunar', icon: '🔁', title: 'SEO recurent lunar', text: 'Abonament: monitorizare, articole, link building și raport lunar de rezultate.', status: 'ready' },
      { slug: 'optimizare-si-administrare-google-my-business', icon: '📍', title: 'Optimizare Google My Business', text: 'Prezență locală: hărți, recenzii, informații corecte și postări periodice.', status: 'live' },
    ],
  },
  {
    category: 'Conformitate & Legal',
    blurb: 'Diferențiatorul nostru: avocat GDPR in-house. Tehnic + juridic sub același acoperiș.',
    services: [
      { slug: 'pachet-gdpr', icon: '🛡️', title: 'Pachet GDPR', text: 'Conformitate completă: cookies/CMP, politici, formulare cu temei juridic și monitorizare lunară — cu avocat in-house.', status: 'live' },
      { slug: 'audit-gdpr', icon: '🔍', title: 'Audit GDPR', text: 'Evaluăm conformitatea site-ului și primești un raport clar (versiune gratuită și versiune pro).', status: 'ready' },
      { slug: 'audit-retragere-oug-18-2026', icon: '↩️', title: 'Audit retragere online (OUG 18/2026)', text: 'Verificăm dacă magazinul respectă noile obligații privind dreptul de retragere al clienților.', status: 'blocked' },
      { slug: 'conformitate-horeca-948-2026', icon: '🏨', title: 'Conformitate site HoReCa (Ordin 948/2026)', text: 'Site conform pentru pensiuni și hoteluri clasificate 3–5 stele.', status: 'blocked' },
    ],
  },
  {
    category: 'Automatizări & Integrări',
    blurb: 'Fluxuri automate care îți economisesc ore în fiecare lună. Ofertă personalizată.',
    services: [
      { slug: 'automatizari-integrari', icon: '🤖', title: 'Automatizări & Integrări', text: 'Fluxuri automate (lead nou → email → follow-up), integrări între aplicații și pipeline-uri AI, croite pe nevoile tale.', status: 'ready' },
      { slug: 'email-marketing-automation', icon: '✉️', title: 'Email marketing automation', text: 'Setup CRM, segmentare, secvențe automate și raport lunar de rezultate.', status: 'ready' },
    ],
  },
  {
    category: 'Mentenanță & Suport',
    blurb: 'Site-ul tău rămâne rapid, sigur și actualizat — fără surprize.',
    services: [
      { slug: 'mentenanta-site-wordpress', icon: '🛠️', title: 'Mentenanță WordPress', text: 'Actualizări, backup, securitate, monitorizare și suport — 3 planuri: Start, Pro, VIP.', status: 'live' },
      { slug: 'licente-wordpress-premium', icon: '🔑', title: 'Licențe WordPress Premium', text: 'Licențe premium incluse pe durata mentenanței — economisești sute de euro pe an.', status: 'live' },
      { slug: 'curatare-site-spart', icon: '🧹', title: 'Curățare site spart', text: 'Remediere completă după un hack + securizare, împreună cu un plan de mentenanță.', status: 'ready' },
    ],
  },
  {
    category: 'Marketing & Branding',
    blurb: 'Prezență constantă și o identitate care te reprezintă.',
    services: [
      { slug: 'social-media-management', icon: '📣', title: 'Social media management', text: 'Postări, stories și reclame gestionate lunar — prezență constantă pe rețele.', status: 'ready' },
      { slug: 'logo-identitate-vizuala', icon: '🎯', title: 'Logo & identitate vizuală', text: 'Concepte logo, ghid de brand, fișiere vectoriale și kit pentru social media.', status: 'ready' },
      { slug: 'sistem-programari-online', icon: '📅', title: 'Sistem programări online', text: 'Calendar cu disponibilitate, notificări și integrare Google Calendar.', status: 'ready' },
      { slug: 'module-admin-personalizate', icon: '🧩', title: 'Module admin personalizate', text: 'Funcționalități custom în panoul WordPress, exact pe nevoia afacerii tale.', status: 'ready' },
    ],
  },
]

/* Flagship transversal */
export const flagship = {
  title: 'Pachet All-In-One',
  text: 'Site + găzduire + mentenanță + Google My Business + GDPR, sub un singur partener tehnologic. Tu te ocupi de afacere, noi de tehnologie.',
}

/* Listă plată (compatibilitate + secțiuni „featured") */
export const services: Service[] = serviceGroups.flatMap((g) => g.services)

/* ---- Planuri mentenanță (pentru componenta Pricing) -------------------- */
export interface Plan {
  name: string
  price: string
  period: string
  tagline: string
  highlight: boolean
  features: string[]
}
export const plans: Plan[] = [
  {
    name: 'Start Online',
    price: '250',
    period: 'lună',
    tagline: 'Esențialul pentru un site sigur și actualizat.',
    highlight: false,
    features: [
      'Găzduire pe server Safebiz (sau al tău)',
      'Actualizări WordPress, plugin & temă',
      'Monitorizare uptime',
      'Backup automat',
      'Certificat SSL',
      'Suport email (răspuns ≤24h lucrătoare)',
    ],
  },
  {
    name: 'Pro',
    price: '450',
    period: 'lună',
    tagline: 'Pentru afaceri care vor rapoarte și prioritate.',
    highlight: true,
    features: [
      'Tot din Start, plus:',
      'Backup zilnic',
      'Raport lunar de performanță',
      'Prioritate la intervenții',
      'SLA prioritar (opțional 8h)',
    ],
  },
  {
    name: 'VIP',
    price: '650',
    period: 'lună',
    tagline: 'Partener strategic, cu suport maxim.',
    highlight: false,
    features: [
      'Tot din Pro, plus:',
      'Consultanță strategică lunară',
      'SLA prioritar maxim (opțional 4h)',
      'Suport prioritar',
    ],
  },
]
export const plansNote =
  'Lucrări extra: 100 RON + TVA/oră (cu plan). Preț garantat în primul an. Reducere -25% pentru al doilea site.'

/* ---- Audit landing (lead-magnet — exemplu: Audit GDPR) ----------------- */
export const auditLanding = {
  eyebrow: 'Audit gratuit',
  headline: 'Verifică-ți conformitatea GDPR în 24 de ore',
  subtext:
    'Îți analizăm site-ul și primești un raport clar cu ce e în regulă și ce trebuie remediat. Fără jargon, fără costuri ascunse.',
  checklistTitle: 'Ce verificăm',
  checklist: [
    'Cookies & bannerul de consimțământ (CMP)',
    'Politica de confidențialitate și de cookie-uri',
    'Formulare și temeiul juridic al colectării datelor',
    'Transferuri de date în afara SEE',
    'Drepturile persoanelor vizate',
  ],
  cta: 'Solicită auditul gratuit',
}

/* ---- FAQ (întrebări sigure, generice) ---------------------------------- */
export const faqs = [
  { q: 'Cât durează realizarea unui site?', a: 'De regulă 1–3 săptămâni, în funcție de complexitate și de rapiditatea cu care primim conținutul.' },
  { q: 'Ce include mentenanța?', a: 'Actualizări, backup, securitate, monitorizare și suport. Detaliile diferă pe planuri (Start, Pro, VIP).' },
  { q: 'Sunteți conformi GDPR?', a: 'Da — avem avocat in-house. Configurăm cookies/CMP, politici și formulare cu temei juridic corect.' },
  { q: 'Oferiți și automatizări?', a: 'Da. Construim fluxuri automate (ex. lead nou → email → follow-up) și integrări între aplicații, pe nevoile tale. Ofertă personalizată.' },
  { q: 'Lucrați cu clienți din toată țara?', a: 'Da, lucrăm online cu clienți din întreaga țară.' },
  { q: 'Ce se întâmplă cu licențele premium?', a: 'Sunt incluse pe durata mentenanței — economisești costul licențelor individuale.' },
]

/* ---- Testimoniale ------------------------------------------------------
   ATENȚIE: PLACEHOLDER. NU sunt recenzii reale. Înlocuiește cu recenzii
   reale (cu acord) înainte de publicare — nu folosi text inventat în producție.
   ------------------------------------------------------------------------ */
export const testimonials = [
  { name: '(Nume client — de completat)', role: 'Magazin online', quote: '(Spațiu pentru o recenzie reală de client — de completat înainte de publicare.)' },
  { name: '(Nume client — de completat)', role: 'Restaurant', quote: '(Spațiu pentru o recenzie reală de client — de completat înainte de publicare.)' },
  { name: '(Nume client — de completat)', role: 'Pensiune / HoReCa', quote: '(Spațiu pentru o recenzie reală de client — de completat înainte de publicare.)' },
]

/* ---- Email marketing template (mockup de brand) ------------------------
   Cum arată un email de marketing trimis de Safebiz. În producție se traduce
   în HTML table-based pentru FluentCRM / SureContact (aici e mockup vizual).
   ------------------------------------------------------------------------ */
export const emailTemplate = {
  subject: 'Site-ul tău e pregătit pentru 2026?',
  preheader: 'O verificare rapidă de conformitate și performanță — gratuită.',
  eyebrow: 'Newsletter Safebiz',
  headline: 'Trei lucruri pe care orice site ar trebui să le aibă în 2026',
  greeting: 'Salut,',
  body: [
    'La Safebiz gestionăm complexitatea tehnologiei, ca tu să te ocupi de afacerea ta. Iată trei verificări rapide pe care merită să le faci pe site-ul tău:',
  ],
  bullets: [
    'Conformitate GDPR — cookies, politici și formulare cu temei juridic corect',
    'Viteză și Core Web Vitals optimizate — un site rapid convertește mai bine',
    'Backup automat și mentenanță — fără surprize neplăcute',
  ],
  closing: 'Dacă vrei, îți facem o verificare gratuită și îți spunem exact ce e de îmbunătățit.',
  cta: 'Solicită o verificare gratuită',
  signature: 'Echipa Safebiz Solutions',
  footerAddress: 'Safebiz Solutions · Sfântu Gheorghe, jud. Covasna · office@safebiz.ro',
  unsubscribe: 'Primești acest email pentru că te-ai abonat pe safebiz.ro. Te poți dezabona oricând.',
}

export const team = [
  { name: 'Takács Kató Katalin', role: 'Avocat — GDPR & drept comercial', bio: 'Componenta juridică in-house a Safebiz: conformitate GDPR, contracte, protecția datelor. Diferențiatorul unic în piață.' },
  { name: 'Takács Zoltán', role: 'CEO — Tehnologie, automatizări, WordPress, AI', bio: 'Construiește și automatizează infrastructura digitală a clienților: web, integrări, AI și optimizare tehnică.' },
]

export const footerLinks = {
  servicii: [
    { label: 'Creare site web de prezentare', href: '/creare-site-web-de-prezentare' },
    { label: 'Magazin online', href: '/magazin-online-woocommerce' },
    { label: 'Optimizare SEO', href: '/site-de-prezentare-cu-optimizare-seo' },
    { label: 'Automatizări & Integrări', href: '/automatizari-integrari' },
    { label: 'Mentenanță WordPress', href: '/mentenanta-site-wordpress' },
    { label: 'GDPR Online & Offline', href: '/pachet-gdpr' },
  ],
  legal: [
    { label: 'Politică de confidențialitate', href: '/politica-de-confidentialitate' },
    { label: 'Termeni și condiții', href: '/termeni-si-conditii' },
    { label: 'Politică de cookie-uri', href: '/politica-de-cookie-uri' },
    { label: 'Contact', href: '/contact' },
  ],
}

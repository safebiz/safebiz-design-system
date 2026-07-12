import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { SectionHeading } from './components/SectionHeading'
import { Card } from './components/Card'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { ServicesOverview } from './components/ServicesOverview'
import { PricingPlans } from './components/PricingPlans'
import { AuditLanding } from './components/AuditLanding'
import { FAQ } from './components/FAQ'
import { Testimonials } from './components/Testimonials'
import { EmailTemplate } from './components/EmailTemplate'
import { team, flagship } from './data/content'

const palette = [
  { name: 'Zomp (brand/CTA)', hex: '#14a68b' },
  { name: 'Oxford Blue (ink)', hex: '#0a2239' },
  { name: 'Fern Green (hover)', hex: '#3a7d44' },
  { name: 'Yellow Green Crayola', hex: '#d0db97' },
  { name: 'Medium Sea Green', hex: '#69b578' },
  { name: 'Text muted', hex: '#5a6b7d' },
]

export function App() {
  return (
    <>
      <Header />
      <Hero />

      {/* Toate serviciile — grupate pe 6 categorii */}
      <ServicesOverview />

      {/* Flagship All-In-One */}
      <section className="section section--alt">
        <div className="container">
          <Card style={{ textAlign: 'center', background: 'var(--gradient-hero)', border: 'none', color: '#fff' }}>
            <Badge variant="success">Cel mai popular</Badge>
            <h2 style={{ color: '#fff', marginTop: '1rem' }}>{flagship.title}</h2>
            <p style={{ maxWidth: 620, margin: '0 auto 1.5rem', color: 'rgba(255,255,255,0.85)' }}>{flagship.text}</p>
            <Button variant="on-dark" href="/cerere-oferta">Cerere ofertă</Button>
          </Card>
        </div>
      </section>

      {/* Planuri mentenanță */}
      <PricingPlans />

      {/* Landing audit (lead-magnet) */}
      <AuditLanding />

      {/* Despre noi */}
      <section id="despre" className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Echipa"
            title="Tehnic + juridic, sub același acoperiș"
            subtitle="Diferențiatorul nostru: avocat GDPR in-house alături de expertiză tehnică. Unic în piață."
          />
          <div className="grid grid--2">
            {team.map((m) => (
              <Card key={m.name}>
                <Badge>{m.role.split('—')[0].trim()}</Badge>
                <h3 style={{ marginTop: '1rem' }}>{m.name}</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>{m.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoniale (placeholder — a se completa cu recenzii reale) */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Șablon email marketing */}
      <EmailTemplate />

      {/* CTA final */}
      <section className="section">
        <div className="container">
          <Card style={{ textAlign: 'center', background: 'var(--color-accent-light)', border: 'none' }}>
            <h2>Ești gata să-ți construim prezența online?</h2>
            <p style={{ maxWidth: 560, margin: '0 auto 1.5rem' }}>
              Primești o ofertă clară, fără jargon. Noi gestionăm complexitatea tehnologiei — tu îți recuperezi timpul.
            </p>
            <Button href="/cerere-oferta">Cerere ofertă</Button>
          </Card>
        </div>
      </section>

      {/* ---- STYLE GUIDE (referință pentru Claude Design) ---- */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Design System" title="Style guide" />

          <h3>Culori (LOCKED)</h3>
          <div className="swatches" style={{ marginBottom: '3rem' }}>
            {palette.map((c) => (
              <div className="swatch" key={c.hex}>
                <div className="swatch__color" style={{ background: c.hex }} />
                <div className="swatch__meta">
                  <strong>{c.name}</strong>
                  <code>{c.hex}</code>
                </div>
              </div>
            ))}
          </div>

          <h3>Tipografie (Sora + Inter)</h3>
          <div style={{ marginBottom: '3rem' }}>
            <h1>Titlu H1 — Sora Bold</h1>
            <h2>Titlu H2 — Sora Bold</h2>
            <h3>Titlu H3 — Sora Semibold</h3>
            <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--color-text-muted)' }}>
              Lead / subheadline — Inter Regular. Diacritice: ă î â ș ț.
            </p>
            <p>Body text — Inter Regular, ~18px, line-height 1.6.</p>
          </div>

          <h3>Butoane & badge-uri</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Badge>Info</Badge>
            <Badge variant="success">Success</Badge>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

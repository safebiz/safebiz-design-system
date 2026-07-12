import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { ServiceCard } from './components/ServiceCard'
import { SectionHeading } from './components/SectionHeading'
import { Card } from './components/Card'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { services, team } from './data/content'

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

      {/* Servicii */}
      <section id="servicii" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Ce facem"
            title="Serviciile Safebiz"
            subtitle="Un singur partener pentru tot ce înseamnă prezența ta online — de la construcție la conformitate."
          />
          <div className="grid grid--3">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

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
            <p>Body text — Inter Regular, ~18px, line-height 1.6. Lizibil pe text lung, cu diacritice românești corecte.</p>
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

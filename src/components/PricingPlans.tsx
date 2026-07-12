import { plans, plansNote } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { Button } from './Button'
import { Badge } from './Badge'

/**
 * Safebiz — Tabel planuri mentenanță (Start / Pro / VIP). Pro = evidențiat.
 */
export function PricingPlans() {
  return (
    <section id="preturi" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Planuri"
          title="Mentenanță WordPress"
          subtitle="Alege planul potrivit. Preț garantat în primul an, fără costuri ascunse."
        />
        <div className="grid grid--3 pricing">
          {plans.map((p) => (
            <div key={p.name} className={`card plan${p.highlight ? ' plan--highlight' : ''}`}>
              {p.highlight && <div className="plan__ribbon"><Badge variant="success">Recomandat</Badge></div>}
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__tagline">{p.tagline}</p>
              <div className="plan__price">
                <span className="plan__amount">{p.price}</span>
                <span className="plan__unit">RON + TVA / {p.period}</span>
              </div>
              <ul className="plan__features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Button variant={p.highlight ? 'primary' : 'secondary'} href="/cerere-oferta">
                Alege {p.name}
              </Button>
            </div>
          ))}
        </div>
        <p className="pricing__note">{plansNote}</p>
      </div>
    </section>
  )
}

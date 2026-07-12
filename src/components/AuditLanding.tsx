import { auditLanding } from '../data/content'
import { Button } from './Button'

/**
 * Safebiz — Landing de audit / lead-magnet („audit gratuit → formular").
 * Șablon reutilizabil pentru: Audit GDPR, Audit retragere (OUG 18/2026), Audit SEO prospecți.
 * Props permit refolosirea cu alt conținut de audit.
 */
export function AuditLanding({
  eyebrow = auditLanding.eyebrow,
  headline = auditLanding.headline,
  subtext = auditLanding.subtext,
  checklistTitle = auditLanding.checklistTitle,
  checklist = auditLanding.checklist,
  cta = auditLanding.cta,
}: Partial<typeof auditLanding> = {}) {
  return (
    <section className="section audit">
      <div className="container audit__grid">
        <div className="audit__copy">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{headline}</h2>
          <p className="audit__lead">{subtext}</p>
          <Button variant="primary" href="/cerere-oferta">{cta}</Button>
        </div>
        <div className="card audit__card">
          <h3>{checklistTitle}</h3>
          <ul className="checklist">
            {checklist.map((item) => (
              <li key={item}><span className="checklist__mark" aria-hidden>✓</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

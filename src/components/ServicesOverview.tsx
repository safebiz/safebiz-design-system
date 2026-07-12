import { serviceGroups } from '../data/content'
import type { ServiceStatus } from '../data/content'
import { SectionHeading } from './SectionHeading'

const STATUS_LABEL: Record<ServiceStatus, string | null> = {
  live: null,
  ready: null,
  blocked: 'În pregătire',
}

/**
 * Safebiz — Toate serviciile, grupate pe 6 categorii.
 * Scalează dincolo de cele 6 carduri inițiale. Fiecare serviciu duce la un ServiceDetail.
 */
export function ServicesOverview({ onService }: { onService?: (slug: string) => void }) {
  return (
    <section id="servicii" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Ce facem"
          title="Serviciile Safebiz"
          subtitle="Un singur partener pentru tot ce înseamnă prezența ta online — de la construcție la conformitate și automatizări."
        />
        {serviceGroups.map((group) => (
          <div key={group.category} className="svc-group">
            <div className="svc-group__head">
              <h3>{group.category}</h3>
              <p>{group.blurb}</p>
            </div>
            <div className="grid grid--3">
              {group.services.map((s) => (
                <button
                  key={s.slug}
                  className="card service-card service-card--btn"
                  onClick={() => onService?.(s.slug)}
                  type="button"
                >
                  <div className="icon" aria-hidden>{s.icon}</div>
                  <h4>
                    {s.title}
                    {STATUS_LABEL[s.status] && <span className="tag-soon">{STATUS_LABEL[s.status]}</span>}
                  </h4>
                  <p>{s.text}</p>
                  <span className="link">Află mai mult →</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

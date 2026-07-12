import { testimonials } from '../data/content'
import { SectionHeading } from './SectionHeading'

/**
 * Safebiz — Testimoniale.
 * ATENȚIE: datele din content.ts sunt PLACEHOLDER, nu recenzii reale.
 * Înlocuiește cu recenzii reale (cu acord) înainte de publicare.
 */
export function Testimonials() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeading eyebrow="Ce spun clienții" title="Rezultate, nu promisiuni" />
        <div className="grid grid--3">
          {testimonials.map((t, i) => (
            <figure key={i} className="card testimonial">
              <div className="testimonial__stars" aria-hidden>★★★★★</div>
              <blockquote className="testimonial__quote">{t.quote}</blockquote>
              <figcaption className="testimonial__who">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

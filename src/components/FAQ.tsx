import { useState } from 'react'
import { faqs } from '../data/content'
import { SectionHeading } from './SectionHeading'

/**
 * Safebiz — FAQ accordion. Componentă de încredere, folosibilă pe orice pagină.
 */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="section">
      <div className="container container--narrow">
        <SectionHeading eyebrow="Întrebări frecvente" title="Ce ne întreabă clienții" />
        <div className="faq">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                <button className="faq__q" type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="faq__a">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

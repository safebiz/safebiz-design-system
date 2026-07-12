import { Button } from './Button'
import { brand, hero } from '../data/content'

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <h1>{hero.headline}</h1>
        <p className="hero__lead">{hero.subheadline}</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="on-dark" href="/cerere-oferta">
            {hero.ctaPrimary}
          </Button>
          <Button variant="secondary" href="#servicii">
            {hero.ctaSecondary}
          </Button>
        </div>
        <p className="hero__tagline">{brand.tagline}</p>
      </div>
    </section>
  )
}

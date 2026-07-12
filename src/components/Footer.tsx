import { brand, footerLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <img className="footer__logo" src="/logo/logo-horizontal-white.png" alt="Safebiz Solutions" />
          <p className="footer__motto">{brand.motto}</p>
          <p style={{ maxWidth: 320, fontSize: '0.9rem' }}>{brand.tagline}</p>
        </div>
        <div>
          <h4>Servicii</h4>
          {footerLinks.servicii.map((l) => (
            <div key={l.href}>
              <a href={l.href}>{l.label}</a>
            </div>
          ))}
        </div>
        <div>
          <h4>Legal</h4>
          {footerLinks.legal.map((l) => (
            <div key={l.href}>
              <a href={l.href}>{l.label}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        © 2018–2026 {brand.name}
      </div>
    </footer>
  )
}

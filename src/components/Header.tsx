import { Button } from './Button'

export function Header() {
  return (
    <header className="header">
      <img className="header__logo" src="/logo/logo-horizontal-color.png" alt="Safebiz Solutions" />
      <nav className="header__nav">
        <a href="#servicii">Servicii</a>
        <a href="#despre">Despre noi</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <Button href="/cerere-oferta">Cerere ofertă</Button>
      </nav>
    </header>
  )
}

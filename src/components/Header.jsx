import { ArrowRightIcon } from './Icons.jsx'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Relevo, ir al inicio">
          <img src="/relevo-logo.png" alt="Relevo" width="183" height="52" />
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#problema">El problema</a>
        </nav>

        <a className="header-action" href="#problema">
          Conoce Relevo <ArrowRightIcon size={16} />
        </a>
      </div>
    </header>
  )
}

export default Header

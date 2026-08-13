import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const linkClass = ({ isActive }) => (isActive ? 'active' : '')

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={closeMenu} aria-label="Página inicial">
        <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="Logotipo Salão da Diana" />
      </Link>

      <button className="menu-toggle" type="button" aria-label="Abrir ou fechar menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
        <span /><span /><span />
      </button>

      <nav className={menuOpen ? 'nav-menu nav-open' : 'nav-menu'} aria-label="Navegação principal">
        <NavLink to="/" end className={linkClass} onClick={closeMenu}>Início</NavLink>
        <NavLink to="/servicos" className={linkClass} onClick={closeMenu}>Serviços</NavLink>
        <a href="/#sobre" onClick={closeMenu}>Sobre</a>
        <a href="/#galeria" onClick={closeMenu}>Galeria</a>
        <a href="/#contato" onClick={closeMenu}>Contato</a>
      </nav>

      <Link className="button button-dark header-action" to="/agendamento">Agendar</Link>
    </header>
  )
}

export default Header

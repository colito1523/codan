"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaUser, FaShoppingCart } from "react-icons/fa"
import { FiMenu, FiX } from "react-icons/fi"

import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="header">
      <div className="container header-container">
        {/* IZQUIERDA: Logo */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <h1 className="logo">FITNESS</h1>
          </Link>
        </div>

        {/* CENTRO: Navegación */}
       {/* CENTRO: Navegación + Iconos en responsive */}
<nav className={`nav-container ${menuOpen ? "nav-open" : ""}`}>
  <ul className="nav-list">
    <li className="nav-item">
      <Link
        to="/asesoramiento"
        className={`nav-link ${location.pathname === "/asesoramiento" ? "active" : ""}`}
      >
        ASESORAMIENTO
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/Rutinas" className={`nav-link ${location.pathname === "/Rutinas" ? "active" : ""}`}>
        RUTINAS
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/nutricion" className={`nav-link ${location.pathname === "/nutricion" ? "active" : ""}`}>
        NUTRICIÓN
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/#contacto" className="nav-link">
        CONTACTO
      </Link>
    </li>
  </ul>

  {/* ÍCONOS SOLO EN MOBILE */}
  <div className="nav-icons-mobile">
    <Link to="/cuenta" className="icon-link" aria-label="Cuenta">
      <FaUser />
    </Link>
    <Link to="/carrito" className="icon-link" aria-label="Carrito">
      <FaShoppingCart />
    </Link>
  </div>
</nav>

        {/* Botón menú móvil */}
        <button
  className="menu-button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
>
  {menuOpen ? <FiX className="menu-icon-react" /> : <FiMenu className="menu-icon-react" />}
</button>

      </div>
    </header>
  )
}

export default Header

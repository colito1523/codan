// Header.jsx

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { FiMenu, FiX } from "react-icons/fi"
import CartModal from "./CartModal"
import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">
        {/* IZQUIERDA: Logo */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <h1 className="logo">CODAN</h1>
          </Link>
        </div>

        {/* CENTRO: Navegación */}
        <nav className={`nav-container ${menuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            {/* 
                Cambiamos <Link to="/asesoramiento" ...> 
                por <a href="#about-us"> para hacer scroll a esa sección.
            */}
            <li className="nav-item">
              <a
                href="#about-us"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                ASESORAMIENTO
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#routines"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                RUTINAS
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#nutrition-plans"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                NUTRICIÓN
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                CONTACTO
              </a>
            </li>

            {/* ÍCONOS SOLO EN MOBILE */}
            <li className="nav-icons-mobile">
              <a
                href="#!"
                className="icon-link"
                aria-label="Carrito"
                onClick={() => setIsCartOpen(true)}
              >
                <FaShoppingCart />
              </a>
            </li>
          </ul>
        </nav>

        {/* ÍCONOS EN ESCRITORIO */}
        <div className="icons-container">
          <a
            href="#!"
            className="icon-link"
            aria-label="Carrito"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart />
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX className="menu-icon-react" /> : <FiMenu className="menu-icon-react" />}
        </button>
      </div>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}

export default Header

"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { FiMenu, FiX } from "react-icons/fi"
import CartModal from "./CartModal"
import { useCart } from "../context/CartContext"
import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartItems } = useCart()

  const cartItemCount = cartItems.length

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
            <li className="nav-item">
              <a href="#about-us" className="nav-link" onClick={() => setMenuOpen(false)}>
                ASESORAMIENTO
              </a>
            </li>
            <li className="nav-item">
              <a href="#routines" className="nav-link" onClick={() => setMenuOpen(false)}>
                RUTINAS
              </a>
            </li>
            <li className="nav-item">
              <a href="#nutrition" className="nav-link" onClick={() => setMenuOpen(false)}>
                NUTRICIÓN
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                CONTACTO
              </a>
            </li>

            {/* ÍCONOS SOLO EN MOBILE */}
            
          </ul>
        </nav>

        {/* ÍCONOS EN ESCRITORIO */}

        {/* Botón menú móvil */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FiX className="menu-icon-react" /> : <FiMenu className="menu-icon-react" />}
        </button>
      </div>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}

export default Header

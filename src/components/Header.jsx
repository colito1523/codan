"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <h1 className="logo">FITNESS</h1>
          </Link>
        </div>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`menu-icon ${menuOpen ? "open" : ""}`}></span>
        </button>

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
              <Link to="/Rutinas" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                RUTINAS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nutricion" className={`nav-link ${location.pathname === "/nutricion" ? "active" : ""}`}>
                NUTRICIÓN
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#contacto" className={`nav-link ${location.pathname === "/#contacto" ? "active" : ""}`}>
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header


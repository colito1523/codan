import "./Footer.css"
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">FITNESS</h3>
            <p className="footer-text">Transformando vidas a través del fitness, la alimentación y la mentalidad.</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">ENLACES RÁPIDOS</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Planes de Entrenamiento
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Nutrición
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">CONTACTO</h3>
          <div className="contact-item">
  <FaInstagram className="contact-icon" />
  <a
    href="https://www.instagram.com/valen_colombofitt/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-text"
  >
    @Valen_colombo02
  </a>
</div>
<div className="contact-item">
  <FaInstagram className="contact-icon" />
  <a
    href="https://www.instagram.com/aleedaniele/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-text"
  >
    @Aleedaniele
  </a>
</div>


          </div>

         
        </div>

        <div className="copyright">
          <p className="copyright-text">© 2023 FITNESS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


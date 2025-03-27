import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">FITNESS</h3>
            <p className="footer-text">Transformando vidas a través del fitness y la nutrición desde 2015.</p>
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
              <i className="contact-icon location"></i>
              <span className="contact-text">Av. Ejemplo 1234, Ciudad</span>
            </div>
            <div className="contact-item">
              <i className="contact-icon phone"></i>
              <span className="contact-text">+54 11 1234-5678</span>
            </div>
            <div className="contact-item">
              <i className="contact-icon email"></i>
              <span className="contact-text">info@fitness.com</span>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">SÍGUENOS</h3>
            <div className="social-links">
              <a href="#" className="social-icon instagram"></a>
              <a href="#" className="social-icon facebook"></a>
              <a href="#" className="social-icon twitter"></a>
              <a href="#" className="social-icon youtube"></a>
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


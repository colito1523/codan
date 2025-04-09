import "./aboutUs.css"
import alejandroImg from "../assets/alejandro.jpg"
import valentinoImg from "../assets/valentino.jpg"

const AboutUs = () => {
  return (
    <section className="section about-us" id="about-us">
      <div className="container">
        <div className="about-content">
          <div className="about-images">
            <div className="trainer-wrapper">
              <div className="trainer-card alejandro">
                <div className="image-container">
                  <img src={alejandroImg || "/placeholder.svg"} alt="Entrenador Alejandro" className="trainer-image" />
                </div>
                <div className="trainer-name">ALEJANDRO</div>
              </div>

              <div className="trainer-card valentino">
                <div className="image-container">
                  <img src={valentinoImg || "/placeholder.svg"} alt="Entrenador Valentino" className="trainer-image" />
                </div>
                <div className="trainer-name">VALENTINO</div>
              </div>
            </div>
          </div>

          <div className="about-text">
            <div className="title-container-with-bg">
              <div className="title-background">FITNESS</div>
              <div className="title-content">
                <h2 className="title">SOBRE</h2>
                <h2 className="accent-title">NOSOTROS</h2>
              </div>
            </div>

            <p className="paragraph">
              Somos dos apasionados instructores de fitness que se han convertido en referentes en el mundo del
              bienestar y la salud.
            </p>
            <p className="paragraph">
              Con un enfoque integral, combinamos nuestra experiencia en entrenamiento físico.
            </p>
            <p className="paragraph">
              Con una sólida formación en nutrición, diseñamos planes de alimentación personalizados que se adaptan a
              las necesidades y objetivos que tengas.
            </p>
            <p className="paragraph">
              <span className="name-highlight">Alejandro</span> destaca por su enfoque profesional, siempre guiando a
              sus alumnos a superar sus límites y encontrar su mejor versión.
            </p>
            <p className="paragraph">
              <span className="name-highlight">Valentino</span> se distingue por su meticulosidad en la planificación de
              rutinas y dietas, asegurándose de que cada aspecto de la salud de sus clientes esté cubierto.
            </p>
            <p className="paragraph">
              Juntos, crean un ambiente de camaradería y comprensión donde cada sesión de entrenamiento se convierte en
              una oportunidad para crecer, tanto físicamente como en conocimientos sobre cómo llevar un estilo de vida
              saludable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs


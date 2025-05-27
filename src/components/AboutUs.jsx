"use client"
import { useState, useEffect } from "react"
import "./aboutUs.css"
import alejandroImg from "../assets/alejandro.jpg"
import valentinoImg from "../assets/Valentino_Antes.jpeg"
// Assuming you'll add these new images to your assets folder
import alejandroImg2 from "../assets/alejandro1.jpg"
import valentinoImg2 from "../assets/Valentino_Despues.jpeg"

const AboutUs = () => {
  const [activeAlejandroImage, setActiveAlejandroImage] = useState(0)
  const [activeValentinoImage, setActiveValentinoImage] = useState(0)

  const alejandroImages = [alejandroImg, alejandroImg2]
  const valentinoImages = [valentinoImg, valentinoImg2]

  // Auto transition effect
  useEffect(() => {
    const alejandroInterval = setInterval(() => {
      setActiveAlejandroImage((prev) => (prev === 0 ? 1 : 0))
    }, 5000)

    const valentinoInterval = setInterval(() => {
      setActiveValentinoImage((prev) => (prev === 0 ? 1 : 0))
    }, 5000)

    return () => {
      clearInterval(alejandroInterval)
      clearInterval(valentinoInterval)
    }
  }, [])

  return (
    <section className="section about-us sape" id="about-us">
      <div className="container">
         <div className="title-container-with-bg">
              <div className="title-background">FITNESS</div>
              <div className="title-content">
                <h2 className="title">SOBRE</h2>
                <h2 className="accent-title">NOSOTROS</h2>
              </div>
            </div>
        <div className="about-content">
          <div className="about-images">
            <div className="trainer-wrapper">
              <div className="trainer-card alejandro">
                <div className="image-container">
                  <div className="image-slider">
                    {alejandroImages.map((img, index) => (
                      <img
                        key={index}
                        src={img || "/placeholder.svg"}
                        alt={`Entrenador Alejandro ${index + 1}`}
                        className={`trainer-image ${activeAlejandroImage === index ? "active" : ""}`}
                      />
                    ))}
                  </div>
                  <div className="image-dots">
                    {alejandroImages.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${activeAlejandroImage === index ? "active" : ""}`}
                        onClick={() => setActiveAlejandroImage(index)}
                      ></span>
                    ))}
                  </div>
                </div>
                <div className="trainer-name">ALEJANDRO</div>
              </div>

              <div className="trainer-card valentino">
                <div className="image-container">
                  <div className="image-slider">
                    {valentinoImages.map((img, index) => (
                      <img
                        key={index}
                        src={img || "/placeholder.svg"}
                        alt={`Entrenador Valentino ${index + 1}`}
                        className={`trainer-image ${activeValentinoImage === index ? "active" : ""}`}
                      />
                    ))}
                  </div>
                  <div className="image-dots">
                    {valentinoImages.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${activeValentinoImage === index ? "active" : ""}`}
                        onClick={() => setActiveValentinoImage(index)}
                      ></span>
                    ))}
                  </div>
                </div>
                <div className="trainer-name">VALENTINO</div>
              </div>
            </div>
          </div>


          <div className="about-text">
           

            <p className="paragraph">
              ¡Hola! Somos Alejandro Daniele y Valentino Colombo, 2 expertos en la superación personal.
            </p>
            <p className="paragraph">
              Con más de 4 años de experiencia en gimnasio y toda una vida dedicada al deporte y la autosuperación,
              hemos aprendido que la disciplina y la resiliencia son clave para lograr cualquier objetivo en la vida.
              Ambos nos hemos transformado tanto física como mentalmente, y queremos darte las claves para conseguirlo
            </p>
            <p className="paragraph">
              Nuestro objetivo es ayudarte a lograr dicha transformación física-mental para que puedas alcanzar tus
              objetivos personales, por eso mismo creamos CoDanFit.
            </p>
            <p className="paragraph">
              Queremos compartir contigo lo que conlleva construir tu físico y mentalidad, y todo lo que hemos aprendido
              a lo largo de los años para que puedas optimizar tu tiempo, dejar de procrastinar y alcanzar tus metas.
            </p>
            <p className="paragraph">
              Sabemos que, con las herramientas y la guía adecuada, tú también puedes alcanzar la vida de tus sueños
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

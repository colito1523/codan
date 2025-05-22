import "./NutritionPlans.css"
import nutrition1 from "../assets/nutrition1.jpg"
import nutrition2 from "../assets/nutrition2.jpg"
import nutrition3 from "../assets/nutrition3.jpeg"
import nutrition4 from "../assets/nutrition4.jpeg"
import PaypalButtonNutrition from "../components/Paypal/PaypalButtonNutrition"
import Modal from "./Modal"

import { useState, useEffect, useRef } from "react"

const sliderInterval = 1000

const NutritionPlans = () => {
  const [activeAlejandroImage, setActiveAlejandroImage] = useState(0)
    const [activeValentinoImage, setActiveValentinoImage] = useState(0)
      const [isModalOpen, setIsModalOpen] = useState(false)
  
    const alejandroImages = [nutrition1,nutrition2]
    const valentinoImages = [nutrition3, nutrition4]
  
    // Auto transition effect
    useEffect(() => {
      const alejandroInterval = setInterval(() => {
        setActiveAlejandroImage((prev) => (prev === 0 ? 1 : 0))
      }, 2000)
  
      const valentinoInterval = setInterval(() => {
        setActiveValentinoImage((prev) => (prev === 0 ? 1 : 0))
      }, 2000)
  
      return () => {
        clearInterval(alejandroInterval)
        clearInterval(valentinoInterval)
      }
    }, [])
  

  return (
    <section className="section nutrition-plans" id="nutrition">
      <div className="container">
        <div className="nutrition-title-container">
          <h2 className="nutrition-title">
            PLANES <span className="nutrition-accent-title">NUTRICIONALES</span>
          </h2>
        </div>

        <div className="nutrition-content">
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
                
              </div>
            </div>
          </div>

          <div className="nutrition-text">
            <div className="nutrition-point">
              <div className="nutrition-bullet"></div>
              <p className="nutrition-paragraph">
                ¡Bienvenidos a un nuevo enfoque de alimentación! En nuestra sección de dietas personalizadas, rompemos con el mito de las "dietas estrictas" que tanto nos alejan de nuestros objetivos. Creemos firmemente que la clave para alcanzar y mantener un estilo de vida saludable está en la flexibilidad y en la adherencia de hábitos alimenticios que se adapten a ti y a tus necesidades.
              </p>
            </div>

            <div className="nutrition-point">
              <div className="nutrition-bullet"></div>
              <p className="nutrition-paragraph">
                La dieta personalizada está diseñadas para ser un complemento placentero a tu vida. Para que puedas disfrutar de tus comidas favoritas mientras sigues avanzando hacia tus metas de salud y objetivos deportivos.
              </p>
            </div>

              <div className="nutrition-point">
              <div className="nutrition-bullet"></div>
              <p className="nutrition-paragraph">
               Mejora tu relación con la comida y descubre una forma de alimentarte que se sienta natural y cómoda. Te invitamos a dar el primer paso hacia un cambio positivo y duradero, donde la dieta se convierta en un aliado y no una carga.
              </p>
            </div>

           <div className="nutrition-action-area">
  <div className="price-display">
    <span className="price-value">U$D 40.00</span>
    <span className="price-period">Inversión</span>
  </div>

  <button className="action-button" onClick={() => setIsModalOpen(true)}>
    VER PLAN NUTRICIONAL
  </button>
</div>
<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <PaypalButtonNutrition/>
</Modal>

          </div>
        </div>
      </div>
    </section>
  )
}

export default NutritionPlans

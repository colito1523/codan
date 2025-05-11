"use client"

import "./NutritionPlans.css"
import nutrition1 from "../assets/nutrition1.jpg"
import nutrition2 from "../assets/nutrition2.jpg"
import nutrition3 from "../assets/nutrition3.jpeg"
import nutrition4 from "../assets/nutrition4.jpeg"

import { useState, useEffect, useRef } from "react"

const sliderInterval = 3000

const NutritionPlans = () => {
  const [indexOne, setIndexOne] = useState(0)
  const [indexTwo, setIndexTwo] = useState(0)
  const [loadedOne, setLoadedOne] = useState(true)
  const [loadedTwo, setLoadedTwo] = useState(true)
  const [prevIndexOne, setPrevIndexOne] = useState(0)
  const [prevIndexTwo, setPrevIndexTwo] = useState(0)

  const sliderOneImages = [nutrition1,nutrition3]
  const sliderTwoImages = [nutrition2,nutrition4]

  const timerOneRef = useRef(null)
  const timerTwoRef = useRef(null)

  useEffect(() => {
    // First slider
    timerOneRef.current = setInterval(() => {
      setPrevIndexOne((prev) => prev)
      setLoadedOne(false)
  
      setTimeout(() => {
        setIndexOne((prev) => (prev + 1) % sliderOneImages.length)
        setTimeout(() => {
          setLoadedOne(true)
        }, 100)
      }, 600)
    }, sliderInterval)
  
    // Second slider with offset
    timerTwoRef.current = setInterval(() => {
      setPrevIndexTwo((prev) => prev)
      setLoadedTwo(false)
  
      setTimeout(() => {
        setIndexTwo((prev) => (prev + 1) % sliderTwoImages.length)
        setTimeout(() => {
          setLoadedTwo(true)
        }, 100)
      }, 600)
    }, sliderInterval + 1500) // Offset to avoid simultaneous transitions
  
    return () => {
      clearInterval(timerOneRef.current)
      clearInterval(timerTwoRef.current)
    }
  }, []) // <-- Acá, vacío, no pongas indexOne ni indexTwo
  

  return (
    <section className="section nutrition-plans" id="nutrition">
      <div className="container">
        <div className="nutrition-title-container">
          <h2 className="nutrition-title">
            PLANES <span className="nutrition-accent-title">NUTRICIONALES</span>
          </h2>
        </div>

        <div className="nutrition-content">
          <div className="nutrition-images">
            <div className="nutrition-wrapper">
              <div className="trainer-card one">
                <div className="image-nutrition-container">
                  {/* Current image */}
                  <img
                    src={sliderOneImages[indexOne] || "/placeholder.svg"}
                    className={`nutrition-image ${loadedOne ? "loaded" : ""}`}
                    alt="slide uno"
                  />
                  {/* Previous image for smooth transition */}
                  <img
                    src={sliderOneImages[prevIndexOne] || "/placeholder.svg"}
                    className={`nutrition-image ${!loadedOne ? "loaded" : ""}`}
                    alt="slide uno anterior"
                    style={{ zIndex: -1 }}
                  />
                </div>
              </div>

              <div className="trainer-card two">
                <div className="image-nutrition-container">
                  {/* Current image */}
                  <img
                    src={sliderTwoImages[indexTwo] || "/placeholder.svg"}
                    className={`nutrition-image ${loadedTwo ? "loaded" : ""}`}
                    alt="slide dos"
                  />
                  {/* Previous image for smooth transition */}
                  <img
                    src={sliderTwoImages[prevIndexTwo] || "/placeholder.svg"}
                    className={`nutrition-image ${!loadedTwo ? "loaded" : ""}`}
                    alt="slide dos anterior"
                    style={{ zIndex: -1 }}
                  />
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

            <button className="action-button">VER PLAN NUTRICIONAL</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NutritionPlans

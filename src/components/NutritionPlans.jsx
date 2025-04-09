"use client"

import "./NutritionPlans.css"
import nutrition1 from "../assets/nutrition1.jpg"
import nutrition2 from "../assets/nutrition2.jpg"
import nutrition3 from "../assets/alejandro.jpg"
import nutrition4 from "../assets/asesoria1.jpg"
import nutrition5 from "../assets/asesoria2.jpg"
import nutrition6 from "../assets/asesoria3.jpg"

import { useState, useEffect, useRef } from "react"

const sliderInterval = 3000

const NutritionPlans = () => {
  const [indexOne, setIndexOne] = useState(0)
  const [indexTwo, setIndexTwo] = useState(0)
  const [loadedOne, setLoadedOne] = useState(true)
  const [loadedTwo, setLoadedTwo] = useState(true)
  const [prevIndexOne, setPrevIndexOne] = useState(0)
  const [prevIndexTwo, setPrevIndexTwo] = useState(0)

  const sliderOneImages = [nutrition1, nutrition3, nutrition5]
  const sliderTwoImages = [nutrition2, nutrition4, nutrition6]

  const timerOneRef = useRef(null)
  const timerTwoRef = useRef(null)

  useEffect(() => {
    // First slider
    timerOneRef.current = setInterval(() => {
      setPrevIndexOne(indexOne)
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
      setPrevIndexTwo(indexTwo)
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
  }, [indexOne, indexTwo, sliderOneImages.length, sliderTwoImages.length])

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
                En nuestra Asesoría te brindaremos todas las herramientas para que puedas alcanzar tu objetivo. Desde
                una Rutina de entrenamiento personalizada (armada en base a un formulario que se te enviará para
                conocerte bien), un cuaderno de entrenamiento. Hay 3 tipos de Asesorías: La Básica, la Estándar y la
                Premium.
              </p>
            </div>

            <div className="nutrition-point">
              <div className="nutrition-bullet"></div>
              <p className="nutrition-paragraph">
                En nuestra Asesoría te brindaremos todas las herramientas para que puedas alcanzar tu objetivo. Desde
                una Rutina de entrenamiento personalizada (armada en base a un formulario que se te enviará para
                conocerte bien), un cuaderno de entrenamiento. Hay 3 tipos de Asesorías: La Básica, la Estándar y la
                Premium.
              </p>
            </div>

            <button className="nutrition-button">VER PLAN NUTRICIONAL</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NutritionPlans

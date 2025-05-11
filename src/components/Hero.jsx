"use client"

import { useState, useEffect } from "react"
import "./hero.css"
import sliderImage1 from "../assets/slider1.png" // ajustá el path según la estructura
import sliderImage2 from "../assets/slider2.png" // ajustá el path según la estructura
import sliderImage3 from "../assets/slider3.png" // ajustá el path según la estructura

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: sliderImage1,
      title1: "",
      titleAccent1: "",
      title2: "SERVICIOS DE RUTINAS",
      titleAccent2: "PERSONALIZADAS ",
      description:
        "Rutina personalizada a tu objetivo personal-físico que se adapte a tus metas en el gimnasio ya sea, recomposición corporal, ganancia de masa muscular, pérdida de grasa, mayor flexibilidad, etc.  Analizamos tus caso mediante una encuesta y armamos el plan de trabajo 100% para ti",
      buttonText: "VER MÁS",
      targetId: "routines", // 🔁 Scroll hacia Routines
    },
    {
      image: sliderImage2,
      title1: "PERDE",
      titleAccent1: "GRASA",
      title2: "GANA",
      titleAccent2: "MASA MUSCULAR",
      description:
        "Descubre nuestros planes nutricionales personalizados diseñados para perder peso de manera efectiva o ganar masa muscular de forma saludable",
      buttonText: "VER MÁS",
      targetId: "nutrition-plans", // 🔁 Scroll hacia NutritionPlans
    },
    {
      image: sliderImage3,
      title1: "",
      titleAccent1: "",
      title2: "SERVICIO",
      titleAccent2: "ASESORAMIENTO",
      description:
        "En nuestra Asesoría te brindaremos todas las herramientas para que puedas alcanzar tus metas físicas y personales. Contando con un plan 2 a 1 con seguimiento y ajustes específicos en base tu objetivo y estilo de vida.",
      buttonText: "VER MÁS",
      targetId: "pricing", // 🔁 Scroll hacia Pricing
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <section className="hero" id="hero">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay">
              <div className="hero-content">
                <h2 className="hero-title">
                  {slide.title1} <span className="accent">{slide.titleAccent1}</span>
                </h2>
                <h2 className="hero-title">
                  {slide.title2} <span className="accent">{slide.titleAccent2}</span>
                </h2>
                <p className="hero-subtitle">{slide.description}</p>
                <button
  className="action-button"
  onClick={() => {
    const target = document.getElementById(slide.targetId)
    if (target) target.scrollIntoView({ behavior: "smooth" })
  }}
>
  {slide.buttonText}
</button>

              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-arrow prev" onClick={prevSlide} aria-label="Anterior">
        <span>&lt;</span>
      </button>
      <button className="slider-arrow next" onClick={nextSlide} aria-label="Siguiente">
        <span>&gt;</span>
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Hero


"use client"

import { useState, useEffect } from "react"
import "./Hero.css"
import sliderImage from "../assets/Slider.jpg" // ajustá el path según la estructura

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: sliderImage,
      title1: "TRANSFORMA",
      titleAccent1: "TU CUERPO",
      title2: "CON LOS",
      titleAccent2: "PLANES DE ENTRENAMIENTO",
      description:
        "Mira nuestros planes de entrenamiento y métodos disponibles para ayudarte a alcanzar tus objetivos de forma efectiva y sostenible.",
      buttonText: "VER MÁS",
    },
    {
      image: sliderImage,
      title1: "MEJORA",
      titleAccent1: "TU RENDIMIENTO",
      title2: "CON NUESTROS",
      titleAccent2: "ENTRENADORES EXPERTOS",
      description:
        "Nuestros entrenadores certificados te guiarán en cada paso del camino para maximizar tus resultados y evitar lesiones.",
      buttonText: "CONOCE AL EQUIPO",
    },
    {
      image: sliderImage,
      title1: "OPTIMIZA",
      titleAccent1: "TU NUTRICIÓN",
      title2: "CON NUESTROS",
      titleAccent2: "PLANES PERSONALIZADOS",
      description:
        "La nutrición adecuada es clave para alcanzar tus objetivos. Nuestros planes nutricionales están diseñados específicamente para ti.",
      buttonText: "VER PLANES",
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
              <div className="container">
                <div className="hero-content">
                  <h2 className="hero-title">
                    {slide.title1} <span className="accent">{slide.titleAccent1}</span>
                  </h2>
                  <h2 className="hero-title">
                    {slide.title2} <span className="accent">{slide.titleAccent2}</span>
                  </h2>
                  <p className="hero-subtitle">{slide.description}</p>
                  <button className="hero-button">{slide.buttonText}</button>
                </div>
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


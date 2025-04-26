"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import "./pricing.css"

export default function CinematicPricingConcept() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const highlights = [
    {
      title: "ENTRENAMIENTO",
      description: "Plan personalizado adaptado a tu nivel y objetivos específicos",
      color: "#ff3b3b",
    },
    {
      title: "NUTRICIÓN",
      description: "Dieta personalizada para maximizar resultados y rendimiento",
      color: "#ff5e3b",
    },
    {
      title: "SEGUIMIENTO",
      description: "Contacto directo y chequeos semanales para asegurar tu progreso",
      color: "#ff3b6b",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % highlights.length)
        setIsAnimating(false)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [highlights.length])

  return (
    <section className="cinematic-pricing">
      <div className="cinematic-background"></div>

      <div className="cinematic-container">
        <div className="cinematic-content">
          <div className="cinematic-header">
            <h2 className="cinematic-title">
              TRANSFORMA TU FÍSICO
              <span className="title-highlight"> HOY</span>
            </h2>

            <div className="plan-badge">
              <div className="badge-content">
                <span className="badge-title">3 MESES + 1</span>
                <span className="badge-subtitle">ONLINE MENSUAL</span>
              </div>
            </div>
          </div>

         

          <div className="highlights-container">
            <div className="highlights-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`highlight-item ${activeIndex === index ? "active" : ""} ${isAnimating ? "animating" : ""}`}
                  style={{ "--highlight-color": highlight.color }}

                >
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="highlight-indicators">
            {highlights.map((highlight, index) => (
  <button
    key={index}
    className={`indicator ${activeIndex === index ? "active" : ""}`}
    onClick={() => setActiveIndex(index)}
    style={{ "--highlight-color": highlight.color }}
  ></button>
))}

            </div>
          </div>
          <div className="cinematic-cta">
            <button className="cinematic-button">
              <span className="button-text">COMENZAR TRANSFORMACIÓN</span>
              <ArrowRight className="button-icon" size={20} />
              <div className="button-glow"></div>
            </button>
          </div>
        </div>

        <div className="cinematic-visual">
          <div className="visual-container">
            <div className="before-after-label">ANTES</div>
            <div className="after-image"></div>
            <div className="before-after-label after-label">DESPUÉS</div>
          </div>
        </div>
      </div>
    </section>
  )
}

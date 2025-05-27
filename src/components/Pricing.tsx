"use client"

import type React from "react"

import { useState, useEffect, useRef  } from "react"
import { ArrowRight } from "lucide-react"
import "./pricing.css"

import image1 from "../assets/plantillas/1.jpeg"
import image2 from "../assets/plantillas/2.jpeg"
import image3 from "../assets/plantillas/2.jpeg"


export default function CinematicPricingConcept() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const touchStartX = useRef(0)
const touchEndX = useRef(0)

const handleTouchStart = (e: React.TouchEvent) => {
  touchStartX.current = e.touches[0].clientX
}

const handleTouchMove = (e: React.TouchEvent) => {
  touchEndX.current = e.touches[0].clientX
}

const handleTouchEnd = () => {
  const delta = touchStartX.current - touchEndX.current
  const threshold = 50 // sensibilidad mínima

  if (Math.abs(delta) > threshold && !isAnimating) {
    if (delta > 0 && activeIndex < highlights.length - 1) {
      setActiveIndex((prev) => prev + 1)
    } else if (delta < 0 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1)
    }
  }
}

  const highlights = [
    {
      title: "ENTRENAMIENTO",
      description: "Plan personalizado adaptado a tu nivel y objetivos específicos.",
      color: "#ff3b3b",
    },
    {
      title: "NUTRICIÓN",
      description: "Dieta personalizada para maximizar resultados y rendimiento.",
      color: "#7cff3b",
    },
    {
      title: "SEGUIMIENTO",
      description: "Contacto directo y chequeos semanales para asegurar tu progreso.",
      color: "#ff3b3b",
    },
    {
      title: "MENTALIDAD",
      description: "Guia y ayuda diaria en tu mentalidad y habitos del día a día.",
      color: "#e03289",
    },
  ]

const planImages = [
  {
    url: image1,
    alt: "Plan de entrenamiento detallado",
  },
  {
    url: image2,
    alt: "Plan de nutrición personalizado",
  },
  {
    url: image3,
    alt: "Seguimiento y progreso semanal",
  },
]


  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % highlights.length)
        setIsAnimating(false)
      }, 500)
    }, 8000)

    return () => clearInterval(interval)
  }, [highlights.length])

  return (
    <section className="cinematic-pricing" id="advice">
      <div className="cinematic-background"></div>

      <div className="cinematic-container">
        <div className="cinematic-content">
          <div className="cinematic-header">
            <h2 className="cinematic-title">
              TRANSFORMA TU FÍSICO<span className="title-highlight">&nbsp;HOY</span>
            </h2>

            <div className="plan-badge">
              <div className="badge-content">
                <span className="badge-title">3 MESES + 1</span>
                <span className="badge-subtitle">ONLINE TRIMESTRAL</span>
              </div>
            </div>
          </div>

          <div className="highlights-container"
          onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}>
            <div className="highlights-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`highlight-item ${activeIndex === index ? "active" : ""} ${isAnimating ? "animating" : ""}`}
                  style={{ "--highlight-color": highlight.color } as React.CSSProperties}
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
                  style={{ "--highlight-color": highlight.color } as React.CSSProperties}
                ></button>
              ))}
            </div>
          </div>
          <div className="cinematic-cta">
           <a
 href="mailto:team.codan@codanfit.com?subject=Quiero%20una%20asesoría%20personalizada&body=Hola%20equipo,%20me%20gustaría%20saber%20más%20sobre%20la%20asesoría%20personalizada%20para%20atletas%20exclusivos."
  className="cinematic-button"
>
  <span className="button-text">ASESORIA PARA ATLETAS EXCLUSIVOS</span>
  <ArrowRight className="button-icon" size={20} />
  <div className="button-glow"></div>
</a>

          </div>
        </div>

        <div className="cinematic-visual">
          <div className="visual-container">
            <div className="plan-images-stack">
{planImages.map((image, index) => (
  <div key={index} className="plan-image-container">
    <img src={image.url} alt={image.alt} className="plan-image" />
  </div>
))}


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

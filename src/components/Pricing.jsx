"use client"

import { useState } from "react"
import "./Pricing.css"

import rutine1 from "../assets/rutine1.jpg"
import rutine2 from "../assets/rutine2.jpg"
import rutine3 from "../assets/rutine3.jpg"

export default function TrainingPlans() {
  const [hoveredPlan, setHoveredPlan] = useState(null)

  const plans = [
    {
      id: 1,
      title: "1 MES",
      subtitle: "ONLINE MENSUAL",
      features: [
        "Plan de entrenamiento.",
        "Plan nutricional según objetivo.",
        "Asesoramiento de suplementación deportiva.",
        "Contacto directo a través de Whatsapp",
        "Videos explicativos de todos los ejercicios.",
        "Estrategias para descender el porcentaje de grasa.",
        "Chequeos cada 7 días",
        "7 Ebooks escritos por mí de REGALO",
        "Guía de alimentación SIN calorías necesarias",
      ],
      price: "$15.000",
      
      image: rutine1,
    },
    {
      id: 2,
      title: "2 MESES",
      subtitle: "ONLINE MENSUAL",
      features: [
        "Plan de entrenamiento.",
        "Plan nutricional según objetivo.",
        "Asesoramiento de suplementación deportiva.",
        "Contacto directo a través de Whatsapp",
        "Videos explicativos de todos los ejercicios.",
        "Estrategias para descender el porcentaje de grasa.",
        "Chequeos cada 7 días",
        "7 Ebooks escritos por mí de REGALO",
        "Guía de alimentación SIN calorías necesarias",
      ],
      price: "$22.000",
      image: rutine2,
      featured: true,
    },
    {
      id: 3,
      title: "3 MESES",
      subtitle: "ONLINE MENSUAL",
      features: [
        "Plan de entrenamiento.",
        "Plan nutricional según objetivo.",
        "Asesoramiento de suplementación deportiva.",
        "Contacto directo a través de Whatsapp",
        "Videos explicativos de todos los ejercicios.",
        "Estrategias para descender el porcentaje de grasa.",
        "Chequeos cada 7 días",
        "7 Ebooks escritos por mí de REGALO",
        "Guía de alimentación SIN calorías necesarias",
      ],
      price: "$20.000",
      image: rutine3,
    },
  ]

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="title-container center">
          <h2 className="title">
            ASESORAMIENTO <span className="accent-title">EN CONJUNTO</span>
          </h2>
        </div>

        <p className="pricing-description">
          En nuestro Asesoría te brindamos todas las herramientas para que puedas alcanzar tu objetivo. Desde una Rutina
          de alimentación personalizada hasta un seguimiento constante para resolver todas tus dudas.
        </p>

        <div className="plans-container">
          {plans.map((plan) => (
          <div
          key={plan.id}
          className={`vertical-plan-card ${plan.featured ? "featured-plan" : ""} ${hoveredPlan === plan.id ? "hovered" : ""}`}
          onMouseEnter={() => setHoveredPlan(plan.id)}
          onMouseLeave={() => setHoveredPlan(null)}
          style={{ '--image-url': `url(${plan.image})` }}
        >
        
             <div className="plan-header">
  <h3 className="plan-title-inline">
    <span className="plan-title">{plan.title}</span>{" "}
    <span className="plan-subtitle">{plan.subtitle}</span>
  </h3>
</div>


              <div className="plan-features-list">
                {plan.features.map((feature, index) => (
                  <div key={index} className="plan-feature-item">
                    <span className="feature-bullet">•</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="plan-price">{plan.price}</div>

              <button className="plan-action-button">VER MÁS INFORMACIÓN</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


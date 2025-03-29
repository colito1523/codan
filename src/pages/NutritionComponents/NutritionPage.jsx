"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import ContactForm from "../../components/ContactForm"

const Nutrition = () => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <div className="nutrition-page">

      <main className="nutrition-main">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              INICIO
            </Link>{" "}
            / NUTRICIÓN
          </div>

          <div className="nutrition-content">
            <div className="nutrition-info">
              <h1 className="nutrition-title">
                PLANES NUTRICIONALES <span className="nutrition-title-accent">PARA CADA OBJETIVO QUE TENGAS</span>
              </h1>

              <p className="nutrition-intro">
                En nuestra Asesoría te brindaremos todas las herramientas para que puedas alcanzar tu objetivo. Desde
                una Rutina de entrenamiento personalizada (armada en base a un formulario que se te enviará para
                conocerte bien), un cuaderno de entrenamiento. Hay 3 tipos de Asesorías, La Básica, la Estándar y la
                Premium.
              </p>

              <div className={`nutrition-text ${showMore ? "expanded" : ""}`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Bibendum sagittis ultricies aliquet facilisis porta et neque
                  arcu. Pharetra arcu ut fermentum sollicitudin. Risus facilisis leo sed amet volutpat. Ut risus eget ac
                  ridiculus aliquam. Ornare sollicitudin. Nisi quis congue eros tristique vel massa sagittis orci. Ut
                  facilisis arcu ut amet egestas.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur. Bibendum sagittis ultricies aliquet facilisis porta et neque
                  arcu. Pharetra arcu ut fermentum sollicitudin. Risus facilisis leo sed amet volutpat. Ut risus eget ac
                  ridiculus aliquam. Ornare sollicitudin. Nisi quis congue eros tristique vel massa sagittis orci. Ut
                  facilisis arcu ut amet egestas.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur. Bibendum sagittis ultricies aliquet facilisis porta et neque
                  arcu. Pharetra arcu ut fermentum sollicitudin. Risus facilisis leo sed amet volutpat. Ut risus eget ac
                  ridiculus aliquam. Ornare sollicitudin. Nisi quis congue eros tristique vel massa sagittis orci. Ut
                  facilisis arcu ut amet egestas.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur. Bibendum sagittis ultricies aliquet facilisis porta et neque
                  arcu. Pharetra arcu ut fermentum sollicitudin. Risus facilisis leo sed amet volutpat. Ut risus eget ac
                  ridiculus aliquam. Ornare sollicitudin. Nisi quis congue eros tristique vel massa sagittis orci. Ut
                  facilisis arcu ut amet egestas.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur. Bibendum sagittis ultricies aliquet facilisis porta et neque
                  arcu. Pharetra arcu ut fermentum sollicitudin. Risus facilisis leo sed amet volutpat. Ut risus eget ac
                  ridiculus aliquam. Ornare sollicitudin. Nisi quis congue eros tristique vel massa sagittis orci. Ut
                  facilisis arcu ut amet egestas.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur. Bibendum sagittis ultricies aliquet facilisis porta et neque
                  arcu. Pharetra arcu ut fermentum sollicitudin. Risus facilisis leo sed amet volutpat. Ut risus eget ac
                  ridiculus aliquam. Ornare sollicitudin. Nisi quis congue eros tristique vel massa sagittis orci. Ut
                  facilisis arcu ut amet egestas.
                </p>
              </div>

              {!showMore && (
                <button className="show-more-btn" onClick={toggleShowMore}>
                  Leer más
                </button>
              )}
            </div>

            <div className="nutrition-plan-card">
              <div className="plan-header">
                <h3 className="plan-duration">1 MES</h3>
                <h4 className="plan-type">ONLINE MENSUAL</h4>
              </div>

              <ul className="plan-features">
                <li className="plan-feature">
                  <span className="feature-icon">✓</span>
                  Plan de entrenamiento
                </li>
                <li className="plan-feature">
                  <span className="feature-icon">✓</span>
                  Plan nutricional según objetivo
                </li>
                <li className="plan-feature">
                  <span className="feature-icon">✓</span>
                  Consultas directas a través de WhatsApp
                </li>
                <li className="plan-feature">
                  <span className="feature-icon">✓</span>
                  Estrategias para mantener la motivación
                </li>
                <li className="plan-feature">
                  <span className="feature-icon">✓</span>
                  Guía de suplementación deportiva
                </li>
                <li className="plan-feature">
                  <span className="feature-icon">✓</span>
                  Consejos para alimentación en restaurantes
                </li>
              </ul>

              <div className="plan-price">
                <span className="price-amount">$15.000</span>
              </div>

              <button className="plan-cta-button">SOLICITAR ASESORÍA</button>
            </div>
          </div>
        </div>
        <ContactForm/>
      </main>
    </div>
  )
}

export default Nutrition


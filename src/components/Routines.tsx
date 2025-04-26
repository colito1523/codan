import { useState } from "react"
import { ArrowRight, ChevronDown, CheckCircle, Play } from "lucide-react"
import "./Routines.css"

export default function PremiumRoutineShowcase() {
  const [activeTab, setActiveTab] = useState("descripcion")
  const [isExpanded, setIsExpanded] = useState(false)

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <section className="premium-section" id="routines">
      <div className="premium-background"></div>
      <div className="premium-container">
        <div className="premium-header">
          <h2 className="premium-title">
            RUTINAS <span className="title-highlight">PERSONALIZADAS</span>
          </h2>
          <div className="red-underline"></div>
        </div>

        <div className="showcase-container">
          <div className="showcase-card">
            <div className="showcase-image-container">
              <div className="image-overlay"></div>
              <img
                src="/placeholder.svg?height=600&width=400"
                alt="Rutinas personalizadas"
                className="showcase-image"
              />
              <div className="premium-badge">PREMIUM</div>
              <button className="play-button">
                <Play size={24} fill="#fff" />
              </button>
            </div>

            <div className="showcase-content">
              <div className="content-header">
                <h3 className="content-title">ENTRENAMIENTO PERSONALIZADO</h3>
                <p className="content-subtitle">Diseñado específicamente para tus objetivos</p>
              </div>

              <div className="content-tabs">
                <button
                  className={`tab-button ${activeTab === "descripcion" ? "active" : ""}`}
                  onClick={() => handleTabClick("descripcion")}
                >
                  Descripción
                </button>
                <button
                  className={`tab-button ${activeTab === "beneficios" ? "active" : ""}`}
                  onClick={() => handleTabClick("beneficios")}
                >
                  Beneficios
                </button>
                <button
                  className={`tab-button ${activeTab === "incluye" ? "active" : ""}`}
                  onClick={() => handleTabClick("incluye")}
                >
                  Incluye
                </button>
              </div>

              <div className="tab-content">
                {activeTab === "descripcion" && (
                  <div className="description-content">
                    <p>
                      Nuestras rutinas personalizadas están diseñadas específicamente para ti, considerando tu nivel de
                      condición física actual, objetivos específicos y preferencias de entrenamiento.
                    </p>
                    <p>
                      Cada plan es creado por profesionales con años de experiencia en el campo del fitness y la
                      nutrición, asegurando que cada ejercicio y recomendación esté respaldada por ciencia y resultados
                      comprobados.
                    </p>
                  </div>
                )}

                {activeTab === "beneficios" && (
                  <div className="benefits-content">
                    <ul className="benefits-list">
                      <li className="benefit-item">
                        <CheckCircle size={20} className="benefit-icon" />
                        <span>Resultados más rápidos y efectivos</span>
                      </li>
                      <li className="benefit-item">
                        <CheckCircle size={20} className="benefit-icon" />
                        <span>Menor riesgo de lesiones con técnicas correctas</span>
                      </li>
                      <li className="benefit-item">
                        <CheckCircle size={20} className="benefit-icon" />
                        <span>Optimización del tiempo de entrenamiento</span>
                      </li>
                      <li className="benefit-item">
                        <CheckCircle size={20} className="benefit-icon" />
                        <span>Mayor motivación y adherencia al programa</span>
                      </li>
                      <li className="benefit-item">
                        <CheckCircle size={20} className="benefit-icon" />
                        <span>Adaptación continua según tu progreso</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === "incluye" && (
                  <div className="includes-content">
                    <div className="includes-grid">
                      <div className="include-item">
                        <div className="include-icon">
                          <div className="icon-diamond"></div>
                        </div>
                        <div className="include-details">
                          <h4>Plan de Entrenamiento</h4>
                          <p>Rutinas detalladas con series, repeticiones y descansos</p>
                        </div>
                      </div>
                      <div className="include-item">
                        <div className="include-icon">
                          <div className="icon-diamond"></div>
                        </div>
                        <div className="include-details">
                          <h4>Guía Nutricional</h4>
                          <p>Recomendaciones alimenticias adaptadas a tus objetivos</p>
                        </div>
                      </div>
                      <div className="include-item">
                        <div className="include-icon">
                          <div className="icon-diamond"></div>
                        </div>
                        <div className="include-details">
                          <h4>Videos Explicativos</h4>
                          <p>Tutoriales de cada ejercicio con técnica correcta</p>
                        </div>
                      </div>
                      <div className="include-item">
                        <div className="include-icon">
                          <div className="icon-diamond"></div>
                        </div>
                        <div className="include-details">
                          <h4>Seguimiento Semanal</h4>
                          <p>Ajustes periódicos según tu evolución y feedback</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="testimonial-section">
                <button
                  className={`testimonial-toggle ${isExpanded ? "expanded" : ""}`}
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <span>Testimonios</span>
                  <ChevronDown size={20} className={`toggle-icon ${isExpanded ? "rotated" : ""}`} />
                </button>

                <div className={`testimonial-content ${isExpanded ? "expanded" : ""}`}>
                  <div className="testimonial">
                    <div className="testimonial-quote">"</div>
                    <p className="testimonial-text">
                      El plan personalizado superó todas mis expectativas. En solo 3 meses logré transformar mi físico y
                      aumentar significativamente mi fuerza. La atención y seguimiento fueron excepcionales.
                    </p>
                    <div className="testimonial-author">
                      <span className="author-name">Carlos M.</span>
                      <span className="author-info">34 años, 3 meses en el programa</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="action-area">
                <div className="price-display">
                  <span className="price-value">$20.000</span>
                  <span className="price-period">INVERSIÓN TOTAL</span>
                </div>

                <button className="action-button">
                  <span>COMENZAR AHORA</span>
                  <ArrowRight className="button-icon" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import "./Pricing.css"
import plan1 from "../assets/asesoria1.jpg"
import plan2 from "../assets/asesoria2.jpg"
import plan3 from "../assets/asesoria3.jpg"

const Pricing = () => {
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
          <div className="plan-card">
            <div className="plan-image-container">
              <img src={plan1 || "/placeholder.svg?height=300&width=400"} alt="Plan 1" className="plan-bg-image" />
              <div className="plan-content">
                <div className="plan-header">
                  <span className="plan-number">1</span>
                  <h3 className="plan-title">PLAN</h3>
                  <h4 className="plan-accent">ONLINE MENSUAL</h4>
                </div>

                <ul className="plan-features">
                  <li className="plan-feature">• Plan nutricional según objetivo</li>
                  <li className="plan-feature">• Rutina de entrenamiento personalizada</li>
                  <li className="plan-feature">• Soporte directo a través de Whatsapp</li>
                  <li className="plan-feature">• Estrategias para mantener la motivación</li>
                  <li className="plan-feature">• Guía de suplementación</li>
                  <li className="plan-feature">• Guía de alimentación en restaurantes</li>
                </ul>

                <div className="plan-price">$15.000</div>

                <button className="plan-button">OBTENER ASESORAMIENTO</button>
              </div>
            </div>
          </div>

          <div className="plan-card featured-plan">
            <div className="plan-image-container">
              <img src={plan2 || "/placeholder.svg?height=300&width=400"} alt="Plan 2" className="plan-bg-image" />
              <div className="plan-content">
                <div className="plan-header">
                  <span className="plan-number">2</span>
                  <h3 className="plan-title">PLAN</h3>
                  <h4 className="plan-accent">ONLINE MENSUAL</h4>
                </div>

                <ul className="plan-features">
                  <li className="plan-feature">• Plan nutricional según objetivo</li>
                  <li className="plan-feature">• Rutina de entrenamiento personalizada</li>
                  <li className="plan-feature">• Soporte directo a través de Whatsapp</li>
                  <li className="plan-feature">• Estrategias para mantener la motivación</li>
                  <li className="plan-feature">• Guía de suplementación</li>
                  <li className="plan-feature">• Guía de alimentación en restaurantes</li>
                </ul>

                <div className="plan-price">$22.000</div>

                <button className="plan-button">OBTENER ASESORAMIENTO</button>
              </div>
            </div>
          </div>

          <div className="plan-card">
            <div className="plan-image-container">
              <img src={plan3 || "/placeholder.svg?height=300&width=400"} alt="Plan 3" className="plan-bg-image" />
              <div className="plan-content">
                <div className="plan-header">
                  <span className="plan-number">3</span>
                  <h3 className="plan-title">PLAN</h3>
                  <h4 className="plan-accent">ONLINE MENSUAL</h4>
                </div>

                <ul className="plan-features">
                  <li className="plan-feature">• Plan nutricional según objetivo</li>
                  <li className="plan-feature">• Rutina de entrenamiento personalizada</li>
                  <li className="plan-feature">• Soporte directo a través de Whatsapp</li>
                  <li className="plan-feature">• Estrategias para mantener la motivación</li>
                  <li className="plan-feature">• Guía de suplementación</li>
                  <li className="plan-feature">• Guía de alimentación en restaurantes</li>
                </ul>

                <div className="plan-price">$20.000</div>

                <button className="plan-button">OBTENER ASESORAMIENTO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing


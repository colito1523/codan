import "./Routines.css"
import rutine1 from "../assets/rutine1.jpg"
import rutine2 from "../assets/rutine2.jpg"
import rutine3 from "../assets/rutine3.jpg"

const Routines = () => {
  return (
    <section className="section routines" id="routines">
      <div className="container">
        <div className="title-container center">
          <h2 className="title">NUESTRO SERVICIO DE</h2>
          <h2 className="accent-title">RUTINAS</h2>
        </div>

        <div className="levels-container">
          <div className="level-card-container">
            <div className="level-card">
              <div className="card-inner">
                <div className="card-front">
                  <h3 className="level-title">PRINCIPIANTE</h3>
                  <div className="refresh-icon">↻</div>
                  <div className="image-wrapper grayscale">
                    <img src={rutine1 || "/placeholder.svg"} alt="Nivel principiante" className="level-image" />
                  </div>
                </div>
                <div className="card-back">
                  <h3 className="level-title">PRINCIPIANTE</h3>
                  <div className="refresh-icon">↻</div>
                  <div className="image-wrapper">
                    <img src={rutine1 || "/placeholder.svg"} alt="Nivel principiante" className="level-image" />
                    <div className="overlay-text">
                      <p className="level-description-text">
                        Comienza tu viaje hacia un estilo de vida saludable con nuestro plan de entrenamiento para
                        principiantes. Diseñado específicamente para quienes nunca han hecho ejercicio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="level-button">VER TODAS LAS RUTINAS</button>
            </div>
          </div>

          <div className="level-card-container">
            <div className="level-card">
              <div className="card-inner">
                <div className="card-front">
                  <h3 className="level-title">INTERMEDIO</h3>
                  <div className="refresh-icon">↻</div>
                  <div className="image-wrapper grayscale">
                    <img src={rutine2 || "/placeholder.svg"} alt="Nivel intermedio" className="level-image" />
                  </div>
                </div>
                <div className="card-back">
                  <h3 className="level-title">INTERMEDIO</h3>
                  <div className="refresh-icon">↻</div>
                  <div className="image-wrapper">
                    <img src={rutine2 || "/placeholder.svg"} alt="Nivel intermedio" className="level-image" />
                    <div className="overlay-text">
                      <p className="level-description-text">
                        ¿Ya tienes experiencia en el gimnasio? Nuestro plan intermedio está diseñado para llevarte al
                        siguiente nivel con ejercicios más desafiantes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="level-button">VER TODAS LAS RUTINAS</button>
            </div>
          </div>

          <div className="level-card-container">
            <div className="level-card">
              <div className="card-inner">
                <div className="card-front">
                  <h3 className="level-title">AVANZADO</h3>
                  <div className="refresh-icon">↻</div>
                  <div className="image-wrapper grayscale">
                    <img src={rutine3 || "/placeholder.svg"} alt="Nivel avanzado" className="level-image" />
                  </div>
                </div>
                <div className="card-back">
                  <h3 className="level-title">AVANZADO</h3>
                  <div className="refresh-icon">↻</div>
                  <div className="image-wrapper">
                    <img src={rutine3 || "/placeholder.svg"} alt="Nivel avanzado" className="level-image" />
                    <div className="overlay-text">
                      <p className="level-description-text">
                        Para atletas experimentados que buscan romper barreras. Nuestro plan avanzado incorpora técnicas
                        de entrenamiento de élite.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="level-button">VER TODAS LAS RUTINAS</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Routines


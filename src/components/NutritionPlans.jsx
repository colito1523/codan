import "./NutritionPlans.css";
import nutrition1 from "../assets/nutrition1.jpg";
import nutrition2 from "../assets/nutrition2.jpg";

const NutritionPlans = () => {
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
                  <img
                    src={nutrition1}
                    className="trainer-image"
                  />
                </div>
              </div>

              <div className="trainer-card two">
                <div className="image-nutrition-container">
                  <img
                    src={nutrition2}
                    className="trainer-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="nutrition-text">
            <div className="nutrition-point">
              <div className="nutrition-bullet"></div>
              <p className="nutrition-paragraph">
                En nuestra Asesoría te brindaremos todas las herramientas para
                que puedas alcanzar tu objetivo. Desde una Rutina de
                entrenamiento personalizada (armada en base a un formulario que
                se te enviará para conocerte bien), un cuaderno de
                entrenamiento, Hay 3 tipos de Asesorías: La Básica, la Estándar
                y la Premium.
              </p>
            </div>

            <div className="nutrition-point">
              <div className="nutrition-bullet"></div>
              <p className="nutrition-paragraph">
                En nuestra Asesoría te brindaremos todas las herramientas para
                que puedas alcanzar tu objetivo. Desde una Rutina de
                entrenamiento personalizada (armada en base a un formulario que
                se te enviará para conocerte bien), un cuaderno de
                entrenamiento, Hay 3 tipos de Asesorías: La Básica, la Estándar
                y la Premium.
              </p>
            </div>

            <button className="nutrition-button">VER PLAN NUTRICIONAL</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionPlans;

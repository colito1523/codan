
import { useState } from "react"
import "../RutinesComponents/RutinesStyles.css"
import rutine1 from "../../assets/rutinespage1.png"
import rutine2 from "../../assets/rutinespage2.jpg"
import rutine3 from "../../assets/rutinespage3.jpg"
import rutine4 from "../../assets/rutinespage4.jpg"
import rutine5 from "../../assets/rutinespage5.jpg"
import rutine6 from "../../assets/rutinespage6.jpg"
import rutine7 from "../../assets/rutinespage7.jpg"
import rutine8 from "../../assets/rutinespage8.jpg"
import rutine9 from "../../assets/rutinespage9.jpg"
import ContactForm from "../../components/ContactForm"


const Rutinas = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí iría la lógica para enviar el formulario
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  const routines = {
    principiante: [
      {
        id: 1,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza para principiantes que buscan desarrollar masa muscular y fuerza básica.",
        price: "15.000",
        image: rutine1,      },
      {
        id: 2,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza para principiantes enfocada en técnica y adaptación muscular.",
        price: "20.000",
        image: rutine2,      },
      {
        id: 3,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza para principiantes con énfasis en movimientos compuestos.",
        price: "18.000",
        image: rutine3,      },
    ],
    intermedio: [
      {
        id: 4,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza para nivel intermedio con enfoque en hipertrofia y definición muscular.",
        price: "22.000",
        image: rutine4,      },
      {
        id: 5,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza para nivel intermedio con periodización y variación de estímulos.",
        price: "25.000",
        image: rutine5,      },
      {
        id: 6,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza para nivel intermedio con especialización en grupos musculares.",
        price: "23.000",
        image: rutine6,      },
    ],
    avanzado: [
      {
        id: 7,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza avanzada con técnicas de intensidad y sobrecarga progresiva.",
        price: "28.000",
        image: rutine7,      },
      {
        id: 8,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza avanzada con métodos especializados para romper mesetas.",
        price: "30.000",
        image: rutine8,      },
      {
        id: 9,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza avanzada con enfoque en rendimiento y optimización neuromuscular.",
        price: "32.000",
        image: rutine9,      },
    ],
  }

  return (
    <div className="asesoramiento-page">
      <main className="asesoramiento-main">
        <section className="asesoramiento-hero">
          <div className="container">
            <h1 className="asesoramiento-title">
              NUESTRO SERVICIO DE <span className="accent">RUTINAS</span>
            </h1>
            <div className="asesoramiento-subtitle">
              <h2 className="rutinas-premium">RUTINAS PREMIUM</h2>
              <p className="rutinas-description">
                Nuestras rutinas premium están diseñadas por profesionales con años de experiencia en el entrenamiento y
                la nutrición. Adaptadas para cada nivel de experiencia, te ayudarán a alcanzar tus objetivos de forma
                efectiva y segura.
              </p>
            </div>
          </div>
        </section>

        <section className="rutinas-section">
          <div className="container">
            <h3 className="level-title">PRINCIPIANTE</h3>
            <div className="rutinas-grid">
              {routines.principiante.map((routine) => (
                <div className="rutina-card" key={routine.id}>
                  <div className="rutina-image-container">
                    <img src={routine.image || "/placeholder.svg"} alt={routine.title} className="rutina-image" />
                  </div>
                  <div className="rutina-content">
                    <h4 className="rutina-title">{routine.title}</h4>
                    <p className="rutina-description">{routine.description}</p>
                    <div className="rutina-price">${routine.price}</div>
                    <button className="rutina-button">Comprar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rutinas-section">
          <div className="container">
            <h3 className="level-title">INTERMEDIO</h3>
            <div className="rutinas-grid">
              {routines.intermedio.map((routine) => (
                <div className="rutina-card" key={routine.id}>
                  <div className="rutina-image-container">
                    <img src={routine.image || "/placeholder.svg"} alt={routine.title} className="rutina-image" />
                  </div>
                  <div className="rutina-content">
                    <h4 className="rutina-title">{routine.title}</h4>
                    <p className="rutina-description">{routine.description}</p>
                    <div className="rutina-price">${routine.price}</div>
                    <button className="rutina-button">Comprar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rutinas-section">
          <div className="container">
            <h3 className="level-title">AVANZADO</h3>
            <div className="rutinas-grid">
              {routines.avanzado.map((routine) => (
                <div className="rutina-card" key={routine.id}>
                  <div className="rutina-image-container">
                    <img src={routine.image || "/placeholder.svg"} alt={routine.title} className="rutina-image" />
                  </div>
                  <div className="rutina-content">
                    <h4 className="rutina-title">{routine.title}</h4>
                    <p className="rutina-description">{routine.description}</p>
                    <div className="rutina-price">${routine.price}</div>
                    <button className="rutina-button">Comprar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm/>
      </main>
    </div>
  )
}

export default Rutinas



import { useState } from "react"
import "../RutinesComponents/RutinesStyles.css"

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
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RMn6ZATUMVGvNi142PwWHHfePOtnyZ.png",
      },
      {
        id: 2,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza para principiantes enfocada en técnica y adaptación muscular.",
        price: "20.000",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GagyvOq2efq8qUrHRm5o57Sd0vM04J.png",
      },
      {
        id: 3,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza para principiantes con énfasis en movimientos compuestos.",
        price: "18.000",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rkNvYoSsiuHpfPChH1l4vNpCuNBZTb.png",
      },
    ],
    intermedio: [
      {
        id: 4,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza para nivel intermedio con enfoque en hipertrofia y definición muscular.",
        price: "22.000",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rkNvYoSsiuHpfPChH1l4vNpCuNBZTb.png",
      },
      {
        id: 5,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza para nivel intermedio con periodización y variación de estímulos.",
        price: "25.000",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RMn6ZATUMVGvNi142PwWHHfePOtnyZ.png",
      },
      {
        id: 6,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza para nivel intermedio con especialización en grupos musculares.",
        price: "23.000",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GagyvOq2efq8qUrHRm5o57Sd0vM04J.png",
      },
    ],
    avanzado: [
      {
        id: 7,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza avanzada con técnicas de intensidad y sobrecarga progresiva.",
        price: "28.000",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GagyvOq2efq8qUrHRm5o57Sd0vM04J.png",
      },
      {
        id: 8,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza avanzada con métodos especializados para romper mesetas.",
        price: "30.000",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rkNvYoSsiuHpfPChH1l4vNpCuNBZTb.png",
      },
      {
        id: 9,
        title: "FUERZA DESDE INTERMEDIO",
        description: "Rutina de fuerza avanzada con enfoque en rendimiento y optimización neuromuscular.",
        price: "32.000",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RMn6ZATUMVGvNi142PwWHHfePOtnyZ.png",
      },
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

        <section className="contacto-section" id="contacto-asesoramiento">
          <div className="container">
            <h3 className="contacto-title">CONTACTANOS</h3>
            <form className="contacto-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono"
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mensaje"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-button">
                ENVIAR CONSULTA
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Rutinas


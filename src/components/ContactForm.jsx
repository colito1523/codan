"use client"

import { useState } from "react"
import "./ContactForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      message: "",
    })
  }

  return (
    <section className="section contact" id="contacto">
      <div className="container">
        <div className="title-container">
          <h2 className="title">CONTACTANOS</h2>
        </div>

        <p className="contact-description">
          Responderemos a tu consulta lo antes posible. También puedes contactarnos a través de nuestras redes sociales
          o por teléfono en horario de atención de lunes a viernes de 9 a 18 hs.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              NOMBRE
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              CONSULTA
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tu consulta"
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
  )
}

export default ContactForm


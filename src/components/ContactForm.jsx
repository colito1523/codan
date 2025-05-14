"use client"

import { useState, useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import emailjs from "@emailjs/browser"
import "./ContactForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [captchaVerified, setCaptchaVerified] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" })
  const formRef = useRef(null)
  const captchaRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCaptchaChange = (value) => {
    // value será null si el captcha expira
    setCaptchaVerified(!!value)
  }

 const handleSubmit = async (e) => {
  e.preventDefault()

  const token = await captchaRef.current.executeAsync()
  captchaRef.current.reset()

  if (!token) {
    setSubmitStatus({
      success: false,
      message: "Por favor, completa el captcha antes de enviar el formulario.",
    })
    return
  }

  setCaptchaVerified(true)
  setLoading(true)

  emailjs.send(
    'service_c7xmkxl', // 👈 ID de tu servicio (ya lo tenés)
    'template_au7hdit',   // 👈 ID de la plantilla que creaste (copialo de EmailJS)
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      url: window.location.href,
    },
    'VxC3Os0ExOSzeJoO4'     // 👈 Clave pública desde "Account > API Keys"
  )
  .then(() => {
    setSubmitStatus({
      success: true,
      message: "¡Gracias! Tu mensaje ha sido enviado correctamente.",
    })
    setFormData({ name: "", email: "", message: "" })
    setCaptchaVerified(false)
  })
  .catch((error) => {
    console.error("Error al enviar el mensaje:", error)
    setSubmitStatus({
      success: false,
      message: "Hubo un error al enviar tu mensaje. Intenta nuevamente.",
    })
  })
  .finally(() => {
    setLoading(false)
  })
}

  return (
    <section className="section contact" id="contacto">
      <div className="container">
        <div className="title-container">
          <h2 className="title">CONTACTANOS</h2>
        </div>

        <p className="contact-description">
          Responderemos a tu consulta lo antes posible. También puedes contactarnos a través de nuestras redes sociales.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
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

          <div className="captcha-container">
            <ReCAPTCHA
              ref={captchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
               size="invisible"
              theme="dark"
            />
          </div>

          {submitStatus.message && (
            <div className={`status-message ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}

          <button 
            type="submit" 
            className={`form-button ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'ENVIANDO...' : 'ENVIAR CONSULTA'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm

"use client"

import { useState } from "react"
import "./FAQ.css"

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "PREGUNTA FRECUENTE 1",
      answer:
        "Respuesta a la pregunta frecuente 1. Aquí puedes proporcionar información detallada sobre tu servicio, planes o metodología.",
    },
    {
      question: "PREGUNTA FRECUENTE 2",
      answer:
        "Respuesta a la pregunta frecuente 2. Aquí puedes proporcionar información detallada sobre tu servicio, planes o metodología.",
    },
    {
      question: "PREGUNTA FRECUENTE 3",
      answer:
        "Respuesta a la pregunta frecuente 3. Aquí puedes proporcionar información detallada sobre tu servicio, planes o metodología.",
    },
    {
      question: "PREGUNTA FRECUENTE 4",
      answer:
        "Respuesta a la pregunta frecuente 4. Aquí puedes proporcionar información detallada sobre tu servicio, planes o metodología.",
    },
  ]

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="title-container">
          <h2 className="title">PREGUNTAS FRECUENTES</h2>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-header" onClick={() => toggleFaq(index)}>
                <h3 className="faq-question">{faq.question}</h3>
                <span className={`faq-icon ${openFaq === index ? "open" : ""}`}></span>
              </div>

              {openFaq === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ


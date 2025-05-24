import { useEffect, useState } from "react"
import emailjs from "emailjs-com"

export default function PaypalButtonRoutine() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]')
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "https://www.paypal.com/sdk/js?client-id=AfMSUgkpHek9zWnzM1tSX1xMYU0GFPijsniGZD29EiM9K8Q6y5KHeqNCKi0prE1lCi-5MNvviZA5FEZ7&currency=USD"
      script.async = true
      script.onload = renderButton
      document.body.appendChild(script)
    } else {
      renderButton()
    }
  }, [])

  const renderButton = () => {
    if (!window.paypal) return

    const container = document.getElementById("paypal-button-container")
    if (container) container.innerHTML = ""

    window.paypal.Buttons({
      style: {
        layout: "vertical",
        color: "gold",
        shape: "pill",
        label: "pay",
        height: 40 // más bajo
      },
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: "26.00",
            },
          }],
        })
      },
      onApprove: async (data, actions) => {
        const details = await actions.order.capture()
        const name = details.payer.name.given_name
        const email = details.payer.email_address
        const amount = details.purchase_units[0].amount.value
        const order_id = data.orderID
      const now = new Date()
const date = now.toLocaleDateString()
const time = now.toLocaleTimeString()
const product = "Rutina Personalizada"

        emailjs.send(
          "service_c7xmkxl",
          "template_67v85rd",
          { name, email, amount, order_id, date, time, product },
          "VxC3Os0ExOSzeJoO4"
        ).then(() => {
          alert("✅ ¡Compra realizada y email enviado!")
        }).catch(err => {
          console.error("❌ Error al enviar email:", err)
          alert("La compra se procesó, pero no se pudo enviar el email.")
        })
      },
      onError: (err) => {
        console.error("❌ Error de PayPal:", err)
        alert("Hubo un error al procesar el pago.")
      }
    }).render("#paypal-button-container")

    setIsLoading(false)
  }

  return (
    <div style={{
      marginTop: 20,
      maxHeight: 600, // altura máxima para scroll
      overflowY: "auto",
      zIndex: 1, // que quede encima si hay algo superpuesto
      position: "relative", // asegura stacking correcto
      backgroundColor: "#ffffff", // opcional: mejora visibilidad en fondo oscuro
      padding: 10,
      borderRadius: 10
    }}>
      {isLoading && (
        <div style={{
          width: 40,
          height: 40,
          border: "4px solid #ccc",
          borderTopColor: "#ff3b3b",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          margin: "0 auto"
        }} />
      )}
      <div id="paypal-button-container" style={{ maxWidth: 350, margin: "0 auto" }} />
      <style>
        {`@keyframes spin { to { transform: rotate(360deg); } }`}
      </style>
    </div>
  )
}

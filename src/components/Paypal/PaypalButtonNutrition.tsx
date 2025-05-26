import { useEffect, useState } from "react"
import emailjs from "emailjs-com"

interface PaypalButtonRoutineProps {
  onSuccess: () => void
}

export default function PaypalButtonNutrition({ onSuccess }: PaypalButtonRoutineProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [customEmail, setCustomEmail] = useState("")
  const [customPhone, setCustomPhone] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [showPaypalButton, setShowPaypalButton] = useState(false)

  useEffect(() => {
    if (!showPaypalButton) return

    const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]')
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "https://www.paypal.com/sdk/js?client-id=AezKx1dwoE--yr2w1NZNSInPsRnckNjYyxgPxgHEtptuYcVf5AkdrHueJZMQUwtLlWRuFkD7Xjxli8R7&currency=USD&disable-funding=paylater"
      script.async = true
      script.onload = renderButton
      document.body.appendChild(script)
    } else {
      renderButton()
    }
  }, [showPaypalButton])

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
        height: 40,
      },
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: { value: "38.00" },
            },
          ],
        })
      },
      onApprove: async (data, actions) => {
        const details = await actions.order.capture()
        const name = details.payer.name.given_name
        const amount = details.purchase_units[0].amount.value
        const order_id = data.orderID
        const now = new Date()
        const date = now.toLocaleDateString()
        const time = now.toLocaleTimeString()
        const product = "Planes nutricionales"

        emailjs.send(
  "service_c7xmkxl",
  "template_67v85rd",
  {
    name,
    email: customEmail,
    paypal_email: details.payer.email_address,
    phone: customPhone,
    amount,
    order_id,
    date,
    time,
    product,
  },
  "VxC3Os0ExOSzeJoO4"
).then(() => {
          onSuccess()
        }).catch(err => {
          console.error("❌ Error al enviar email:", err)
          alert("La compra se procesó, pero no se pudo enviar el email.")
        })
      },
      onError: (err) => {
        console.error("❌ Error de PayPal:", err)
        alert("Hubo un error al procesar el pago.")
      },
    }).render("#paypal-button-container")

    setIsLoading(false)
  }

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const validatePhone = (phone: string) => /^\+?[0-9]{7,15}$/.test(phone)

  const handleContinue = () => {
    let valid = true
    if (!validateEmail(customEmail)) {
      setEmailError("Email inválido")
      valid = false
    } else {
      setEmailError("")
    }
    if (!validatePhone(customPhone)) {
      setPhoneError("Número de celular inválido")
      valid = false
    } else {
      setPhoneError("")
    }
    if (valid) {
      setShowPaypalButton(true)
      setIsLoading(true)
    }
  }

  return (
    <div style={{
      marginTop: 20,
      maxHeight: 600,
      overflowY: "auto",
      zIndex: 1,
      position: "relative",
      backgroundColor: "#ffffff",
      padding: 10,
      borderRadius: 10,
    }}>
      {!showPaypalButton && (
       <div style={{ marginBottom: 20, maxWidth: 280, margin: "0 auto", textAlign: "center" }}>
    <h3 style={{
      fontSize: 18,
      marginBottom: 16,
      color: "#333",
      fontWeight: "600"
    }}>
      Rellena tus datos de contacto
    </h3>
          <input
            type="email"
            placeholder="Tu email"
            value={customEmail}
            onChange={(e) => setCustomEmail(e.target.value)}
            style={{ width: "100%", padding: 10, marginBottom: 4, borderRadius: 10, border: "1px solid #ccc", textAlign: "center"  }}
          />
          {emailError && <div style={{ color: "red", fontSize: 12, marginBottom: 10 }}>{emailError}</div>}
          <input
            type="tel"
            placeholder="Tu número de celular"
            value={customPhone}
            onChange={(e) => setCustomPhone(e.target.value)}
            style={{ width: "100%", padding: 10, marginBottom: 4, borderRadius: 10, border: "1px solid #ccc", textAlign: "center"  }}
          />
          {phoneError && <div style={{ color: "red", fontSize: 12, marginBottom: 10 }}>{phoneError}</div>}
          <button
            onClick={handleContinue}
            style={{ width: "100%", padding: 12, backgroundColor: "#ff3b3b", color: "#fff", border: "none", borderRadius: 10, fontWeight: "bold", cursor: "pointer", marginTop: 10 }}
          >
            Continuar al pago
          </button>
        </div>
      )}

      {isLoading && showPaypalButton && (
        <div style={{
          width: 40,
          height: 40,
          border: "4px solid #ccc",
          borderTopColor: "#ff3b3b",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          margin: "0 auto",
        }} />
      )}

      {showPaypalButton && (
        <div id="paypal-button-container" style={{ maxWidth: 350, margin: "0 auto" }} />
      )}

      <style>
        {`@keyframes spin { to { transform: rotate(360deg); } }`}
      </style>
    </div>
  )
}

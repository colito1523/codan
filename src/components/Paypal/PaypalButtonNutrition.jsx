import { useEffect } from "react"

export default function PaypalButtonNutrition() {
  useEffect(() => {
    // Limpiar el contenedor antes de renderizar
    const container = document.getElementById("paypal-container-Z9YKG4PRNXKT2")
    if (container) container.innerHTML = ""

    // Crear y agregar el script
    const script = document.createElement("script")
    script.src = "https://www.paypal.com/sdk/js?client-id=BAAVg9LFHNJvlPIKkWuD-ukuoCxVxmr0Z88uN7up-iQ5h1ic7gmA21otd0Tuvk8Jlnri5d7_r1csxAPy38&components=hosted-buttons&disable-funding=venmo&currency=USD"
    script.async = true
    script.crossOrigin = "anonymous"
    script.onload = () => {
      if (window.paypal) {
        window.paypal.HostedButtons({
          hostedButtonId: "Z9YKG4PRNXKT2",
        }).render("#paypal-container-Z9YKG4PRNXKT2")
      }
    }

    document.body.appendChild(script)

    // Cleanup: eliminar el script y limpiar el contenedor al desmontar
    return () => {
      const container = document.getElementById("paypal-container-Z9YKG4PRNXKT2")
      if (container) container.innerHTML = ""
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [])

  return (
    <div style={{ marginTop: 20 }}>
      <div id="paypal-container-Z9YKG4PRNXKT2" />
    </div>
  )
} 
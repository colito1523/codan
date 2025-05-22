import { useEffect } from "react"

export default function PaypalButtonNutrition() {
  useEffect(() => {
    // Limpiar el contenedor antes de renderizar
    const container = document.getElementById("paypal-container-NUTRITION")
    if (container) container.innerHTML = ""

    // Crear y agregar el script
    const script = document.createElement("script")
    script.src = "https://www.paypal.com/sdk/js?client-id=BAAVg9LFHNJvlPIKkWuD-ukuoCxVxmr0Z88uN7up-iQ5h1ic7gmA21otd0Tuvk8Jlnri5d7_r1csxAPy38&components=hosted-buttons&disable-funding=venmo&currency=USD"
    script.async = true
    script.onload = () => {
      if (window.paypal) {
        window.paypal.HostedButtons({
          hostedButtonId: "TBUJT72SQ8UKG",
        }).render("#paypal-container-NUTRITION")
      }
    }

    document.body.appendChild(script)

    // Cleanup: eliminar el script y limpiar el contenedor al desmontar
    return () => {
      if (container) container.innerHTML = ""
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div style={{ marginTop: 20 }}>
      <div id="paypal-container-NUTRITION" />
    </div>
  )
} 
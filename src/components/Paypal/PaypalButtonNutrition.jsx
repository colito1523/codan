import { useEffect, useState } from "react"

export default function PaypalButtonNutrition() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const container = document.getElementById("paypal-container-Z9YKG4PRNXKT2")
    if (container) container.innerHTML = ""

    const renderButton = () => {
      if (window.paypal && window.paypal.HostedButtons) {
        window.paypal.HostedButtons({
          hostedButtonId: "Z9YKG4PRNXKT2",
        }).render("#paypal-container-Z9YKG4PRNXKT2").then(() => {
          setIsLoading(false)
        }).catch(() => {
          setIsLoading(false)
        })
      }
    }

    const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]')
    if (existingScript) {
      renderButton()
    } else {
      const script = document.createElement("script")
      script.src = "https://www.paypal.com/sdk/js?client-id=BAAVg9LFHNJvlPIKkWuD-ukuoCxVxmr0Z88uN7up-iQ5h1ic7gmA21otd0Tuvk8Jlnri5d7_r1csxAPy38&components=hosted-buttons&disable-funding=venmo&currency=USD"
      script.async = true
      script.crossOrigin = "anonymous"
      script.onload = renderButton
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div style={{ marginTop: 20 }}>
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
      <div id="paypal-container-Z9YKG4PRNXKT2" />
      <style>
        {`@keyframes spin { to { transform: rotate(360deg); } }`}
      </style>
    </div>
  )
}

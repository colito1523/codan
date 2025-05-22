import { useEffect } from "react"

export default function PaypalButtonRoutine() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.paypal.com/sdk/js?client-id=BAAVg9LFHNJvlPIKkWuD-ukuoCxVxmr0Z88uN7up-iQ5h1ic7gmA21otd0Tuvk8Jlnri5d7_r1csxAPy38&components=hosted-buttons&disable-funding=venmo&currency=USD"
    script.async = true
    script.onload = () => {
      if (window.paypal) {
        window.paypal.HostedButtons({
          hostedButtonId: "TBUJT72SQ8UKG",
        }).render("#paypal-container-TBUJT72SQ8UKG")
      }
    }

    document.body.appendChild(script)
  }, [])

  return (
    <div style={{ marginTop: 20 }}>
      <div id="paypal-container-TBUJT72SQ8UKG" />
    </div>
  )
}

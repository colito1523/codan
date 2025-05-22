// components/PaymentModal.jsx
import "./PaymentModal.css"
import PaypalButtonNutrition from "../Paypal/PaypalButtonNutrition"

export default function PaymentModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h3 className="modal-title">Método de Pago</h3>
        <p className="modal-text">Seleccioná PayPal para continuar con tu compra.</p>
        <div className="paypal-button">
          <PaypalButtonNutrition />
        </div>
      </div>
    </div>
  )
}

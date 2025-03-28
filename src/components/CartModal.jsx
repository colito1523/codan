import React from "react"
import "./CartModal.css"
import { FiX } from "react-icons/fi"
import { FaTrash } from "react-icons/fa"

const CartModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="cart-header">
          <h2>CARRITO</h2>
          <button className="close-button" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="cart-item">
          <img src="/ruta-a-tu-imagen.jpg" alt="Producto" className="cart-img" />
          <div className="cart-details">
            <span className="cart-title">PERDER GRASA INTERMEDIO</span>
            <span className="cart-price">$12.000</span>
            <button className="trash-button"><FaTrash /></button>
          </div>
        </div>

        <div className="cart-summary">
          <h3>Resumen de compra</h3>
          <div className="summary-line">
            <span>Subtotal</span>
            <span className="strikethrough">$ 24.000</span>
          </div>
          <div className="summary-line">
            <span>Descuento</span>
            <span>$ 0</span>
          </div>
          <hr className="red-line" />
          <div className="summary-total">
            <span>TOTAL</span>
            <span>$ 24.000</span>
          </div>
        </div>

        <button className="checkout-button">INICIAR COMPRA</button>
      </div>
    </div>
  )
}

export default CartModal

"use client"

import React from "react"
import { useNavigate } from "react-router-dom"
import { FiX } from "react-icons/fi"
import { FaTrash } from "react-icons/fa"
import { useCart } from "../context/CartContext"
import "./CartModal.css"

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, subtotal, discount, total, removeFromCart } = useCart()
  const navigate = useNavigate()

  if (!isOpen) return null

  const handleCheckout = () => {
    onClose()
    navigate("/checkout")
  }

  const formatPrice = (price) => {
    return `$${price.toLocaleString('es-AR')}`
  }

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="cart-header">
          <h2>CARRITO</h2>
          <button className="close-button" onClick={onClose}>
            <FiX />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image || "/placeholder.svg?height=180&width=400"} alt={item.title} className="cart-img" />
                <div className="cart-details">
                  <span className="cart-title">{item.title}</span>
                  <span className="cart-price">{formatPrice(item.price)}</span>
                  <button 
                    className="trash-button" 
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Eliminar del carrito"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h3>Resumen de compra</h3>
              <div className="summary-line">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="summary-line">
                <span>Descuento</span>
                <span>{formatPrice(discount)}</span>
              </div>
              <hr className="red-line" />
              <div className="summary-total">
                <span>TOTAL</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <button className="checkout-button" onClick={handleCheckout}>
              INICIAR COMPRA
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default CartModal

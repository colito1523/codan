"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import "./CheckoutPage.css"

const CheckoutPage = () => {
  const { cartItems, subtotal, discount, total, clearCart } = useCart()
  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState("credit")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    receiveOffers: false,
    city: "",
    address: "",
    postalCode: "",
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
    acceptTerms: false,
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validar información del cliente
    if (!formData.firstName.trim()) newErrors.firstName = "El nombre es requerido"
    if (!formData.lastName.trim()) newErrors.lastName = "El apellido es requerido"
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Correo electrónico inválido"
    }
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es requerido"

    // Validar datos de facturación
    if (!formData.city.trim()) newErrors.city = "La ciudad es requerida"
    if (!formData.address.trim()) newErrors.address = "La dirección es requerida"
    if (!formData.postalCode.trim()) newErrors.postalCode = "El código postal es requerido"

    // Validar método de pago
    if (paymentMethod === "credit") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "El número de tarjeta es requerido"
      if (!formData.cardHolder.trim()) newErrors.cardHolder = "El nombre del titular es requerido"
      if (!formData.expiryDate.trim()) newErrors.expiryDate = "La fecha de expiración es requerida"
      if (!formData.cvv.trim()) newErrors.cvv = "El CVV es requerido"
    }

    // Validar términos y condiciones
    if (!formData.acceptTerms) newErrors.acceptTerms = "Debes aceptar los términos y condiciones"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Simulación de procesamiento de pago
      setTimeout(() => {
        alert("¡Compra realizada con éxito!")
        clearCart()
        navigate("/")
      }, 1500)
    } else {
      // Scroll al primer error
      const firstError = document.querySelector(".error-message")
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  }

  const formatPrice = (price) => {
    return `$${price.toLocaleString("es-AR")}`
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page empty-checkout">
        <h1>CHECKOUT</h1>
        <p>Tu carrito está vacío</p>
        <button className="back-button" onClick={() => navigate("/")}>
          VOLVER A LA TIENDA
        </button>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1>CHECKOUT</h1>

        <form onSubmit={handleSubmit} className="checkout-form">
          {/* Información del cliente */}
          <section className="checkout-section">
            <h2>Información del cliente</h2>

            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="Nombre completo"
                value={formData.firstName}
                onChange={handleInputChange}
                className={errors.firstName ? "error" : ""}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={formData.lastName}
                onChange={handleInputChange}
                className={errors.lastName ? "error" : ""}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="receiveOffers"
                  checked={formData.receiveOffers}
                  onChange={handleInputChange}
                />
                <span>Quiero recibir ofertas y novedades por email</span>
              </label>
            </div>
          </section>

          {/* Datos de facturación */}
          <section className="checkout-section">
            <h2>Datos de facturación</h2>

            <div className="form-group">
              <input
                type="text"
                name="city"
                placeholder="Ciudad"
                value={formData.city}
                onChange={handleInputChange}
                className={errors.city ? "error" : ""}
              />
              {errors.city && <span className="error-message">{errors.city}</span>}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="address"
                placeholder="Dirección del domicilio"
                value={formData.address}
                onChange={handleInputChange}
                className={errors.address ? "error" : ""}
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="postalCode"
                placeholder="Código Postal"
                value={formData.postalCode}
                onChange={handleInputChange}
                className={errors.postalCode ? "error" : ""}
              />
              {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
            </div>
          </section>

          {/* Método de pago */}
          <section className="checkout-section">
            <h2>Método de pago</h2>

            <div className="payment-methods">
              <label className={`payment-method ${paymentMethod === "credit" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                />
                <span>Tarjeta de crédito</span>
              </label>

              <label className={`payment-method ${paymentMethod === "paypal" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
                <span>Paypal</span>
              </label>

              <label className={`payment-method ${paymentMethod === "binance" ? "selected" : ""}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="binance"
                  checked={paymentMethod === "binance"}
                  onChange={() => setPaymentMethod("binance")}
                />
                <span>Binance</span>
              </label>
            </div>

            {paymentMethod === "credit" && (
              <div className="credit-card-fields">
                <div className="form-group">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Número de tarjeta"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className={errors.cardNumber ? "error" : ""}
                    maxLength="19"
                  />
                  {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="cardHolder"
                    placeholder="Nombre del titular"
                    value={formData.cardHolder}
                    onChange={handleInputChange}
                    className={errors.cardHolder ? "error" : ""}
                  />
                  {errors.cardHolder && <span className="error-message">{errors.cardHolder}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="Fecha de expiración (MM/AA)"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className={errors.expiryDate ? "error" : ""}
                      maxLength="5"
                    />
                    {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                  </div>

                  <div className="form-group half">
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV/CVC/CID"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className={errors.cvv ? "error" : ""}
                      maxLength="4"
                    />
                    {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div className="payment-info">
                <p>Serás redirigido a PayPal para completar tu pago.</p>
              </div>
            )}

            {paymentMethod === "binance" && (
              <div className="payment-info">
                <p>Recibirás instrucciones para realizar el pago con Binance.</p>
              </div>
            )}
          </section>

          {/* Resumen de compra */}
          <section className="checkout-section order-summary">
            <h2>Resumen de compra</h2>

            <div className="order-items">
              {cartItems.map((item) => (
                <div className="order-item" key={item.id}>
                  <div className="item-info">
                    <span className="item-title">{item.title}</span>
                    <span className="item-price">{formatPrice(item.price)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-line">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="total-line">
                <span>Descuento</span>
                <span>{formatPrice(discount)}</span>
              </div>

              <div className="total-line final">
                <span>TOTAL</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </section>

          {/* Términos y condiciones */}
          <div className="form-group checkbox-group terms">
            <label>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className={errors.acceptTerms ? "error" : ""}
              />
              <span>Acepto las condiciones generales y la política de privacidad</span>
            </label>
            {errors.acceptTerms && <span className="error-message">{errors.acceptTerms}</span>}
          </div>

          <button type="submit" className="checkout-submit-button">
            FINALIZAR COMPRA
          </button>
        </form>
      </div>
    </div>
  )
}

export default CheckoutPage

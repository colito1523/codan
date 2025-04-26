"use client"
import { useCart } from "../context/CartContext"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image || "/placeholder.svg?height=200&width=300"}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price-container">
          <span className="product-price">${product.price.toLocaleString("es-AR")}</span>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

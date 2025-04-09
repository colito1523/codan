"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Crear el contexto
const CartContext = createContext()

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [total, setTotal] = useState(0)

  // Cargar carrito del localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart))
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error)
        setCartItems([])
      }
    }
  }, [])

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))

    // Calcular subtotal
    const newSubtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
    setSubtotal(newSubtotal)

    // Calcular total (subtotal - descuento)
    setTotal(newSubtotal - discount)
  }, [cartItems, discount])

  // Añadir item al carrito
  const addToCart = (item) => {
    // Verificar si el item ya existe en el carrito
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id)

    if (existingItemIndex >= 0) {
      // Si ya existe, incrementar cantidad
      const updatedItems = [...cartItems]
      updatedItems[existingItemIndex].quantity += 1
      updatedItems[existingItemIndex].price = item.price * updatedItems[existingItemIndex].quantity
      setCartItems(updatedItems)
    } else {
      // Si no existe, añadir nuevo item
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }
  }

  // Eliminar item del carrito
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId))
  }

  // Limpiar carrito
  const clearCart = () => {
    setCartItems([])
    setDiscount(0)
  }

  // Aplicar descuento
  const applyDiscount = (amount) => {
    setDiscount(amount)
  }

  // Valores que se proveerán al contexto
  const value = {
    cartItems,
    subtotal,
    discount,
    total,
    addToCart,
    removeFromCart,
    clearCart,
    applyDiscount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart debe ser usado dentro de un CartProvider")
  }
  return context
}

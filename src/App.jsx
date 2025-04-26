import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/HomeComponents/HomePage"
import CheckoutPage from "./pages/checkOutComponents/CheckoutPage"
import { CartProvider } from "./context/CartContext"

const App = () => {
  return (
    <CartProvider>
     
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>

    </CartProvider>
  )
}

export default App

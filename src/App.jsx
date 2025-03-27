import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Rutinas from "./pages/RutinesComponents/RutinesPage"
import NutritionPage from "./pages/NutritionComponents/NutritionPage"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rutinas" element={<Rutinas />} />
        <Route path="/nutricion" element={<NutritionPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

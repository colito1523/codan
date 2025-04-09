// components/Home.jsx
import Hero from "../../components/Hero"
import AboutUs from "../../components/AboutUs"
import Routines from "../../components/Routines"
import NutritionPlans from "../../components/NutritionPlans"
import Pricing from "../../components/Pricing"
import FAQ from "../../components/FAQ"
import ContactForm from "../../components/ContactForm"

const Home = () => {
    return (
      <main>
        <Hero />
        <div id="about-us"><AboutUs /></div>
        <div id="routines"><Routines /></div>
        <div id="nutrition-plans"><NutritionPlans /></div>
        <div id="pricing"><Pricing /></div>
        <div id="faq"><FAQ /></div>
        <div id="contact"><ContactForm /></div>
      </main>
    )
  }
export default Home

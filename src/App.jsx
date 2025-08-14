import "./App.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurProducts from "./components/OurProducts";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <AboutUs></AboutUs>
      <OurProducts />
      <Testimonials />
      <Contact />

      <Footer />
    </>
  );
}

export default App;

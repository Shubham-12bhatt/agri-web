import "./App.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Ourbrands from "./components/Ourbrands";
import OurProducts from "./components/OurProducts";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs></AboutUs>
      <OurProducts />
      {/* <Testimonials /> */}
      <Ourbrands />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

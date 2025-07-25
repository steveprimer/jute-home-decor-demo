import React, { useEffect } from "react";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGallery from "./components/ProductGallery";
import WhyUs from "./components/WhyUs";
import WhatsAppButton from "./components/WhatsappButton";
// import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
import FooterCTA from "./components/FooterCTA";
// import OurWork from "./components/OurWork";
import Chatbot from "./components/Chatbot";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // ms
      once: true, // animate only once
    });
  }, []);
  return (
    <>
      {/* <Navbar />  */}
      <Hero />
      <ProductGallery />
      <WhyUs />
      <WhatsAppButton />
      {/* <Services /> */}
      {/* <OurWork /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      <Chatbot />
      <FooterCTA />
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import Growthsection from "../sections/Growthsection";
import Aboutus from "../sections/Aboutus";
import Ourservices from "../sections/Ourservices";
import CustomisedServices from "../sections/CustomisedServices";
import NatureSection from "../sections/Naturesection";
import Clientreviews from "../sections/Clientreviews";
import Contactus from "../sections/Contactus";
import Footer from "../components/Footer";
import Personalizedservices from "../sections/Personalizedservices";
// import Logomarquee from "../sections/Logomarquee";

const Homepage = () => {
  useEffect(() => {
    const scrollTarget =
      location.state?.scrollTo || window.location.hash.replace("#", "");

    if (scrollTarget) {
      const section = document.getElementById(scrollTarget);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div>
      <Hero />
      <section id="services">
        <Ourservices />
      </section>
      <Aboutus />
      <Growthsection />

      <Personalizedservices />
      {/* <NatureSection /> */}
      {/* <Logomarquee /> */}
      <Clientreviews />
      <Contactus />
      <Footer />
    </div>
  );
};

export default Homepage;

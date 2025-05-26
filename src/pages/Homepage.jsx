import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { handleScrollAfterNavigation } from "../utils/scrollUtils";

function Homepage() {
  useEffect(() => {
    // Check if we need to scroll to a section after navigation
    // Add a small delay to ensure all components are rendered
    setTimeout(() => {
      handleScrollAfterNavigation();
    }, 300);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <NewsSection></NewsSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;

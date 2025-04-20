import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

function Homepage() {
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

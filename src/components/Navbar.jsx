import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Function to determine which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled for navbar styling
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Get all sections
      const sections = ["home", "about", "news", "contact"];

      // Find which section is currently in view
      let currentSection = "home";
      let maxVisibility = 0;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Calculate how much of the section is visible
          const visibleHeight =
            Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visibilityRatio = visibleHeight / section.offsetHeight;

          if (visibilityRatio > maxVisibility) {
            maxVisibility = visibilityRatio;
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }

    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-forest shadow-lg py-2"
          : "bg-forest/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
      
          <h1 className="text-xl font-playfair text-cream animate-fade-in">
            OPG Dombaj
          </h1>
        </Link>

        {/* Mobilni menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Zatvori izbornik" : "Otvori izbornik"}
        >
          <svg
            className="w-6 h-6 text-cream"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 animate-fade-in">
          {[
            { id: "home", label: "NASLOVNICA" },
            { id: "about", label: "O NAMA" },
            { id: "news", label: "NOVOSTI" },
            { id: "contact", label: "KONTAKT" },
          ].map((item) => (
            <li key={item.id}>
              <a
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer hover:text-leaf transition-colors duration-300 relative ${
                  activeSection === item.id
                    ? "text-wheat font-bold"
                    : "text-cream"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-wheat rounded-full"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobilni menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 pt-2 pb-4 space-y-4 bg-forest">
          {[
            { id: "home", label: "NASLOVNICA" },
            { id: "about", label: "O NAMA" },
            { id: "news", label: "NOVOSTI" },
            { id: "contact", label: "KONTAKT" },
          ].map((item) => (
            <li key={item.id}>
              <a
                onClick={() => scrollToSection(item.id)}
                className={`block py-2 cursor-pointer transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-wheat font-bold border-l-4 border-wheat pl-3"
                    : "text-cream pl-4"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

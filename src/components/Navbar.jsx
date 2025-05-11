import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Function to determine which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
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
    <nav className="bg-forest text-cream w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-playfair animate-fade-in">OPG Dombaj</h1>
        </Link>

        {/* Mobilni menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
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
        <ul className="hidden md:flex space-x-6 animate-fade-in">
          <li>
            <a
              onClick={() => scrollToSection("home")}
              className={`cursor-pointer hover:text-leaf transition-colors duration-300 ${
                activeSection === "home" ? "text-leaf font-bold" : ""
              }`}
            >
              NASLOVNICA
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("about")}
              className={`cursor-pointer hover:text-leaf transition-colors duration-300 ${
                activeSection === "about" ? "text-leaf font-bold" : ""
              }`}
            >
              O NAMA
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("news")}
              className={`cursor-pointer hover:text-leaf transition-colors duration-300 ${
                activeSection === "news" ? "text-leaf font-bold" : ""
              }`}
            >
              NOVOSTI
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("contact")}
              className={`cursor-pointer hover:text-leaf transition-colors duration-300 ${
                activeSection === "contact" ? "text-leaf font-bold" : ""
              }`}
            >
              KONTAKT
            </a>
          </li>
        </ul>
      </div>

      {/* Mobilni menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col px-4 pt-2 pb-4 space-y-2 bg-forest">
            <li>
              <a
                onClick={() => scrollToSection("home")}
                className={`block py-2 cursor-pointer hover:text-leaf transition-colors duration-300 ${
                  activeSection === "home" ? "text-leaf font-bold" : ""
                }`}
              >
                NASLOVNICA
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("about")}
                className={`block py-2 cursor-pointer hover:text-leaf transition-colors duration-300 ${
                  activeSection === "about" ? "text-leaf font-bold" : ""
                }`}
              >
                O NAMA
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("news")}
                className={`block py-2 cursor-pointer hover:text-leaf transition-colors duration-300 ${
                  activeSection === "news" ? "text-leaf font-bold" : ""
                }`}
              >
                NOVOSTI
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("contact")}
                className={`block py-2 cursor-pointer hover:text-leaf transition-colors duration-300 ${
                  activeSection === "contact" ? "text-leaf font-bold" : ""
                }`}
              >
                KONTAKT
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

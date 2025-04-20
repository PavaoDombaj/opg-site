import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-forest text-cream w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
        <h1 className="text-xl font-playfair animate-fade-in">OPG Dombaj</h1></Link>
        
        {/* Mobilni menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 animate-fade-in">
          <li>
            <a href="#home" className="hover:text-leaf transition-colors duration-300">
              NASLOVNICA
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-leaf transition-colors duration-300">
              PROIZVODI
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-leaf transition-colors duration-300">
              O NAMA
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-leaf transition-colors duration-300">
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
                href="#home" 
                className="block py-2 hover:text-leaf transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                NASLOVNICA
              </a>
            </li>
            <li>
              <a 
                href="#products" 
                className="block py-2 hover:text-leaf transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                PROIZVODI
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="block py-2 hover:text-leaf transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                O NAMA
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-2 hover:text-leaf transition-colors duration-300"
                onClick={() => setIsOpen(false)}
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
export default Navbar
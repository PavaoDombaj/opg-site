import { scrollToSection } from "../utils/scrollUtils";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a short delay for animation purposes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
      aria-label="OPG Dombaj - Domaći poljoprivredni proizvodi iz Drnja"
    >
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-3000"
        style={{ 
          backgroundImage: "url('../public/images/pozadina.jpg')",
          transform: isVisible ? 'scale(1.05)' : 'scale(1.15)',
          transition: 'transform 2s ease-out'
        }}
      ></div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-forest/80"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-5xl mx-auto bg-black/30 backdrop-blur-sm py-12 px-8 rounded-xl border border-wheat/20 shadow-2xl">
          {/* Left side content - appears from left */}
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <h2 className="text-wheat text-xl md:text-2xl font-merriweather mb-2 tracking-wider text-shadow-md">
              OBITELJSKO POLJOPRIVREDNO GOSPODARSTVO
            </h2>
          </div>

          {/* Main heading - appears from bottom */}
          <div 
            className={`transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair mb-6 text-shadow-lg">
              <span className="text-leaf">OPG</span> <span className="text-cream">Dombaj</span>
            </h1>
            {/* Hidden text for SEO - visually hidden but readable by search engines */}
            <span className="sr-only">
              OPG Dombaj iz Drnja, Sunčica Dombaj, domaći poljoprivredni proizvodi, svježe voće i povrće
            </span>
          </div>

          {/* Tagline with decorative elements */}
          <div 
            className={`flex items-center justify-center mb-10 transform transition-all duration-1000 delay-500 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="h-[1px] w-12 bg-wheat mr-4"></div>
            <p className="text-xl md:text-2xl lg:text-3xl font-opensans text-wheat text-shadow-md">
              Sa polja direktno na vaš stol
            </p>
            <div className="h-[1px] w-12 bg-wheat ml-4"></div>
          </div>

          {/* Buttons - appear with staggered delay */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`px-8 py-4 rounded-full border-2 border-wheat text-wheat hover:bg-wheat hover:text-forest transition-all duration-300 text-lg font-bold shadow-lg hover:shadow-xl transform transition-all duration-1000 delay-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              Upoznaj nas
            </button>
            <button
              onClick={() => scrollToSection("news")}
              className={`px-8 py-4 rounded-full bg-leaf text-forest hover:bg-forest hover:text-cream transition-all duration-300 text-lg font-bold shadow-lg hover:shadow-xl transform transition-all duration-1000 delay-900 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              Novosti
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements - vertical line and scroll indicator */}
      <div 
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="h-16 w-[1px] bg-wheat/50 mb-4"></div>
        <button 
          onClick={() => scrollToSection("about")} 
          className="text-wheat mb-8 hover:text-leaf transition-colors duration-300 focus:outline-none"
          aria-label="Scroll down"
        >
          <svg
            className="w-8 h-8 animate-bounce-slow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </button>
      </div>

      {/* Decorative corner elements */}
      <div className={`absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-wheat/30 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}></div>
      <div className={`absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-wheat/30 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}></div>
      <div className={`absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-wheat/30 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}></div>
      <div className={`absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-wheat/30 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </section>
  );
};

export default Hero;

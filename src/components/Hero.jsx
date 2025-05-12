const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('../public/images/pozadina.jpg')" }}
    >
      {/* Overlay s gradijentom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-forest/70"></div>

      {/* Sadržaj */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-cream px-4 max-w-4xl mx-auto">
        <div className="bg-forest/30 backdrop-blur-sm p-8 rounded-lg border border-cream/20 shadow-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-6 animate-slide-down">
            <span className="text-wheat">Domaće.</span> <span className="text-leaf">Kvalitetno.</span> <span className="text-cream">OPG Dombaj.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-opensans mb-8 animate-fade-in-delay">
            Sa polja direktno na vaš stol!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="bg-wheat text-earth px-8 py-4 rounded-lg shadow-lg hover:bg-earth hover:text-wheat transition transform hover:scale-105 duration-300 opacity-0 animate-slide-up font-bold"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              Upoznaj nas
            </a>
            <a
              href="#news"
              className="bg-forest text-cream px-8 py-4 rounded-lg shadow-lg hover:bg-leaf hover:text-forest transition transform hover:scale-105 duration-300 opacity-0 animate-slide-up font-bold"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              Novosti
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
        <svg className="w-10 h-10 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
export default Hero
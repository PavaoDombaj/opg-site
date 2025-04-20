const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('../public/images/pozadina.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Sadržaj */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-cream px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-4  animate-slide-down">
          Domaće. Kvalitetno. OPG Dombaj.
        </h1>
        <p className="text-lg md:text-xl font-opensans mb-6  animate-fade-in-delay">
          Sa polja direktno na vaš stol!
        </p>
        <a
          href="#products"
          className="bg-wheat text-earth px-6 py-3 rounded-lg shadow-lg hover:bg-earth hover:text-wheat transition transform hover:scale-105 duration-300 opacity-0 animate-slide-up"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          Pogledaj ponudu
        </a>
      </div>
    </section>
  );
};
export default Hero
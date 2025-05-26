import { useEffect } from 'react';

const About = () => {
  // Add structured data for SEO
  useEffect(() => {
    // Create JSON-LD structured data for LocalBusiness
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "OPG Dombaj",
      "image": "/images/pozadina.jpg",
      "description": "OPG Dombaj iz Drnja nudi svježe domaće poljoprivredne proizvode. Obitelj Dombaj i Sunčica Dombaj proizvode kvalitetne domaće proizvode direktno s polja na vaš stol.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ločka ulica 9",
        "addressLocality": "Drnje",
        "postalCode": "48322",
        "addressCountry": "HR"
      },
      "telephone": "+385 99 757 3923",
      "email": "pavaodombaj@gmail.com",
      "url": "https://www.opgdombaj.hr",
      "priceRange": "$$",
      "openingHours": "Mo-Sa 08:00-18:00",
      "keywords": "OPG Dombaj, Dombaj, Sunčica Dombaj, OPG Drnje, domaći proizvodi, poljoprivreda"
    };

    // Add the structured data to the page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Clean up
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="about" className="bg-cream pt-16" aria-label="O OPG Dombaj">
      <div className="hidden md:flex w-full h-screen">
  {/* Lijeva kolona */}
  <div className="flex flex-col w-1/2 h-full">
    <img
      src="/images/onama1.jpg"
      alt="OPG Dombaj staklenik u Drnju - uzgoj domaćeg povrća"
      className="w-full flex-[2] object-cover h-0 min-h-0 animate-fade-in"
    />
    <div className="w-full bg-forest flex items-center justify-center flex-1 animate-slide-in-up">
      <h2 className="text-4xl md:text-5xl font-playfair text-cream tracking-widest">
        O NAMA
      </h2>
    </div>
    <img
      src="/images/pozadina.jpg"
      alt="Sunčica Dombaj i obitelj na OPG-u u Drnju - domaći uzgoj"
      className="w-full flex-[2] object-cover h-0 min-h-0 animate-fade-in-delay"
    />
  </div>
  {/* Desna kolona */}
  <div className="flex flex-col w-1/2 h-full">
    <div className="flex-1 bg-cream p-10 flex flex-col justify-center animate-slide-in-up">
      <h3 className="text-2xl md:text-3xl font-playfair text-forest mb-4">
        Naša priča
      </h3>
      <p className="text-base md:text-lg font-opensans text-forest leading-relaxed">
        Naše obiteljsko poljoprivredno gospodarstvo temelji se na jednostavnoj, ali snažnoj ideji – uzgajati zdravo, prirodno i s ljubavlju. Generacijama se brinemo o zemlji, biljkama i životinjama s dubokim poštovanjem prema prirodi i tradicionalnim vrijednostima.
      </p>
    </div>
    <div className="flex-1 bg-wheat p-10 flex flex-col justify-center animate-slide-in-up delay-200">
      <h3 className="text-2xl md:text-3xl font-playfair text-earth mb-4">
        Naši proizvodi
      </h3>
      <p className="text-base md:text-lg font-opensans text-earth leading-relaxed">
        Svaki proizvod koji izađe s našeg imanja rezultat je ručne pažnje, sezonskog ritma i brige. Ne koristimo industrijske metode ni prečace – kod nas nema ničeg „na brzinu“. Vjerujemo u kvalitetu ispred kvantitete, u okus koji vraća u djetinjstvo i u povezanost s ljudima kojima je hrana više od pukog obroka.
      </p>
    </div>
    <div className="flex-1 bg-cream p-10 flex flex-col justify-center animate-slide-in-up delay-400">
      <h3 className="text-2xl md:text-3xl font-playfair text-forest mb-4">
        Spoj tradicije i tehnologije
      </h3>
      <p className="text-base md:text-lg font-opensans text-forest leading-relaxed">
        Iako njegujemo tradiciju, ne bojimo se tehnologije – pratimo suvremene trendove kako bismo našim kupcima olakšali narudžbe, komunikaciju i dostupnost informacija o proizvodima. Vjerujemo da spoju prirode i znanja pripada budućnost. Danas ponosno nudimo širok izbor domaćih proizvoda – od svježeg povrća i voća, do prerađevina i sezonskih delicija. Svaki kupac postaje dio naše priče, a svaki osmijeh koji dobijemo potvrda je da radimo nešto što vrijedi. Dobrodošli na našu stranicu – i u naš svijet. 🌱
      </p>
    </div>
  </div>
</div>


      {/* Mobilni layout */}
      <div className="flex flex-col md:hidden w-full">
        <img
          src="/images/onama1.jpg"
          alt="OPG Dombaj staklenik u Drnju - uzgoj domaćeg povrća"
          className="w-full h-48 object-cover"
        />
        <div className="w-full bg-forest flex items-center justify-center py-4">
          <h2 className="text-3xl font-playfair text-cream tracking-widest">
            O NAMA
          </h2>
        </div>
        <div className="bg-cream p-5">
          <h3 className="text-xl font-playfair text-forest mb-3">Naša priča</h3>
          <p className="text-base font-opensans text-forest leading-relaxed mb-5">
            Naše obiteljsko poljoprivredno gospodarstvo temelji se na jednostavnoj, ali snažnoj ideji – uzgajati zdravo, prirodno i s ljubavlju. Generacijama se brinemo o zemlji, biljkama i životinjama s dubokim poštovanjem prema prirodi i tradicionalnim vrijednostima.
          </p>
        </div>
        <div className="bg-wheat p-5">
          <h3 className="text-xl font-playfair text-earth mb-3">
            Naši proizvodi
          </h3>
          <p className="text-base font-opensans text-earth leading-relaxed mb-5">
            Svaki proizvod koji izađe s našeg imanja rezultat je ručne pažnje, sezonskog ritma i brige. Ne koristimo industrijske metode ni prečace – kod nas nema ničeg „na brzinu“. Vjerujemo u kvalitetu ispred kvantitete, u okus koji vraća u djetinjstvo i u povezanost s ljudima kojima je hrana više od pukog obroka.
          </p>
        </div>
        <div className="bg-cream p-5">
          <h3 className="text-xl font-playfair text-forest mb-3">
            Spoj tradicije i tehnologije
          </h3>
          <p className="text-base font-opensans text-forest leading-relaxed">
            Iako njegujemo tradiciju, ne bojimo se tehnologije – pratimo suvremene trendove kako bismo našim kupcima olakšali narudžbe, komunikaciju i dostupnost informacija o proizvodima. Vjerujemo da spoju prirode i znanja pripada budućnost. Danas ponosno nudimo širok izbor domaćih proizvoda – od svježeg povrća i voća, do prerađevina i sezonskih delicija. Svaki kupac postaje dio naše priče, a svaki osmijeh koji dobijemo potvrda je da radimo nešto što vrijedi. Dobrodošli na našu stranicu – i u naš svijet. 🌱
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

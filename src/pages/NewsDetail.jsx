// pages/NewsDetail.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// test - mora bit api za pisanje i fetchanje bloga
const getNewsItemById = (id) => {
 
  const newsItems = [
    {
      id: 1,
      image: "/images/news/seasonal-harvest.jpg",
      title: "Sezonska berba započela",
      date: "20. travnja 2025.",
      content: `
        <p>Ove godine nas očekuje bogata berba organskog povrća i voća. Saznajte što je prvo spremno za vaš stol i kako naručiti svježe proizvode direktno s našeg OPG-a.</p>
        <p>S dolaskom proljeća, naši prvi sezonski proizvodi su spremni za berbu. Posebno smo ponosni na rani grašak, mladi luk i baby špinat koji su već dostupni za narudžbu.</p>
        <h3>Što trenutno beremo:</h3>
        <ul>
          <li>Mladi grašak</li>
          <li>Proljetni luk</li>
          <li>Baby špinat</li>
          <li>Rane salate</li>
          <li>Rotkvice</li>
        </ul>
        <p>Uskoro očekujemo i prve jagode, koje će biti spremne za početak svibnja, ovisno o vremenskim uvjetima.</p>
        <p>Sve naše proizvode možete naručiti putem web stranice ili nas posjetiti na tržnici subotom.</p>
      `
    },
    // Ostali news itemi...
  ];
  
  return newsItems.find(item => item.id === parseInt(id));
};

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = getNewsItemById(id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!newsItem) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-playfair text-forest">Vijest nije pronađena</h2>
          <Link to="/" className="inline-block mt-4 text-leaf hover:text-forest transition-colors">
            Natrag na početnu
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-cream pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl animate-fade-in">
          {/* Header slika */}
          <div className="relative h-[40vh] md:h-[50vh] mb-8 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={newsItem.image} 
              alt={newsItem.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
              <div className="p-6 md:p-8">
                <p className="text-cream text-sm mb-2">{newsItem.date}</p>
                <h1 className="text-3xl md:text-4xl font-playfair text-cream">{newsItem.title}</h1>
              </div>
            </div>
          </div>
          
          {/* Sadržaj vijesti */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div 
              className="news-content font-opensans text-forest leading-relaxed"
              dangerouslySetInnerHTML={{ __html: newsItem.content }}
            />
            
            <div className="mt-8 pt-6 border-t border-leaf border-opacity-20">
              <Link 
                to="/#news" 
                className="inline-flex items-center text-forest hover:text-leaf transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Natrag na sve novosti
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;

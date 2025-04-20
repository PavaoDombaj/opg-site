
import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ id, image, title, date, excerpt }) => {
  return (
    <Link to={`/news/${id}`} className="block h-full group">
      <div className="h-full bg-cream rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl group-hover:scale-[1.02]">
        {/* Slika s overlay efektom */}
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-forest bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-cream font-playfair px-4 py-2 rounded-full border border-cream opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              Pročitaj više
            </span>
          </div>
        </div>
        
        {/* Sadržaj kartice */}
        <div className="p-5">
          <p className="text-xs text-forest font-opensans mb-2 opacity-70">{date}</p>
          <h3 className="text-xl font-playfair text-earth mb-2 group-hover:text-forest transition-colors duration-300">{title}</h3>
          <p className="text-sm font-opensans text-forest line-clamp-3">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;

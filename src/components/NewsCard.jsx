import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ id, image, title, date, excerpt, gallery, slug }) => {
  // Format date with fallback
  const formatDate = (dateString) => {
    if (!dateString) return new Date().toLocaleDateString('hr-HR');
    try {
      return new Date(dateString).toLocaleDateString('hr-HR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return new Date().toLocaleDateString('hr-HR');
    }
  };

  return (
    <Link to={`/blog/${slug}`} className="block h-full group">
      <div className="h-full bg-cream rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl group-hover:scale-[1.02]">
        {/* Slika s overlay efektom */}
        <div className="relative overflow-hidden h-48">
          <img
            src={image || "https://picsum.photos/800/400"}
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
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs text-forest font-opensans opacity-70">
              {formatDate(date)}
            </p>
          </div>
          <h3 className="text-xl font-playfair text-earth mb-2 group-hover:text-forest transition-colors duration-300">{title}</h3>
          <p className="text-sm font-opensans text-forest line-clamp-3 mb-2">
            {excerpt || "Pročitajte više o ovoj vijesti..."}
          </p>
          {gallery && gallery.length > 0 && (
            <div className="flex gap-2 mt-4">
              {gallery.slice(0, 3).map((image, index) => (
                <img
                  key={image.id}
                  src={image.image_url}
                  alt={`Galerija ${index + 1}`}
                  className="w-16 h-16 object-cover rounded"
                />
              ))}
              {gallery.length > 3 && (
                <div className="w-16 h-16 bg-forest bg-opacity-10 rounded flex items-center justify-center text-forest text-sm">
                  +{gallery.length - 3}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;

import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ id, image, title, date, excerpt, gallery, slug }) => {
  // Format date with fallback
  const formatDate = (dateString) => {
    if (!dateString) return new Date().toLocaleDateString("hr-HR");
    try {
      return new Date(dateString).toLocaleDateString("hr-HR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return new Date().toLocaleDateString("hr-HR");
    }
  };

  return (
    <Link to={`/blog/${slug}`} className="block h-full group">
      <div className="h-full bg-cream rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl border border-forest/10 group-hover:border-leaf/30">
        {/* Ribbon s datumom */}
        <div className="absolute top-4 right-0 z-10">
          <div className="bg-forest text-cream py-1 px-4 rounded-l-lg shadow-md font-opensans text-xs font-bold">
            {formatDate(date)}
          </div>
        </div>

        {/* Slika s overlay efektom */}
        <div className="relative overflow-hidden h-56">
          <img
            src={image || "https://picsum.photos/800/400"}
            alt={title}
            className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-playfair text-cream mb-1 group-hover:text-wheat transition-colors duration-300 drop-shadow-md">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Sadržaj kartice */}
        <div className="p-6">
          <p className="text-sm font-opensans text-forest line-clamp-3 mb-4">
            {excerpt || "Pročitajte više o ovoj vijesti..."}
          </p>

          {gallery && gallery.length > 0 && (
            <div className="flex gap-2 mt-4">
              {gallery.slice(0, 3).map((image, index) => (
                <img
                  key={image.id}
                  src={image.image_url}
                  alt={`Galerija ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-lg shadow-sm"
                />
              ))}
              {gallery.length > 3 && (
                <div className="w-16 h-16 bg-forest/10 rounded-lg flex items-center justify-center text-forest text-sm font-bold">
                  +{gallery.length - 3}
                </div>
              )}
            </div>
          )}

          <div className="mt-4 flex justify-end">
            <span className="inline-flex items-center text-forest font-bold text-sm group-hover:text-leaf transition-colors duration-300">
              Pročitaj više
              <svg
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;

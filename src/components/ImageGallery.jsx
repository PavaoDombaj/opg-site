import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative cursor-pointer overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            onClick={() => openModal(image, index)}
          >
            <img
              src={image.image_url}
              alt={`Galerija ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-white text-2xl z-10"
                onClick={closeModal}
              >
                ✕
              </button>
              
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <img
                  src={images[currentIndex].image_url}
                  alt={`Galerija ${currentIndex + 1}`}
                  className="max-h-[80vh] w-auto mx-auto"
                />
              </motion.div>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                ←
              </button>
              
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery; 
import React, { useState, useEffect } from "react";

interface BannerCarrouselProps {
  images: string[];
  interval?: number;
}

export const BannerCarrousel: React.FC<BannerCarrouselProps> = ({
  images,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen automáticamente cada cierto tiempo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Cambia a la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Cambia a la siguiente imagen
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Cambia a una imagen específica
  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-4/5 mx-auto overflow-hidden">
      {/* Botón para ir a la imagen anterior */}
      <button
        className="z-10 absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={goToPrevious}
      >
        &#10094;
      </button>

      {/* Contenedor de las imágenes */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-64 flex items-center justify-center bg-gray-200"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-auto max-w-full max-h-full"
            />
          </div>
        ))}
      </div>

      {/* Botón para ir a la siguiente imagen */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={goToNext}
      >
        &#10095;
      </button>

      {/* Puntitos para cambiar de imagen */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

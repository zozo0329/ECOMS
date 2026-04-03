import React, { useState, useEffect } from "react";

const Carousel = ({ formattedProducts = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === formattedProducts.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [formattedProducts.length]);

  if (!formattedProducts.length) return null;
  //   const goToPrev = () => {
  //     setCurrentIndex((prev) =>
  //       prev === 0 ? formattedProducts.length - 1 : prev - 1,
  //     );
  //   };

  //   const goToNext = () => {
  //     setCurrentIndex((prev) =>
  //       prev === formattedProducts.length - 1 ? 0 : prev + 1,
  //     );
  //   };

  return (
    <div className="relative">
      {/* Image container - centered, normal size */}
      <div className="max-w-2xl mx-auto py-8 px-4 ">
        <div className="relative w-full h-64 md:h-80 ">
          {formattedProducts.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={product.image}
                alt={product.title || "Product"}
                className="w-full h-full object-contain rounded-lg bg-white cursor-pointer"
              />
            </div>
          ))}
        </div>

        {formattedProducts[currentIndex].title && (
          <div className="mt-4 text-center">
            <p className="text-lg font-medium">
              {formattedProducts[currentIndex].title}
            </p>
          </div>
        )}

        <div className="flex justify-center gap-2 mt-4">
          {formattedProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition cursor-pointer ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Buttons at screen edges */}
      {/* <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-white/90 hover:bg-white border-none shadow"
      >
        ❮
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-sm bg-white/90 hover:bg-white border-none shadow"
      >
        ❯
      </button> */}
    </div>
  );
};

export default Carousel;

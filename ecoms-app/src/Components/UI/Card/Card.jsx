import React from "react";

const Card = ({ image, alt, name, description, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="aspect-3/4 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 truncate cursor-default">
          {name}
        </h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2 cursor-default">
          {description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-semibold text-gray-900 cursor-default">
            ${price}
          </span>
          <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

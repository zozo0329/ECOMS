import React from "react";

const ItemFormat = ({ name, image, description, price }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
      <div className="relative h-96 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          {description && (
            <p className="text-sm text-gray-200 mb-3 line-clamp-2">
              {description}
            </p>
          )}
          {price && (
            <p className="text-xl font-bold text-emerald-400">${price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemFormat;

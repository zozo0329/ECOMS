import React from "react";

const ItemFormat = ({ name, image, description, price }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
      <div className="relative aspect-3/4 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {description && (
            <p className="text-sm text-gray-200 mb-2 line-clamp-2">
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

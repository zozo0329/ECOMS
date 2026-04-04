import React, { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../../../../../Other/API/Products";
const HealthFitness = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProducts();
        const filteredProducts = data.filter(
          (data) => data.category === "Health & Fitness",
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProduct();
  }, []);

  const transformedData = useMemo(() => {
    const slicedData = product.slice(0, 4);
    const formattedData = slicedData.map((data) => {
      return {
        name: data.name,
        image: data.image,
        description: data.description,
        id: data.id,
        price: data.priceCents,
      };
    });
    return formattedData;
  }, [product]);

  const formatPrice = (cents) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cents / 100);
  };

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-16 after:h-1 after:bg-amber-500 after:rounded-full cursor-default">
          Health & Fitness
        </h1>
        <p className="mt-4 text-sm md:text-base max-w-md mx-auto cursor-default">
          Stay active and feel your best with our range of fitness gear,
          wellness essentials, and health products—everything you need for a
          healthier lifestyle.
        </p>
      </div>

      <div className="flex w-full h-80 md:h-96 lg:h-125">
        {transformedData.map((item) => (
          <div
            key={item.id}
            className="flex-1 relative group cursor-pointer overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
              <h3 className="text-white text-lg font-semibold text-center mb-2">
                {item.name}
              </h3>
              <p className="text-gray-300 text-sm text-center mb-2 line-clamp-2">
                {item.description}
              </p>
              <span className="text-amber-500 font-bold text-xl">
                {formatPrice(item.price)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthFitness;

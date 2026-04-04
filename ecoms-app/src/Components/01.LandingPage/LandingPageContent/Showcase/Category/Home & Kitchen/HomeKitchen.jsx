import React, { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../../../../../Other/API/Products";
const HomeKitchen = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        const homeKitchenProducts = data.filter(
          (item) => item.category === "Home & Kitchen",
        );
        setProduct(homeKitchenProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  const finalFormattedProduct = useMemo(() => {
    const sliceProduct = product.slice(0, 8);
    const formattedProducts = sliceProduct.map((product) => {
      return {
        name: product.name,
        image: product.image,
        id: product.id,
        description: product.description,
        price: product.priceCents,
      };
    });
    return formattedProducts;
  }, [product]);

  const formatPrice = (cents) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cents / 100);
  };

  return (
    <div className="py-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-16 after:h-1 after:bg-amber-500 after:rounded-full cursor-default">
          Home & Kitchen
        </h1>
        <p className="mt-4 text-gray-500 text-sm md:text-base max-w-md mx-auto cursor-default">
          Discover essential tools and stylish solutions for your home and
          kitchen—designed for comfort, convenience, and everyday living.
        </p>
      </div>

      <div className="flex overflow-x-auto gap-0 pb-4 scrollbar-hide">
        {finalFormattedProduct.map((data) => (
          <div
            key={data.id}
            className="flex-shrink-0 w-64 md:w-80 relative group cursor-pointer overflow-hidden"
          >
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-64 md:h-80 object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
              <h3 className="text-white text-lg font-semibold text-center mb-2">
                {data.name}
              </h3>
              <p className="text-gray-300 text-sm text-center mb-2 line-clamp-2">
                {data.description}
              </p>
              <span className="text-amber-500 font-bold text-xl">
                {formatPrice(data.price)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeKitchen;

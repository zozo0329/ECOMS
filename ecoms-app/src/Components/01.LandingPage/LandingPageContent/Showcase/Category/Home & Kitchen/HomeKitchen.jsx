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
    const sliceProduct = product.slice(0, 5);
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
  console.log(finalFormattedProduct, "HOME PRODUCTS: ");
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto px-4">
        {finalFormattedProduct.map((data, i) => (
          <div
            key={data.id || i}
            className="relative aspect-3/4 overflow-hidden rounded-xl bg-gray-100 group cursor-pointer"
          >
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-sm font-semibold truncate">{data.name}</h3>
              <p className="text-emerald-400 font-bold">${data.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeKitchen;

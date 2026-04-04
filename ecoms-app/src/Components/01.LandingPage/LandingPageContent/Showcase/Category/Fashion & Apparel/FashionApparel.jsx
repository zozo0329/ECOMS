import React, { useEffect, useState, useMemo } from "react";
import Card from "../../../../../UI/Card/Card";
import { fetchProducts } from "../../../../../Other/API/Products";
import ItemFormat from "./ItemFormat/ItemFormat";

const FashionApparel = () => {
  const [fashionProducts, setFashionProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        const fashionProducts = data.filter(
          (product) => product.category === "Fashion & Apparel",
        );
        setFashionProducts(fashionProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);
  const formattedProducts = useMemo(() => {
    const fiveProducts = fashionProducts.slice(0, 4);
    const clothingProducts = fiveProducts.map((product) => {
      return {
        name: product.name,
        image: product.image,
        id: product.id,
        description: product.description,
        price: product.priceCents,
      };
    });
    return clothingProducts;
  }, [fashionProducts]);

  return (
    <div className="py-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-16 after:h-1 after:bg-amber-500 after:rounded-full cursor-default">
          Fashion & Apparel
        </h1>
        <p className="mt-4 text-gray-500 text-sm md:text-base max-w-md mx-auto cursor-default">
          Explore trendy styles and premium clothing for every occasion
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {formattedProducts.map((item, i) => (
          <Card key={item.id || i}>
            <ItemFormat
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              alt={item.name}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FashionApparel;

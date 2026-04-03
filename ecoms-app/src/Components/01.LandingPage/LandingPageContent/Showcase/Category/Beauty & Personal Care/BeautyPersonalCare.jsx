import React, { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../../../../../Other/API/Products";
import Card from "../../../../../UI/Card/Card";
import ItemFormat from "./ItemFormat/ItemFormat";

const BeautyPersonalCare = () => {
  const [beautyProducts, setBeautyProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        const beautyProducts = data.filter((product) => {
          return product.category === "Beauty & Personal Care";
        });
        setBeautyProducts(beautyProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  const formattedProducts = useMemo(() => {
    return beautyProducts.slice(0, 4).map((product) => {
      return {
        name: product.name,
        image: product.image,
        id: product.id,
        description: product.description,
        price: product.priceCents,
      };
    });
  }, [beautyProducts]);

  console.log(formattedProducts, "Beauty & Personal Care products:");
  return (
    <div className="py-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-16 after:h-1 after:bg-amber-500 after:rounded-full cursor-default">
          Beauty & Personal Care
        </h1>
        <p className="mt-4 text-gray-500 text-sm md:text-base max-w-md mx-auto cursor-default">
          Discover premium beauty and self-care products for your routine
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {formattedProducts.map((data, i) => (
          <Card key={data.id || i}>
            <ItemFormat
              name={data.name}
              image={data.image}
              id={data.id}
              description={data.description}
              price={data.price}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BeautyPersonalCare;

import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../../../../Other/API/Products";

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
  console.log(beautyProducts, "Beauty & Personal Care products:");
  return <div></div>;
};

export default BeautyPersonalCare;

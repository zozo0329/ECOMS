import { useEffect, useState, useMemo } from "react";
import { fetchProducts } from "../../../../../Other/API/Products";
import Carousel from "../../../../../UI/Carousel/Carousel";
const ElectronicsGadgets = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        const electronicsProducts = data.filter(
          (product) => product.category === "Electronics & Gadgets",
        );
        setProducts(electronicsProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);
  const formattedProducts = useMemo(() => {
    const fiveProducts = products.slice(0, 5);
    const electronicsProductsImages = fiveProducts.map((product) => {
      return {
        image: product.image,
        id: product.id,
        title: product.title,
        price: product.price,
      };
    });
    return electronicsProductsImages;
  }, [products]);

  return (
    <>
      <div className="py-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-16 after:h-1 after:bg-amber-500 after:rounded-full cursor-default">
            Electronics & Gadgets
          </h1>
          <p className="mt-4 text-sm md:text-base max-w-md mx-auto cursor-default">
            Discover the latest tech and innovative gadgets to simplify your
            life
          </p>
        </div>
        <Carousel formattedProducts={formattedProducts} />
        <div className="flex justify-center mt-6">
          <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors duration-300 cursor-pointer">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default ElectronicsGadgets;

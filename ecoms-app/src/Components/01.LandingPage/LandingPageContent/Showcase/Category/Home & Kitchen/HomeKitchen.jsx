import React, { useEffect, useMemo, useRef, useState } from "react";
import { fetchProducts } from "../../../../../Other/API/Products";
const HomeKitchen = () => {
  const [product, setProduct] = useState([]);
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
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

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md hidden md:block"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md hidden md:block"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div
          className="overflow-x-auto scrollbar-hide px-8"
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex whitespace-nowrap ${!isPaused ? "animate-scroll" : ""}`}
          >
            {[...finalFormattedProduct, ...finalFormattedProduct].map(
              (data, index) => (
                <div
                  key={`${data.id}-${index}`}
                  className="shrink-0 w-72 md:w-96 relative group cursor-pointer overflow-hidden"
                >
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-80 md:h-96 lg:h-[500px] object-cover transition-opacity duration-300"
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
              ),
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HomeKitchen;

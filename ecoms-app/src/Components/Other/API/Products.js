export const fetchProducts = async () => {
  try {
    const res = await fetch(
      "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json",
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

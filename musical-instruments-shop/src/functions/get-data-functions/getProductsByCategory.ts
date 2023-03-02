import allProducts from "../../data/products/allProducts";

export default function getProductsByCategory(typeOfProducts: string) {
  return allProducts.filter((product) =>
    product.category.includes(typeOfProducts)
  );
}

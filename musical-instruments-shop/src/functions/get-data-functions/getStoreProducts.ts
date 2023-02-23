import allProducts from "../../data/products/allProducts";

export default function getStoreProducts(typeOfProducts: string) {
  return allProducts.filter((product) =>
    product.category.includes(typeOfProducts)
  );
}

import allProducts from "../../data/products/allProducts";
import productType from "../../data/products/productType";

export default function getStoreProducts(typeOfProducts: string) {
  return allProducts.filter((product) =>
    product.category.includes(typeOfProducts)
  );
}

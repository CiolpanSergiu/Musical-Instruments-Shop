import allProducts from "../../data/products/allProducts";

export default function getProductsByBrand(brandName: string) {
  return allProducts.filter((product) => product.brand === brandName);
}

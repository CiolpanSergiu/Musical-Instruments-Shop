import allProducts from "../data/products/allProducts";
import ProductType from "../data/products/productType";
import { createItemDetailsPageRoute } from "./createPageFunctions";

const productDetailPageRoutes = allProducts.map((product: ProductType) =>
  createItemDetailsPageRoute(product)
);

export default productDetailPageRoutes;

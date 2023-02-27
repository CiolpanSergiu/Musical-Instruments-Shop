import allProducts from "../data/products/allProducts";
import { Product } from "../types/commonTypes";
import { createItemDetailsPageRoute } from "./createPageFunctions";

const productDetailPageRoutes: JSX.Element[] = allProducts.map(
  (product: Product) => createItemDetailsPageRoute(product)
);

export default productDetailPageRoutes;

import instrumentsCategoryData from "../data/mainCategory";
import { createMainCategoryPages } from "./createRouteFunction";

const mainCategoryPagesRoutes = createMainCategoryPages(
  instrumentsCategoryData
);

export default mainCategoryPagesRoutes;

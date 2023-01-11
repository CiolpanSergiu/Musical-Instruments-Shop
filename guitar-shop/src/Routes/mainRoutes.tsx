import instrumentsCategoryData from "../data/mainCategory";
import { createMainCategoryPages } from "./createPageFunctions";

const mainCategoryPagesRoutes = createMainCategoryPages(
  instrumentsCategoryData
);

export default mainCategoryPagesRoutes;

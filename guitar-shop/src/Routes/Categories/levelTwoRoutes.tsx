import instrumentsCategoryData from "../../data/mainCategory";
import { createMainCategoryPages } from "./../createPageFunctions";

const levelTwoCategoryPagesRoutes = createMainCategoryPages(
  instrumentsCategoryData
);

export default levelTwoCategoryPagesRoutes;

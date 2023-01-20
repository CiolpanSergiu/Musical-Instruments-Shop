import { createCategoryPages } from "../createPageFunctions";
import allLevelTwoCategories from "../../data/LevelTwoCategories/allLevelTwoCategories";

const levelThreeCategoriesPages = allLevelTwoCategories.map((subcategory) => {
  return createCategoryPages(subcategory, true, true, true);
});

export default levelThreeCategoriesPages;

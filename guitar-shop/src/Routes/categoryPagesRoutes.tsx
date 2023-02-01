import instrumentsCategoryData from "../data/LevelOneCategories/mainCategory";
import { createCategoryPages } from "./createPageFunctions";
import getDeeperLevelSubcategories from "../functions/getDeeperLevelSubcategories";

const levelTwoSubcategoriesData = getDeeperLevelSubcategories(
  instrumentsCategoryData
)?.filter((category) => category.hasOwnProperty("subcategories"));

const levelThreeSubcategoriesData = getDeeperLevelSubcategories(
  getDeeperLevelSubcategories(levelTwoSubcategoriesData)
);

const levelFourSubcategoriesData = getDeeperLevelSubcategories(
  getDeeperLevelSubcategories(levelThreeSubcategoriesData)
);

const levelTwoCategoryPages = createCategoryPages(instrumentsCategoryData);
const levelThreeCategoryPages = createCategoryPages(levelTwoSubcategoriesData);
const levelFourCategoryPages = createCategoryPages(levelThreeSubcategoriesData);
const levelFiveCategoryPages = createCategoryPages(levelFourSubcategoriesData);

// export default [
//   instrumentsCategoryData,
//   levelTwoSubcategoriesData,
//   levelThreeSubcategoriesData,
//   levelFourSubcategoriesData,
// ];

export {
  levelTwoCategoryPages,
  levelThreeCategoryPages,
  levelFourCategoryPages,
  levelFiveCategoryPages,
};

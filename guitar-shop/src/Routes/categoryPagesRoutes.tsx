import instrumentsCategoryData from "../data/mainCategory";
import { createCategoryPages } from "./createPageFunctions";

function getDeeperLevelSubcategories(data: any) {
  return data
    .filter((category: any) => {
      return category.hasOwnProperty("subcategories");
    })
    .map((category: any) => {
      return category.subcategories;
    })
    .flat(1);
}

const levelTwoSubcategoriesData = getDeeperLevelSubcategories(
  instrumentsCategoryData
);

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

export {
  levelTwoCategoryPages,
  levelThreeCategoryPages,
  levelFourCategoryPages,
  levelFiveCategoryPages,
};

import instrumentsCategoryData from "../data/LevelOneCategories/mainCategory";
import { createCategoryPages } from "./createPageFunctions";

type Category = {
  title: string;
  src: string;
  alt: string;
  pageLink: string;
  subcategories: {
    src: string;
    alt: string;
    title: string;
    pageLink: string;
  }[];
};

function getDeeperLevelSubcategories(data: unknown) {
  if (Array.isArray(data)) {
    return data
      .filter((category: boolean) => {
        return category.hasOwnProperty("subcategories");
      })
      .map((category: Category) => {
        return category.subcategories;
      })
      .flat(1);
  }
}

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

export {
  levelTwoCategoryPages,
  levelThreeCategoryPages,
  levelFourCategoryPages,
  levelFiveCategoryPages,
};

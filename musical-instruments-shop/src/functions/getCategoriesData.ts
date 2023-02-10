import instrumentsCategoryData from "../data/level-one-categories/mainCategory";
import getDeeperLevelSubcategories from "../functions/getDeeperLevelSubcategories";

const levelTwoCategories = getDeeperLevelSubcategories(instrumentsCategoryData);
// ?.filter((category) => category.hasOwnProperty("subcategories"));
const levelThreeCategories = getDeeperLevelSubcategories(levelTwoCategories);
const levelThreeWithSubcategories =
  getDeeperLevelSubcategories(levelThreeCategories);
const levelFourCategories = getDeeperLevelSubcategories(
  levelThreeWithSubcategories
);
const levelFiveCategories = getDeeperLevelSubcategories(levelFourCategories);

export {
  instrumentsCategoryData,
  levelTwoCategories,
  levelThreeCategories,
  levelFourCategories,
  levelFiveCategories,
};

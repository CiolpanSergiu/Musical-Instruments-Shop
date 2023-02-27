import instrumentsCategoryData from "../../data/level-one-categories/mainCategory";
import getDeeperLevelSubcategories from "./getDeeperLevelSubcategories";

const levelTwoCategories = getDeeperLevelSubcategories(instrumentsCategoryData);
const levelThreeCategories = getDeeperLevelSubcategories(levelTwoCategories);
const levelThreeWithSubcategories =
  getDeeperLevelSubcategories(levelThreeCategories);
const levelFourCategories = getDeeperLevelSubcategories(
  levelThreeWithSubcategories
);
const levelFiveCategories = getDeeperLevelSubcategories(levelFourCategories);

const allCategories = [
  instrumentsCategoryData,
  levelTwoCategories,
  levelThreeCategories,
  levelFourCategories,
  levelFiveCategories,
].flat(1);

const allSubcategories = [
  levelTwoCategories,
  levelThreeCategories,
  levelFourCategories,
  levelFiveCategories,
].flat(1);

export {
  allCategories,
  allSubcategories,
  instrumentsCategoryData,
  levelTwoCategories,
  levelThreeCategories,
  levelFourCategories,
  levelFiveCategories,
};

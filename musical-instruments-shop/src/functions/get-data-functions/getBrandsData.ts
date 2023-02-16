import {
  instrumentsCategoryData,
  levelTwoCategories,
  levelThreeCategories,
  levelFourCategories,
  levelFiveCategories,
} from "./getCategoriesData";
import getDeeperLevelBrands from "./getDeeperLevelBrands";

const mainCategoriesBrands = getDeeperLevelBrands(instrumentsCategoryData);

const levelTwoCategoriesBrands = getDeeperLevelBrands(levelTwoCategories);

const levleThreeCategoriesBrands = getDeeperLevelBrands(levelThreeCategories);

const levleFourCategoriesBrands = getDeeperLevelBrands(levelFourCategories);

const levleFiveCategoriesBrands = getDeeperLevelBrands(levelFiveCategories);

export {
  mainCategoriesBrands,
  levelTwoCategoriesBrands,
  levleThreeCategoriesBrands,
  levleFourCategoriesBrands,
  levleFiveCategoriesBrands,
};

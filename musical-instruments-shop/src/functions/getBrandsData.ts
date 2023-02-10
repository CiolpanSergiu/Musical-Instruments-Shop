import {
  instrumentsCategoryData,
  levelTwoCategories,
  levelThreeCategories,
  levelFourCategories,
  levelFiveCategories,
} from "../functions/getCategoriesData";
import getDeeperLevelBrands from "../functions/getDeeperLevelBrands";

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

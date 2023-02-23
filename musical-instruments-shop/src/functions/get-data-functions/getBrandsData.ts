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

const levelThreeCategoriesBrands = getDeeperLevelBrands(levelThreeCategories);

const levelFourCategoriesBrands = getDeeperLevelBrands(levelFourCategories);

const levelFiveCategoriesBrands = getDeeperLevelBrands(levelFiveCategories);

const allBrands = [
  mainCategoriesBrands,
  levelTwoCategoriesBrands,
  levelThreeCategoriesBrands,
  levelFourCategoriesBrands,
  levelFiveCategoriesBrands,
]
  .flat(1)
  .map((brand) => [brand?.brandName, brand?.pageLink]);

export {
  allBrands,
  mainCategoriesBrands,
  levelTwoCategoriesBrands,
  levelThreeCategoriesBrands,
  levelFourCategoriesBrands,
  levelFiveCategoriesBrands,
};

import capitalizeWords from "../string-formatting-functions/capitalizeWords";
import createLink from "../string-formatting-functions/createLink";
import mainCategory from "../../data/level-one-categories/mainCategory";
import allLevelTwoData from "../../data/categories-data/allLevelTwoCategories";
import allLevelThreeData from "../../data/categories-data/allLevelThreeData";
import allLevelFourData from "../../data/categories-data/allLevelFourData";
import allLevelFiveData from "../../data/categories-data/allLevelFiveData";
import getDeeperLevelBrands from "./getDeeperLevelBrands";

type Brands =
  | {
      src: string;
      alt: string;
      brandName: string;
      pageLink: string;
    }[]
  | undefined;

const mainCategoriesBrands: Brands = getDeeperLevelBrands(mainCategory);

const levelTwoCategoriesBrands: Brands = getDeeperLevelBrands(allLevelTwoData);

const levelThreeCategoriesBrands: Brands =
  getDeeperLevelBrands(allLevelThreeData);

const levelFourCategoriesBrands: Brands =
  getDeeperLevelBrands(allLevelFourData);

const levelFiveCategoriesBrands: Brands =
  getDeeperLevelBrands(allLevelFiveData);

type AllBrands =
  | {
      title: string;
      pageLink: string;
    }
  | undefined;

const allBrands: AllBrands[] = [
  mainCategoriesBrands,
  levelTwoCategoriesBrands,
  levelThreeCategoriesBrands,
  levelFourCategoriesBrands,
  levelFiveCategoriesBrands,
]
  .flat(1)
  .map((brand) => {
    if (brand !== undefined) {
      return {
        title: capitalizeWords(brand.brandName),
        pageLink: createLink(brand.brandName),
      };
    }
  });

export {
  allBrands,
  mainCategoriesBrands,
  levelTwoCategoriesBrands,
  levelThreeCategoriesBrands,
  levelFourCategoriesBrands,
  levelFiveCategoriesBrands,
};

import instrumentsCategoryData from "../../data/level-one-categories/mainCategory";
import { Product } from "../../types/commonTypes";
import getDeeperLevelSubcategories from "./getDeeperLevelSubcategories";

type Subcategory =
  | {
      items: Product[];
      src: string;
      alt: string;
      title: string;
      pageLink: string;
    }[]
  | undefined;

const levelTwoCategories: Subcategory = getDeeperLevelSubcategories(
  instrumentsCategoryData
);
const levelThreeCategories: Subcategory =
  getDeeperLevelSubcategories(levelTwoCategories);
const levelThreeSubcategories: Subcategory =
  getDeeperLevelSubcategories(levelThreeCategories);
const levelFourCategories: Subcategory = getDeeperLevelSubcategories(
  levelThreeSubcategories
);
const levelFiveCategories: Subcategory =
  getDeeperLevelSubcategories(levelFourCategories);

const allCategories: unknown = [
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

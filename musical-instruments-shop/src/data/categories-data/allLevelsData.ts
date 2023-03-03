import mainCategory from "../level-one-categories/mainCategory";
import allLevelTwoData from "./allLevelTwoCategories";
import allLevelThreeData from "./allLevelThreeData";
import allLevelFourData from "./allLevelFourData";
import allLevelFiveData from "./allLevelFiveData";

const allLevelsData = [
  ...mainCategory,
  ...allLevelTwoData,
  ...allLevelThreeData,
  ...allLevelFourData,
  ...allLevelFiveData,
];

const allSubcategories = [
  ...allLevelTwoData,
  ...allLevelThreeData,
  ...allLevelFourData,
  ...allLevelFiveData,
];

export { allLevelsData, allSubcategories };

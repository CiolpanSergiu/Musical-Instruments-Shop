import levelFourData from "../../../data/LevelFourCategories/GuitarAndBasses/levelFourData";
import { createCategoryPages } from "../../createPageFunctions";

const guitarAndBassLevelFourPages = levelFourData.map((data) => {
  console.log(data);
  return createCategoryPages(data.data, false, true, false);
});

export default guitarAndBassLevelFourPages;

import levelFourData from "../../data/LevelFourCategories/GuitarAndBasses/levelFourData";
import { createCategoryPages } from "../createPageFunctions";

const levelFourCategoryPages = levelFourData.map((data) => {
  return createCategoryPages(
    data.data,
    true,
    true,
    true,
    data.pageLink,
    data.pageTitle
  );
});

export default levelFourCategoryPages;

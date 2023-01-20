import { createCategoryPages } from "../../createPageFunctions";
import allTraditionalInstrumentsLevelFourData from "../../../data/LevelFourCategories/TraditionalInstruments/allTraditionalInstrumentsLevelFourData";

const traditionalInstrumentsPageRoutes = createCategoryPages(
  allTraditionalInstrumentsLevelFourData,
  true,
  true,
  true
);

export default traditionalInstrumentsPageRoutes;

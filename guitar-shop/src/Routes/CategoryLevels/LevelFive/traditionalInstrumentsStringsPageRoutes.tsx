import allLevelFiveStringsData from "../../../data/LevelFiveCategories/TraditionalInstruments/Strings/allLevelFiveStringsData";
import { createCategoryPages } from "../../createPageFunctions";

const traditionalInstrumentsStringsPageRoutes = createCategoryPages(
  allLevelFiveStringsData,
  false,
  true,
  false
);

export default traditionalInstrumentsStringsPageRoutes;

import instrumentStandsData from "../../../data/LevelFourCategories/Accesories/instrumentStandsData";
import { createCategoryPages } from "../../createPageFunctions";

console.log(instrumentStandsData);

// because on this page there is only one category that get a level four we
// make it an array so we can map over it
const instrumentStandsPageRoutes = createCategoryPages(
  [instrumentStandsData],
  false,
  true,
  false
);

export default instrumentStandsPageRoutes;

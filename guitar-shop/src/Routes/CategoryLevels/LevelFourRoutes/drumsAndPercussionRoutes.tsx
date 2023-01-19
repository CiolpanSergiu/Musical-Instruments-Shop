import allDrumsAndPercussionData from "../../../data/LevelFourCategories/DrumsAndPercussion/allDrumsAndPercussionData";
import { createCategoryPages } from "../../createPageFunctions";

const drumsAndPercussionPageRoutes = createCategoryPages(
  allDrumsAndPercussionData,
  false,
  true,
  false
);

export default drumsAndPercussionPageRoutes;

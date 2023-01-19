import multipinConnectorsSubcategories from "../../../data/LevelFourCategories/PaSystems/multipinConnectorsSubcategories";
import { createCategoryPages } from "../../createPageFunctions";

const paSystemsPageRoutes = createCategoryPages(
  [multipinConnectorsSubcategories],
  true,
  true,
  true
);

export default paSystemsPageRoutes;

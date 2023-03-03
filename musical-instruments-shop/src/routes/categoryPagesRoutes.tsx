import { createCategoryPages } from "./createPageFunctions";
import { allLevelsData } from "../data/categories-data/allLevelsData";

const allCategoryPages = createCategoryPages(allLevelsData);

export default allCategoryPages;

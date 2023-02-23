import { createCategoryPages } from "./createPageFunctions";
import { allCategories } from "../functions/get-data-functions/getCategoriesData";

const allCategoryPages = createCategoryPages(allCategories);

export default allCategoryPages;

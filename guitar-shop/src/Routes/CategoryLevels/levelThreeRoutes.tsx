import { createCategoryPages } from "../createPageFunctions";
import allLevelTwoCategories from "../../data/LevelTwoCategories/allLevelTwoCategories";

type Subcategory = {
  src: string;
  alt: string;
  title: string;
  pageLink: string;
  subcategories: {
    src: string;
    alt: string;
    title: string;
    pageLink: string;
    subcategories?: {
      src: string;
      alt: string;
      title: string;
      pageLink: string;
    }[];
  }[];
};

const levelThreeCategoriesPages = allLevelTwoCategories.map((subcategory) => {
  return createCategoryPages(subcategory, true, true, true);
});

export default levelThreeCategoriesPages;

import { createCategoryPages } from "./createPageFunctions";
import instrumentsCategoryData from "../data/mainCategory";

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

const subcategories = instrumentsCategoryData.map(
  (subcategory: Subcategory) => {
    return subcategory;
  }
);

const subcategoriesPages = subcategories.map(
  (categorySubcategory: Subcategory) => {
    return createCategoryPages(
      categorySubcategory.subcategories,
      true,
      true,
      true
    );
  }
);

export default subcategoriesPages;

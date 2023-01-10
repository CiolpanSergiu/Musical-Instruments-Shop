import { createCategoryPages } from "./createRouteFunction";
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
    subcategories: {
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
  (mainCategorySubcategory: Subcategory) => {
    return createCategoryPages(
      mainCategorySubcategory.subcategories,
      true,
      true,
      true
    );
  }
);

export default subcategoriesPages;

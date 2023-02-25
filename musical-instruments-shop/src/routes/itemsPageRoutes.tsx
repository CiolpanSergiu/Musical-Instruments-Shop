import { allCategories } from "../functions/get-data-functions/getCategoriesData";
import Product from "../data/products/productType";
import { createShoppingPageRoute } from "./createPageFunctions";

type categoryWithProducts = {
  src: string;
  alt: string;
  title: string;
  pageLink: string;
  subcategories: {
    items: Product[];
    src: string;
    alt: string;
    title: string;
    pageLink: string;
  }[];
  brands: {
    brandName: string;
    src: string;
    alt: string;
    pageLink: string;
  }[];
  items: Product[];
};

export const allItemsArr = allCategories.filter((category) => {
  if (category) {
    return category.hasOwnProperty("items");
  }
});

// fix later
const itemsShoppingPages = allItemsArr.map((category: categoryWithProducts) => {
  const pageLink = `/${category.title
    .toLocaleLowerCase()
    .replace(/[^\w]/g, "-")
    .replace(/--+/g, "-")}`;
  return createShoppingPageRoute(pageLink, category.title, category.items);
});

export default itemsShoppingPages;

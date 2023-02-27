import { allSubcategories } from "../functions/get-data-functions/getCategoriesData";
import { Product } from "../types/commonTypes";
import { createShoppingPageRoute } from "./createPageFunctions";

type CategoryWithProducts =
  | {
      items: Product[];
      src: string;
      alt: string;
      title: string;
      pageLink: string;
    }
  | undefined;

export const allItemsArr: CategoryWithProducts[] = allSubcategories.filter(
  (category) => {
    if (category) {
      return category.hasOwnProperty("items");
    }
  }
);

const itemsShoppingPages = allItemsArr.map((category: CategoryWithProducts) => {
  if (category) {
    const pageLink = `/${category.title
      .toLocaleLowerCase()
      .replace(/[^\w]/g, "-")
      .replace(/--+/g, "-")}`;
    return createShoppingPageRoute(pageLink, category.title, category.items);
  }
});

export default itemsShoppingPages;

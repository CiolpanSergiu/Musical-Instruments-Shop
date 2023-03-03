import { allSubcategories } from "../functions/get-data-functions/getCategoriesData";
import { Product } from "../types/commonTypes";
import { createShoppingPageRoute } from "./createPageFunctions";
import getProductsByBrand from "../functions/get-data-functions/getProductsByBrand";
import createLink from "../functions/string-formatting-functions/createLink";
import allUniqueBrands from "../data/suggestions/brandsSuggestions";

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
    const pageLink = createLink(category.title);
    return createShoppingPageRoute(pageLink, category.title, category.items);
  }
});

const brandsShoppingPages = allUniqueBrands.map(
  (brand: { title: string; pageLink: string }) => {
    // const pageLink = createLink(brand);
    return createShoppingPageRoute(
      brand.pageLink,
      `${brand.title} Products`,
      getProductsByBrand(brand.title)
    );
  }
);

export { itemsShoppingPages, brandsShoppingPages };

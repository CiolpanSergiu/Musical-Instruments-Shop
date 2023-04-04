import { allLevelsData } from "../data/categories-data/allLevelsData";
import { createShoppingPageRoute } from "./createPageFunctions";
import getProductsByBrand from "../functions/get-data-functions/getProductsByBrand";
import createLink from "../functions/string-formatting-functions/createLink";
import allUniqueBrands from "../data/suggestions/brandsSuggestions";

export const categoriesWithItems = allLevelsData.filter((category) => {
  if (category) {
    return category.hasOwnProperty("items");
  }
});

const itemsShoppingPages = categoriesWithItems.map((category) => {
  if (category) {
    const pageLink = createLink(category.title);
    // fix this sometime
    return createShoppingPageRoute(pageLink, category.title, category.items);
  }
});

const brandsShoppingPages = allUniqueBrands.map(
  (brand: { title: string; pageLink: string }) => {
    return createShoppingPageRoute(
      brand.pageLink,
      `${brand.title} Products`,
      getProductsByBrand(brand.title)
    );
  }
);

export { itemsShoppingPages, brandsShoppingPages };

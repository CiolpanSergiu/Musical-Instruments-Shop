import allPopularItems from "../../data/PopularItems/allPopularItems";
import { createItemDetailsPageRoute } from "../createPageFunctions";

const popularItemsPages = allPopularItems.flat(1).map((item) => {
  return createItemDetailsPageRoute(item);
});

export default popularItemsPages;

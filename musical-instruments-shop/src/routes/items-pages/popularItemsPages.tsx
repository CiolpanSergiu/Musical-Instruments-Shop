import allPopularItems from "../../data/popular-items/allPopularItems";
import { createItemDetailsPageRoute } from "../createPageFunctions";

const popularItemsPages = allPopularItems.flat(1).map((item) => {
  return createItemDetailsPageRoute(item);
});

export default popularItemsPages;

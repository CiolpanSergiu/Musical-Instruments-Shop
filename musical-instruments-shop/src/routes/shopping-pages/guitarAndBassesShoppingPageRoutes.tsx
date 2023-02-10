import stratocasterGuitarsData from "../../data/shopping-page-items/guitars-and-basses/electric-guitars/stratocasterModels";
import { createShoppingPageRoute } from "../createPageFunctions";

const stratocasterGuitarsShoppingPage = createShoppingPageRoute(
  stratocasterGuitarsData.pageLink,
  stratocasterGuitarsData.pageTitle,
  stratocasterGuitarsData.data
);

export default [stratocasterGuitarsShoppingPage];

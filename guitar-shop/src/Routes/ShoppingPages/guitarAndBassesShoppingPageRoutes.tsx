import stratocasterGuitarsData from "../../data/ShoppingPageItems/GuitarsAndBasses/ElectricGuitars/stratocasterModels";
import { createShoppingPageRoute } from "../createPageFunctions";

const stratocasterGuitarsShoppingPage = createShoppingPageRoute(
  stratocasterGuitarsData.pageLink,
  stratocasterGuitarsData.pageTitle,
  stratocasterGuitarsData.data
);

export default [stratocasterGuitarsShoppingPage];

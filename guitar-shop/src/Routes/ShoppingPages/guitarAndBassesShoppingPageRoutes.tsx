import stratocasterGuitarsData from "../../data/ShoppingPageItems/GuitarsAndBasses/ElectricGuitars/stratocasterModels";
import telecasterModelsData from "../../data/ShoppingPageItems/GuitarsAndBasses/ElectricGuitars/telecasterModels";
import { createShoppingPageRoute } from "../createPageFunctions";

const stratocasterGuitarsShoppingPage = createShoppingPageRoute(
  stratocasterGuitarsData.pageLink,
  stratocasterGuitarsData.pageTitle,
  stratocasterGuitarsData.data
);

const telecasterGuitarsShoppingPage = createShoppingPageRoute(
  telecasterModelsData.pageLink,
  telecasterModelsData.pageTitle,
  telecasterModelsData.data
);

export default [stratocasterGuitarsShoppingPage, telecasterGuitarsShoppingPage];

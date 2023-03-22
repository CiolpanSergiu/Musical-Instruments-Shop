import capitalizeWords from "../string-formatting-functions/capitalizeWords";
import createLink from "../string-formatting-functions/createLink";
import { allLevelsData } from "../../data/categories-data/allLevelsData";

type AllBrands =
  | {
      title: string;
      pageLink: string;
    }
  | undefined;

const allBrands: AllBrands[] = allLevelsData
  .filter((data) => data.hasOwnProperty("brands"))
  .map((brand) => brand.brands)
  .flat(1)
  .map((brand) => {
    return {
      title: capitalizeWords(brand.brandName),
      pageLink: createLink(brand.brandName),
    };
  });

export { allBrands };

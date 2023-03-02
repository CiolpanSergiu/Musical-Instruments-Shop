import { allBrands } from "../../functions/get-data-functions/getBrandsData";

// https://stackoverflow.com/questions/44014799/javascript-how-to-remove-duplicate-arrays-inside-array-of-arrays
const allUniqueBrands = Array.from(
  new Set(allBrands.map((brand) => JSON.stringify(brand)))
).map((string) => JSON.parse(string));

export default allUniqueBrands;

import {
  mainCategoriesBrands,
  levelTwoCategoriesBrands,
  levleThreeCategoriesBrands,
  levleFourCategoriesBrands,
  levleFiveCategoriesBrands,
} from "../../functions/get-data-functions/getBrandsData";

const mainBrands = mainCategoriesBrands?.map((brand) => [
  brand.brandName,
  brand.pageLink,
]);
const levelTwoBrands = levelTwoCategoriesBrands?.map((brand) => [
  brand.brandName,
  brand.pageLink,
]);
const levelThreeBrands = levleThreeCategoriesBrands?.map((brand) => [
  brand.brandName,
  brand.pageLink,
]);
const levelFourBrands = levleFourCategoriesBrands?.map((brand) => [
  brand.brandName,
  brand.pageLink,
]);
const levelFiveBrands = levleFiveCategoriesBrands?.map((brand) => [
  brand.brandName,
  brand.pageLink,
]);

const brandsSuggestions: string[][] = Array.prototype.concat(
  mainBrands,
  levelTwoBrands,
  levelThreeBrands,
  levelFourBrands,
  levelFiveBrands
);

// https://stackoverflow.com/questions/44014799/javascript-how-to-remove-duplicate-arrays-inside-array-of-arrays
const uniqueBrandsSuggestionsString = Array.from(
  new Set(brandsSuggestions.map((brand) => JSON.stringify(brand)))
);

const uniqueBrandsSuggestions = uniqueBrandsSuggestionsString.map((string) =>
  JSON.parse(string)
);

export default uniqueBrandsSuggestions;

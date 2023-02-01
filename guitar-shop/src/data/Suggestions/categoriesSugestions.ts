import {
  instrumentsCategoryData,
  levelTwoCategories,
  levelThreeCategories,
  levelFourCategories,
  levelFiveCategories,
} from "../../functions/getCategoriesData";

const mainSuggestions = instrumentsCategoryData.map((category) => [
  category.title,
  category.pageLink,
]);
const levelTwoSuggestions = levelTwoCategories?.map((category) => [
  category.title,
  category.pageLink,
]);
const levelThreeSuggestions = levelThreeCategories?.map((category) => [
  category.title,
  category.pageLink,
]);
const levelFourSuggestions = levelFourCategories?.map((category) => [
  category.title,
  category.pageLink,
]);
const levelFiveSuggestions = levelFiveCategories?.map((category) => [
  category.title,
  category.pageLink,
]);

// for some reasons using concat instead of Array.prototype.concat generate an error
const categorySuggestions = Array.prototype.concat(
  mainSuggestions,
  levelTwoSuggestions,
  levelThreeSuggestions,
  levelFourSuggestions,
  levelFiveSuggestions
);

const uniqueCategorySuggestionsString = Array.from(
  new Set(categorySuggestions.map((category) => JSON.stringify(category)))
);

const uniqueCategorySuggestions = uniqueCategorySuggestionsString.map(
  (string) => JSON.parse(string)
);

export default uniqueCategorySuggestions;

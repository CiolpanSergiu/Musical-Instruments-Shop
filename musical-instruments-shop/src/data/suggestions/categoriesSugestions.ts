import { allCategories } from "../../functions/get-data-functions/getCategoriesData";

const categorySuggestions = allCategories.map((category) => [
  category?.title,
  category?.pageLink,
]);

const uniqueCategorySuggestions = Array.from(
  new Set(categorySuggestions.map((category) => JSON.stringify(category)))
).map((string) => JSON.parse(string));

export default uniqueCategorySuggestions;

import createLink from "../../functions/string-formatting-functions/createLink";
import { allLevelsData } from "../categories-data/allLevelsData";

const categorySuggestions = allLevelsData.map((category) => {
  return {
    title: category.title,
    pageLink: createLink(category.title),
  };
});

const uniqueCategorySuggestions = Array.from(
  new Set(categorySuggestions.map((category) => JSON.stringify(category)))
).map((string) => JSON.parse(string));

export default uniqueCategorySuggestions;

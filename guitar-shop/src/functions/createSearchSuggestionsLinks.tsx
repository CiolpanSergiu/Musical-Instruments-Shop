import SuggestionLink from "../components/NavbarComponents/SuggestionLink";
import { nanoid } from "nanoid";

export default function createSuggestionsList(
  data: string[][],
  clearFunction: () => void
) {
  return data.map((suggestion) => {
    if (typeof suggestion !== undefined) {
      return (
        <SuggestionLink
          key={nanoid()}
          linkText={suggestion[0]}
          pageLink={suggestion[1]}
          handleClick={clearFunction}
        ></SuggestionLink>
      );
    }
  });
}

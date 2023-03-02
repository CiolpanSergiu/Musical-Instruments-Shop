import SuggestionLink from "../../components/navbar-components/SuggestionLink";
import { nanoid } from "nanoid";

type Data = {
  title: string;
  pageLink: string;
};

export default function createSuggestionsList(
  data: Data[],
  clearFunction: () => void
) {
  return data.map((suggestion) => {
    if (typeof suggestion !== undefined) {
      return (
        <SuggestionLink
          key={nanoid()}
          linkText={suggestion.title}
          pageLink={suggestion.pageLink}
          handleClick={clearFunction}
        ></SuggestionLink>
      );
    }
  });
}

// format: all lowercase and no whitespaces
function formatString(str: string) {
  return str.toLocaleLowerCase().replace(/\s/gi, "");
}

type Data = {
  title: string;
  pageLink: string;
};

export default function filterFirstFiveSuggestions(
  data: Data[],
  valueToSearch: string
) {
  return data
    .filter((suggestion: Data) => {
      if (valueToSearch !== "") {
        return formatString(suggestion.title).includes(
          formatString(valueToSearch)
        );
      }
    })
    .splice(0, 5);
}

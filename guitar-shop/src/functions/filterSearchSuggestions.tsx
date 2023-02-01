// format: all lowercase and no whitespaces
function formatString(str: string) {
  return str.toLocaleLowerCase().replace(/\s/gi, "");
}

export default function filterFirstFiveSuggestions(
  data: string[][],
  valueToSearch: string
) {
  return data
    .filter((suggestion: string[]) => {
      if (valueToSearch !== "") {
        return formatString(suggestion[0]).includes(
          formatString(valueToSearch)
        );
      }
    })
    .splice(0, 5);
}

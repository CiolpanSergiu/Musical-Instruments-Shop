export default function createLink(str: string) {
  return `/${str
    .toLocaleLowerCase()
    .replace(/[^\w]/g, "-")
    .replace(/--+/g, "-")}`.replace(/-$/g, "");
}

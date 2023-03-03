import { nanoid } from "nanoid";

export default function createLink(str: string) {
  if (str) {
    return `/${str
      .toLocaleLowerCase()
      .replace(/[^\w]/g, "-")
      .replace(/--+/g, "-")}`.replace(/-$/g, "");
  }
  // this is for testing
  else {
    return nanoid();
  }
}

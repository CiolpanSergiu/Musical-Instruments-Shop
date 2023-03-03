import { Product } from "../../types/commonTypes";
type Category = {
  title: string;
  src: string;
  alt: string;
  pageLink: string;
  subcategories: {
    items: Product[];
    src: string;
    alt: string;
    title: string;
    pageLink: string;
  }[];
  brands: {
    src: string;
    alt: string;
    title: string;
    pageLink: string;
  }[];
};

export default function getDeeperLevelSubcategories(data: unknown) {
  if (Array.isArray(data)) {
    return data
      .filter((category) => {
        return category.hasOwnProperty("subcategories");
      })
      .map((category: Category) => {
        return category.subcategories;
      })
      .flat(1);
  }
}

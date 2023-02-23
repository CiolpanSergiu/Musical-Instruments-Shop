import ProductType from "../../data/products/productType";

type Category = {
  title: string;
  src: string;
  alt: string;
  pageLink: string;
  subcategories: {
    items: ProductType[];
    src: string;
    alt: string;
    title: string;
    pageLink: string;
  }[];
  brands: {
    src: string;
    alt: string;
    brandName: string;
    pageLink: string;
  }[];
};

export default function getDeeperLevelSubcategories(data: unknown) {
  if (Array.isArray(data)) {
    return data
      .filter((category: boolean) => {
        return category.hasOwnProperty("brands");
      })
      .map((category: Category) => {
        return category.brands;
      })
      .flat(1);
  }
}

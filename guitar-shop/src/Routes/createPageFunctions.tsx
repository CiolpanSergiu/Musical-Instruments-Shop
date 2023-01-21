import { Route } from "react-router-dom";
import InstrumentCategoryPage from "../pages/CategoryPages/InstrumentCategoryPage";
import ShoppingPage from "../pages/ShoppingPages/ShoppingPage";
import { nanoid } from "nanoid";

type Subcategories = {
  title: string;
  src: string;
  alt: string;
  pageLink: string;
}[];

type instrumentPageData =
  | { src: string; alt: string; title: string; pageLink: string }[]
  | {
      pageLink: string | undefined;
      title: string;
      subcategories: Subcategories;
    }[];

type Category = {
  title: string;
  src: string;
  alt: string;
  pageLink: string;
  subcategories?: Subcategories;
};

export function createCategoryPages(data: Category[]) {
  return data.map((category: Category) => {
    return (
      <Route
        key={nanoid()}
        path={category.pageLink}
        element={
          <InstrumentCategoryPage
            data={category.subcategories || data}
            pageTitle={category.title}
            brandsSliderTitle={`Popular ${category.title} brands`}
          />
        }
      ></Route>
    );
  });
}

type ItemsData = {
  title: string;
  src: string;
  alt: string;
  pageLink: string;
  price: number;
  avaible: boolean;
  rating: number;
  totalReviews: number;
}[];

export function createShoppingPageRoute(
  pageLink: string,
  pageTitle: string,
  data: ItemsData
) {
  return (
    <Route
      key={nanoid()}
      path={pageLink}
      element={<ShoppingPage itemsData={data} pageTitle={pageTitle} />}
    ></Route>
  );
}

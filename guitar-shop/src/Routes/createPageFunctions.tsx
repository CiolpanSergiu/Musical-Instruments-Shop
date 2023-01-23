import { Route } from "react-router-dom";
import InstrumentCategoryPage from "../pages/CategoryPages/InstrumentCategoryPage";
import ShoppingPage from "../pages/ShoppingPages/ShoppingPage";
import { nanoid } from "nanoid";

// unknown because not all objects in data array have the same structure;

export function createCategoryPages(data: unknown) {
  if (Array.isArray(data)) {
    return data.map((category) => {
      return (
        <Route
          key={nanoid()}
          path={category.pageLink}
          element={
            <InstrumentCategoryPage
              data={category.subcategories}
              pageTitle={category.title}
            />
          }
        ></Route>
      );
    });
  }
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

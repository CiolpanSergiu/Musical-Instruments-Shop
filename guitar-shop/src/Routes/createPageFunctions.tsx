import { Route } from "react-router-dom";
import InstrumentCategoryPage from "../pages/CategoryPages/InstrumentCategoryPage";
import InstrumentSubcategoryPage from "../pages/SubcategoryPages/InstrumentSubcategoryPage";
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

export function createMainCategoryPages(data: Category[]) {
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

//same function as above but it return a different component
export function createCategoryPages(
  data: any,
  haveRecommendedItemsSlider: boolean,
  havePopularItemsSlider: boolean,
  haveBrandsSlider: boolean
) {
  return data.map(
    (category: {
      pageLink: string;
      title: string;
      subcategories: Subcategories;
    }) => {
      return (
        <Route
          key={nanoid()}
          path={category.pageLink}
          element={
            <InstrumentSubcategoryPage
              pageTitle={category.title}
              brandsSliderTitle={`Popular ${category.title} brands`}
              data={category.subcategories || data}
              haveRecommendedItemsSlider={haveRecommendedItemsSlider}
              havePopularItemsSlider={havePopularItemsSlider}
              haveBrandsSlider={haveBrandsSlider}
            />
          }
        ></Route>
      );
    }
  );
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

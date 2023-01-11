import { Route } from "react-router-dom";
import InstrumentCategoryPage from "../pages/CategoryPages/InstrumentCategoryPage";
import InstrumentSubcategoryPage from "../pages/SubcategoryPages/InstrumentSubcategoryPage";
import ShoppingPage from "../pages/ShoppingPages/ShoppingPage";
import { nanoid } from "nanoid";

type instrumentPageData = {
  title: string;
  src: string;
  alt: string;
  pageLink: string;
  subcategories?: {
    title: string;
    src: string;
    alt: string;
    pageLink: string;
  }[];
}[];

type Category = {
  title: string;
  src: string;
  alt: string;
  pageLink: string;
  subcategories?:
    | {
        title: string;
        src: string;
        alt: string;
        pageLink: string;
      }[];
};

export function createMainCategoryPages(data: instrumentPageData) {
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
  data: instrumentPageData,
  haveRecommendedItemsSlider: boolean,
  havePopularItemsSlider: boolean,
  haveBrandsSlider: boolean,
  pageLink?: string,
  pageTitle?: string
) {
  return data.map((category: Category) => {
    return (
      <Route
        key={nanoid()}
        path={pageLink || category.pageLink}
        element={
          <InstrumentSubcategoryPage
            pageTitle={pageTitle || category.title}
            brandsSliderTitle={`Popular ${category.title} brands`}
            data={category.subcategories || data}
            haveRecommendedItemsSlider={haveRecommendedItemsSlider}
            havePopularItemsSlider={havePopularItemsSlider}
            haveBrandsSlider={haveBrandsSlider}
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

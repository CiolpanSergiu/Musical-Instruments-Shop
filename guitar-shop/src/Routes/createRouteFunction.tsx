import { Route } from "react-router-dom";
import InstrumentCategoryPage from "../pages/CategoryPages/InstrumentCategoryPage";
import InstrumentSubcategoryPage from "../pages/CategoryPages/InstrumentCategoryPage";
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

export function createMainCategoryPages(data: instrumentPageData) {
  return data.map((category: any) => {
    return (
      <Route
        key={nanoid()}
        path={category.pageLink}
        element={
          <InstrumentCategoryPage
            data={category.subcategories}
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
  return data.map((category: any) => {
    return (
      <Route
        key={nanoid()}
        path={pageLink || category.pageLink}
        element={
          <InstrumentSubcategoryPage
            data={category.subcategories || data}
            pageTitle={pageTitle || category.title}
            brandsSliderTitle={`Popular ${category.title} brands`}
            haveRecommendedItemsSlider={haveRecommendedItemsSlider}
            havePopularItemsSlider={havePopularItemsSlider}
            haveBrandsSlider={haveBrandsSlider}
          />
        }
      ></Route>
    );
  });
}

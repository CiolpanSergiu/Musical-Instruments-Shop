import InstrumentCategoryPage from "../pages/CategoryPages/InstrumentCategoryPage";
import InstrumentSubcategoryPage from "../pages/SubcategoryPages/InstrumentSubcategoryPage";
import instrumentsCategoryData from "../data/mainCategory";
import tubesData from "../data/LevelFourCategories/GuitarAndBasses/tubes";
import { nanoid } from "nanoid";
import { Route } from "react-router-dom";

function createMainCategoryPages(data: instrumentPageData) {
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

//same function as above but it return a different component
function createCategoryPages(
  data: instrumentPageData,
  haveRecommendedItemsSlider: boolean,
  havePopularItemsSlider: boolean,
  haveBrandsSlider: boolean,
  pageLink?: string
) {
  return data.map((category: any) => {
    return (
      <Route
        key={nanoid()}
        path={pageLink || category.pageLink}
        element={
          <InstrumentSubcategoryPage
            data={category.subcategories || data}
            pageTitle={category.title}
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

const mainCategoryPagesRoutes = createMainCategoryPages(
  instrumentsCategoryData
);

type Subcategory = {
  src: string;
  alt: string;
  title: string;
  pageLink: string;
  subcategories: {
    src: string;
    alt: string;
    title: string;
    pageLink: string;
    subcategories: {
      src: string;
      alt: string;
      title: string;
      pageLink: string;
    }[];
  }[];
};

const subcategories = instrumentsCategoryData.map(
  (subcategory: Subcategory) => {
    return subcategory;
  }
);

const subcategoriesPages = subcategories.map(
  (mainCategorySubcategory: Subcategory) => {
    return createCategoryPages(
      mainCategorySubcategory.subcategories,
      true,
      true,
      true
    );
  }
);

const tubesPages = createCategoryPages(
  tubesData.data,
  false,
  true,
  false,
  tubesData.pageLink
);

export { mainCategoryPagesRoutes, subcategoriesPages, tubesPages };

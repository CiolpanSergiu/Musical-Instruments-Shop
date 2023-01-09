import InstrumentCategoryPage from "../pages/CategoryPages/InstrumentCategoryPage";
import InstrumentSubcategoryPage from "../pages/SubcategoryPages/InstrumentSubcategoryPage";
import instrumentsCategoryData from "../data/mainCategory";
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
function createCategoryPages(data: instrumentPageData) {
  return data.map((category: any) => {
    return (
      <Route
        key={nanoid()}
        path={category.pageLink}
        element={
          <InstrumentSubcategoryPage
            data={category.subcategories}
            pageTitle={category.title}
            brandsSliderTitle={`Popular ${category.title} brands`}
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
    return createCategoryPages(mainCategorySubcategory.subcategories);
  }
);

const tubesData: instrumentPageData = Array(
  subcategories[0].subcategories[7].subcategories[3]
);

const tubesPages = createCategoryPages(tubesData);

export { mainCategoryPagesRoutes, subcategoriesPages, tubesPages };

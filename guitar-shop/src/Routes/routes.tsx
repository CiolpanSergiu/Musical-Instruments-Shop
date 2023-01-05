import InstrumentCategoryPage from "../pages/CategoryPages/InstrumentCategoryPage";
import InstrumentSubcategoryPage from "../pages/SubcategoryPages/InstrumentSubcategoryPage";
import instrumentsCategoryData from "../data/mainCategory";
import { nanoid } from "nanoid";
import { Route } from "react-router-dom";

const mainCategoryPagesRoutes = instrumentsCategoryData.map((category: any) => {
  return (
    <Route
      key={nanoid()}
      path={category.pageLink}
      element={
        <InstrumentCategoryPage
          instrumentData={category.subcategories}
          pageTitle={category.title}
          brandsSliderTitle={`Popular ${category.title} brands`}
        />
      }
    ></Route>
  );
});

const subcategories = instrumentsCategoryData.map((subcategory: any) => {
  return subcategory;
});

function createSubcategoryPages(instrumentSubcategories: {}[]) {
  return instrumentSubcategories.map((subcategory: any) => {
    return (
      <Route
        key={nanoid()}
        path={subcategory.pageLink}
        element={
          <InstrumentSubcategoryPage
            subcategoriesData={subcategory.subcategories}
            pageTitle={subcategory.title}
            brandsSliderTitle={`Popular ${subcategory.title} brands`}
          />
        }
      ></Route>
    );
  });
}

const mainCategorySubcategoriesPagesRoutes = subcategories.map(
  (mainCategorySubcategory) => {
    return createSubcategoryPages(mainCategorySubcategory.subcategories);
  }
);

export { mainCategoryPagesRoutes, mainCategorySubcategoriesPagesRoutes };

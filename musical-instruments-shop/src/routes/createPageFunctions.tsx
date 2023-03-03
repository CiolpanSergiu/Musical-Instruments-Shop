import { Route } from "react-router-dom";
import InstrumentCategoryPage from "../pages/category-pages/InstrumentCategoryPage";
import ShoppingPage from "../pages/shopping-pages/ShoppingPage";
import { nanoid } from "nanoid";
import ItemPage from "../components/item-page-components/ItemPage";
import { Product } from "../types/commonTypes";
import createLink from "../functions/string-formatting-functions/createLink";

// unknown because not all objects in data array have the same structure;
export function createCategoryPages(data: unknown) {
  if (Array.isArray(data)) {
    return data.map((category) => {
      if (category.title === undefined) {
        console.log(category);
      }
      const pageLink = createLink(category.title);
      if (category.hasOwnProperty("subcategories")) {
        return (
          <Route
            key={nanoid()}
            path={pageLink}
            element={
              <InstrumentCategoryPage
                data={
                  category.subcategories.subcategories || category.subcategories
                }
                pageTitle={category.title}
                itemsBrands={category.brands || category.subcategories.brands}
              />
            }
          ></Route>
        );
      }
    });
  }
}

export function createShoppingPageRoute(
  pageLink: string,
  pageTitle: string,
  data: Product[]
) {
  return (
    <Route
      key={nanoid()}
      path={pageLink}
      element={<ShoppingPage itemsData={data} pageTitle={pageTitle} />}
    ></Route>
  );
}

export function createItemDetailsPageRoute(product: Product) {
  const pageLink = createLink(product.title);

  return (
    <Route
      key={nanoid()}
      path={pageLink}
      element={
        <ItemPage
          title={product.title}
          srcBig={product.srcBig}
          alt={product.alt}
          price={product.price}
          rating={product.rating}
          specifications={product.specifications}
        ></ItemPage>
      }
    ></Route>
  );
}

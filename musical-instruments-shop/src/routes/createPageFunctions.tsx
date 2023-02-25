import { Route } from "react-router-dom";
import InstrumentCategoryPage from "../pages/category-pages/InstrumentCategoryPage";
import ShoppingPage from "../pages/shopping-pages/ShoppingPage";
import { nanoid } from "nanoid";
import ItemPage from "../components/item-page-components/ItemPage";
import ProductType from "../data/products/productType";

// unknown because not all objects in data array have the same structure;

export function createCategoryPages(data: unknown) {
  if (Array.isArray(data)) {
    return data.map((category) => {
      const pageLink = `/${category.title
        .toLocaleLowerCase()
        .replace(/[^\w]/g, "-")
        .replace(/--+/g, "-")}`;
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
  data: ProductType[]
) {
  return (
    <Route
      key={nanoid()}
      path={pageLink}
      element={<ShoppingPage itemsData={data} pageTitle={pageTitle} />}
    ></Route>
  );
}

export function createItemDetailsPageRoute(product: ProductType) {
  const pageLink = `/${product.title
    .toLocaleLowerCase()
    .replace(/[^\w]/g, "-")
    .replace(/--+/g, "-")}`;

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

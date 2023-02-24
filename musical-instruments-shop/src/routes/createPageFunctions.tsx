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
  if (pageTitle === "5 Ways Switch Selectors") {
    console.log(data);
  }

  return (
    <Route
      key={nanoid()}
      path={pageLink}
      element={<ShoppingPage itemsData={data} pageTitle={pageTitle} />}
    ></Route>
  );
}

type Item = {
  title: string;
  brandName: string;
  srcThumbnail: string;
  srcBig: string;
  alt: string;
  price: number;
  totalReviews: number;
  rating: number;
  specifications: string[];
};

export function createItemDetailsPageRoute(item: Item) {
  const pageLink = `/${item.title
    .toLocaleLowerCase()
    .replace(/[^\w]/g, "-")
    .replace(/--+/g, "-")}`;

  return (
    <Route
      key={nanoid()}
      path={pageLink}
      element={
        <ItemPage
          title={item.title}
          srcBig={item.srcBig}
          alt={item.alt}
          price={item.price}
          rating={item.rating}
          specifications={item.specifications}
        ></ItemPage>
      }
    ></Route>
  );
}

import { Route } from "react-router-dom";
import { nanoid } from "nanoid";
import ItemPage from "../../components/item-page-components/ItemPage";
import stratocasterModelsData from "../../data/shopping-page-items/guitars-and-basses/electric-guitars/stratocasterModels";

type Item = {
  title: string;
  srcThumbnail: string;
  srcBig: string;
  alt: string;
  pageLink: string;
  price: number;
  avaible: boolean;
  rating: number;
  totalReviews: number;
  specifications: string[];
};
// test
const itemsRoutes = stratocasterModelsData.data.map((item: Item) => {
  return (
    <Route
      key={nanoid()}
      path={item.pageLink}
      element={
        <ItemPage
          key={item.title}
          title={item.title}
          srcBig={item.srcBig}
          alt={item.alt}
          price={item.price}
          rating={item.rating}
          specifications={item.specifications}
        />
      }
    />
  );
});

export default itemsRoutes;

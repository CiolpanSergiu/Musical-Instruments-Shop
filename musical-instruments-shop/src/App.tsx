import { Routes, Route } from "react-router-dom";
import AuthentificationContext from "./context/AuthentificationContext";
import { useContext } from "react";
//main pages
import Home from "./pages/main-pages/Home";
import Contact from "./pages/main-pages/Contact";
import Account from "./pages/main-pages/Account";
import ShoppingCartPage from "./pages/main-pages/ShoppingCartPage";
import SinginPage from "./pages/main-pages/SinginPage";
import NoPageFound from "./pages/main-pages/NoPageFound";
import ThankYouPage from "./pages/main-pages/ThankYouPage";
import OrdersHistoryPage from "./pages/main-pages/OrdersHistoryPage";

import allCategoryPages from "./routes/categoryPagesRoutes";
import {
  itemsShoppingPages,
  brandsShoppingPages,
} from "./routes/itemsPageRoutes";
import productDetailPageRoutes from "./routes/itemPageRoutes";
import popularItemsPages from "./routes/popularItemsPages";

export default function App() {
  const { currentUser }: any = useContext(AuthentificationContext);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/account" element={<Account />}></Route>
      <Route path="/singin" element={<SinginPage />}></Route>
      <Route path="/shopping-cart" element={<ShoppingCartPage />}></Route>
      {currentUser !== undefined && (
        <>
          <Route path="/thank-for-ordering" element={<ThankYouPage />}></Route>
          <Route path="/orders-history" element={<OrdersHistoryPage />}></Route>
        </>
      )}
      <Route path="*" element={<NoPageFound />}></Route>

      {popularItemsPages}
      {itemsShoppingPages}
      {brandsShoppingPages}
      {allCategoryPages}
      {productDetailPageRoutes}
    </Routes>
  );
}

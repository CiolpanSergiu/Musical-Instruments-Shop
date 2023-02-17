import { Routes, Route } from "react-router-dom";
//main pages
import Home from "./pages/main-pages/Home";
import Contact from "./pages/main-pages/Contact";
import Account from "./pages/main-pages/Account";
import ShoppingCartPage from "./pages/main-pages/ShoppingCartPage";
import SinginPage from "./pages/main-pages/SinginPage";
import NoPageFound from "./pages/main-pages/NoPageFound";
// level two categories
import {
  levelTwoCategoryPages,
  levelThreeCategoryPages,
  levelFourCategoryPages,
  levelFiveCategoryPages,
} from "./routes/categoryPagesRoutes";
import electricGuitarsShoppingPages from "./routes/shopping-pages/guitarAndBassesShoppingPageRoutes";
import itemsRoutes from "./routes/items-pages/stratocasterGuitarsPages";
import popularItemsPages from "./routes/items-pages/popularItemsPages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/singin" element={<SinginPage />}></Route>
        <Route path="/shopping-cart" element={<ShoppingCartPage />}></Route>
        <Route path="*" element={<NoPageFound />}></Route>

        {itemsRoutes}
        {popularItemsPages}

        {levelTwoCategoryPages}
        {levelThreeCategoryPages}
        {levelFourCategoryPages}
        {levelFiveCategoryPages}
        {electricGuitarsShoppingPages}
      </Routes>
    </>
  );
}

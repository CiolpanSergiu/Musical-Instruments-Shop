import { Routes, Route } from "react-router-dom";
import "./styles/AppStyle.scss";
//main pages
import Home from "./pages/MainPages/Home";
import Contact from "./pages/MainPages/Contact";
import Account from "./pages/MainPages/Account";
import ShoppingCartPage from "./pages/MainPages/ShoppingCartPage";
import LoginPage from "./pages/MainPages/LoginPage";
import SinginPage from "./pages/MainPages/SinginPage";

import * as categoriesData from "./Routes/routes";

import StratocasterGuitars from "./pages/ShoppingPages/GuitarsAndBasses/ElectricGuitars/StratocasterGuitars";

export default function App() {
  return (
    <Routes>
      {/* main pages routes */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/account" element={<Account />}></Route>
      <Route path="/singin" element={<SinginPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/shopping-cart" element={<ShoppingCartPage />}></Route>

      {categoriesData.mainCategoryPagesRoutes}
      {categoriesData.subcategoriesPages}
      {categoriesData.tubesPages}

      <Route
        path="/stratocaster-models"
        element={<StratocasterGuitars />}
      ></Route>
    </Routes>
  );
}

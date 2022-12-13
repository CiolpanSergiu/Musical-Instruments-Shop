import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import "./styles/AppStyle.scss";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/account" element={<Account />}></Route>
      <Route path="/shopping-cart" element={<ShoppingCartPage />}></Route>
    </Routes>
  );
}

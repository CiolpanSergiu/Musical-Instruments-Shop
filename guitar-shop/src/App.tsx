import { Routes, Route } from "react-router-dom";
import Home from "./pages/MainPages/Home";
import Contact from "./pages/MainPages/Contact";
import Account from "./pages/MainPages/Account";
import ShoppingCartPage from "./pages/MainPages/ShoppingCartPage";
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

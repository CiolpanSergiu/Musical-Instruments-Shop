import { Routes, Route } from "react-router-dom";
import "./styles/AppStyle.scss";
//main pages
import Home from "./pages/MainPages/Home";
import Contact from "./pages/MainPages/Contact";
import Account from "./pages/MainPages/Account";
import ShoppingCartPage from "./pages/MainPages/ShoppingCartPage";
import LoginPage from "./pages/MainPages/LoginPage";
import SinginPage from "./pages/MainPages/SinginPage";
//items category (more like subcategories)
//ex: main: guitars, subcategory: electric guitar
import CategoryPages from "./pages/CategoryPages/AllPages";
//items subcategories (well, subcatogories of subcategories)
//ex: main: guitars, subcategory: electric guitar, subsubcategory: stratocaster model guitar
import GuitarAndBassesSubcateogories from "./pages/SubcategoryPages/GuitarsAndBasses/AllGuitarAndBassesPages";

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

      {/* main categories routes */}
      <Route
        path="/musical-accesories"
        element={<CategoryPages.AccesoriesPage />}
      ></Route>
      <Route
        path="/drums-and-percussion"
        element={<CategoryPages.DrumsAndPercussionPage />}
      ></Route>
      <Route
        path="/guitars-and-basses"
        element={<CategoryPages.GuitarsAndBassesPage />}
      ></Route>
      <Route
        path="/softwares"
        element={<CategoryPages.SoftwaresPage />}
      ></Route>
      <Route
        path="/keyboards-and-synth"
        element={<CategoryPages.KeyboardsAndSynthsPage />}
      ></Route>
      <Route
        path="/microphones"
        element={<CategoryPages.MicrophonesPage />}
      ></Route>
      <Route
        path="/pa-system-equipments"
        element={<CategoryPages.PaSystemEquipmentsPage />}
      ></Route>
      <Route
        path="/studio-and-recording-equipments"
        element={<CategoryPages.StudioAndRecordingsPage />}
      ></Route>
      <Route
        path="/traditional-instruments"
        element={<CategoryPages.TraditionalInstrumentsPage />}
      ></Route>

      {/* subcategories pages */}
      <Route
        path="/electric-guitars"
        element={
          <GuitarAndBassesSubcateogories.ElectricGuitarsSubcategoriesPage />
        }
      ></Route>
    </Routes>
  );
}

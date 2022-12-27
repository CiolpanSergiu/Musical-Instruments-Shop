import { Routes, Route } from "react-router-dom";
import "./styles/AppStyle.scss";
//main pages
import Home from "./pages/MainPages/Home";
import Contact from "./pages/MainPages/Contact";
import Account from "./pages/MainPages/Account";
import ShoppingCartPage from "./pages/MainPages/ShoppingCartPage";
import LoginPage from "./pages/MainPages/LoginPage";
import SinginPage from "./pages/MainPages/SinginPage";
//items category
import AccesoriesPage from "./pages/CategoryPages/AccesoriesPage";
import DrumsAndPercussionPage from "./pages/CategoryPages/DrumsAndPercussionPage";
import GuitarsAndBassesPage from "./pages/CategoryPages/GuitarsAndBassesPage";
import GuitarAndBassesSoftwaresPages from "./pages/CategoryPages/GuitarAndBassesSoftwaresPages";
import KeyboardsAndSynthsPage from "./pages/CategoryPages/KeyboardsAndSynthsPage";
import MicrophonesPage from "./pages/CategoryPages/MicrophonesPage";
import PaSystemEquipmentsPage from "./pages/CategoryPages/PaSystemEquipmentsPage";
import StudioAndRecordingsPage from "./pages/CategoryPages/StudioAndRecordingEquipmentPage";
import TraditionalInstrumentsPage from "./pages/CategoryPages/TraditionalInstrumentsPage";

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
      <Route path="/musical-accesories" element={<AccesoriesPage />}></Route>
      <Route
        path="/drums-and-percussion"
        element={<DrumsAndPercussionPage />}
      ></Route>
      <Route
        path="/guitars-and-basses"
        element={<GuitarsAndBassesPage />}
      ></Route>
      <Route
        path="/guitar-and-basses-softwares"
        element={<GuitarAndBassesSoftwaresPages />}
      ></Route>
      <Route
        path="/keyboards-and-synth"
        element={<KeyboardsAndSynthsPage />}
      ></Route>
      <Route path="/microphones" element={<MicrophonesPage />}></Route>
      <Route
        path="/pa-system-equipments"
        element={<PaSystemEquipmentsPage />}
      ></Route>
      <Route
        path="/studio-and-recording-equipments"
        element={<StudioAndRecordingsPage />}
      ></Route>
      <Route
        path="/traditional-instruments"
        element={<TraditionalInstrumentsPage />}
      ></Route>
    </Routes>
  );
}

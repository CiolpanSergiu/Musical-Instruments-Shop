import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import SinginPage from "./SinginPage";
import LoginPage from "./LoginPage";
import SinginForm from "../../components/AccountPage/SinginForm";

export default function Account() {
  return (
    <div className="account-page">
      <Navbar />
      <SinginForm></SinginForm>
      <Footer />
    </div>
  );
}

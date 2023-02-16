import Navbar from "../../components/navbar-components/Navbar";
import Footer from "../../components/footer-components/Footer";
import { useContext } from "react";
import AuthentificationProvider from "../../context/AuthentificationContext";
import LoginPage from "./LoginPage";
import UserPage from "../../components/account-page-components/UserPage";

export default function Account() {
  const { isLoggedIn }: any = useContext(AuthentificationProvider);
  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar />
          <UserPage />
          <Footer />
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

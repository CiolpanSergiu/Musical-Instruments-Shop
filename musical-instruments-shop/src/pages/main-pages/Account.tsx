import Navbar from "../../components/navbar-components/Navbar";
import Footer from "../../components/footer-components/Footer";
import { useState } from "react";
import LoginPage from "./LoginPage";
import SinginPage from "./SinginPage";

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <>
      {!isLoggedIn ? (
        <LoginPage />
      ) : (
        <>
          <Navbar />
          <h1>Account</h1>
          <Footer />
        </>
      )}
    </>
  );
}

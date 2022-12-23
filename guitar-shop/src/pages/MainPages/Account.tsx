import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/AccountPage/LoginForm";

export default function Account() {
  return (
    <div className="account-page">
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}

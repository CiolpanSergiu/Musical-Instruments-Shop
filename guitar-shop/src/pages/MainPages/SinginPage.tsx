import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import SinginForm from "../../components/AccountPage/SinginForm";

export default function SinginPage() {
  return (
    <div className="account-page">
      <Navbar />
      <SinginForm />
      <Footer />
    </div>
  );
}

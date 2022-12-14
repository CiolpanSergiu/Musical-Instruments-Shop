import { Link } from "react-router-dom";
import "../../styles/NavbarStyle/NavbarPageNavigationStyle.scss";

export default function PagesNavigationContainer() {
  return (
    <div className="page-navigation-links-container">
      <Link to="/account">Account</Link>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

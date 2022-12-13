import { Link } from "react-router-dom";
import "../styles/NavbarStyle.scss";
import { BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-first-row">
        <h3 className="website-logo">SergiuGuitars</h3>
        <Link to="/contact">
          <span className="telephone-icon nav-icon">
            <BsFillTelephoneFill />
          </span>
          +0123456789
        </Link>
        <Link to="/account">
          <span className="user-icon nav-icon">
            <FaRegUserCircle />
          </span>
        </Link>
        <Link to="/shopping-cart">
          <span className="shopping-cart-icon nav-icon">
            <HiOutlineShoppingCart />
          </span>
        </Link>
        <div className="bars-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <form className="search-box">
        <span className="search-box__search-icon nav-icon">
          <BsSearch />
        </span>
        <input
          className="search-box__input"
          type="text"
          placeholder="Searching something specific?"
        />
        <button className="search-box__button">Search</button>
      </form>

      <ul className="category-navigation-ul">
        {/* <li className="category"></li> */}
      </ul>
    </nav>
  );
}

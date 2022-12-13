import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/NavbarStyle.scss";
import { BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import NavbarMenu from "./NavbarMenu";
import NavbarContent from "./NavbarContent";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="navbar-container">
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
          <NavbarMenu handleClick={openMenu} />
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
      </nav>
      {isMenuOpen && <NavbarContent />}
    </div>
  );
}

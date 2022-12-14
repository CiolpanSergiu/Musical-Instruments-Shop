import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import NavbarMenu from "./NavbarMenu";
import { MouseEventHandler } from "react";
import "../../styles/NavbarStyle/NavbarToolsStyle.scss";

type Props = {
  isOpen: boolean;
  handleClick: MouseEventHandler<HTMLDivElement>;
};

export default function NavbarTools({ isOpen, handleClick }: Props) {
  return (
    <div className="navbar-tools-container">
      <Link to="/contact">
        <span className="telephone-icon nav-icon">
          <BsFillTelephoneFill />
        </span>
        <span className="telephone-number"> +0123456789</span>
      </Link>
      <Link to="/account">
        <span className="user-icon nav-icon">
          <FaRegUserCircle />
        </span>
      </Link>
      <Link to="/shopping-cart">
        <span className="shopping-cart-icon nav-icon">
          <HiOutlineShoppingCart />
          <span className="quantity-bubble">3</span>
        </span>
      </Link>
      <NavbarMenu
        handleClick={handleClick}
        menuClass={isOpen ? "bars-menu-close" : "bars-menu-open"}
      />
    </div>
  );
}

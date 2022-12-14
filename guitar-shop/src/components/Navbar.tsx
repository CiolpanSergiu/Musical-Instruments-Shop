import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "../styles/NavbarStyle.scss";
import "../styles/NavbarContentStyle.scss";
import NavbarMenu from "./NavbarMenu";
import NavbarCategoryLink from "./NavbarCategoryLink";
import data from "../data/category.json";
import NavbarSearchBox from "./NavbarSearchBox";
import PagesNavigationContainer from "./PagesNavigationContainer";
import NavbarTools from "./NavbarTools";
import WebsiteLogo from "./WebsiteLogo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "scroll";
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState: boolean) => !prevState);
  };

  const navbarContentElements = data.map((categoryData) => (
    <NavbarCategoryLink
      key={nanoid()}
      handleClick={toggleMenu}
      pageLink={categoryData.pageLink}
      categoryName={categoryData.title}
    />
  ));

  return (
    <nav className="navbar">
      <div className="navbar-first-row">
        <WebsiteLogo />
        <PagesNavigationContainer />
        <NavbarTools isOpen={isMenuOpen} handleClick={toggleMenu} />
      </div>

      <div className="navbar-second-row">
        <NavbarSearchBox />
      </div>

      <div
        className={
          isMenuOpen
            ? "navbar-content navbar-content-opened"
            : "navbar-content navbar-content-closed"
        }
      >
        {navbarContentElements}
      </div>
      <NavbarMenu
        handleClick={toggleMenu}
        menuClass={
          isMenuOpen
            ? "bars-menu-close opened-bars-menu"
            : "bars-menu-open closed-bars-menu"
        }
      />
    </nav>
  );
}

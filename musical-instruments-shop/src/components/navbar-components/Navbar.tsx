import { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import NavbarCategoryLink from "./NavbarCategoryLink";
import data from "../../data/level-one-categories/mainCategory.js";
import NavbarSearchBox from "./NavbarSearchBox";
import PagesNavigationContainer from "./PagesNavigationContainer";
import NavbarTools from "./NavbarTools";
import WebsiteLogo from "./WebsiteLogo";
import styled from "styled-components";
import ThemeSwitch from "../miscellaneous/ThemeSwitch";
import ThemeContext from "../../context/ThemeProvider";
import { ThemeProvider } from "styled-components";
import themes from "../../colors-and-themes/themes";
import Overlay from "../miscellaneous/Overlay";

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0 1rem;
  box-shadow: 0 0 10px gray;
  z-index: 100;
  position: relative;
`;

const DetailsRow = styled.div`
  padding-top: 0.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 2fr 3fr;
    grid-template-rows: 1fr;
  }
`;

const SearchBarRow = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 3fr 0.25fr;
  align-items: center;
  justify-items: center;
  padding-bottom: 1rem;
`;

const CloseBtn = styled.div`
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 2rem;
  color: ${(props) => props.theme.color};

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

type NavbarContentType = {
  open: boolean;
};

const NavbarOpenContent = styled.div<NavbarContentType>`
  background-color: ${(props) => props.theme.bgColor};
  position: absolute;
  height: 100vh;
  top: 0;
  left: ${(props) => (props.open ? "0" : "-300vw")};
  width: 100%;
  transition: 0.4s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9999;

  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;

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

  const { isDark }: any = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? themes.darkTheme : themes.lightTheme}>
      <NavbarContainer>
        <DetailsRow>
          <WebsiteLogo />
          <PagesNavigationContainer />
          <NavbarTools isOpen={isMenuOpen} handleClick={toggleMenu} />
        </DetailsRow>
        <SearchBarRow>
          <NavbarSearchBox />
          <ThemeSwitch />
        </SearchBarRow>
        {isMenuOpen && window.innerWidth >= 768 && (
          <Overlay handleClose={toggleMenu} />
        )}
        <NavbarOpenContent open={isMenuOpen}>
          {navbarContentElements}
          <CloseBtn onClick={toggleMenu}>X</CloseBtn>
        </NavbarOpenContent>
      </NavbarContainer>
    </ThemeProvider>
  );
}

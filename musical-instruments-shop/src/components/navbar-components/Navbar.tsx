import { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import NavbarCategoryLink from "./NavbarCategoryLink";
import mainCategories from "../../data/level-one-categories/mainCategory.js";
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
import createLink from "../../functions/string-formatting-functions/createLink";
import { Category } from "../../types/commonTypes";

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
  margin-top: 2rem;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
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
  isOpen: boolean;
};

const NavbarOpenContent = styled.div<NavbarContentType>`
  background-color: ${(props) => props.theme.bgColor};
  position: absolute;
  height: 100vh;
  overflow-y: scroll;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-300vw")};
  width: 100%;
  transition: 0.4s all ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  padding-top: 5rem;
  padding-bottom: 5rem;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

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

  const navbarContentElements = mainCategories.map((category: Category) => (
    <NavbarCategoryLink
      key={nanoid()}
      handleClick={toggleMenu}
      pageLink={createLink(category.title)}
      categoryName={category.title}
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
        <NavbarOpenContent isOpen={isMenuOpen}>
          {navbarContentElements}
          <CloseBtn onClick={toggleMenu}>X</CloseBtn>
        </NavbarOpenContent>
      </NavbarContainer>
    </ThemeProvider>
  );
}

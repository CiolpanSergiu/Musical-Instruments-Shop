import { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import NavbarMenu from "./NavbarMenu";
import NavbarCategoryLink from "./NavbarCategoryLink";
import data from "../../data/mainCategory.js";
import NavbarSearchBox from "./NavbarSearchBox";
import PagesNavigationContainer from "./PagesNavigationContainer";
import NavbarTools from "./NavbarTools";
import WebsiteLogo from "./WebsiteLogo";
import styled from "styled-components";
import ThemeSwitch from "../Miscellaneous/ThemeSwitch";
import ThemeContext from "../../context/ThemeProvider";
import { ThemeProvider } from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0 1rem;
  box-shadow: 0 0 10px gray;
  z-index: 999;
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

const Overlay = styled.div`
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

type NavbarContentType = {
  open: boolean;
};

const NavbarContent = styled.div<NavbarContentType>`
  background-color: ${(props) => props.theme.bgColor};
  position: absolute;
  height: 100vh;
  top: 0;
  left: ${(props) => (props.open ? "0" : "-100vw")};
  width: 100%;
  transition: 0.5s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 99;

  @media only screen and (min-width: 768px) {
    width: 40%;
    z-index: 9;
  }
`;

const NavbarContentExtendedArea = styled.div`
  @media only screen and (min-width: 768px) {
    background-color: lightgray;
    width: 100%;
    height: 100vh;
    opacity: 0.5;
    position: absolute;
    top: 0;
  }
`;

const darkTheme = {
  bgColor: "#3d4552",
  color: "white",
};

const lightTheme = {
  bgColor: "white",
  color: "#3d4552",
};

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
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
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
        <Overlay>
          <NavbarContent open={isMenuOpen}>
            {navbarContentElements}
          </NavbarContent>

          <NavbarMenu
            handleClick={toggleMenu}
            menuClass={
              isMenuOpen
                ? "bars-menu-close opened-bars-menu"
                : "bars-menu-open closed-bars-menu"
            }
          />
          <NavbarContentExtendedArea
            style={{ display: isMenuOpen ? "block" : "none" }}
            onClick={toggleMenu}
          ></NavbarContentExtendedArea>
        </Overlay>
      </NavbarContainer>
    </ThemeProvider>
  );
}

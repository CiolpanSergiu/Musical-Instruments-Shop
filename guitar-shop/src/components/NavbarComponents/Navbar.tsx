import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NavbarMenu from "./NavbarMenu";
import NavbarCategoryLink from "./NavbarCategoryLink";
import data from "../../data/category.json";
import NavbarSearchBox from "./NavbarSearchBox";
import PagesNavigationContainer from "./PagesNavigationContainer";
import NavbarTools from "./NavbarTools";
import WebsiteLogo from "./WebsiteLogo";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #3d4552;
  padding: 0 1rem;
  box-shadow: 0 0 15px 5px gray;
`;

const Row = styled.div`
  padding-top: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 2fr 3fr;
  }
`;

const Overlay = styled.div`
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

type NavbarContentType = {
  open: boolean;
};

//before using styled components, content had a slide-right transition but its not working anymore
const NavbarContent = styled.div<NavbarContentType>`
  background-color: #353c47;
  position: absolute;
  height: 100vh;
  top: 0;
  left: ${(props) => (props.open ? "0" : "-100vw")};
  width: 100%;
  transition: 0.5s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;

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
    <NavbarContainer>
      <Row>
        <WebsiteLogo />
        <PagesNavigationContainer />
        <NavbarTools isOpen={isMenuOpen} handleClick={toggleMenu} />
      </Row>
      <div className="navbar-second-row">
        <NavbarSearchBox />
      </div>
      <Overlay>
        <NavbarContent open={isMenuOpen}>{navbarContentElements}</NavbarContent>

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
  );
}

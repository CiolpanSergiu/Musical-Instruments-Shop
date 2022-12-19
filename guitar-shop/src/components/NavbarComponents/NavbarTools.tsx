import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import NavbarMenu from "./NavbarMenu";
import { MouseEventHandler } from "react";
import styled from "styled-components";
import PhoneNumber from "../Miscellaneous/PhoneNumber";
import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";

type Props = {
  isOpen: boolean;
  handleClick: MouseEventHandler<HTMLDivElement>;
};

type Theme = {
  isDark: boolean;
};

const StyledRouterLink = styled(Link)<Theme>`
  text-decoration: none;
  color: ${(props) => (props.isDark ? "white" : "black")};
  display: flex;
  align-items: center;
`;

const TooldsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const UserIcon = styled.span`
  font-size: 1.5rem;
  transition: 0.3s;
`;

const ShoppingCart = styled.span`
  font-size: 1.5rem;
  position: relative;
  transition: 0.3s;
`;

const QuantityBubble = styled.span`
  border: solid crimson 1px;
  border-radius: 50%;
  background-color: crimson;
  font-size: 1.1rem;
  position: absolute;
  bottom: 0;
  right: -0.75rem;
  padding: 0 0.3rem;
  color: white;
`;

export default function NavbarTools({ isOpen, handleClick }: Props) {
  const { darkTheme }: any = useContext(ThemeContext);

  return (
    <TooldsContainer>
      <PhoneNumber />
      <StyledRouterLink to="/account" isDark={darkTheme}>
        <UserIcon>
          <FaRegUserCircle />
        </UserIcon>
      </StyledRouterLink>
      <StyledRouterLink to="/shopping-cart" isDark={darkTheme}>
        <ShoppingCart>
          <HiOutlineShoppingCart />
          <QuantityBubble>3</QuantityBubble>
        </ShoppingCart>
      </StyledRouterLink>
      <NavbarMenu
        handleClick={handleClick}
        menuClass={isOpen ? "bars-menu-close" : "bars-menu-open"}
      />
    </TooldsContainer>
  );
}

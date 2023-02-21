import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import NavbarMenu from "./NavbarMenu";
import { MouseEventHandler } from "react";
import styled from "styled-components";
import PhoneNumber from "../miscellaneous/PhoneNumber";
import ThemeContext from "../../context/ThemeProvider";
import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import UserMenu from "../miscellaneous/UserMenu";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import AuthentificationContext from "../../context/AuthentificationContext";

type Props = {
  isOpen: boolean;
  handleClick: MouseEventHandler<HTMLDivElement>;
};

const StyledRouterLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
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

  @media only screen and (min-width: 768px) {
    position: relative;
  }
`;

const UserButtonContainer = styled.div``;

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

const darkTheme = {
  color: "white",
};

const lightTheme = {
  color: "#3d4552",
};

export default function NavbarTools({ isOpen, handleClick }: Props) {
  // honestly what type should these be
  const { isDark }: any = useContext(ThemeContext);
  const {
    cartItemsQuantity,
    setCartItems,
    setCartItemsQuantity,
    cartItems,
  }: any = useContext(ShoppingCartContext);
  const { isLoggedIn, currentUser }: any = useContext(AuthentificationContext);

  // not wrapping this in a useEffect generate a warning Cannot update a component
  // (`ShoppingCartContextProvider`) while rendering a different component
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     setCartItems(currentUser.shoppingCart);
  //     setCartItemsQuantity(
  //       cartItems.reduce(
  //         (
  //           accumulator: number,
  //           currentValue: {
  //             title: string;
  //             src: string;
  //             alt: string;
  //             price: number;
  //             quantity: number;
  //           }
  //         ) => accumulator + currentValue.quantity,
  //         0
  //       )
  //     );
  //   }
  // }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <TooldsContainer>
        <PhoneNumber />
        <UserButtonContainer>
          <StyledRouterLink to="/account">
            <UserIcon>
              <FaRegUserCircle />
            </UserIcon>
          </StyledRouterLink>
          <UserMenu />
        </UserButtonContainer>
        <StyledRouterLink to="/shopping-cart">
          <ShoppingCart>
            <HiOutlineShoppingCart />
            <QuantityBubble>{cartItemsQuantity}</QuantityBubble>
          </ShoppingCart>
        </StyledRouterLink>
        <NavbarMenu
          handleClick={handleClick}
          menuClass={isOpen ? "bars-menu-close" : "bars-menu-open"}
        />
      </TooldsContainer>
    </ThemeProvider>
  );
}

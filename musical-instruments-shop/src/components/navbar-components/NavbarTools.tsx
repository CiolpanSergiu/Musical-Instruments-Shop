import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import NavbarMenu from "./NavbarMenu";
import styled from "styled-components";
import PhoneNumber from "../miscellaneous/PhoneNumber";
import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ShoppingCartContext from "../../context/ShoppingCartContext";

type Props = {
  isOpen: boolean;
  handleClick: () => void;
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
  const { cartItemsQuantity }: any = useContext(ShoppingCartContext);

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
        </UserButtonContainer>
        <StyledRouterLink to="/shopping-cart">
          <ShoppingCart>
            <HiOutlineShoppingCart />
            <QuantityBubble>{cartItemsQuantity}</QuantityBubble>
          </ShoppingCart>
        </StyledRouterLink>
        <NavbarMenu handleClick={handleClick} isOpen={isOpen} />
      </TooldsContainer>
    </ThemeProvider>
  );
}

import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import NavbarMenu from "./NavbarMenu";
import styled from "styled-components";
import PhoneNumber from "../miscellaneous/PhoneNumber";
import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import themes from "../../colors-and-themes/themes";

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

const ToolsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ShoppingCart = styled.span`
  font-size: 2rem;
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
  padding: 0.25rem 0.5rem;
  color: white;
`;

export default function NavbarTools({ isOpen, handleClick }: Props) {
  // honestly what type should these be
  const { isDark }: any = useContext(ThemeContext);
  const { cartItemsQuantity }: any = useContext(ShoppingCartContext);

  return (
    <ThemeProvider theme={isDark ? themes.darkTheme : themes.lightTheme}>
      <ToolsContainer>
        <PhoneNumber />
        <StyledRouterLink to="/shopping-cart">
          <ShoppingCart>
            <HiOutlineShoppingCart />
            <QuantityBubble>{cartItemsQuantity}</QuantityBubble>
          </ShoppingCart>
        </StyledRouterLink>
        <NavbarMenu handleClick={handleClick} isOpen={isOpen} />
      </ToolsContainer>
    </ThemeProvider>
  );
}

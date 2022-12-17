import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import NavbarMenu from "./NavbarMenu";
import { MouseEventHandler } from "react";
import styled from "styled-components";

type Props = {
  isOpen: boolean;
  handleClick: MouseEventHandler<HTMLDivElement>;
};

const StyledRouterLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
`;

const TooldsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TelephoneIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1rem;
`;

const TelephoneNumber = styled.span`
  font-size: 0.9rem;
  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
  } ;
`;

const UserIcon = styled.span`
  font-size: 1.5rem;
`;

const ShoppingCart = styled.span`
  font-size: 1.5rem;
  position: relative;
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
`;

export default function NavbarTools({ isOpen, handleClick }: Props) {
  return (
    <TooldsContainer>
      <StyledRouterLink to="/contact">
        <TelephoneIcon>
          <BsFillTelephoneFill />
        </TelephoneIcon>
        <TelephoneNumber> +0123456789</TelephoneNumber>
      </StyledRouterLink>
      <StyledRouterLink to="/account">
        <UserIcon>
          <FaRegUserCircle />
        </UserIcon>
      </StyledRouterLink>
      <StyledRouterLink to="/shopping-cart">
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

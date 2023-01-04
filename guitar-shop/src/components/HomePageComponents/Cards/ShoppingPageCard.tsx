import styled from "styled-components";
import { json, Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import StarsContainer from "../../Miscellaneous/StarsContainer";
import ShoppingCartContext from "../../../context/ShoppingCartContext";
import { useContext, useState } from "react";
import { nanoid } from "nanoid";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const CardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid lightgray 2px;
  border-radius: 9px;
  padding: 0.5rem 2rem;
  margin: 1rem 0;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.h3`
  font-weight: 500;
`;

const Price = styled.span`
  transition: 0.3s all ease-in-out;

  &:hover {
    color: red;
  }
`;

const CartIcon = styled.span`
  transition: 0.3s all ease-in-out;
  font-size: 2rem;

  &:hover {
    color: red;d
  }
`;

type Props = {
  src: string;
  alt: string;
  title: string;
  rating: number;
  price: number;
};

// type CartItem = {
//   title: string;
//   src: string;
//   alt: string;
//   price: number;
//   quantity: number;
// };

export default function ShoppingPageCard({
  src,
  alt,
  title,
  rating,
  price,
}: Props) {
  const { setCartItemsQuantity, addToCart }: any =
    useContext(ShoppingCartContext);

  function handleClick() {
    const item = {
      title: title,
      src: src,
      alt: alt,
      price: price,
    };

    setCartItemsQuantity((prevState: number) => prevState + 1);

    addToCart(item);
  }

  return (
    <>
      <StyledLink to="">
        <CardContainer>
          <img
            src="\images\category\MainCategories\guitars_basses.jpg"
            alt=""
          />
          <DetailsContainer>
            <ItemTitle>{title}</ItemTitle>
            <StarsContainer />
            <Price>{price}$</Price>
          </DetailsContainer>
          <CartIcon onClick={handleClick}>
            <AiOutlineShoppingCart />
          </CartIcon>
        </CardContainer>
      </StyledLink>
    </>
  );
}

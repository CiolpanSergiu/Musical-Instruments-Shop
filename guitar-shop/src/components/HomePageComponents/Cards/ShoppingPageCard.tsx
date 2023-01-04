import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import StarsContainer from "../../Miscellaneous/StarsContainer";
import ShoppingCartContext from "../../../context/ShoppingCartContext";
import { useContext } from "react";

const StyledLink = styled(Link)`
  color: #3d4552;
  text-decoration: none;
  width: 100%;
  height: 100%;

  &:hover {
    h3 {
      color: lightskyblue;
    }
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  border: solid gray 2px;
  border-radius: 5px;
  width: 100%;
  position: relative;

  @media only screen and (min-width: 768px) {
  }
`;

const Img = styled.img`
  height: 110px;
  padding: 0.5rem 2rem;

  @media only screen and (min-width: 768px) {
    height: 150px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 768px) {
  }
`;

const ItemTitle = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  max-width: 90%;
  transition: 0.3s all ease-in-out;

  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const Price = styled.span``;

const CartIcon = styled.span`
  transition: 0.3s all ease-in-out;
  font-size: 2rem;
  margin: 0 1rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;

  &:hover {
    color: red;d
  }
`;

type Props = {
  src: string;
  alt: string;
  title: string;
  pageLink: string;
  rating: number;
  price: number;
};

export default function ShoppingPageCard({
  src,
  alt,
  title,
  pageLink,
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
      <CardContainer>
        <StyledLink to={pageLink}>
          <Img src={src} alt={alt} />
        </StyledLink>
        <StyledLink to={pageLink}>
          <DetailsContainer>
            <ItemTitle>{title}</ItemTitle>
            <StarsContainer />
            <Price>{price}$</Price>
          </DetailsContainer>
        </StyledLink>
        <CartIcon onClick={handleClick}>
          <AiOutlineShoppingCart />
        </CartIcon>
      </CardContainer>
    </>
  );
}

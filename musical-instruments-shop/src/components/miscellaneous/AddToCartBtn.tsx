import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import { useContext } from "react";

const CartButton = styled.button`
  background-color: #3d4552;
  color: white;
  padding: 0.5em;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  transition: 0.3s all ease;
  font-size: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: lightskyblue;
    color: black;
  }
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 1rem;
`;

type Props = {
  title: string;
  srcThumbnail: string;
  alt: string;
  price: number;
  havePrice: boolean;
  haveCartIcon: boolean;
  haveText: boolean;
};

export default function AddToCartBtn({
  title,
  srcThumbnail,
  alt,
  price,
  havePrice,
  haveCartIcon,
  haveText,
}: Props) {
  const { setCartItemsQuantity, addToCart }: any =
    useContext(ShoppingCartContext);

  function handleClick() {
    const item = {
      title: title,
      src: srcThumbnail,
      alt: alt,
      price: price,
    };

    setCartItemsQuantity((prevState: number) => prevState + 1);

    addToCart(item);
  }
  {
    return (
      <CartButton onClick={handleClick}>
        {havePrice && <Price>{price}$</Price>}
        {haveCartIcon && <AiOutlineShoppingCart />}
        {haveText && "Add To Cart"}
      </CartButton>
    );
  }
}

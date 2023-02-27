import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import { useContext } from "react";
import AuthentificationContext from "../../context/AuthentificationContext";
import CartItem from "../shopping-cart-page-components/CartItem";
import editUserData from "../../functions/account-related-functions/editUserData";

const CartButton = styled.button`
  background-color: #3d4552;
  color: white;
  padding: 0.5em;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  transition: 0.3s all ease;
  font-size: 1.1rem;
  max-width: 15rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: lightskyblue;
    color: black;
  }

  @media only screen and (min-width: 662px) {
    font-size: 1.25rem;
  }

  @media only screen and (min-width: 768) {
    font-size: 1.5rem;
  }
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 1rem;
`;

type Props = {
  title: string;
  srcSmall: string;
  srcBig: string;
  alt: string;
  price: number;
  havePrice: boolean;
  haveCartIcon: boolean;
  haveText: boolean;
};

export default function AddToCartBtn({
  title,
  srcSmall,
  srcBig,
  alt,
  price,
  havePrice,
  haveCartIcon,
  haveText,
}: Props) {
  const { setCartItemsQuantity, addToCart, cartItems }: any =
    useContext(ShoppingCartContext);

  const { currentUser }: any = useContext(AuthentificationContext);

  editUserData({ ...currentUser, shoppingCart: cartItems });

  function handleClick() {
    const item = {
      title: title,
      src: srcBig,
      alt: alt,
      price: price,
    };

    setCartItemsQuantity((prevState: number) => prevState + 1);
    addToCart(item);
    editUserData({ ...currentUser, shoppingCart: cartItems });
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

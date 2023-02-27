import styled from "styled-components";
import CartItem from "./CartItem";
import ClearButton from "./ClearButton";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import { useContext } from "react";
import { nanoid } from "nanoid";
import editUserData from "../../functions/account-related-functions/editUserData";
import AuthentificationContext from "../../context/AuthentificationContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 2rem 0.5rem;
  border-radius: 9px;
  background-color: rgb(240, 240, 240);
  margin-bottom: 1rem;

  @media only screen and (min-width: 768px) {
    padding: 2rem;
  }
`;

export default function CartItemsContainer() {
  const { cartItems }: any = useContext(ShoppingCartContext);
  const { currentUser }: any = useContext(AuthentificationContext);

  editUserData({ ...currentUser, shoppingCart: cartItems });

  const allCartItems = cartItems.map((item: any) => {
    return (
      <CartItem
        src={item.src}
        alt=""
        title={item.title}
        price={item.price}
        quantity={item.quantity}
        key={nanoid()}
      />
    );
  });

  return (
    <Container>
      {allCartItems}
      <ClearButton />
    </Container>
  );
}

import styled from "styled-components";
import CartItem from "./CartItem";
import ClearButton from "./ClearButton";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import { useContext } from "react";
import { nanoid } from "nanoid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  padding: 2rem;
  border-radius: 9px;
  background-color: rgb(240, 240, 240);
  margin-bottom: 1rem;
`;

export default function CartItemsContainer() {
  const { cartItems }: any = useContext(ShoppingCartContext);

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

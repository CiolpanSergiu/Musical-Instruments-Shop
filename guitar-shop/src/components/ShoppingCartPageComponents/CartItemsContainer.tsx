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
  const {
    cartItemsQuantity,
    setCartItemsQuantity,
    cartItems,
    setCartItems,
  }: any = useContext(ShoppingCartContext);

  // function addItems() {
  //   setCartItemsQuantity((prevState: any) => prevState + 1);
  //   setCartItems((prevState: any) => {
  //     return {
  //       ...prevState,
  //       ["item" + String(cartItemsQuantity)]: { x: "", y: "", z: "" },
  //     };
  //   });
  // }

  // console.log(cartItems);

  return (
    <Container>
      <ClearButton />
    </Container>
  );
}

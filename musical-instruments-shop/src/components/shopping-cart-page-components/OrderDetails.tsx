import styled from "styled-components";
import OrderButton from "./OrderButton";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import { useContext, useState } from "react";

const OrderDetailsContainer = styled.div`
  width: 100%;
  background-color: rgb(240, 240, 240);
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  position: sticky;
  top: 2.5%;
  border-radius: 9px;
`;

const Header = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`;

const PriceSpan = styled.span`
  margin: 0.5rem 0;
  font-size: 2rem;
`;

const ErrMsg = styled.span`
  color: crimson;
`;

export default function OrderDetails() {
  const { cartItems }: any = useContext(ShoppingCartContext);

  const [notLoggedErr, setNotLoggedErr] = useState<string>();

  let totalPrice = cartItems
    .map((item: any) => item.price * item.quantity)
    .reduce(
      (accumulator: number, currentPrice: number) => accumulator + currentPrice,
      0
    );

  function showError() {
    setNotLoggedErr("You must be logged in before making an order!");
  }

  return (
    <>
      <OrderDetailsContainer>
        <Header>Total Price:</Header>
        <PriceSpan>{totalPrice.toFixed(2)}$</PriceSpan>
        <OrderButton handleNotLogged={showError} />
        <ErrMsg>{notLoggedErr}</ErrMsg>
      </OrderDetailsContainer>
    </>
  );
}

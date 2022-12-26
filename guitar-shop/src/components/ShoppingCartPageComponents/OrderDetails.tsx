import styled from "styled-components";
import OrderButton from "./OrderButton";

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

export default function OrderDetails() {
  return (
    <>
      <OrderDetailsContainer>
        <Header>Total Price:</Header>
        <PriceSpan>800$</PriceSpan>
        <OrderButton />
      </OrderDetailsContainer>
    </>
  );
}

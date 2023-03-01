import styled from "styled-components";
import { CartItem } from "../../types/commonTypes";
import OrderModalCard from "./OrderModalCard";
import { nanoid } from "nanoid";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  top: 0;
  background-color: white;
  padding-top: 20%;
  padding-bottom: 10%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media only screen and (min-width: 768px) {
    max-width: 70%;
    height: 100%;
    max-height: 80vh;
    top: 10vh;
    left: 15vw;
    right: 15vw;
    padding: 10% 2rem 3rem 2rem;
  }
`;

const CloseBtn = styled.button`
  padding: 0.5rem 1rem;
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const TotalPrice = styled.span`
  font-size: 2rem;
  margin-top: 2rem;
  margin-left: 10%;
`;

type Props = {
  handleClose: () => void;
  title: string;
  orderItems: CartItem[];
};

export default function OrderModal({ title, handleClose, orderItems }: Props) {
  const itemCards = orderItems.map((orderItem) => {
    return (
      <OrderModalCard
        key={nanoid()}
        title={orderItem.title}
        quantity={orderItem.quantity}
        price={orderItem.price}
        src={orderItem.src}
        alt={orderItem.alt}
      />
    );
  });

  const totalPrice = orderItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  return (
    <ModalContainer>
      <>
        <CloseBtn onClick={handleClose}>X</CloseBtn>
        <Header>{title}</Header>
        {itemCards}
        <TotalPrice>Total: {totalPrice}</TotalPrice>
      </>
    </ModalContainer>
  );
}

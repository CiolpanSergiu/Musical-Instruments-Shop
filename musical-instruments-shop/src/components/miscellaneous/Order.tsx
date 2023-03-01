import styled from "styled-components";
import ActionButton from "./ActionButton";
import { useState, useEffect, useContext } from "react";
import { User } from "../../types/commonTypes";
import AuthentificationContext from "../../context/AuthentificationContext";
import editUserData from "../../functions/account-related-functions/editUserData";

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  border: solid gray 3px;
  border-radius: 6px;
  padding: 0.5rem 2rem;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  k
`;

const Image = styled.img`
  width: 128px;
`;

const Title = styled.h2`
  margin-top: 0.5rem;
`;

type Props = {
  orderNum: number;
  orderId: string;
  placementDate: string;
};

const BoldSpan = styled.span`
  font-weight: bold;
  margin: 0.5rem 0 0.25rem 0;
`;

export default function Order({ orderNum, orderId, placementDate }: Props) {
  const { currentUser, setCurrentUser }: any = useContext(
    AuthentificationContext
  );
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const orderPlacementDate = new Date(placementDate);

  const oneHour = 60 * 60 * 1000;
  // for testing
  // const fiveMinutes = 1000 * 60 * 5;

  useEffect(() => {
    const oneSecondInterval = setInterval(
      () => setCurrentTime(new Date()),
      1000
    );
    return () => {
      clearInterval(oneSecondInterval);
    };
  }, []);

  const isCancellable =
    Number(currentTime) - Number(orderPlacementDate) > oneHour;

  function handleCancel() {
    const newOrdersHistory = currentUser.ordersHistory.filter((order: any) => {
      return order.orderId !== orderId;
    });
    setCurrentUser((prevState: User) => {
      return {
        ...prevState,
        ordersHistory: newOrdersHistory,
      };
    });
    editUserData({ ...currentUser, ordersHistory: newOrdersHistory });
  }

  return (
    <OrderContainer>
      <Image src="/order_img.png" alt="A shopping cart" />
      <DetailsContainer>
        <Title>Order #{orderNum}</Title>
        <BoldSpan>Order Id</BoldSpan>
        <span>{orderId}</span>
        <BoldSpan>Placement Date</BoldSpan>
        <span>{orderPlacementDate.toLocaleDateString()}</span>
        <span>{orderPlacementDate.toLocaleTimeString()}</span>
      </DetailsContainer>
      <ActionButton
        bgColor={{ normal: "crimson", hover: "brown" }}
        buttonText="Cancel Order"
        handleClick={isCancellable ? () => {} : handleCancel}
        margin="1rem 0"
        isDisabled={isCancellable}
      />
    </OrderContainer>
  );
}

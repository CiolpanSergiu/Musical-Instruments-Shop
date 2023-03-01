import styled from "styled-components";
import Navbar from "../../components/navbar-components/Navbar";
import Footer from "../../components/footer-components/Footer";
import { useContext } from "react";
import { OrdersHistory } from "../../types/commonTypes";
import AuthentificationContext from "../../context/AuthentificationContext";
import Order from "../../components/miscellaneous/Order";
import { nanoid } from "nanoid";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;

  @media only screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const OrdersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin 4rem 0;
  text-align: center;
  max-width: 80%;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const BottomHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 2rem;
`;

export default function OrdersHistoryPage() {
  const { currentUser }: any = useContext(AuthentificationContext);

  const orders = currentUser.ordersHistory.map(
    (order: OrdersHistory, index: number) => {
      return (
        <Order
          key={nanoid()}
          orderItems={order.order}
          orderNum={index + 1}
          orderId={order.orderId}
          placementDate={order.placementDate}
        />
      );
    }
  );

  return (
    <>
      <Navbar />
      <PageContainer>
        <Header>{currentUser.fullName}'s Orders History</Header>
        {currentUser.ordersHistory.length > 0 ? (
          <OrdersContainer>{orders}</OrdersContainer>
        ) : (
          <>
            <img
              src="/empty_orders_history.jpg"
              alt="Spongebob showing an empty glowing case"
            />
            <BottomHeader>Wait, this is empty!</BottomHeader>
          </>
        )}
      </PageContainer>
      ;
      <Footer />
    </>
  );
}

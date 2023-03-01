import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthentificationContext from "../../context/AuthentificationContext";
import NavBtn from "../../components/miscellaneous/NavigationBtn";
import Navbar from "../../components/navbar-components/Navbar";
import Footer from "../../components/footer-components/Footer";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const MainHeader = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;

  @media only screen and (min-width: 662px) {
    font-size: 2.5rem;
  }
`;

type SmallerHeaderProps = {
  marginBottom?: string;
  marginTop?: string;
  textAlign?: string;
};

const SmallerHeader = styled.h2<SmallerHeaderProps>`
  font-weight: 500;
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "2rem"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  font-size: 1.75rem;
  text-align: ${(props) => (props.marginBottom ? props.textAlign : "center")}; ;
`;

const Image = styled.img`
  width: 400px;
  margin-bottom: 2rem;

  @media only screen and (min-width: 662px) {
    width: 500px;
    height: 250px;
  }
`;

const MiniContainer = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 9px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    width: 90%;
  }
`;

const BigContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  justify-items: center;

  @media only screen and (min-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
`;

const Paragraph = styled.p`
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  color: lightskyblue;
`;

const Hr = styled.hr`
  border-top: solid black 1px;
  margin: 0.5rem;
`;

const InfoRow = styled.div`
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const BoldSpan = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export default function ThankYouPage() {
  const { currentUser }: any = useContext(AuthentificationContext);

  const orderPlacementDate: Date = new Date();
  const estimatedDeliveryDate: Date = new Date();
  estimatedDeliveryDate.setDate(orderPlacementDate.getDate() + 30);

  const currentOrder =
    currentUser.ordersHistory[currentUser.ordersHistory.length - 1];

  return (
    <>
      <Navbar />
      <PageContainer>
        <Image src="/thank_you_img.png" />
        <BigContainer>
          <MiniContainer>
            <MainHeader>Thank For Your Order</MainHeader>
            <Paragraph>
              Dear {currentUser && currentUser.fullName}, we would like to thank
              you for ordering from us! We hope that your experience on our
              website was an amazing one. However, if your encountered any
              problem during your time you can always send us a feedback on
              <StyledLink to="/contact"> our contact page.</StyledLink>
              <br />
              <br />
              Have a great day and all luck on your side in your musical
              journey!
            </Paragraph>
            <NavBtn
              bgColor={{ normal: "lightskyblue", hover: "dodgerblue" }}
              pageLink="/"
              buttonText="Back Home"
            />
            <SmallerHeader marginBottom="0" marginTop="2rem">
              Made a mistake?
            </SmallerHeader>
            <Paragraph>
              Users can cancel an order within one hour after placing it. You
              can do this from your account page -&gt; Others section -&gt; your
              orders history
            </Paragraph>
            <NavBtn
              bgColor={{ normal: "lightskyblue", hover: "dodgerblue" }}
              pageLink="/orders-history"
              buttonText="Orders History"
            />
          </MiniContainer>
          <MiniContainer>
            <SmallerHeader>Additional Info</SmallerHeader>
            <Hr />
            <InfoRow>
              <BoldSpan>Date of order placement:</BoldSpan>
              <span>{orderPlacementDate.toLocaleString()}</span>
            </InfoRow>
            <Hr />
            <InfoRow>
              <BoldSpan>Estimated delivery date:</BoldSpan>
              <span>{estimatedDeliveryDate.toDateString()}</span>
            </InfoRow>
            <Hr />
            <InfoRow>
              <BoldSpan>Order ID:</BoldSpan>
              <span>{currentOrder.orderId}</span>
            </InfoRow>
            <Hr />
            <InfoRow>
              <BoldSpan>Delivered:</BoldSpan>
              <span>{currentOrder.delivered ? "Yes" : "No"}</span>
            </InfoRow>
            <Hr />
          </MiniContainer>
        </BigContainer>
      </PageContainer>
      <Footer marginTop="5rem" />
    </>
  );
}

import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import CartItemsContainer from "../../components/ShoppingCartPageComponents/CartItemsContainer";
import OrderDetails from "../../components/ShoppingCartPageComponents/OrderDetails";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import { useContext } from "react";
import styled from "styled-components";

const ShoppingPage = styled.div`
  width: 100%;
  height: 100%;
`;

const PageHeader = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  max-width: 75%;
  margin: 3rem auto;
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    font-size: 2.75rem;
    font-weight: 500;
  }
`;

const EmptyCartHeader = styled.h2`
  padding: 1rem 3rem;
  border: solid gray 2px;
  border-radius: 9px;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    font-size: 1.75rem;
    font-weight: 500;
  }
`;

const Img = styled.img`
  @media only screen and (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  border-radius: 9px;
  margin: 1rem;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin: 0;
  }
`;

const EmptyCartContainer = styled.div`
  min-height: 50vh;
  background-color: white;
  margin: 3rem auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
`;

const PageContentContainer = styled.div`
  @media only screen and (min-width: 992px) {
    padding: 0 5rem;
  }
`;

export default function ShoppingCartPage() {
  const { cartItemsQuantity }: any = useContext(ShoppingCartContext);

  return (
    <ShoppingPage>
      <Navbar />
      <PageContentContainer>
        <PageHeader>This is your shopping cart</PageHeader>
        {cartItemsQuantity > 0 ? (
          <>
            <CartContainer>
              <CartItemsContainer />
              <OrderDetails />
            </CartContainer>
          </>
        ) : (
          <EmptyCartContainer>
            <Img src="public/shopping_cart.jpg" alt="An empty shopping cart" />
            <EmptyCartHeader>This looks kinda empty...</EmptyCartHeader>
          </EmptyCartContainer>
        )}
      </PageContentContainer>
      <Footer />
    </ShoppingPage>
  );
}

import styled from "styled-components";
import ShoppingPageCard from "../Cards/ShoppingPageCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 2rem 0 2rem;
`;

export default function ShoppingPage() {
  return (
    <>
      <Container>
        <ShoppingPageCard src="" alt="" title="Guitar" rating={5} price={200} />
        <ShoppingPageCard
          src=""
          alt=""
          title="Guitar 2"
          rating={5}
          price={200}
        />
        <ShoppingPageCard
          src=""
          alt=""
          title="Guitar 3"
          rating={5}
          price={200}
        />
        <ShoppingPageCard
          src=""
          alt=""
          title="Guitar 4"
          rating={5}
          price={200}
        />
      </Container>
    </>
  );
}

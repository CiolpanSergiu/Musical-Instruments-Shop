import styled from "styled-components";
import ShoppingPageCard from "../cards/ShoppingPageCard";
import { nanoid } from "nanoid";
import { Product } from "../../../types/commonTypes";

const Container = styled.div`
  padding-top: 4rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PageHeader = styled.h1`
  text-align: center;
  margin-top: 3rem;
  font-weight: 500;

  @media only screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const EmptyPageMsg = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  margin: 1rem;
`;

type Props = {
  pageTitle: string;
  itemsData: Product[];
};

export default function ShoppingPageContainer({ pageTitle, itemsData }: Props) {
  const cards = itemsData.map((card: Product) => {
    return (
      <ShoppingPageCard
        key={nanoid()}
        title={card.title}
        srcSmall={card.srcSmall}
        srcBig={card.srcBig}
        alt={card.alt}
        rating={card.rating}
        price={card.price}
        totalReviews={card.totalReviews}
      />
    );
  });

  return (
    <>
      <PageHeader>{pageTitle}</PageHeader>
      <Container>
        {itemsData.length > 0 ? (
          cards
        ) : (
          <div>
            <EmptyPageMsg>We are sorry !</EmptyPageMsg>
            <EmptyPageMsg>
              No items of this category / brand found !
            </EmptyPageMsg>
          </div>
        )}
      </Container>
    </>
  );
}

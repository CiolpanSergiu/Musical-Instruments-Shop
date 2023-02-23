import styled from "styled-components";
import ShoppingPageCard from "../cards/ShoppingPageCard";
import { nanoid } from "nanoid";
import ProductType from "../../../data/products/productType";

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

type Props = {
  pageTitle: string;
  itemsData: ProductType[];
};

export default function ShoppingPageContainer({ pageTitle, itemsData }: Props) {
  const cards = itemsData.map((card: ProductType) => {
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
      <Container>{cards}</Container>
    </>
  );
}

import styled from "styled-components";
import ShoppingPageCard from "../Cards/ShoppingPageCard";
import { nanoid } from "nanoid";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 4rem 0 0 0;
  width: 100%;
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
  data: {
    title: string;
    src: string;
    alt: string;
    pageLink: string;
    price: number;
    rating: number;
    totalReviews: number;
    avaible: boolean;
  }[];
};

export default function ShoppingPage({ data }: Props) {
  const cards = data.map((card: any) => {
    return (
      <ShoppingPageCard
        key={nanoid()}
        title={card.title}
        src={card.src}
        alt={card.alt}
        pageLink={card.pageLink}
        rating={card.rating}
        price={card.price}
      />
    );
  });

  return (
    <>
      <PageHeader>Stratocaster Guitars</PageHeader>
      <Container>{cards}</Container>
    </>
  );
}

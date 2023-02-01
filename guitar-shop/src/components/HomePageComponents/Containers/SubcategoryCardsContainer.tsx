import styled from "styled-components";
import SubcategoryCard from "../Cards/SubcategoryCard";
import { nanoid } from "nanoid";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 4rem;
  padding: 1rem;
  gap: 1rem;
  width: 100%;

  @media only screen and (min-width: 540px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 2rem;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin: 5rem 0 3rem 0;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

type Props = {
  data: { src: string; alt: string; title: string; pageLink: string }[];
  pageTitle: string;
};

export default function SubcategoryCardsContainer({ data, pageTitle }: Props) {
  const subcategoryCards = data.map(
    (itemData: {
      src: string;
      alt: string;
      title: string;
      pageLink: string;
    }) => {
      return (
        <SubcategoryCard
          key={nanoid()}
          src={itemData.src}
          alt={itemData.alt}
          title={itemData.title}
          pageLink={itemData.pageLink}
        />
      );
    }
  );

  return (
    <>
      <Header>{pageTitle}</Header>
      <Container>{subcategoryCards}</Container>
    </>
  );
}

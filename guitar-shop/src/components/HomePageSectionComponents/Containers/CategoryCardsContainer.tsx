import { useState } from "react";
import itemsCategories from "../../../data/category.json";
import CategoryCard from "../Cards/CategoryCard";
import { nanoid } from "nanoid";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem 1rem;
  padding: 2rem;

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Header1 = styled.h1`
  font-size: 3rem;
  margin: 2rem auto;
`;

const Header2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export default function CategoryCardsContainer() {
  const [categories, setCategories] = useState(itemsCategories);

  const categoryCard = categories.map((categoryCardData) => (
    <CategoryCard
      key={nanoid()}
      imgSrc={categoryCardData.src}
      imgAlt={categoryCardData.alt}
      header={categoryCardData.title}
      pageLink={categoryCardData.pageLink}
    />
  ));

  return (
    <Section>
      <Header1>Home</Header1>
      <Header2>Our categories</Header2>
      <CategoryContainer>{categoryCard}</CategoryContainer>
    </Section>
  );
}

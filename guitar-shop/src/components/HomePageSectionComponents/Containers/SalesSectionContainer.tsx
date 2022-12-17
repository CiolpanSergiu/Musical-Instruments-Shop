import styled from "styled-components";
import salesBanners from "../../../data/saleBanners.json";
import SaleBanner from "../Cards/SaleBanner";
import { nanoid } from "nanoid";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const Header = styled.h1`
  margin: 2rem;
  font-size: 2rem;
  text-decoration: underline lightbluesky 3px;
  color: #404040;
  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const banners = salesBanners.map((banner) => (
  <SaleBanner
    key={nanoid()}
    imgSrc={banner.src}
    alt={banner.alt}
    title={banner.title}
  />
));

export default function SalesSectionContainer() {
  return (
    <Section>
      <Header>Christmas Sales</Header>
      <Container>{banners}</Container>
    </Section>
  );
}

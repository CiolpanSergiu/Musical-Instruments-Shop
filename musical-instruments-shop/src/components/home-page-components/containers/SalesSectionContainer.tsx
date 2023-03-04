import styled from "styled-components";
import salesBanners from "../../../data/saleBanners.json";
import SaleBanner from "../cards/SaleBanner";
import { nanoid } from "nanoid";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Header = styled.h1`
  margin-top: 6rem;
  margin-bottom: 2rem;
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

type Banner = {
  src: string;
  alt: string;
  title: string;
};

export default function SalesSectionContainer() {
  const banners = salesBanners.map((banner: Banner) => (
    <SaleBanner
      key={nanoid()}
      imgSrc={banner.src}
      alt={banner.alt}
      title={banner.title}
    />
  ));
  return (
    <Section>
      <Header>Christmas Sales</Header>
      <Container>{banners}</Container>
    </Section>
  );
}

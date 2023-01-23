import styled from "styled-components";
import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import SubcategoryCardsContainer from "../../components/HomePageComponents/Containers/SubcategoryCardsContainer";
import SimpleSlider from "../../components/Sliders/HomePage/SimpleSlider";
import BrandsSlider from "../../components/Sliders/HomePage/BrandsSlider";
import Data from "../../data/mainCategory.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type Props = {
  data: {
    title: string;
    src: string;
    alt: string;
    pageLink: string;
  }[];
  pageTitle: string;
};

export default function InstrumentCategoryPage({ data, pageTitle }: Props) {
  return (
    <>
      <Navbar />
      <Container>
        <SubcategoryCardsContainer data={data} pageTitle={pageTitle} />
        <SimpleSlider cardsData={Data} header="Recommended to beginners" />
        <SimpleSlider cardsData={Data} header="Popular Items" />
        <BrandsSlider title={`Popular ${pageTitle} brands`} />
      </Container>
      <Footer marginTop="5rem" />
    </>
  );
}

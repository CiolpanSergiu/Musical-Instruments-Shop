import styled from "styled-components";
import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import SubcategoryCardsContainer from "../../components/HomePageComponents/Containers/SubcategoryCardsContainer";
import SimpleSlider from "../../components/Sliders/HomePage/SimpleSlider";
import BrandsSlider from "../../components/Sliders/HomePage/BrandsSlider";
import Data from "../../data/SubSubcategories/GuitarsAndBasses/electricGuitarsData.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type Props = {
  subcategoriesData: {
    title: string;
    src: string;
    alt: string;
    pageLink: string;
  }[];
  pageTitle: string;
  brandsSliderTitle: string;
};

export default function InstrumentSubcategoryPage({
  pageTitle,
  brandsSliderTitle,
  subcategoriesData,
}: Props) {
  return (
    <>
      <Navbar />
      <Container>
        <SubcategoryCardsContainer
          data={subcategoriesData}
          pageTitle={`${pageTitle} Categories`}
        />
        <SimpleSlider cardsData={Data} header="Recommended to beginners" />
        <SimpleSlider cardsData={Data} header="Popular Items" />
        <BrandsSlider title={`Best ${brandsSliderTitle} Brands`} />
      </Container>
      <Footer marginTop="5rem" />
    </>
  );
}

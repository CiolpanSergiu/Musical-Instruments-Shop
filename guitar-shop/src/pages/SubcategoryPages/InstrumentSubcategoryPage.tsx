import styled from "styled-components";
import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import SubcategoryCardsContainer from "../../components/HomePageComponents/Containers/SubcategoryCardsContainer";
import SimpleSlider from "../../components/Sliders/HomePage/SimpleSlider";
import BrandsSlider from "../../components/Sliders/HomePage/BrandsSlider";
import Data from "../../data/LevelThreeCategories/GuitarsAndBasses/electricGuitarsData.json";

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
  brandsSliderTitle: string;
  haveRecommendedItemsSlider: boolean;
  havePopularItemsSlider: boolean;
  haveBrandsSlider: boolean;
};

export default function InstrumentSubcategoryPage({
  pageTitle,
  brandsSliderTitle,
  data,
  haveRecommendedItemsSlider,
  havePopularItemsSlider,
  haveBrandsSlider,
}: Props) {
  return (
    <>
      <Navbar />
      <Container>
        <SubcategoryCardsContainer
          data={data}
          pageTitle={`${pageTitle} Categories`}
        />
        {haveRecommendedItemsSlider && (
          <SimpleSlider cardsData={Data} header="Recommended to beginners" />
        )}
        {havePopularItemsSlider && (
          <SimpleSlider cardsData={Data} header="Popular Items" />
        )}
        {haveBrandsSlider && (
          <BrandsSlider title={`Best ${brandsSliderTitle} Brands`} />
        )}
      </Container>
      <Footer marginTop="5rem" />
    </>
  );
}

import styled from "styled-components";
import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import SubcategoryCardsContainer from "../../components/HomePageComponents/Containers/SubcategoryCardsContainer";
import universalPopularItemsData from "../../data/PopularItems/universalPopularItems.json";
import SimpleSlider from "../../components/Sliders/HomePage/SimpleSlider";
import BrandsSlider from "../../components/Sliders/HomePage/BrandsSlider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type SliderType = {
  brandName: string;
  src: string;
  alt: string;
  pageLink: string;
};

type Props = {
  data: {
    title: string;
    src: string;
    alt: string;
    pageLink: string;
  }[];
  pageTitle: string;
  itemsBrands?: SliderType[];
  itemsRecommendations?: SliderType[];
};

export default function InstrumentCategoryPage({
  data,
  pageTitle,
  itemsBrands,
  itemsRecommendations,
}: Props) {
  return (
    <>
      <Navbar />
      <Container>
        <SubcategoryCardsContainer data={data} pageTitle={pageTitle} />
        {itemsRecommendations && (
          <SimpleSlider
            data={universalPopularItemsData}
            header="Popular Items"
          />
        )}
        {itemsBrands && (
          <BrandsSlider
            title={`Popular ${pageTitle} brands`}
            data={itemsBrands}
          />
        )}
      </Container>
      <Footer marginTop="5rem" />
    </>
  );
}

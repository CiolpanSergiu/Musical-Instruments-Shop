import styled from "styled-components";
import Navbar from "../../components/navbar-components/Navbar";
import Footer from "../../components/footer-components/Footer";
import SubcategoryCardsContainer from "../../components/home-page-components/containers/SubcategoryCardsContainer";
import universalPopularItemsData from "../../data/popular-items/universalPopularItems";
import BrandsSlider from "../../components/sliders/BrandsSlider";
import ItemsSlider from "../../components/sliders/ItemsSlider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2.5rem;

  @media only screen and (min-width: 662px) {
    padding-bottom: 0;
  }
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
          <ItemsSlider data={universalPopularItemsData} title="Popular Items" />
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

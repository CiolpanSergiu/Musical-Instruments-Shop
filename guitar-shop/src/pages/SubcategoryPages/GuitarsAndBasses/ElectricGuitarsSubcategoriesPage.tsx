import styled from "styled-components";
import Navbar from "../../../components/NavbarComponents/Navbar";
import Footer from "../../../components/Footer/Footer";
import SubcategoryCardsContainer from "../../../components/HomePageComponents/Containers/SubcategoryCardsContainer";
import SimpleSlider from "../../../components/Sliders/HomePage/SimpleSlider";
import BrandsSlider from "../../../components/Sliders/HomePage/BrandsSlider";
import Data from "../../../data/SubSubcategories/GuitarsAndBasses/electricGuitarsData.json";
import instrumentsData from "../../../data/SubSubcategories/GuitarsAndBasses/electricGuitarsData.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function ElectricGuitarsSubcategoriesPage() {
  return (
    <>
      <Navbar />
      <Container>
        <SubcategoryCardsContainer
          data={instrumentsData}
          pageTitle="Electric Guitar Categories"
        />
        <SimpleSlider cardsData={Data} header="Recommended to beginners" />
        <SimpleSlider cardsData={Data} header="Popular Items" />
        <BrandsSlider title="Best Electric Guitars Brands" />
      </Container>
      <Footer marginTop="5rem" />
    </>
  );
}

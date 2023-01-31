import Navbar from "../../components/NavbarComponents/Navbar";
import CategoryCardsContainer from "../../components/HomePageComponents/Containers/CategoryCardsContainer";
import BrandsSlider from "../../components/Sliders/BrandsSlider";
import SalesSectionContainer from "../../components/HomePageComponents/Containers/SalesSectionContainer";
import ItemsSlider from "../../components/Sliders/ItemsSlider";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import brandsData from "../../data/LogoData/universalBrands.json";
import popularItemsData from "../../data/PopularItems/allPopularItems";
import description from "../../data/sectionDescription.json";
import SliderDescription from "../../components/Sliders/SliderDescription";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <HomePage>
      <Navbar />
      <CategoryCardsContainer />
      <ItemsSlider title="Popular Items" data={popularItemsData[0]} />
      <BrandsSlider title="Top Brands" data={brandsData} />
      <SalesSectionContainer />
      <ItemsSlider data={popularItemsData[1]} title="Guitars and Basses" />
      <SliderDescription descriptionData={description[0]} />
      <ItemsSlider data={popularItemsData[2]} title="Amplifiers" />
      <SliderDescription descriptionData={description[1]} />
      <ItemsSlider data={popularItemsData[3]} title="Drums and Percussion" />
      <SliderDescription descriptionData={description[2]} />
      <ItemsSlider data={popularItemsData[4]} title="Keyboards and Synth" />
      <SliderDescription descriptionData={description[3]} />
      <Footer marginTop={"2rem"} />
    </HomePage>
  );
}

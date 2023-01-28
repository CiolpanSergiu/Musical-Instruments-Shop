import Navbar from "../../components/NavbarComponents/Navbar";
import CategoryCardsContainer from "../../components/HomePageComponents/Containers/CategoryCardsContainer";
import BrandsSlider from "../../components/Sliders/HomePage/BrandsSlider";
import SalesSectionContainer from "../../components/HomePageComponents/Containers/SalesSectionContainer";
import ItemsSlider from "../../components/Sliders/HomePage/SimpleSlider";
import SimpleSlider from "../../components/Sliders/HomePage/SimpleSlider";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import brandsData from "../../data/LogoData/universalBrands.json";
import popularItemsData from "../../data/PopularItems/allPopularItems";
import description from "../../data/sectionDescription.json";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export default function Home() {
  return (
    <HomePage>
      <Navbar />
      <CategoryCardsContainer />
      <ItemsSlider
        header="Popular Items"
        data={popularItemsData.universalPopularItems}
      />
      <BrandsSlider title="Top Brands" data={brandsData} />
      <SalesSectionContainer />
      <SimpleSlider
        data={popularItemsData.guitarAndBassesPopularItems}
        header="Guitars and Basses"
        descriptionData={description[0]}
      />
      <SimpleSlider
        data={popularItemsData.amplifiersPopularItems}
        header="Amplifiers"
        descriptionData={description[1]}
      />
      <SimpleSlider
        data={popularItemsData.drumsAndPercussionPopularItems}
        header="Drums and Percussion"
        descriptionData={description[2]}
      />
      <SimpleSlider
        data={popularItemsData.keyboardAndSynthPopularItems}
        header="Keyboards and Synth"
        descriptionData={description[3]}
      />
      <Footer marginTop={"2rem"} />
    </HomePage>
  );
}

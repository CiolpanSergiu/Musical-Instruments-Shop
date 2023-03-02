import Navbar from "../../components/navbar-components/Navbar";
import CategoryCardsContainer from "../../components/home-page-components/containers/CategoryCardsContainer";
import BrandsSlider from "../../components/sliders/BrandsSlider";
import SalesSectionContainer from "../../components/home-page-components/containers/SalesSectionContainer";
import ItemsSlider from "../../components/sliders/ItemsSlider";
import Footer from "../../components/footer-components/Footer";
import styled from "styled-components";
import brandsData from "../../data/logo-data/universalBrands.json";
import {
  universalPopularItems,
  amplifiersPopularItems,
  keyboardAndSynthPopularItems,
  drumsAndPercussionPopularItems,
  guitarAndBassesPopularItems,
} from "../../data/popular-items/allPopularItems";
import description from "../../data/sectionDescription.json";
import SliderDescription from "../../components/sliders/SliderDescription";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <HomePage>
      <Navbar />
      <CategoryCardsContainer />
      <ItemsSlider title="" data={universalPopularItems} />
      <BrandsSlider title="Top Brands" data={brandsData} />
      <SalesSectionContainer />
      <Container>
        <ItemsSlider
          data={guitarAndBassesPopularItems}
          title="Guitars and Basses"
        />
        <SliderDescription descriptionData={description[0]} />
      </Container>

      <Container>
        <ItemsSlider data={amplifiersPopularItems} title="Amplifiers" />
        <SliderDescription descriptionData={description[1]} />
      </Container>

      <Container>
        <ItemsSlider
          data={drumsAndPercussionPopularItems}
          title="Drums and Percussion"
        />
        <SliderDescription descriptionData={description[2]} />
      </Container>

      <Container>
        <ItemsSlider
          data={keyboardAndSynthPopularItems}
          title="Keyboards and Synth"
        />
        <SliderDescription descriptionData={description[3]} />
      </Container>

      <Footer marginTop={"2rem"} />
    </HomePage>
  );
}

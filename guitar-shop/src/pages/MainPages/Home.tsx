import Navbar from "../../components/NavbarComponents/Navbar";
import DailyRecommendationsSlider from "../../components/Sliders/HomePage/DailyRecommendationsSlider";
import CategoryCardsContainer from "../../components/HomePageSectionComponents/Containers/CategoryCardsContainer";
import BrandsSlider from "../../components/Sliders/HomePage/BrandsSlider";
import SalesSectionContainer from "../../components/HomePageSectionComponents/Containers/SalesSectionContainer";
import SimpleSlider from "../../components/Sliders/HomePage/SimpleSlider";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import data from "../../data/mainCategory.json";
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
      <DailyRecommendationsSlider />
      <BrandsSlider />
      <SalesSectionContainer />
      <SimpleSlider
        cardsData={data}
        header="Guitars"
        descriptionData={description[0]}
      />
      <SimpleSlider
        cardsData={data}
        header="Amplifiers"
        descriptionData={description[1]}
      />
      <SimpleSlider
        cardsData={data}
        header="Drums and Percussion"
        descriptionData={description[2]}
      />
      <SimpleSlider
        cardsData={data}
        header="Keyboards and Synth"
        descriptionData={description[3]}
      />
      <SimpleSlider
        cardsData={data}
        header="And many more!"
        descriptionData={description[4]}
      />
      <Footer marginTop={"2rem"} />
    </HomePage>
  );
}

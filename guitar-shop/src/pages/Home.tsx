import Navbar from "../components/NavbarComponents/Navbar";
import DailyRecommendationsSlider from "../components/Sliders/HomepageSliders/DailyRecommendationsSlider";
import CategoryCardsContainer from "../components/HomePageSectionComponents/Containers/CategoryCardsContainer";
import TopBrandsSlider from "../components/Sliders/HomepageSliders/TopBrandsSlider";
import SalesSectionContainer from "../components/HomePageSectionComponents/Containers/SalesSectionContainer";
import SimpleSlider from "../components/Sliders/HomepageSliders/SimpleSlider";
import Footer from "../components/HomePageSectionComponents/Containers/Footer";
import styled from "styled-components";
import data from "../data/category.json";
import description from "../data/sectionDescription.json";

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
      <TopBrandsSlider />
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
      <Footer />
    </HomePage>
  );
}

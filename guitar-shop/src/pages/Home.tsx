import Navbar from "../components/NavbarComponents/Navbar";
import DailyRecommendationsSlider from "../components/Sliders/DailyRecommendationsSlider";
import CategoryCardsContainer from "../components/HomePageSectionComponents/Containers/CategoryCardsContainer";
import TopBrandsSlider from "../components/Sliders/TopBrandsSlider";
import SalesSectionContainer from "../components/HomePageSectionComponents/Containers/SalesSectionContainer";
import styled from "styled-components";

const HomePage = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
`;

export default function Home() {
  return (
    <HomePage>
      <Navbar />
      <CategoryCardsContainer />
      <DailyRecommendationsSlider />
      <TopBrandsSlider />
      <SalesSectionContainer />
    </HomePage>
  );
}

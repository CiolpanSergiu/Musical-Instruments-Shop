import Navbar from "../../components/NavbarComponents/Navbar";
import CategoryCardsContainer from "../../components/HomePageComponents/Containers/CategoryCardsContainer";
import PopularItemsSlider from "../../components/Sliders/HomePage/ItemsSlider";
import BrandsSlider from "../../components/Sliders/HomePage/BrandsSlider";
import SalesSectionContainer from "../../components/HomePageComponents/Containers/SalesSectionContainer";
import SimpleSlider from "../../components/Sliders/HomePage/SimpleSlider";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import brandsData from "../../data/LogoData/universalBrands.json";
import universalPopularItemsData from "../../data/PopularItems/universalPopularItems.json";
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
      <PopularItemsSlider title="" data={universalPopularItemsData} />
      <BrandsSlider title="Top Brands" data={brandsData} />
      <SalesSectionContainer />
      <SimpleSlider
        data={universalPopularItemsData}
        header="Guitars"
        descriptionData={description[0]}
      />
      <SimpleSlider
        data={universalPopularItemsData}
        header="Amplifiers"
        descriptionData={description[1]}
      />
      <SimpleSlider
        data={universalPopularItemsData}
        header="Drums and Percussion"
        descriptionData={description[2]}
      />
      <SimpleSlider
        data={universalPopularItemsData}
        header="Keyboards and Synth"
        descriptionData={description[3]}
      />
      <SimpleSlider
        data={universalPopularItemsData}
        header="And many more!"
        descriptionData={description[4]}
      />
      <Footer marginTop={"2rem"} />
    </HomePage>
  );
}

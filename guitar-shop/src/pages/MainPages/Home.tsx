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

const HomePage = styled.div``;

export default function Home() {
  return (
    <HomePage>
      <Navbar />
      <CategoryCardsContainer />
      <section>
        <ItemsSlider
          title="Popular Items"
          data={popularItemsData.universalPopularItems}
        />
      </section>
      <section>
        <BrandsSlider title="Top Brands" data={brandsData} />
        <SalesSectionContainer />
      </section>
      <section>
        <ItemsSlider
          data={popularItemsData.guitarAndBassesPopularItems}
          title="Guitars and Basses"
        />
        <SliderDescription descriptionData={description[0]} />
      </section>
      <section>
        <ItemsSlider
          data={popularItemsData.amplifiersPopularItems}
          title="Amplifiers"
        />
        <SliderDescription descriptionData={description[1]} />
      </section>
      <section>
        <ItemsSlider
          data={popularItemsData.drumsAndPercussionPopularItems}
          title="Drums and Percussion"
        />
        <SliderDescription descriptionData={description[2]} />
      </section>
      <section>
        <ItemsSlider
          data={popularItemsData.keyboardAndSynthPopularItems}
          title="Keyboards and Synth"
        />
        <SliderDescription descriptionData={description[3]} />
      </section>
      <Footer marginTop={"2rem"} />
    </HomePage>
  );
}

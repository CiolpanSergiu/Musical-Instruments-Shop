import styled from "styled-components";
import Slider from "react-slick";
import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import SubcategoryCardsContainer from "../../components/HomePageComponents/Containers/SubcategoryCardsContainer";

export default function GuitarsAndBassesPage() {
  return (
    <>
      <Navbar />
      <SubcategoryCardsContainer />
      <Footer />
    </>
  );
}

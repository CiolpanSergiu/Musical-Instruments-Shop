import styled from "styled-components";
import Navbar from "../../../../components/NavbarComponents/Navbar";
import Footer from "../../../../components/Footer/Footer";
import ShoppingPage from "../../../../components/HomePageComponents/Containers/ShoppingPage";
import StratocasterGuitarsData from "../../../../data/ShoppingPageItems/GuitarsAndBasses/ElectricGuitars/stratocasterModels.json";

const PageContentContiner = styled.div`
  width: 90%;
  margin: auto;
`;

export default function StratocasterGuitars() {
  return (
    <>
      <Navbar />
      <PageContentContiner>
        <ShoppingPage data={StratocasterGuitarsData} />
      </PageContentContiner>
      <Footer marginTop="5rem" />
    </>
  );
}

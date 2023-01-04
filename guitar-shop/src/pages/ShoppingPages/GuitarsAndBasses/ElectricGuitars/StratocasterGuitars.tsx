import styled from "styled-components";
import Navbar from "../../../../components/NavbarComponents/Navbar";
import Footer from "../../../../components/Footer/Footer";
import ShoppingPage from "../../../../components/HomePageComponents/Containers/ShoppingPage";

const PageContentContiner = styled.div``;

export default function StratocasterGuitars() {
  return (
    <>
      <Navbar />
      <PageContentContiner>
        <ShoppingPage />
      </PageContentContiner>
      <Footer marginTop="5rem" />
    </>
  );
}

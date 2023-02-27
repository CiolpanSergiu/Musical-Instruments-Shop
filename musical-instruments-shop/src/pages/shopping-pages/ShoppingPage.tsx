import styled from "styled-components";
import Navbar from "../../components/navbar-components/Navbar";
import Footer from "../../components/footer-components/Footer";
import ShoppingPageContainer from "../../components/home-page-components/containers/ShoppingPageContainer";
import { Product } from "../../types/commonTypes";
const PageContentContiner = styled.div`
  width: 90%;
  margin: auto;
`;

type Props = {
  pageTitle: string;
  itemsData: Product[];
};

export default function ShoppingPage({ pageTitle, itemsData }: Props) {
  return (
    <>
      <Navbar />
      <PageContentContiner>
        <ShoppingPageContainer itemsData={itemsData} pageTitle={pageTitle} />
      </PageContentContiner>
      <Footer marginTop="5rem" />
    </>
  );
}

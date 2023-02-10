import styled from "styled-components";
import Navbar from "../../components/navbar-components/Navbar";
import Footer from "../../components/footer-components/Footer";
import ShoppingPageContainer from "../../components/home-page-components/containers/ShoppingPageContainer";

const PageContentContiner = styled.div`
  width: 90%;
  margin: auto;
`;

type Props = {
  pageTitle: string;
  itemsData: {
    title: string;
    srcThumbnail: string;
    srcBig: string;
    alt: string;
    pageLink: string;
    price: number;
    avaible: boolean;
    rating: number;
    totalReviews: number;
  }[];
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

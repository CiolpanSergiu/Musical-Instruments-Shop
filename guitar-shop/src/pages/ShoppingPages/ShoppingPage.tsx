import styled from "styled-components";
import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import ShoppingPageContainer from "../../components/HomePageComponents/Containers/ShoppingPageContainer";

const PageContentContiner = styled.div`
  width: 90%;
  margin: auto;
`;

type Props = {
  pageTitle: string;
  itemsData: {
    title: string;
    src: string;
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

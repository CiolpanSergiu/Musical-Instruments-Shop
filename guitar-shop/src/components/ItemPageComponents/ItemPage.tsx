import styled from "styled-components";
import Navbar from "../NavbarComponents/Navbar";
import Footer from "../Footer/Footer";
import AddToCartBtn from "../Miscellaneous/AddToCartBtn";
import { generateStars } from "../../functions/generateStars";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  min-height: 100vh;
`;

const ImageAndCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProductName = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const StarsContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Price = styled.span`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  margin-bottom: 2rem;
  width: 300px;

  @media only screen and (min-width: 667px) {
    width: 400px;
  }

  @media only screen and (min-width: 992px) {
    width: 600px;
  }
`;

const CartRelatedDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemSpecificationsUl = styled.ul`
  padding: 1rem;
`;

const ItemSpecificationsLi = styled.li`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-left: 1rem;
`;

const HorizontalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

type Data = {
  title: string;
  srcBig: string;
  alt: string;
  price: number;
  rating: number;
  specifications: string[];
};

export default function ShopItemPage({
  title,
  srcBig,
  alt,
  price,
  rating,
  specifications,
}: Data) {
  return (
    <>
      <Navbar />
      <PageContainer>
        <ImageAndCartContainer>
          <Image src={srcBig} alt={alt}></Image>
          <CartRelatedDetails>
            <ProductName>{title}</ProductName>
            <StarsContainer>{generateStars(rating)}</StarsContainer>
            <HorizontalFlexContainer>
              <Price>{price} $</Price>
              <AddToCartBtn
                title={title}
                srcThumbnail={srcBig}
                alt={alt}
                price={price}
                havePrice={false}
                haveCartIcon={false}
                haveText={true}
              />
            </HorizontalFlexContainer>
            {specifications && (
              <ItemSpecificationsUl>
                {specifications.map((specification: string) => {
                  return (
                    <ItemSpecificationsLi>{specification}</ItemSpecificationsLi>
                  );
                })}
              </ItemSpecificationsUl>
            )}
          </CartRelatedDetails>
        </ImageAndCartContainer>
      </PageContainer>
      <Footer />
    </>
  );
}

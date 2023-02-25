import styled from "styled-components";
import Navbar from "../navbar-components/Navbar";
import Footer from "../footer-components/Footer";
import AddToCartBtn from "../miscellaneous/AddToCartBtn";
import { generateStars } from "../../functions/generateStars";
import { nanoid } from "nanoid";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
`;

const ProductName = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 662px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
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
  width: 250px;

  @media only screen and (min-width: 768px) {
    margin-right: 3rem;
    width: 300px;
  }

  @media only screen and (min-width: 992px) {
    margin-right: 5rem;
    width: 400px;
  }

  @media only screen and (min-width: 1280px) {
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
  margin-top: 2rem;
`;

const ItemSpecificationsLi = styled.li`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-left: 1rem;
`;

type Data = {
  title: string;
  srcBig: string;
  alt: string;
  price: number;
  rating: number;
  specifications: string[];
};

export default function ItemPage({
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
        <Image src={srcBig} alt={alt}></Image>
        <CartRelatedDetails>
          <ProductName>{title}</ProductName>
          <StarsContainer>{generateStars(rating)}</StarsContainer>
          <Price>{price} $</Price>
          <AddToCartBtn
            title={title}
            srcBig={srcBig}
            srcSmall={srcBig}
            alt={alt}
            price={price}
            havePrice={false}
            haveCartIcon={false}
            haveText={true}
          />
          {specifications && (
            <ItemSpecificationsUl>
              {specifications.map((specification: string) => {
                return (
                  <ItemSpecificationsLi key={nanoid()}>
                    {specification}
                  </ItemSpecificationsLi>
                );
              })}
            </ItemSpecificationsUl>
          )}
        </CartRelatedDetails>
      </PageContainer>
      <Footer />
    </>
  );
}

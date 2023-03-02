import styled from "styled-components";
import { Link } from "react-router-dom";
import AddToCartBtn from "../../miscellaneous/AddToCartBtn";
import { generateStars } from "../../../functions/generateStars";
import createLink from "../../../functions/string-formatting-functions/createLink";

const StyledLink = styled(Link)`
  color: #3d4552;
  text-decoration: none;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-rows: 3fr 1fr .25fr .5fr;
}
`;

const CardContainer = styled.div`
  border: solid gray 2px;
  border-radius: 9px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 17rem;
  margin: 1rem;

  @media only screen and (max-width: 662px) {
    width: 75%;
    max-width: 17rem;
  }
`;

const Img = styled.img`
  padding: 1rem 0;
  max-width: 220px;
`;

const ItemTitle = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
    font-weight: 500;
  }

  @media only screen and (max-width: 662px) {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const TotalReviewsSpan = styled.span`
  color: black;
  font-size: 1.25rem;
  margin-left: 0.5rem;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  color: lightskyblue;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  color: lightskyblue;
  padding: 0.5rem 0;
  font-size: 1.5rem;
`;

type Props = {
  srcBig: string;
  srcSmall: string;
  alt: string;
  title: string;
  rating: number;
  price: number;
  totalReviews: number;
};

export default function ShoppingPageCard({
  srcBig,
  srcSmall,
  alt,
  title,
  rating,
  price,
  totalReviews,
}: Props) {
  const pageLink = createLink(title);

  return (
    <CardContainer>
      <StyledLink to={pageLink}>
        {/* srcSmall it's the same as srcBig until i convert bigger images into smaller ones */}
        <Img src={srcSmall} alt={alt} />
        <ItemTitle>{title}</ItemTitle>
        <StarsContainer>
          {generateStars(rating)}
          <TotalReviewsSpan>({totalReviews})</TotalReviewsSpan>
        </StarsContainer>
      </StyledLink>
      <AddToCartBtn
        title={title}
        srcSmall={srcBig}
        srcBig={srcBig}
        alt={alt}
        price={price}
        havePrice={true}
        haveCartIcon={true}
        haveText={false}
      />
    </CardContainer>
  );
}

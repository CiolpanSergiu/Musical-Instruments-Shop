import styled from "styled-components";
import { Link } from "react-router-dom";
import AddToCartBtn from "../../Miscellaneous/AddToCartBtn";
import { generateStars } from "../../../functions/generateStars";

const StyledLink = styled(Link)`
  color: #3d4552;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`;

const CardContainer = styled.div`
  border: solid gray 2px;
  border-radius: 9px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.img`
  padding: 1rem 0;
`;

const ItemTitle = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const StarsContainer = styled.div`
  color: lightskyblue;
  padding: 0.5rem 0;
  margin: 1rem;
  display: flex;
  justify-content: center;
  color: lightskyblue;
  padding: 0.5rem 0;
  font-size: 1.5rem;
`;

type Props = {
  srcThumbnail: string;
  alt: string;
  title: string;
  pageLink: string;
  rating: number;
  price: number;
};

export default function ShoppingPageCard({
  srcThumbnail,
  alt,
  title,
  pageLink,
  rating,
  price,
}: Props) {
  return (
    <CardContainer>
      <StyledLink to={pageLink}>
        <Img src={srcThumbnail} alt={alt} />
        <ItemTitle>{title}</ItemTitle>
        <StarsContainer>{generateStars(rating)}</StarsContainer>
      </StyledLink>
      <AddToCartBtn
        title={title}
        srcThumbnail={srcThumbnail}
        alt={alt}
        price={price}
        havePrice={true}
        haveCartIcon={true}
        haveText={false}
      />
    </CardContainer>
  );
}

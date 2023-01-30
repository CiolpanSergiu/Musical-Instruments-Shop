import { Link } from "react-router-dom";
import styled from "styled-components";
import { generateStars } from "../../functions/generateStars";

type Props = {
  src: string;
  alt: string;
  title: string;
  pageLink: string;
  price: number;
  rating: number;
  totalReviews: number;
};

const CardLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: gray;
  margin: 0 1rem;
  box-shadow: 0px 3px 10px 2.5px lightgray;
  border: solid gray 1px;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  margin: 2rem auto;
  overflow: hidden;
  transition: 0.1s all ease-in-out;
  width: 128px;
  height: 128px;

  &:hover {
    transform: scale(1.2);
  }
`;

const CardTitle = styled.h5`
  font-size: 1.1rem;
  padding-bottom: 1rem;
  text-align: left;
  text-align: center;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
`;

const TotalReviews = styled.span`
  padding-left: 0.5rem;
  font-weight: bold;
`;

export default function SliderCard({
  src,
  alt,
  title,
  pageLink,
  price,
  rating,
  totalReviews,
}: Props) {
  return (
    <CardLink to={pageLink}>
      <CardImage className="slider-card-img" src={src} alt={alt} />
      <StarsContainer>
        {generateStars(rating)}
        <TotalReviews>{totalReviews}</TotalReviews>
      </StarsContainer>
      <CardTitle>{title}</CardTitle>
      <span className="slider-card-price">{price}$</span>
    </CardLink>
  );
}

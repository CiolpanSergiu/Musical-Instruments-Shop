import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styled from "styled-components";

type Props = {
  imgSrc: string;
  alt: string;
  title: string;
  pageLink: string;
  width: number;
  height: number;
};

const CardLink = styled(Link)`
  text-decoration: none;
  color: gray;
  margin: 0 1rem;
  box-shadow: 0px 3px 10px 2.5px lightgray;
  border: solid gray 1px;
  border-radius: 5px;
  padding: 1rem 2rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardImage = styled.img`
  margin: 2rem auto;
  overflow: hidden;
  transition: 0.1s all ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const CardTitle = styled.h5`
  font-size: 1.1rem;
  padding-bottom: 1rem;
  text-align: left;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const Star = styled.span`
  color: rgb(255, 187, 0);
`;

const TotalReviews = styled.span`
  padding-left: 0.5rem;
  font-weight: bold;
`;

export default function SliderCard({
  imgSrc,
  alt,
  title,
  pageLink,
  width,
  height,
}: Props) {
  return (
    <CardLink to={pageLink}>
      <CardImage
        className="slider-card-img"
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
      />
      <StarsContainer>
        <Star>
          <BsStarFill />
        </Star>
        <Star>
          <BsStarFill />
        </Star>
        <Star>
          <BsStarFill />
        </Star>
        <Star>
          <BsStarFill />
        </Star>
        <Star>
          <BsStarFill />
        </Star>
        <TotalReviews>100</TotalReviews>
      </StarsContainer>
      <CardTitle>{title}</CardTitle>
      <span className="slider-card-price">Price</span>
    </CardLink>
  );
}

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styled from "styled-components";

const Star = styled.span`
  color: rgb(255, 187, 0);
`;

export function generateStars(ratingNumber: number) {
  const starsContainer = [];
  for (let i = ratingNumber; i > 0; i--) {
    if (i < 1 && i >= 0.5) {
      starsContainer.push(
        <Star>
          <BsStarHalf />
        </Star>
      );
    } else if (i >= 1) {
      starsContainer.push(
        <Star>
          <BsStarFill />
        </Star>
      );
    } else {
      starsContainer.push(
        <Star>
          <BsStar />
        </Star>
      );
    }
  }

  while (starsContainer.length !== 5) {
    starsContainer.push(
      <Star>
        <BsStar />
      </Star>
    );
  }

  return starsContainer;
}

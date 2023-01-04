import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

const StyledStarsContainer = styled.div`
  display: flex;
  color: lightskyblue;
  padding: 0.5rem 0;
`;

export default function StarsContainer() {
  return (
    <>
      <StyledStarsContainer>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </StyledStarsContainer>
    </>
  );
}

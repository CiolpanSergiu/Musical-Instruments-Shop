import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 3rem;
  text-align: center;
`;

const MainHeader = styled.h1`
  font-weight: 500;
  margin-bottom: 2rem;
  max-width: 60%;
`;

const StyledP = styled.p`
  padding: 0.5rem;
`;

const Img = styled.img`
  margin-bottom: 2rem;
  max-width: 40%;
  border-radius: 10px;
`;

export default function NoPageFound() {
  return (
    <Container>
      <Img src="/not_found_img.jpg" />
      <MainHeader>
        OOPS! It seems that the page you are trying to acces does not exist or
        it's access has been restricted.{" "}
      </MainHeader>
      <StyledP>Please make sure that the address you typed is correct</StyledP>
      <StyledP>
        or you can go back to <Link to="/">our homepage</Link>
      </StyledP>
    </Container>
  );
}

import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  src: string;
  alt: string;
  title: string;
  pageLink: string;
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding-top: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: underline transparent 2px;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: lightskyblue;
    text-decoration: underline lightskyblue 2px;
  }
`;

const Header = styled.h3`
  text-align: center;
  padding: 0 2rem;
`;

const Img = styled.img`
  width: 120px;
  heigt: 120px;
`;

export default function SubcategoryCard({ src, alt, title, pageLink }: Props) {
  return (
    <StyledLink to={pageLink}>
      <Container>
        <Img src={src} alt={alt} />
        <Header>{title}</Header>
      </Container>
    </StyledLink>
  );
}

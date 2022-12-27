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
  text-decoration: none;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: lightskyblue;
  }
`;

const Header = styled.h3`
  text-align: center;
  padding: 0 2rem;
`;

export default function SubcategoryCard({ src, alt, title, pageLink }: Props) {
  console.log(src);

  return (
    <StyledLink to="">
      <Container>
        <img src={src} alt={alt} />
        <Header>{title}</Header>
      </Container>
    </StyledLink>
  );
}

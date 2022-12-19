import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: solid gray 1px;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15rem;
`;

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 2rem;

  @media only screen and(min-width: 480px) {
    width: 125px;
    height: 125px;
  }

  @media only screen and(min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const CardTitle = styled.h5`
  font-size: 1.1rem;
  padding-bottom: 1rem;
`;

type Props = {
  src: string;
  alt: string;
  title: string;
  pageLink: string;
};

export default function GuitarSliderCard({ src, alt, title, pageLink }: Props) {
  return (
    <Card>
      <StyledLink
        to={pageLink}
        style={{ textDecoration: "none", color: "black" }}
      >
        <CardImage src={src} alt={alt} />
        <CardTitle>{title}</CardTitle>
      </StyledLink>
    </Card>
  );
}

import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  src: string;
  alt: string;
};

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid gray 1px;
  border-radius: 5px;
  margin: 1rem;
`;

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  padding: 0.5px;

  @media only screen and(min-width: 480px) {
    width: 125px;
    height: 125px;
  }

  @media only screen and(min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export default function TopBrandsCard({ src, alt }: Props) {
  return (
    <CardContainer>
      <Link to="">
        <CardImage src={src} alt={alt} />
      </Link>
    </CardContainer>
  );
}

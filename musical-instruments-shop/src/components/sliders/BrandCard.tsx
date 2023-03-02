import { Link } from "react-router-dom";
import styled from "styled-components";
import createLink from "../../functions/string-formatting-functions/createLink";

type Props = {
  src: string;
  alt: string;
  title: string;
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid lightgray 2px;
  border-radius: 5px;
  margin: 0.5rem;
  transition: 0.3s all ease-in-out;

  &:hover {
    border: solid gray 2px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 100px;
  height: 100%;
  padding: 0.5rem;

  @media only screen and (min-width: 992px) {
    max-height: 125px;
  }
`;

export default function TopBrandsCard({ src, alt, title }: Props) {
  return (
    <CardContainer>
      <Link to={createLink(title)}>
        <CardImage src={src} alt={alt} title={title} />
      </Link>
    </CardContainer>
  );
}

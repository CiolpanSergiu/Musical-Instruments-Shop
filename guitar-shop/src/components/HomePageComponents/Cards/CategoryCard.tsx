import { Link } from "react-router-dom";
import styled from "styled-components";

type CategoryProps = {
  imgSrc: string;
  imgAlt: string;
  header: string;
  pageLink: string;
};

const Card = styled.div`
  display: flex;
    align-items: center;
    border: solid rgb(235, 235, 235) 2px;
    border-radius: 5px;
    padding: 0.5rem;
    box-shadow: 0px 2.5px 10px 2.5px lightgray;
    cursor: pointer;
    height: 100%;

    &:hover h3 {
      color: lightskyblue;
    }

    h3 {
      margin-left: 1rem;
      font-size: 0.9rem;
      transition: 0.2s all ease-in-out;
    }
  }

  @media only screen and (min-width: 992px) {
    h3 {
        font-size: 1.25rem;
      }
  }
  `;

export default function CategoryCard({
  imgSrc,
  imgAlt,
  header,
  pageLink,
}: CategoryProps) {
  return (
    <Link to={pageLink} style={{ textDecoration: "none", color: "black" }}>
      <Card>
        <img src={imgSrc} alt={imgAlt} />
        <h3>{header}</h3>
      </Card>
    </Link>
  );
}

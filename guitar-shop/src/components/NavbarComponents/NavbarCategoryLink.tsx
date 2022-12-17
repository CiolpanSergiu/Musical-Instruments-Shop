import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  handleClick: MouseEventHandler<HTMLAnchorElement>;
  pageLink: string;
  categoryName: string;
};

export default function NavbarCategoryLink({
  handleClick,
  pageLink,
  categoryName,
}: Props) {
  const CategoryLink = styled(Link)`
    text-align: center;
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    padding: 1rem 0;
    display: block;
    width: 100%;
    transition: 0.3s all ease-in-out;

    &:hover {
      background-color: #2c313a;
    }
  `;

  return (
    <CategoryLink
      onClick={handleClick}
      to={pageLink}
      className="navbar-category-link"
    >
      {categoryName}
    </CategoryLink>
  );
}

import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeSwitch from "../Miscellaneous/ThemeSwitch";
import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";

type Props = {
  handleClick: MouseEventHandler<HTMLAnchorElement>;
  pageLink: string;
  categoryName: string;
};

type Theme = {
  isDark: boolean;
};

const CategoryLink = styled(Link)<Theme>`
  text-align: center;
  text-decoration: none;
  color: ${(props) => (props.isDark ? "white" : "#3d4552")};
  font-size: 1.2rem;
  padding: 1rem 0;
  display: block;
  width: 100%;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isDark ? "#2c313a" : "white")};
    color: ${(props) => (props.isDark ? "white" : "#4287f5")};
  }
`;

export default function NavbarCategoryLink({
  handleClick,
  pageLink,
  categoryName,
}: Props) {
  const { darkTheme }: any = useContext(ThemeContext);

  return (
    <CategoryLink onClick={handleClick} to={pageLink} isDark={darkTheme}>
      {categoryName}
    </CategoryLink>
  );
}

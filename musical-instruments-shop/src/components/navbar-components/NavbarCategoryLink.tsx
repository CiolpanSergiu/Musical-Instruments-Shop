import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";

type Props = {
  handleClick: () => void;
  pageLink: string;
  categoryName: string;
};

const CategoryLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
  font-size: 1.2rem;
  padding: 1rem 2rem;
  display: block;
  width: 100%;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.hoverBg};
    color: ${(props) => props.theme.hoverColor};
  }
`;

const darkTheme = {
  color: "white",
  hoverBg: "#292b2e",
  hoverColor: "lightskyblue",
};

const lightTheme = {
  color: "#3d4552",
  hoverColor: "lightskyblue",
};

export default function NavbarCategoryLink({
  handleClick,
  pageLink,
  categoryName,
}: Props) {
  const { isDark }: any = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CategoryLink onClick={handleClick} to={pageLink}>
        {categoryName}
      </CategoryLink>
    </ThemeProvider>
  );
}

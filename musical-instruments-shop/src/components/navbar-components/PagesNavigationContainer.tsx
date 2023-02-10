import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";

const StyledRouterLink = styled(Link)`
  @media only screen and (min-width: 768px) {
    text-decoration: none;
    color: ${(props) => props.theme.color};
    margin: 0 1rem;
    font-size: 1.2rem;
    transition: 0.3s all ease-in-out;
    text-decoration: none;
    position: relative;

    ::after {
      content: "";
      width: 0%;
      height: 3px;
      background-color: lightskyblue;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.3s all ease-in-out;
    }

    :hover::after {
      width: 100%;
    }
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.3rem;
    margin: 0 1.5rem;
  }
`;

const Container = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;

const darkTheme = {
  bgColor: "#3d4552",
  color: "white",
};

const lightTheme = {
  bgColor: "white",
  color: "#3d4552",
};

export default function PagesNavigationContainer() {
  const { isDark }: any = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <StyledRouterLink to="/account">Account</StyledRouterLink>
        <StyledRouterLink to="/">Home</StyledRouterLink>
        <StyledRouterLink to="/contact">Contact</StyledRouterLink>
      </Container>
    </ThemeProvider>
  );
}

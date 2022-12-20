import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";

type Theme = {
  isdark: boolean;
};

const StyledRouterLink = styled(Link)<Theme>`
  @media only screen and (min-width: 768px) {
    text-decoration: none;
    color: ${(props) => (props.isdark ? "white" : "black")};
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

export default function PagesNavigationContainer() {
  const { darkTheme }: any = useContext(ThemeContext);

  return (
    <Container>
      <StyledRouterLink to="/account" isdark={darkTheme}>
        Account
      </StyledRouterLink>
      <StyledRouterLink to="/" isdark={darkTheme}>
        Home
      </StyledRouterLink>
      <StyledRouterLink to="/contact" isdark={darkTheme}>
        Contact
      </StyledRouterLink>
    </Container>
  );
}

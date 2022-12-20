import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";
import styled from "styled-components";

type Theme = {
  isdark: boolean;
};

const Logo = styled.h3<Theme>`
  color: ${(props) => (props.isdark ? "white" : "black")};
  transition: 0.3s;
  margin: 1rem;
`;

export default function WebsiteLogo() {
  const { darkTheme }: any = useContext(ThemeContext);

  return <Logo isdark={darkTheme}>SergiuGuitars</Logo>;
}

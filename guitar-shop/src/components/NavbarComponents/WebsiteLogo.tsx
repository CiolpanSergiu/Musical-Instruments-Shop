import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Logo = styled.h3`
  color: ${(props) => props.theme.color};
  transition: 0.3s;
  margin: 1rem;
`;

const darkTheme = {
  bgColor: "#3d4552",
  color: "white",
};

const lightTheme = {
  bgColor: "white",
  color: "#3d4552",
};

export default function WebsiteLogo() {
  const { isDark }: any = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Logo>SergiuGuitars</Logo>
    </ThemeProvider>
  );
}

import ThemeContext from "../../context/ThemeProvider";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import themes from "../../colors-and-themes/themes";

const Logo = styled.h3`
  color: ${(props) => props.theme.color};
  transition: 0.3s;
  margin: 1rem;
`;

export default function WebsiteLogo() {
  const { isDark }: any = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? themes.darkTheme : themes.lightTheme}>
      <Logo>SergiuGuitars</Logo>
    </ThemeProvider>
  );
}

import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";
import { ThemeProvider } from "styled-components";
import themes from "../../colors-and-themes/themes";

const Switcher = styled.span`
  width: 40px;
  background-color: ${(props) => props.theme.switchContainerBg};
  border: solid black 1px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.theme.justifyContent};
  padding: 2.5px;
  transition: 0.3s;
  cursor: pointer;
`;

const Dot = styled.span`
  width: 15px;
  height: 15px;
  display: flex;
  background-color: ${(props) => props.theme.dotBgColor};
  transition: 0.3s;
  border-radius: 50%;
`;

export default function ThemeSwitch() {
  const { isDark, setIsDark }: any = useContext(ThemeContext);

  function toggleTheme() {
    setIsDark((prevState: boolean) => !prevState);
  }

  return (
    <ThemeProvider theme={isDark ? themes.darkTheme : themes.lightTheme}>
      <Switcher onClick={toggleTheme}>
        <Dot></Dot>
      </Switcher>
    </ThemeProvider>
  );
}

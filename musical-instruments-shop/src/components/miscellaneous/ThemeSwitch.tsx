import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";
import { ThemeProvider } from "styled-components";

const Switcher = styled.span`
  width: 40px;
  background-color: ${(props) => props.theme.bgColor};
  border: solid black 1px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.theme.justifyContent};
  padding: 2.5px;
  transition: 0.3s;
`;

const Dot = styled.span`
  width: 15px;
  height: 15px;
  display: flex;
  background-color: ${(props) => props.theme.dotBgColor};
  transition: 0.3s;
  border-radius: 50%;
`;

const darkTheme = {
  bgColor: "white",
  dotBgColor: "#3d4552",
  justifyContent: "flex-start",
};

const lightTheme = {
  bgColor: "#3d4552",
  dotBgColor: "white",
  justifyContent: "flex-end",
};

export default function ThemeSwitch() {
  const { isDark, setIsDark }: any = useContext(ThemeContext);

  function toggleTheme() {
    setIsDark((prevState: boolean) => !prevState);
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Switcher onClick={toggleTheme}>
        <Dot></Dot>
      </Switcher>
    </ThemeProvider>
  );
}

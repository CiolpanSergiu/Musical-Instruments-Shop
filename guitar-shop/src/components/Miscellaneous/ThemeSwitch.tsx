import styled from "styled-components";
import { useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemeProvider";

type ThemeType = {
  isDark: boolean;
};

const Switcher = styled.span<ThemeType>`
  width: 40px;
  background-color: ${(props) => (props.isDark ? "white" : "black")};
  border: solid black 1px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isDark ? "flex-start" : "flex-end")};
  padding: 2.5px;
  transition: 0.3s;
`;

const FirstDot = styled.span<ThemeType>`
  width: 15px;
  height: 15px;
  display: flex;
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  transition: 0.3s;
  border-radius: 50%;
`;

export default function ThemeSwitch() {
  const { darkTheme, setDarkTheme }: any = useContext(ThemeContext);

  function toggleTheme() {
    setDarkTheme((prevState: boolean) => !prevState);
  }

  useEffect(() => {
    localStorage.setItem("theme", darkTheme);
  }, [darkTheme]);

  return (
    <Switcher onClick={toggleTheme} isDark={darkTheme}>
      <FirstDot isDark={darkTheme}></FirstDot>
    </Switcher>
  );
}

import styled from "styled-components";
import { useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemeProvider";

type ThemeType = {
  isdark: boolean;
};

const Switcher = styled.span<ThemeType>`
  width: 40px;
  background-color: ${(props) => (props.isdark ? "white" : "black")};
  border: solid black 1px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isdark ? "flex-start" : "flex-end")};
  padding: 2.5px;
  transition: 0.3s;
`;

const FirstDot = styled.span<ThemeType>`
  width: 15px;
  height: 15px;
  display: flex;
  background-color: ${(props) => (props.isdark ? "black" : "white")};
  transition: 0.3s;
  border-radius: 50%;
`;

export default function ThemeSwitch() {
  const { darkTheme, setDarkTheme }: any = useContext(ThemeContext);

  function toggleTheme() {
    setDarkTheme((prevState: boolean) => !prevState);
  }

  return (
    <Switcher onClick={toggleTheme} isdark={darkTheme}>
      <FirstDot isdark={darkTheme}></FirstDot>
    </Switcher>
  );
}

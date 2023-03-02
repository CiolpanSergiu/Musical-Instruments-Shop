import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";

type StyledCompProps = {
  isDarkMode: string;
};

const StyledFormOverlay = styled.div<StyledCompProps>`
  background: url("/form_bg.jpg") no-repeat center;
  background-size: cover;
  opacity: ${(props) => props.isDarkMode};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export default function FormOverlay() {
  const { isDark }: any = useContext(ThemeContext);

  return <StyledFormOverlay isDarkMode={isDark ? "0.7" : "0.9"} />;
}

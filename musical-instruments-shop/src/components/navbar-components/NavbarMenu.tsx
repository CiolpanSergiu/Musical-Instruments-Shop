import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import themes from "../../colors-and-themes/themes";

type MenuProps = {
  isOpen: boolean;
};

// i don't know why this work
const Menu = styled.div<MenuProps>`
  cursor: pointer;
  transition: 0.3s;

  .bar:nth-child(1) {
    transform: translateY(${(props) => (props.isOpen ? "7px" : "")})
      rotate(${(props) => (props.isOpen ? "-45deg" : "0")});
  }
  .bar:nth-child(2) {
    opacity: ${(props) => (props.isOpen ? "0" : "1")};
  }
  .bar:nth-child(3) {
    transform: translateY(${(props) => (props.isOpen ? "-7px" : "")})
      rotate(${(props) => (props.isOpen ? "45deg" : "0")});
  }
`;

const Bar = styled.span`
  width: 2.5rem;
  height: 3px;
  background-color: ${(props) => props.theme.color};
  margin: 0.1rem 0;
  border-radius: 5px;
  transition: 0.2s all ease-in-out;
  display: flex;
  margin: 0.25rem 0;
`;

type Props = {
  handleClick: () => void;
  isOpen: boolean;
};

export default function NavbarMenu({ handleClick, isOpen }: Props) {
  const { isDark }: any = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? themes.darkTheme : themes.lightTheme}>
      <Menu isOpen={isOpen} onClick={handleClick}>
        <Bar className="bar"></Bar>
        <Bar className="bar"></Bar>
        <Bar className="bar"></Bar>
      </Menu>
    </ThemeProvider>
  );
}

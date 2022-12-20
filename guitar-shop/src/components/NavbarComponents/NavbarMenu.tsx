import "../../styles/NavbarStyle/NavbarMenuStyle.scss";
import { MouseEventHandler } from "react";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

type Props = {
  handleClick: MouseEventHandler<HTMLDivElement>;
  menuClass: string;
};

const Bar = styled.span`
  width: 2rem;
  height: 3px;
  background-color: ${(props) => props.theme.bgColor};
  margin: 0.1rem 0;
  border-radius: 5px;
  transition: 0.2s all ease-in-out;
`;

const darkTheme = {
  bgColor: "white",
};

const lightTheme = {
  bgColor: "#3d4552",
};

export default function NavbarMenu({ handleClick, menuClass }: Props) {
  const { isDark }: any = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div className={menuClass} onClick={handleClick}>
        <Bar className="bar"></Bar>
        <Bar className="bar"></Bar>
        <Bar className="bar"></Bar>
      </div>
    </ThemeProvider>
  );
}

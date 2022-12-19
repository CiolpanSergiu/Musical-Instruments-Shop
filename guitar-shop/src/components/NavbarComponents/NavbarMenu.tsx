import "../../styles/NavbarStyle/NavbarMenuStyle.scss";
import { MouseEventHandler } from "react";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeProvider";
import styled from "styled-components";

type Props = {
  handleClick: MouseEventHandler<HTMLDivElement>;
  menuClass: string;
};

type Theme = {
  isDark: boolean;
};

const Bar = styled.span<Theme>`
  width: 2rem;
  height: 3px;
  background-color: ${(props) => (props.isDark ? "white" : "black")};
  margin: 0.1rem 0;
  border-radius: 5px;
  transition: 0.2s all ease-in-out;
`;

export default function NavbarMenu({ handleClick, menuClass }: Props) {
  const { darkTheme }: any = useContext(ThemeContext);

  return (
    <div className={menuClass} onClick={handleClick}>
      <Bar className="bar" isDark={darkTheme}></Bar>
      <Bar className="bar" isDark={darkTheme}></Bar>
      <Bar className="bar" isDark={darkTheme}></Bar>
    </div>
  );
}

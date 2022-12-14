import "../styles/NavbarMenuStyle.scss";
import { MouseEventHandler } from "react";

type Props = {
  handleClick: MouseEventHandler<HTMLDivElement>;
  menuClass: string;
};

export default function NavbarMenu({ handleClick, menuClass }: Props) {
  return (
    <div className={menuClass} onClick={handleClick}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}

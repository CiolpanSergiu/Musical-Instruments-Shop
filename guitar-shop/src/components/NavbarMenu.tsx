import "../styles/NavbarMenuStyle.scss";

export default function NavbarMenu({ handleClick }: any) {
  return (
    <div className="bars-menu" onClick={handleClick}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}

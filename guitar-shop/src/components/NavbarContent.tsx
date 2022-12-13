import { Link } from "react-router-dom";
import "../styles/NavbarContentStyle.scss";
import NavbarMenu from "./NavbarMenu";

export default function NavbarContent() {
  return (
    <div className="navbar-content">
      <NavbarMenu />
      <ul>
        <li className="content-item">
          <Link to="">Guitars and Basses</Link>
        </li>
        <li className="content-item">
          <Link to="">Drums and Percussion</Link>
        </li>
        <li className="content-item">
          <Link to="">Guitars and Basses Softwares </Link>
        </li>
        <li className="content-item">
          <Link to="">Effect Pedals</Link>
        </li>
        <li className="content-item">
          <Link to="">Accesories</Link>
        </li>
        <li className="content-item">
          <Link to="">Keyboards and Synth</Link>
        </li>
        <li className="content-item">
          <Link to="">Microphones</Link>
        </li>
        <li className="content-item">
          <Link to="">PA System Equipments</Link>
        </li>
        <li className="content-item">
          <Link to="">Studio and Recording Equipment</Link>
        </li>
      </ul>
    </div>
  );
}

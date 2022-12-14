import { BsSearch } from "react-icons/bs";
import "../../styles/NavbarStyle/NavbarSearchBoxStyle.scss";

export default function NavbarSearchBox() {
  return (
    <form className="search-box">
      <span className="search-box__search-icon nav-icon">
        <BsSearch />
      </span>
      <input
        className="search-box__input"
        type="text"
        placeholder="Searching something specific?"
      />
      <button className="search-box__button">Search</button>
    </form>
  );
}

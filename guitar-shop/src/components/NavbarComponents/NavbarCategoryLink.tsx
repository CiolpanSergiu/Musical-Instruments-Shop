import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

type Props = {
  handleClick: MouseEventHandler<HTMLAnchorElement>;
  pageLink: string;
  categoryName: string;
};

export default function NavbarCategoryLink({
  handleClick,
  pageLink,
  categoryName,
}: Props) {
  return (
    <Link onClick={handleClick} to={pageLink} className="navbar-category-link">
      {categoryName}
    </Link>
  );
}

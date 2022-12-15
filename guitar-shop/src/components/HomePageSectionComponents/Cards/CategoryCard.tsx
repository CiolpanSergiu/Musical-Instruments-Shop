import { Link } from "react-router-dom";

type CategoryProps = {
  imgSrc: string;
  imgAlt: string;
  header: string;
  pageLink: string;
};

export default function CategoryCard({
  imgSrc,
  imgAlt,
  header,
  pageLink,
}: CategoryProps) {
  return (
    <Link to={pageLink} className="category-link">
      <div className="category-card">
        <img src={imgSrc} alt={imgAlt} />
        <h3>{header}</h3>
      </div>
    </Link>
  );
}

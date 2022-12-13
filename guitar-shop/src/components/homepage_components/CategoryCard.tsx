import react from "react";

type CategoryProps = {
  imgSrc: string;
  imgAlt: string;
  header: string;
};

export default function CategoryCard({
  imgSrc,
  imgAlt,
  header,
}: CategoryProps) {
  return (
    <div className="category-card">
      <img src={imgSrc} alt={imgAlt} />
      <h3>{header}</h3>
    </div>
  );
}

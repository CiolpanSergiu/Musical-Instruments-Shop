import { useState } from "react";
import itemsCategories from "../../../data/category.json";
import CategoryCard from "../Cards/CategoryCard";
import { nanoid } from "nanoid";

export default function CategoryCardsContainer() {
  const [categories, setCategories] = useState(itemsCategories);

  const categoryCard = categories.map((categoryCardData) => (
    <CategoryCard
      key={nanoid()}
      imgSrc={categoryCardData.src}
      imgAlt={categoryCardData.alt}
      header={categoryCardData.title}
      pageLink={categoryCardData.pageLink}
    />
  ));

  return (
    <section>
      <h1>Home</h1>
      <h2 className="home-page__category-header">Our categories</h2>
      <div className="category-container">{categoryCard}</div>
    </section>
  );
}

import { useState } from "react";
import itemsCategories from "../data/category.json";
import CategoryCard from "../components/CategoryCard";
import "../styles/HomeStyle.scss";
import Navbar from "../components/Navbar";

export default function Home() {
  const [categories, setCategories] = useState(itemsCategories);

  const categoryCard = categories.map((categoryCardData) => (
    <CategoryCard
      imgSrc={categoryCardData.src}
      imgAlt={categoryCardData.alt}
      header={categoryCardData.title}
    />
  ));

  return (
    <div className="home-page">
      <Navbar />
      <h1>Home</h1>
      <h2 className="home-page__category-header">Our categories</h2>
      <div className="category-container">{categoryCard}</div>
    </div>
  );
}

import { useState } from "react";
import itemsCategories from "../data/category.json";
import CategoryCard from "../components/CategoryCard";
import "../styles/HomeStyle.scss";
import Navbar from "../components/NavbarComponents/Navbar";
import { nanoid } from "nanoid";
import DailyRecommendationsSlider from "../components/Sliders/DailyRecommendationsSlider";
import TopBrandsSlider from "../components/Sliders/TopBrandsSlider";

export default function Home() {
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
    <div className="home-page">
      <Navbar />
      <section>
        <h1>Home</h1>
        <h2 className="home-page__category-header">Our categories</h2>
        <div className="category-container">{categoryCard}</div>
      </section>
      <DailyRecommendationsSlider />
      <TopBrandsSlider />
    </div>
  );
}

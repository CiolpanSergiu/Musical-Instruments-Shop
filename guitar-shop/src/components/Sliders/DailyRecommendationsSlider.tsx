import data from "../../data/category.json";
import SliderCard from "./SliderCard";
import { nanoid } from "nanoid";
import "../../styles/SliderStyles/SliderStyle.scss";

export default function DailyRecommendationsSlider() {
  const sliderCards = data.map((item) => (
    <SliderCard
      key={nanoid()}
      imgSrc={item.src}
      alt={item.alt}
      title={item.title}
      pageLink={item.pageLink}
    />
  ));

  return (
    <div style={{ height: "100%", maxWidth: "80vw" }}>
      <h2> Daily Recommendations </h2>
      <div className="slider" style={{ display: "flex" }}>
        <button
          style={{
            width: "100px",
            height: "50px",
            borderRadius: "5px",
            transform: "translateY(200%)",
          }}
        >
          Previous
        </button>
        <div
          className="cards-container"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            overflow: "hidden",
            height: "100%",
          }}
        >
          {sliderCards}
        </div>
        <button
          style={{
            width: "100px",
            height: "50px",
            borderRadius: "5px",
            transform: "translateY(200%)",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

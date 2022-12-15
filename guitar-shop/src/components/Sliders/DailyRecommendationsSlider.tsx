import data from "../../data/category.json";
import SliderCard from "./SliderCard";
import { nanoid } from "nanoid";
import "../../styles/SliderStyles/SliderStyle.scss";
import Slider from "react-slick";
import { Component } from "react";

const sliderCards = data.map((item) => (
  <SliderCard
    key={nanoid()}
    imgSrc={item.src}
    alt={item.alt}
    title={item.title}
    pageLink={item.pageLink}
  />
));

//class component because it is the only way to make responsive property work
export default class DailyRecommendationsSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "linear",
          },
        },
      ],
    };
    return (
      <div style={{ width: "80vw" }}>
        <h2>Popular Items</h2>
        <Slider {...settings}>{sliderCards}</Slider>
      </div>
    );
  }
}

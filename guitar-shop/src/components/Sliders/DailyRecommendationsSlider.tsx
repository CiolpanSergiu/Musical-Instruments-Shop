import data from "../../data/category.json";
import DailyRecommendationCard from "./DailyRecommendationCard";
import { nanoid } from "nanoid";
import "../../styles/SliderStyles/SliderStyle.scss";
import Slider from "react-slick";
import { Component } from "react";
import styled from "styled-components";

const sliderCards = data.map((item) => (
  <DailyRecommendationCard
    key={nanoid()}
    imgSrc={item.src}
    alt={item.alt}
    title={item.title}
    pageLink={item.pageLink}
    width={64}
    height={64}
  />
));

type Props = {
  className: string;
  style: {};
  onClick: unknown;
};

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

const Header2 = styled.h2`
  margin: 2rem;
  text-decoration: underline lightskyblue 3px;
`;

//class component because it is the only way to make responsive property work
export default class DailyRecommendationsSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      cssEase: "linear",
      swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "linear",
            swipeToSlide: true,
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
            swipeToSlide: true,
          },
        },
      ],
    };

    return (
      <div
        className="slider-section-container"
        style={{ width: "90vw", marginBottom: "4rem" }}
      >
        <Header2>Popular Items</Header2>
        <Slider {...settings}>{sliderCards}</Slider>
      </div>
    );
  }
}

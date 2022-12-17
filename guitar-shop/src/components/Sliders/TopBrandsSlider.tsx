import data from "../../data/category.json";
import TopBrandsCard from "./TopBrandCard";
import { nanoid } from "nanoid";
import "../../styles/SliderStyles/SliderStyle.scss";
import Slider from "react-slick";
import { Component } from "react";
import styled from "styled-components";

const sliderCards = data.map((item) => (
  <TopBrandsCard key={nanoid()} src={item.src} alt={item.alt} />
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
  color: #404040;
  text-decoration: underline lightskyblue 3px;

  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

//class component because it is the only way to make responsive property work
export default class DailyRecommendationsSlider extends Component {
  render() {
    var settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "linear",
            swipeToSlide: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "linear",
            swipeToSlide: true,
          },
        },
        {
          breakpoint: 667,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "linear",
            swipeToSlide: true,
          },
        },
        {
          breakpoint: 440,
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
      <div className="slider-section-container" style={{ width: "90vw" }}>
        <Header2>Top Brands</Header2>
        <Slider {...settings}>
          {sliderCards}
          {sliderCards}
        </Slider>
      </div>
    );
  }
}

import BrandCard from "./BrandCard";
import { nanoid } from "nanoid";
import "../../../styles/SliderStyles/SliderStyle.scss";
import Slider from "react-slick";
import styled from "styled-components";

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
  margin: 4rem 0 2rem 0;
  color: #404040;
  text-decoration: underline lightskyblue 3px;

  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

type Data = {
  brandName: string;
  src: string;
  alt: string;
  pageLink: string;
};

type DataArray = Data[];

type Props = {
  title: string;
  data: DataArray;
};

function getSliderCards(data: DataArray) {
  return data.map((item) => (
    <BrandCard
      key={nanoid()}
      src={item.src}
      alt={item.alt}
      title={item.brandName}
    />
  ));
}

export default function BrandsSlider({ title, data }: Props) {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: data.length >= 10 ? true : false,
    slidesToShow: 5,
    speed: 500,
    rows: data.length <= 5 ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRowOneCards = getSliderCards(data);

  return (
    <div className="slider-section-container" style={{ width: "90vw" }}>
      <Header2>{title}</Header2>
      <Slider {...settings}>{sliderRowOneCards}</Slider>
    </div>
  );
}

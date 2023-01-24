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

function getCardsRow(data: DataArray) {
  return data.map((item) => (
    <BrandCard key={nanoid()} src={item.src} alt={item.alt} />
  ));
}

export default function BrandsSlider({ title, data }: Props) {
  const settings = {
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

  const halfOfDataLength = data.length / 2;

  const sliderRowOneCards = getCardsRow(data).slice(0, halfOfDataLength);
  const sliderRowTwoCards = getCardsRow(data).slice(halfOfDataLength);

  return (
    <div className="slider-section-container" style={{ width: "90vw" }}>
      <Header2>{title}</Header2>
      <Slider {...settings}>
        {sliderRowOneCards}
        {sliderRowTwoCards}
      </Slider>
    </div>
  );
}

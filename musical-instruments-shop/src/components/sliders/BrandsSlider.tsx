import BrandCard from "./BrandCard";
import { nanoid } from "nanoid";
import "../../styles/slider-styles/sliderStyle.scss";
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

const SliderContainer = styled.div`
  padding: 0.5rem;
  max-height: 60vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 5vw;
`;

const Header = styled.h2`
  margin: 4rem 0 2rem 0;
  color: #404040;
  text-decoration: underline lightskyblue 3px;
  font-size: 2rem;

  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

type Data = {
  brandName: string;
  src: string;
  alt: string;
};

type Props = {
  title: string;
  data: Data[];
};

export default function BrandsSlider({ title, data }: Props) {
  const settings = {
    dots: true,
    className: "center",
    infinite: data.length >= 10 ? true : false,
    slidesToShow: 5,
    speed: 500,
    rows: data.length <= 5 ? 1 : 2,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderCards = data.map((item: Data) => (
    <BrandCard
      key={nanoid()}
      src={item.src}
      alt={item.alt}
      title={item.brandName}
    />
  ));

  return (
    <SliderContainer>
      <Header>{title}</Header>
      <Slider {...settings}>{sliderCards}</Slider>
    </SliderContainer>
  );
}

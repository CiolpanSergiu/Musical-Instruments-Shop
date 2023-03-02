import SliderDetailedCard from "./SliderDetailedCard";
import "../../styles/slider-styles/sliderStyle.scss";
import Slider from "react-slick";
import styled from "styled-components";
import { nanoid } from "nanoid";

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
  height: 35rem;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2rem;

  @media only screen and (min-width: 992px) {
    height: 30rem;
  }
`;

const Header = styled.h2`
  margin: 2rem 0;
  color: #404040;
  text-decoration: underline lightskyblue 3px;
  font-size: 2.5rem;
`;

type Data = {
  title: string;
  brand: string;
  srcSmall: string;
  srcBig: string;
  alt: string;
  price: number;
  totalReviews: number;
  rating: number;
  specifications: string[];
};

type Props = {
  title: string;
  data: Data[];
};

export default function ItemsSlider({ title, data }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 662,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderCards = data.map((item: Data) => (
    <SliderDetailedCard
      key={nanoid()}
      src={item.srcSmall}
      alt={item.alt}
      title={item.title}
      pageLink={`/${item.title
        .toLocaleLowerCase()
        .replace(/[^\w]/g, "-")
        .replace(/--+/g, "-")}`}
      price={item.price}
      rating={item.rating}
      totalReviews={item.totalReviews}
    />
  ));

  return (
    <SliderContainer>
      <Header>{`Popular ${title} Items`}</Header>
      <Slider {...settings}>{sliderCards}</Slider>
    </SliderContainer>
  );
}

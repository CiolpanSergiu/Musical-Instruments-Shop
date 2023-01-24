import styled from "styled-components";
import SliderDetailedCard from "./SliderDetailedCard";
import Slider from "react-slick";
import { nanoid } from "nanoid";
import SliderDescription from "../SliderDescription";

const Section = styled.section`
  width: 90vw;
`;

const Header2 = styled.h2`
  margin: 2rem;
  color: #404040;
  text-decoration: underline lightskyblue 3px;
  text-align: center;
  font-size: 2rem;

  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

type Data = {
  src: string;
  alt: string;
  title: string;
  pageLink: string;
  price: number;
  totalReviews: number;
  rating: number;
};

type Props = {
  data: Data[];
  header: string;
  descriptionData?: { title: string; subtitle: string; description: string[] };
};

export default function SimpleSlider({ data, header, descriptionData }: Props) {
  const sliderElements = data.map((item: Data) => (
    <SliderDetailedCard
      key={nanoid()}
      src={item.src}
      alt={item.alt}
      title={item.title}
      pageLink={item.pageLink}
      price={item.price}
      totalReviews={item.totalReviews}
      rating={item.rating}
    />
  ));

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <Section>
      <Header2>{header}</Header2>
      <Slider {...settings}>{sliderElements}</Slider>
      {descriptionData && (
        <SliderDescription descriptionData={descriptionData} />
      )}
    </Section>
  );
}

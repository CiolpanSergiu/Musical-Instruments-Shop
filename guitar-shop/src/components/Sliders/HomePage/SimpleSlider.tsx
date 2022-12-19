import styled from "styled-components";
import DetailedCard from "./DetailedCard";
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

type Props = {
  cardsData: { src: string; alt: string; title: string; pageLink: string }[];
  header: string;
  descriptionData: { title: string; subtitle: string; description: string[] };
};

export default function SimpleSlider({
  cardsData,
  header,
  descriptionData,
}: Props) {
  const sliderElements = cardsData.map((item: any) => (
    <DetailedCard
      key={nanoid()}
      imgSrc={item.src}
      alt={item.alt}
      title={item.title}
      pageLink={item.pageLink}
      width={64}
      height={64}
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
      <SliderDescription descriptionData={descriptionData} />
    </Section>
  );
}

import { Link } from "react-router-dom";
import "../../styles/SliderStyles/SliderCardStyle.scss";

type Props = {
  imgSrc: string;
  alt: string;
  title: string;
  pageLink: string;
};

export default function SliderCard({ imgSrc, alt, title, pageLink }: Props) {
  return (
    <Link to={pageLink} className="slider-card" style={{ margin: "1rem" }}>
      <img src={imgSrc} alt={alt} />
      <h5>{title}</h5>
      <span>Price</span>
    </Link>
  );
}
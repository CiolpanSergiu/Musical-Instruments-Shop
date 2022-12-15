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
    <div className="slider-card-container">
      <Link to={pageLink} className="slider-card">
        <img src={imgSrc} alt={alt} />
        <h5>{title}</h5>
        <span>Price</span>
      </Link>
    </div>
  );
}

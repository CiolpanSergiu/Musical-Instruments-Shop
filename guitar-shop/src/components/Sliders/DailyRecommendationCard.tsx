import { Link } from "react-router-dom";
import "../../styles/SliderStyles/SliderCardStyle.scss";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

type Props = {
  imgSrc: string;
  alt: string;
  title: string;
  pageLink: string;
  width: number;
  height: number;
};

export default function SliderCard({
  imgSrc,
  alt,
  title,
  pageLink,
  width,
  height,
}: Props) {
  return (
    <Link to={pageLink} className="slider-card-link">
      <img
        className="slider-card-img"
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
      />
      <div className="slider-card-stars-container">
        <span className="slider-card-star">
          <BsStarFill />
        </span>
        <span className="slider-card-star">
          <BsStarFill />
        </span>
        <span className="slider-card-star">
          <BsStarFill />
        </span>
        <span className="slider-card-star">
          <BsStarFill />
        </span>
        <span className="slider-card-star">
          <BsStarFill />
        </span>
        <span className="slider-card-total-reviews">100</span>
      </div>
      <h5 className="slider-card-title">{title}</h5>
      <span className="slider-card-price">Price</span>
    </Link>
  );
}

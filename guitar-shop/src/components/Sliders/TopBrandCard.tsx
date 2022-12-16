import { Link } from "react-router-dom";

type Props = {
  src: string;
  alt: string;
};

export default function TopBrandsCard({ src, alt }: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to="">
        <img
          src={src}
          alt={alt}
          width="128px"
          height="128px"
          style={{ margin: "2rem", border: "solid gray 1px", padding: ".5rem" }}
        />
      </Link>
    </div>
  );
}

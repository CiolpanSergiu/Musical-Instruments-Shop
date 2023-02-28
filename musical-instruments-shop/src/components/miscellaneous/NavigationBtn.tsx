import styled from "styled-components";
import { Link } from "react-router-dom";

type BtnProps = {
  bgColor: {
    normal: string;
    hover: string;
  };
};

const NavBtn = styled.button<BtnProps>`
  text-decoration: none;
  background-color: ${(props) => props.bgColor.normal};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 2rem;
  color: black;
  transition: 0.3s all ease;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.bgColor.hover};
    color: white;
  }
`;

type Props = {
  pageLink: string;
  buttonText: string;
  bgColor: {
    normal: string;
    hover: string;
  };
};

export default function NavigationBtn({
  pageLink,
  buttonText,
  bgColor,
}: Props) {
  return (
    <Link to={pageLink}>
      <NavBtn bgColor={bgColor}>{buttonText}</NavBtn>
    </Link>
  );
}

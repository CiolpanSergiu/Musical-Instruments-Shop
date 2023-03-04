import { BsEye, BsEyeSlash } from "react-icons/bs";
import styled from "styled-components";

const ShowIcon = styled.span`
  cursor: pointer;
  color: gray;
  font-size: 1.3rem;
  margin-left: 1rem;
`;

type Props = {
  handleClick: () => void;
  isShowing: boolean;
};

export default function ShowInfoBtn({ handleClick, isShowing }: Props) {
  return (
    <ShowIcon onClick={handleClick}>
      {isShowing ? <BsEyeSlash /> : <BsEye />}
    </ShowIcon>
  );
}

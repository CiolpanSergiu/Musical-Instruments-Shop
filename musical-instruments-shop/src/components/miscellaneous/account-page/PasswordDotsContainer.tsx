import styled from "styled-components";
import { nanoid } from "nanoid";

const Dot = styled.span`
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 50%;
  margin: 0 0.075rem;
`;

const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

type Props = {
  length: number;
};

export default function PasswordDotsContainer({ length }: Props) {
  const dots = [];

  for (let i = 0; i < length; i++) {
    dots.push(<Dot key={nanoid()}></Dot>);
  }

  return <DotsContainer>{dots}</DotsContainer>;
}

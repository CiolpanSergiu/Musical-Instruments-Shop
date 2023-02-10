import styled from "styled-components";
import { FaTruck } from "react-icons/fa";

const Button = styled.button`
  background-color: lightskyblue;
  font-size: 1.3rem;
  padding: 0.5rem 3rem;
  border-radius: 7px;
  border: none;
  margin: 1rem auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.3s all ease-in-out;

  svg {
    margin-left: 1rem;
  }

  &:hover {
    background-color: #383838;
    color: white;
  }
`;

export default function OrderButton() {
  return (
    <>
      <Button>
        Order <FaTruck />
      </Button>
    </>
  );
}

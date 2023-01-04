import styled from "styled-components";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import { useContext } from "react";

const StyledClearButton = styled.button`
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  color: white;
  background-color: crimson;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: 0.3s;

  &:hover {
    background-color: #990000;
  }
`;

export default function ClearButton() {
  const { clearCartItems }: any = useContext(ShoppingCartContext);

  return (
    <StyledClearButton onClick={() => clearCartItems()}>
      Clear All
    </StyledClearButton>
  );
}

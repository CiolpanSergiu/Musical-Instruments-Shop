import styled from "styled-components";

const AddCartButton = styled.button`
  padding: 0.5em 2em;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  background-color: #3d4552;
  transition: 0.3s all ease;

  &:hover {
    background-color: lightskyblue;
    color: #3d4552;
  }

  @media only screen and (min-width: 768px) {
    max-width: 15rem;
  }
`;

export default function AddToCartBtn() {
  return <AddCartButton>Add To Cart</AddCartButton>;
}

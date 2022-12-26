import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";

const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 0.5fr;
  width: 90%;
  align-items: center;
  margin: 0.5rem;
  border: solid 1px gray;
  border-radius: 9px;
  padding: 0.5rem 1rem;
  border-bottom: solid gray 3px;
  background-color: white;

  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TrashBin = styled.span`
  svg {
    font-size: 1.3rem;
    cursor: pointer;
    margin-left: 2rem;
  }
`;

const Price = styled.span`
  font-weight: 600;
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  * {
    margin: 0.25rem 0;
  }

  @media only screen and (min-width: 768px) {
    margin-left: 2.5rem;
  }
`;

const SecondRow = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  border-radius: 25px;
  width: 40px;

  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ItemName = styled.h3`
  font-size: 0.8rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export default function CartItem() {
  function deleteItem(event: any) {
    event.target.closest(".cart-item").remove();
  }

  return (
    <CartItemContainer className="cart-item">
      <Img src="images/category/guitars_basses.jpg" alt="" />
      <ItemDescription>
        <ItemName>Electric guitar</ItemName>
        <SecondRow>
          <Price>200$</Price>
          <TrashBin>
            <BsFillTrashFill
              onClick={(event) => {
                deleteItem(event);
              }}
            />
          </TrashBin>
        </SecondRow>
      </ItemDescription>
      <Select title="Item Quantity" name="quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="5+">5+</option>
      </Select>
    </CartItemContainer>
  );
}

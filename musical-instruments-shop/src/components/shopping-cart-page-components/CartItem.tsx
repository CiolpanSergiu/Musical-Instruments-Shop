import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import { useContext } from "react";

const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 0.5fr;
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

const QuantityGroup = styled.div`
  display: flex;
`;

const QuantityBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  background-color: rgb(240, 240, 240);
`;

const ChangeQuantityButton = styled.button`
  font-size: 1.25rem;
  background-color: lightgray;
  padding: 0.125rem 0.5rem;
  cursor: pointer;
  border: none;
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

const Img = styled.img`
  width: 100%;
  min-width: 75px;
`;

const ItemName = styled.h3`
  font-size: 0.8rem;
  margin-right: 1rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

type Props = {
  src: string;
  alt: string;
  title: string;
  price: number;
  quantity: number;
};

export default function CartItem({
  src,
  alt = "",
  title,
  price,
  quantity,
}: Props) {
  const {
    addToCart,
    removeFromCart,
    decreaseItemQuantity,
    setCartItemsQuantity,
  }: any = useContext(ShoppingCartContext);

  function deleteItem() {
    removeFromCart({
      title: title,
      src: src,
      alt: alt,
      price: price,
      quantity: quantity,
    });
  }

  function increaseQuantity() {
    addToCart({
      title: title,
      src: src,
      alt: alt,
      price: price,
      quantity: quantity,
    });
    setCartItemsQuantity((prevState: number) => prevState + 1);
  }

  function decreaseQuantity() {
    decreaseItemQuantity({
      title: title,
      src: src,
      alt: alt,
      price: price,
      quantity: quantity <= 0 ? 0 : quantity - 1,
    });
    setCartItemsQuantity((prevState: number) => prevState - 1);
  }

  return (
    <CartItemContainer className="cart-item">
      <Img src={src} alt={alt} />
      <ItemDescription>
        <ItemName>{title}</ItemName>
        <SecondRow>
          <Price>{price}$</Price>
          <TrashBin>
            <BsFillTrashFill onClick={deleteItem} />
          </TrashBin>
        </SecondRow>
      </ItemDescription>
      <QuantityGroup>
        <ChangeQuantityButton onClick={decreaseQuantity}>
          -
        </ChangeQuantityButton>
        <QuantityBox>{quantity}</QuantityBox>
        <ChangeQuantityButton
          onClick={increaseQuantity}
          style={{ pointerEvents: quantity >= 100 ? "none" : "auto" }}
        >
          +
        </ChangeQuantityButton>
      </QuantityGroup>
    </CartItemContainer>
  );
}

import styled from "styled-components";
import { FaTruck } from "react-icons/fa";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/commonTypes";
import editUserData from "../../functions/account-related-functions/editUserData";
import AuthentificationContext from "../../context/AuthentificationContext";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import { nanoid } from "nanoid";

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

type Props = {
  handleNotLogged: () => void;
};

export default function OrderButton({ handleNotLogged }: Props) {
  const navigate = useNavigate();

  const { currentUser, setCurrentUser }: any = useContext(
    AuthentificationContext
  );
  const { cartItems, setCartItems, setItemsInCart, setCartItemsQuantity }: any =
    useContext(ShoppingCartContext);

  function handleOrder() {
    navigate("/thank-for-ordering");

    const newOrdersHistory = [
      ...currentUser.ordersHistory,
      {
        order: cartItems,
        placementDate: new Date(),
        orderId: nanoid(),
        delivered: false,
        cancelable: true,
      },
    ];

    setCurrentUser((prevState: User) => {
      return {
        ...prevState,
        ordersHistory: newOrdersHistory,
      };
    });

    editUserData({
      ...currentUser,
      ordersHistory: [
        ...currentUser.ordersHistory,
        {
          order: cartItems,
          placementDate: new Date(),
          orderId: nanoid(),
          delivered: false,
        },
      ],
      shoppingCart: [],
    });
    setCartItems([]);
    setItemsInCart([]);
    setCartItemsQuantity(0);
  }

  return (
    <>
      <Button onClick={currentUser ? handleOrder : handleNotLogged}>
        Order <FaTruck />
      </Button>
    </>
  );
}

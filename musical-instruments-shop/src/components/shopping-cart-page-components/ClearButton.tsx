import styled from "styled-components";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import { useContext } from "react";
import AuthentificationContext from "../../context/AuthentificationContext";
import editUserData from "../../functions/account-related-functions/editUserData";

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
  const { setCartItems, setCartItemsQuantity, setItemsInCart }: any =
    useContext(ShoppingCartContext);

  const { currentUser, setCurrentUser }: any = useContext(
    AuthentificationContext
  );

  function clearCartItems() {
    setCartItems([]);
    setCartItemsQuantity(0);
    setItemsInCart([]);
    if (currentUser)
      editUserData({ ...currentUser, shoppingCart: [] })
        .then((res) => setCurrentUser(res.data.user))
        .catch((err) => console.log(err));
  }

  return (
    <StyledClearButton onClick={() => clearCartItems()}>
      Clear All
    </StyledClearButton>
  );
}

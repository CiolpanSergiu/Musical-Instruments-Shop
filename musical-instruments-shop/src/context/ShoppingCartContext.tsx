import { useState, createContext, useContext } from "react";
import { CartItem } from "../types/commonTypes";
import AuthentificationContext from "./AuthentificationContext";

const ShoppingCartContext = createContext({});

export const ShoppingCartContextProvider = ({ children }: any) => {
  const { currentUser }: any = useContext(AuthentificationContext);

  const [cartItems, setCartItems] = useState<CartItem[]>(
    currentUser === undefined ? [] : currentUser.shoppingCart
  );

  const [cartItemsQuantity, setCartItemsQuantity] = useState(
    cartItems.reduce(
      (accumulator: number, currentItem: CartItem) =>
        accumulator + currentItem.quantity,
      0
    )
  );

  const [itemsInCart, setItemsInCart] = useState<string[]>(
    cartItems.length === 0 ? [] : cartItems.map((item: CartItem) => item.title)
  );

  function checkIfItemInCart(item: CartItem) {
    if (!itemsInCart.includes(item.title)) {
      setItemsInCart((prevState): string[] => [...prevState, item.title]);
    }
  }

  function increaseCartItemQuantity(item: CartItem) {
    const stateWithUpdatedQuantities = cartItems.map((cartItem): CartItem => {
      if (cartItem.title === item.title) {
        return { ...item, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
    return stateWithUpdatedQuantities;
  }

  function decreaseItemQuantity(item: CartItem): void {
    const stateWithUpdatedQuantities = cartItems.map((cartItem: CartItem) => {
      if (cartItem.title === item.title) {
        //because the decreasing is done in CartItem.tsx
        return item;
      } else {
        return cartItem;
      }
    });

    setCartItems(stateWithUpdatedQuantities);

    if (item.quantity < 1) {
      removeFromCart(item);
    }
  }

  function removeFromCart(item: CartItem): void {
    setItemsInCart((prevState): string[] => {
      return [...prevState.splice(prevState.indexOf(item.title), 1)];
    });
    setCartItemsQuantity((prevState): number => prevState - item.quantity);

    const newCartItems = cartItems.filter(
      (cartItem: CartItem) => cartItem.title !== item.title
    );

    setCartItems(newCartItems);
  }

  function addToCart(item: CartItem): void {
    checkIfItemInCart(item);

    setCartItems((prevState: CartItem[]) => {
      if (!itemsInCart.includes(item.title)) {
        return [...prevState, { ...item, quantity: 1 }];
      } else {
        return increaseCartItemQuantity(item);
      }
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItemsQuantity,
        setCartItemsQuantity,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        decreaseItemQuantity,
        setItemsInCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;

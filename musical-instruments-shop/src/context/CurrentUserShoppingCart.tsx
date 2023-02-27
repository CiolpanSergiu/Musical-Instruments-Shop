import { useState, createContext } from "react";
import CartItem from "../components/shopping-cart-page-components/CartItem";
const CurrentUserCartContext = createContext({});

export type CartItem = {
  title: string;
  src: string;
  alt: string;
  price: number;
  quantity: number;
};

export const CurrentUserCartContextProvider = ({ children }: any) => {
  const [currentUserCart, setCurrentUserCart] = useState(
    JSON.parse(String(localStorage.getItem("currentUser"))).shoppingCart
      .shoppingCart || []
  );

  const [currentUserCartQuantity, setCurrentUserCartQuantity] =
    useState<number>(0);

  const [isUserLogged, setIsUserLogged] = useState(
    localStorage.getItem("currentUser") !== null ? true : false
  );

  const [itemsInCart, setItemsInCart] = useState<string[]>([]);

  console.log(itemsInCart);

  function addToCurrentCart(item: CartItem) {
    setItemsInCart((prevState: string[]) =>
      prevState.includes(item.title) ? prevState : [...prevState, item.title]
    );
    setCurrentUserCart((prevState: CartItem[]) => {
      return itemsInCart.includes(item.title)
        ? prevState.map((cartItem) =>
            cartItem.title === item.title
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevState, item];
    });
  }

  console.log(currentUserCart);

  return (
    <CurrentUserCartContext.Provider
      value={{
        currentUserCart,
        setCurrentUserCart,
        isUserLogged,
        setIsUserLogged,
        addToCurrentCart,
        currentUserCartQuantity,
        setCurrentUserCartQuantity,
      }}
    >
      {children}
    </CurrentUserCartContext.Provider>
  );
};

export default CurrentUserCartContext;

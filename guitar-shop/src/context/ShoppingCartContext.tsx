import { useState, createContext } from "react";

const ShoppingCartContext = createContext({});

export const ShoppingCartContextProvider = ({ children }: any) => {
  const [cartItemsQuantity, setCartItemsQuantity] = useState<number>(0);
  const [cartItems, setCartItems] = useState([{}]);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItemsQuantity,
        setCartItemsQuantity,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;

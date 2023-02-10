import { useState, createContext } from "react";

const ShoppingCartContext = createContext({});

type CartItem = {
  title: string;
  src: string;
  alt: string;
  price: number;
  quantity: number;
};

type CartItems = CartItem[];

export const ShoppingCartContextProvider = ({ children }: any) => {
  const [cartItemsQuantity, setCartItemsQuantity] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItems>([]);
  const [itemsInCart, setItemsInCart] = useState<string[]>([]);

  function checkIfItemInCart(item: CartItem) {
    if (!itemsInCart.includes(item.title)) {
      setItemsInCart((prevState): string[] => [...prevState, item.title]);
    }
  }

  function increaseCartItemQuantity(item: CartItem): CartItems {
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

    setCartItems((prevState): CartItems => {
      if (!itemsInCart.includes(item.title)) {
        return [...prevState, { ...item, quantity: 1 }];
      } else {
        return increaseCartItemQuantity(item);
      }
    });
  }

  function clearCartItems(): void {
    setCartItems([]);
    setCartItemsQuantity(0);
    setItemsInCart([]);
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
        clearCartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;

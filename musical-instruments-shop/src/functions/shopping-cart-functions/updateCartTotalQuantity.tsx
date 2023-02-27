import { CartItem, User } from "../../types/commonTypes";

export function updateCartTotalQuantity(arr: User) {
  return arr.shoppingCart.reduce(
    (accumulator: number, currentItem: CartItem) =>
      accumulator + currentItem.quantity,
    0
  );
}

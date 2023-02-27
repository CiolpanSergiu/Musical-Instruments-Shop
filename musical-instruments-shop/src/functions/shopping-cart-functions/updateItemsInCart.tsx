import { CartItem } from "../../types/commonTypes";

export function updateItemsInCart(arr: CartItem[]) {
  return arr.map((item: CartItem) => item.title);
}

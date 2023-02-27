import { Product } from "../../types/commonTypes";
// https://codingbeautydev.com/blog/javascript-filter-duplicate-objects-from-array/

export default function removeDuplicatedProducts(arr: Product[]) {
  return arr.filter(
    (obj, index) => arr.findIndex((item) => item.title === obj.title) === index
  );
}

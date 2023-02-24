import ProductType from "../../data/products/productType";

// https://codingbeautydev.com/blog/javascript-filter-duplicate-objects-from-array/

export default function removeDuplicatedProducts(arr: ProductType[]) {
  return arr.filter(
    (obj, index) => arr.findIndex((item) => item.title === obj.title) === index
  );
}

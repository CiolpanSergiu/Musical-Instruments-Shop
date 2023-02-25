import allProducts from "../products/allProducts";

const productsSuggestions = allProducts.map((product) => [
  product?.title,
  `/${product.title
    .toLocaleLowerCase()
    .replace(/[^\w]/g, "-")
    .replace(/--+/g, "-")}`,
]);

// https://stackoverflow.com/questions/44014799/javascript-how-to-remove-duplicate-arrays-inside-array-of-arrays
const uniqueProducts = Array.from(
  new Set(productsSuggestions.map((product) => JSON.stringify(product)))
).map((string) => JSON.parse(string));

export default uniqueProducts;

import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";
import removeDuplicatedProducts from "../../../../functions/get-data-functions/removeDuplicatedProducts";

export default [
  {
    title: "Guitar Tailpieces",
    src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/saddles-and-tailpieces/guitar_tailpiece.jpg",
    alt: "A metal tailpiece for electric guitars",
    items: getProductsByCategory("guitar tailpiece"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Guitar Bridges",
    src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/saddles-and-tailpieces/guitar_saddle.jpg",
    alt: "An electric guitar bridge",
    items: getProductsByCategory("guitar bridge"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Jazz Guitar Bridges and Tailpieces",
    src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/saddles-and-tailpieces/jazz_guitar_tailpiece.jpeg",
    alt: "A tailpiece for jazz guitars",
    items: removeDuplicatedProducts(
      [
        getProductsByCategory("jazz guitar tailpiece"),
        getProductsByCategory("jazz guitar saddle"),
      ].flat(1)
    ),
    subcategories: [],
    brands: [],
  },

  {
    title: "Bass Bridges",
    src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/saddles-and-tailpieces/bass_bridge.jpg",
    alt: "A bass bridge combining both saddle and tailpiece",
    items: getProductsByCategory("bass bridge"),
    subcategories: [],
    brands: [],
  },
];

import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    title: "J Bass Pick Guard",
    src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/pick-guards/basses/j_bass_guard.jpg",
    alt: "A pick guard for a J bass guitar",
    items: getProductsByCategory("j bass pick guard"),
    subcategories: [],
    brands: [],
  },
  {
    title: "P Bass Pick Guard",
    src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/pick-guards/basses/p_bass_guard.jpg",
    alt: "A pick guard for a P bass guitar",
    items: getProductsByCategory("p bass pick guard"),
    subcategories: [],
    brands: [],
  },
];

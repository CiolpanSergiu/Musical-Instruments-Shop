import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    title: "EL34 Tubes",
    src: "/images/categories/level-four-categories/guitars-and-basses/tubes/el34_tube.jpg",
    alt: "An EL34 amplifier tube",
    items: getProductsByCategory("el34 tube"),
    subcategories: [],
    brands: [],
  },
  {
    title: "6L6 Tubes",
    src: "/images/categories/level-four-categories/guitars-and-basses/tubes/6l6_tube.jpg",
    alt: "An 6L6 amplifier tube",
    items: getProductsByCategory("6l6 tube"),
    subcategories: [],
    brands: [],
  },
  {
    title: "EL84 Tubes",
    src: "/images/categories/level-four-categories/guitars-and-basses/tubes/el84_tube.jpg",
    alt: "An EL84 amplifier tube",
    items: getProductsByCategory("el84 tube"),
    subcategories: [],
    brands: [],
  },
  {
    title: "ECC83 Tubes",
    src: "/images/categories/level-four-categories/guitars-and-basses/tubes/ecc83_tube.jpg",
    alt: "An ECC83 amplifier tube",
    items: getProductsByCategory("ecc83 tube"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Other Tubes",
    src: "/images/categories/level-four-categories/guitars-and-basses/tubes/other_tubes.jpg",
    alt: "An amplifier tube",
    items: getProductsByCategory("other tube"),
    subcategories: [],
    brands: [],
  },
];

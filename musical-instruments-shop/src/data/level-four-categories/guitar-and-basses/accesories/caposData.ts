import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    title: "Electric/Acoustic Guitar Capos",
    src: "/images/categories/level-four-categories/guitars-and-basses/accesories/capos/guitar_capo.jpg",
    alt: "A capo for electric or acoustic guitars",
    items: getProductsByCategory("electric/acoustic guitar capo"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Classic Guitar Capos",
    src: "/images/categories/level-four-categories/guitars-and-basses/accesories/capos/classic_guitar_capo.jpg",
    alt: "A capo for classic guitars",
    items: getProductsByCategory("classic guitar capo"),
    subcategories: [],
    brands: [],
  },
  {
    title: "12 Strings Guitar Capos",
    src: "/images/categories/level-four-categories/guitars-and-basses/accesories/capos/12_strings_guitar_capo.jpg",
    alt: "A capo for 12 strings guitars",
    items: getProductsByCategory("12 strings guitar capo"),
    subcategories: [],
    brands: [],
  },
];

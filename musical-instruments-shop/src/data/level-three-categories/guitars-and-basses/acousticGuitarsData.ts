import getProductsByCategory from "../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    title: "Dreadnought Models",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitars/acoustic_dreadnought_model.jpg",
    alt: "A beige, dreadnought type acoustic guitar",
    items: getProductsByCategory("dreadnought acoustic guitar"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Parlor Models",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitars/acoustic_parlor_model.jpg",
    alt: "A brown, parlor type acoustic guitar",
    items: getProductsByCategory("parlor acoustic guitar"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Jumbo Models",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitars/acoustic_jumbo_model.jpg",
    alt: "An orange, jumbo type acoustic guitar",
    items: getProductsByCategory("jumbo acoustic guitar"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Classic Guitars",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitars/classic_guitar_model.jpg",
    alt: "A beige, classic guitar",
    items: getProductsByCategory("classic guitar"),
    subcategories: [],
    brands: [],
  },
  {
    title: "12 Strings Acoustic Models",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitars/12_strings_acoustic_guitar.jpg",
    alt: "A beige, 12 strings acoustic guitar",
    items: getProductsByCategory("12 strings acoustic guitar"),
    subcategories: [],
    brands: [],
  },
];

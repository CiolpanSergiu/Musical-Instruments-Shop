import getStoreProducts from "../../../functions/get-data-functions/getStoreProducts";

export default [
  {
    title: "Dreadnought Models",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitars/acoustic_dreadnought_model.jpg",
    alt: "A beige, dreadnought type acoustic guitar",
    items: getStoreProducts("dreadnought acoustic guitar"),
  },
  {
    title: "Parlor Models",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitars/acoustic_parlor_model.jpg",
    alt: "A brown, parlor type acoustic guitar",
    items: getStoreProducts("parlor acoustic guitar"),
  },
  {
    title: "Jumbo Models",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitars/acoustic_jumbo_model.jpg",
    alt: "An orange, jumbo type acoustic guitar",
    items: getStoreProducts("jumbo acoustic guitar"),
  },
  {
    title: "Classic Guitars",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitars/classic_guitar_model.jpg",
    alt: "A beige, classic guitar",
    items: getStoreProducts("classic guitar"),
  },
  {
    title: "12 Strings Acoustic Models",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitars/12_strings_acoustic_guitar.jpg",
    alt: "A beige, 12 strings acoustic guitar",
    items: getStoreProducts("12 strings acoustic guitar"),
  },
];

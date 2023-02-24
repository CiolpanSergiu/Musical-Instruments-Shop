import getStoreProducts from "../../../functions/get-data-functions/getStoreProducts";

export default [
  {
    title: "Acoustic Guitar Combo Amplifiers",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitar-amps/acoustic_guitar_amp.jpg",
    alt: "",
    items: getStoreProducts("acoustic guitar combo amp"),
  },
  {
    title: "Acoustic Guitar Preamplifiers",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitar-amps/acoustic_guitar_preamp.jpg",
    alt: "",
    items: getStoreProducts("acoustic guitar preamp"),
  },
  {
    title: "Cover Bags",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitar-amps/amp_cover_bag.jpg",
    alt: "",
    items: getStoreProducts("acoustic guitar cover bag"),
  },
];

import getProductsByCategory from "../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    title: "Acoustic Guitar Combo Amplifiers",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitar-amps/acoustic_guitar_amp.jpg",
    alt: "",
    items: getProductsByCategory("acoustic guitar combo amp"),
  },
  {
    title: "Acoustic Guitar Preamplifiers",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitar-amps/acoustic_guitar_preamp.jpg",
    alt: "",
    items: getProductsByCategory("acoustic guitar preamp"),
  },
  {
    title: "Acoustic Guitar Cover Bags",
    src: "/images/categories/level-three-categories/guitars-and-basses/acoustic-guitar-amps/amp_cover_bag.jpg",
    alt: "",
    items: getProductsByCategory("acoustic guitar amp cover bag"),
  },
];

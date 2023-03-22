import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    src: "/images/categories/level-four-categories/guitars-and-basses/bass-amp-heads/transistors_bass_amp_head.jpg",
    alt: "",
    title: "Solid State Bass Amplifier Heads",
    items: getProductsByCategory("electric bass solid state amp head"),
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-four-categories/guitars-and-basses/bass-amp-heads/digital_bass_amp_head.jpg",
    alt: "",
    title: "Lamps Bass Amplifier Heads",
    items: getProductsByCategory("electric bass lamps amp head"),
    subcategories: [],
    brands: [],
  },
];

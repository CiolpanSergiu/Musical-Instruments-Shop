import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    src: "/images/categories/level-four-categories/guitars-and-basses/guitar-amp-heads/transistors_guitar_amp_head.jpg",
    alt: "",
    title: "Solid State Guitar Amplifier Heads",
    items: getProductsByCategory("electric guitar solid state amp head"),
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-four-categories/guitars-and-basses/guitar-amp-heads/digital_guitar_amp_head.jpg",
    alt: "",
    title: "Digital Guitar Amplifier Heads",
    items: getProductsByCategory("electric guitar digital amp head"),
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-four-categories/guitars-and-basses/guitar-amp-heads/tube_guitar_amp_head.jpg",
    alt: "",
    title: "Lamps Guitar Amplifier Heads",
    items: getProductsByCategory("electric guitar lamps amp head"),
    subcategories: [],
    brands: [],
  },
];

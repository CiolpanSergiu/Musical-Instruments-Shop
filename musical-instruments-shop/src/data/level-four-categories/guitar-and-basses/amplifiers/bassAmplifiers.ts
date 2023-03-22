import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    src: "/images/categories/level-four-categories/guitars-and-basses/bass-amps/transistors_bass_amp.jpg",
    alt: "",
    title: "Solid State Bass Combo Amplifiers ",
    items: getProductsByCategory("electric bass solid state combo amp"),
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-four-categories/guitars-and-basses/bass-amps/digital_bass_amp.jpg",
    alt: "",
    title: "Digital Bass Combo Amplifiers",
    items: getProductsByCategory("electric bass digital combo amp"),
    subcategories: [],
    brands: [],
  },
];

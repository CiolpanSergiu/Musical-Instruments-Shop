import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";
import bassComboAmpBrands from "../../../logo-data/guitar-and-basses-brands/electric-bass-amplifiers/electricBassAmpsBrands.json";

export default {
  title: "Bass Combo Amplifiers",
  brands: bassComboAmpBrands,
  subcategories: [
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/bass-amps/transistors_bass_amp.jpg",
      alt: "",
      title: "Solid State Bass Combo Amplifiers ",
      items: getProductsByCategory("electric bass solid state combo amp"),
    },
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/bass-amps/digital_bass_amp.jpg",
      alt: "",
      title: "Digital Bass Combo Amplifiers",
      items: getProductsByCategory("electric bass digital combo amp"),
    },
  ],
};

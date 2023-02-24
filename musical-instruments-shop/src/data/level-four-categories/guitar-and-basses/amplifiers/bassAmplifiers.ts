import getStoreProducts from "../../../../functions/get-data-functions/getStoreProducts";
import bassComboAmpBrands from "../../../logo-data/guitar-and-basses-brands/electric-bass-amplifiers/electricBassAmpsBrands.json";

export default {
  pageLink: "/bass-combo-amplifiers",
  title: "Bass Combo Amplifiers",
  brands: bassComboAmpBrands,
  subcategories: [
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/bass-amps/transistors_bass_amp.jpg",
      alt: "",
      title: "Solid State Bass Combo Amplifiers ",
      items: getStoreProducts("electric bass solid state amp"),
    },
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/bass-amps/digital_bass_amp.jpg",
      alt: "",
      title: "Digital Bass Combo Amplifiers",
      items: getStoreProducts("electric bass digital amp"),
    },
  ],
};

import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";
import guitarComboAmpBrands from "../../../logo-data/guitar-and-basses-brands/electric-guitar-amplifiers/electricGuitarComboAmpBrands.json";

export default {
  title: "Guitar Combo Amplifiers",
  brands: guitarComboAmpBrands,
  subcategories: [
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/guitar-amps/transistors_guitar_amp.jpg",
      alt: "",
      title: "Solid State Guitar Combo Amplifiers",
      items: getProductsByCategory("electric guitar solid state combo amp"),
    },
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/guitar-amps/digital_guitar_amp.jpg",
      alt: "",
      title: "Digital Guitar Combo Amplifiers",
      items: getProductsByCategory("electric guitar digital combo amp"),
    },
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/guitar-amps/tube_guitar_amp.jpg",
      alt: "",
      title: "Lamps Guitar Combo Amplifiers",
      items: getProductsByCategory("electric guitar lamps combo amp"),
    },
  ],
};

import getStoreProducts from "../../../../functions/get-data-functions/getStoreProducts";
import guitarComboAmpBrands from "../../../logo-data/guitar-and-basses-brands/electric-guitar-amplifiers/electricGuitarComboAmpBrands.json";

export default {
  pageLink: "/guitar-combo-amplifiers",
  title: "Guitar Combo Amplifiers",
  brands: guitarComboAmpBrands,
  subcategories: [
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/guitar-amps/transistors_guitar_amp.jpg",
      alt: "",
      title: "Solid State Guitar Combo Amplifiers",
      items: getStoreProducts("electric guitar solid state combo amp"),
    },
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/guitar-amps/digital_guitar_amp.jpg",
      alt: "",
      title: "Digital Guitar Combo Amplifiers",
      items: getStoreProducts("electric guitar digital combo amp"),
    },
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/guitar-amps/tube_guitar_amp.jpg",
      alt: "",
      title: "Lamps Guitar Combo Amplifiers",
      items: getStoreProducts("electric guitar lamps combo amp"),
    },
  ],
};

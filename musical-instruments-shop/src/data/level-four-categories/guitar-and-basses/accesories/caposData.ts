import getStoreProducts from "../../../../functions/get-data-functions/getStoreProducts";
import capoBrands from "../../../logo-data/guitar-and-basses-brands/accesories/capoBrands.json";

export default {
  title: "Guitar Capos",
  brands: capoBrands,
  subcategories: [
    {
      title: "Electric/Acoustic Guitar Capos",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/capos/guitar_capo.jpg",
      alt: "A capo for electric or acoustic guitars",
      items: getStoreProducts("electric/acoustic guitar capo"),
    },
    {
      title: "Classic Guitar Capos",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/capos/classic_guitar_capo.jpg",
      alt: "A capo for classic guitars",
      items: getStoreProducts("classic guitar capo"),
    },
    {
      title: "12 Strings Guitar Capos",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/capos/12_strings_guitar_capo.jpg",
      alt: "A capo for 12 strings guitars",
      items: getStoreProducts("12 strings guitar capo"),
    },
  ],
};

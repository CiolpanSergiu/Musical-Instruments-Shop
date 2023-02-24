import getStoreProducts from "../../../../functions/get-data-functions/getStoreProducts";
import guitarAmpHeadBrands from "../../../logo-data/guitar-and-basses-brands/electric-guitar-amplifiers/electricGuitarAmpHeadBrands.json";

export default {
  pageLink: "/guitar-amplifier-heads",
  brands: guitarAmpHeadBrands,
  title: "Electric Guitar Amplifier Heads",
  subcategories: [
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/guitar-amp-heads/transistors_guitar_amp_head.jpg",
      alt: "",
      title: "Solid State Guitar Amplifier Heads",
      items: getStoreProducts("electric guitar solid state amp head"),
    },
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/guitar-amp-heads/digital_guitar_amp_head.jpg",
      alt: "",
      title: "Digital Guitar Amplifier Heads",
      items: getStoreProducts("electric guitar digital amp head"),
    },
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/guitar-amp-heads/tube_guitar_amp_head.jpg",
      alt: "",
      title: "Lamps Guitar Amplifier Heads",
      items: getStoreProducts("electric guitar lamps amp head"),
    },
  ],
};

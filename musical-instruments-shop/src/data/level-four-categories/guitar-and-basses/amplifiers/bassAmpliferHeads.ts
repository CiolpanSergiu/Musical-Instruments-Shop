import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";
import bassAmpHeadsBrands from "../../../logo-data/guitar-and-basses-brands/electric-bass-amplifiers/electricBassAmpHeadBrands.json";

export default {
  title: "Electric Bass Amplifier Heads",
  brands: bassAmpHeadsBrands,
  subcategories: [
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/bass-amp-heads/transistors_bass_amp_head.jpg",
      alt: "",
      title: "Solid State Bass Amplifier Heads",
      items: getProductsByCategory("electric bass solid state amp head"),
    },
    {
      src: "/images/categories/level-four-categories/guitars-and-basses/bass-amp-heads/digital_bass_amp_head.jpg",
      alt: "",
      title: "Lamps Bass Amplifier Heads",
      items: getProductsByCategory("electric bass lamps amp head"),
    },
  ],
};

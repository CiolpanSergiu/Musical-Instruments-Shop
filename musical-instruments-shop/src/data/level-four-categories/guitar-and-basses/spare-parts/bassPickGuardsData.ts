import getStoreProducts from "../../../../functions/get-data-functions/getStoreProducts";
import bassPickGuardBrands from "../../../logo-data/guitar-and-basses-brands/spare-parts/bassPickGuardBrands.json";

export default {
  title: "Bass Pick Guards",
  brands: bassPickGuardBrands,
  subcategories: [
    {
      title: "J Bass Pick Guard",
      src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/pick-guards/basses/j_bass_guard.jpg",
      alt: "A pick guard for a J bass guitar",
      items: getStoreProducts("j bass pick guard"),
    },
    {
      title: "P Bass Pick Guard",
      src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/pick-guards/basses/p_bass_guard.jpg",
      alt: "A pick guard for a P bass guitar",
      items: getStoreProducts("p bass pick guard"),
    },
  ],
};

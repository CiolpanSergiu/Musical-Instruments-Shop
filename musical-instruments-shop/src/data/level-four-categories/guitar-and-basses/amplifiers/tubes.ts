import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";
import tubeBrands from "../../../logo-data/guitar-and-basses-brands/electric-guitar-amplifiers/ampTubesBrands.json";

export default {
  title: "Amplifier Tubes",
  brands: tubeBrands,
  subcategories: [
    {
      title: "EL34 Tubes",
      src: "/images/categories/level-four-categories/guitars-and-basses/tubes/el34_tube.jpg",
      alt: "An EL34 amplifier tube",
      items: getProductsByCategory("el34 tube"),
    },
    {
      title: "6L6 Tubes",
      src: "/images/categories/level-four-categories/guitars-and-basses/tubes/6l6_tube.jpg",
      alt: "An 6L6 amplifier tube",
      items: getProductsByCategory("6l6 tube"),
    },
    {
      title: "EL84 Tubes",
      src: "/images/categories/level-four-categories/guitars-and-basses/tubes/el84_tube.jpg",
      alt: "An EL84 amplifier tube",
      items: getProductsByCategory("el84 tube"),
    },
    {
      title: "ECC83 Tubes",
      src: "/images/categories/level-four-categories/guitars-and-basses/tubes/ecc83_tube.jpg",
      alt: "An ECC83 amplifier tube",
      items: getProductsByCategory("ecc83 tube"),
    },
    {
      title: "Other Tubes",
      src: "/images/categories/level-four-categories/guitars-and-basses/tubes/other_tubes.jpg",
      alt: "An amplifier tube",
      items: getProductsByCategory("other tube"),
    },
  ],
};

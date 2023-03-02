import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";
import strapBrands from "../../../logo-data/guitar-and-basses-brands/accesories/strapBrands.json";

export default {
  title: "Guitar and Bass Straps",
  brands: strapBrands,
  subcategories: [
    {
      title: "Leather Straps",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/straps/leather_strap.jpg",
      alt: "A strap made out of leather",
      items: getProductsByCategory("guitar leather strap"),
    },
    {
      title: "Nylon Straps",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/straps/nylon_strap.jpg",
      alt: "A strap made out of nylon",
      items: getProductsByCategory("guitar nylon strap"),
    },
  ],
};

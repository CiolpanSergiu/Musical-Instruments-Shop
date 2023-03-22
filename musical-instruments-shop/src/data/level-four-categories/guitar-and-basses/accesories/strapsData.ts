import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    title: "Leather Straps",
    src: "/images/categories/level-four-categories/guitars-and-basses/accesories/straps/leather_strap.jpg",
    alt: "A strap made out of leather",
    items: getProductsByCategory("guitar leather strap"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Nylon Straps",
    src: "/images/categories/level-four-categories/guitars-and-basses/accesories/straps/nylon_strap.jpg",
    alt: "A strap made out of nylon",
    items: getProductsByCategory("guitar nylon strap"),
    subcategories: [],
    brands: [],
  },
];

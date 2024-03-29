import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    title: "Glass Sliders",
    src: "/images/categories/level-four-categories/guitars-and-basses/accesories/sliders/glass_slider.jpg",
    alt: "A guitar slider made out of glass",
    items: getProductsByCategory("glass slider"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Metal Sliders",
    src: "/images/categories/level-four-categories/guitars-and-basses/accesories/sliders/metal_slider.jpg",
    alt: "A guitar slider made out of metal",
    items: getProductsByCategory("metal slider"),
    subcategories: [],
    brands: [],
  },
];

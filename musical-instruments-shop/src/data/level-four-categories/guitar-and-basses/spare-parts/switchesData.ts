import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";
import switchesBrands from "../../../logo-data/guitar-and-basses-brands/spare-parts/switchesBrands.json";

export default {
  title: "Switches",
  brands: switchesBrands,
  subcategories: [
    {
      title: "3 Ways Switch Selectors",
      src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/switches/3_ways_switch.jpg",
      alt: "A guitar switch selector with 3 ways",
      items: getProductsByCategory("3 ways selector"),
    },
    {
      title: "5 Ways Switch Selectors",
      src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/switches/5_ways_switch.jpg",
      alt: "A guitar switch selector with 5 ways",
      items: getProductsByCategory("5 ways selector"),
    },
    {
      title: "Toggle Switches",
      src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/switches/toggle_switch.jpg",
      alt: "A guitar toggle switch",
      items: getProductsByCategory("toggle switch"),
    },
  ],
};

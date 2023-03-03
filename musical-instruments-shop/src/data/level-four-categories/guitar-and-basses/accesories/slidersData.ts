import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";
import sliderBrands from "../../../logo-data/guitar-and-basses-brands/accesories/sliderBrands.json";

export default {
  title: "Guitar Sliders",
  brands: sliderBrands,
  subcategories: [
    {
      title: "Glass Sliders",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/sliders/glass_slider.jpg",
      alt: "A guitar slider made out of glass",
      items: getProductsByCategory("glass slider"),
    },
    {
      title: "Metal Sliders",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/sliders/metal_slider.jpg",
      alt: "A guitar slider made out of metal",
      items: getProductsByCategory("metal slider"),
    },
  ],
};

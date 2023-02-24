import getStoreProducts from "../../../../functions/get-data-functions/getStoreProducts";
import sliderBrands from "../../../logo-data/guitar-and-basses-brands/accesories/sliderBrands.json";

export default {
  pageLink: "/guitar-sliders",
  brands: sliderBrands,
  subcategories: [
    {
      title: "Glass Sliders",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/sliders/glass_slider.jpg",
      alt: "A guitar slider made out of glass",
      items: getStoreProducts("glass slider"),
    },
    {
      title: "Metal Sliders",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/sliders/metal_slider.jpg",
      alt: "A guitar slider made out of metal",
      items: getStoreProducts("metal slider"),
    },
  ],
};

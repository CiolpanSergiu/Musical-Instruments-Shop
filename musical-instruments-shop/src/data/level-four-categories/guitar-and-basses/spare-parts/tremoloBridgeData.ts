import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";
import tremoloBrands from "../../../logo-data/guitar-and-basses-brands/spare-parts/tremoloBrands.json";

export default {
  title: "Tremolo Bridges",
  brands: tremoloBrands,
  subcategories: [
    {
      title: "Standard Tremolo Bridges",
      src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/tremolos/standard_guitar_tremolo.jpg",
      alt: "/A standard electric guitar tremolo bridge",
      items: getProductsByCategory("standard tremolo bridge"),
    },
    {
      title: "Floyd Rose Tremolo Bridges",
      src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/tremolos/floyd_rose_guitar_tremolo.jpg",
      alt: "A Floyd Rose electric guitar tremolo bridge",
      items: getProductsByCategory("floyd rose tremolo bridge"),
    },
    {
      title: "Bigsby Tremolo Bridges",
      src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/tremolos/bigsby_guitar_tremolo.jpg",
      alt: "A Bygsby tremolo bridge",
      items: getProductsByCategory("bigsby tremolo bridge"),
    },
  ],
};

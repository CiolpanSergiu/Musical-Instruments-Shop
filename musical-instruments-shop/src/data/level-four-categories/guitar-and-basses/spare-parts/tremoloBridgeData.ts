import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    title: "Standard Tremolo Bridges",
    src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/tremolos/standard_guitar_tremolo.jpg",
    alt: "/A standard electric guitar tremolo bridge",
    items: getProductsByCategory("standard tremolo bridge"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Floyd Rose Tremolo Bridges",
    src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/tremolos/floyd_rose_guitar_tremolo.jpg",
    alt: "A Floyd Rose electric guitar tremolo bridge",
    items: getProductsByCategory("floyd rose tremolo bridge"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Bigsby Tremolo Bridges",
    src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/tremolos/bigsby_guitar_tremolo.jpg",
    alt: "A Bygsby tremolo bridge",
    items: getProductsByCategory("bigsby tremolo bridge"),
    subcategories: [],
    brands: [],
  },
];

import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";
import guitarPickGuardBrands from "../../../logo-data/guitar-and-basses-brands/spare-parts/guitarPickGuardBrands.json";

export default {
  title: "Guitar Pick Guards",
  brands: guitarPickGuardBrands,
  subcategories: [
    {
      title: "Stratocaster Guitar Pick Guard",
      src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/pick-guards/guitars/stratocaster_guitar_guard.jpg",
      alt: "A pick guard for a Stratocaster guitar",
      items: getProductsByCategory("stratocaster guitar pick guard"),
    },
    {
      title: "Telecaster Guitar Pick Guard",
      src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/pick-guards/guitars/telecaster_guitar_guard.jpg",
      alt: "A pick guard for a Telecaster guitar",
      items: getProductsByCategory("telecaster guitar pick guard"),
    },
    {
      title: "Les Paul Guitar Pick Guard",
      src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/pick-guards/guitars/les_paul_guitar_guard.jpg",
      alt: "A pick guard for a Les Paul guitar",
      items: getProductsByCategory("les paul guitar pick guard"),
    },
    {
      title: "Doublecut Guitar Pick Guard",
      src: "/images/categories/level-four-categories/guitars-and-basses/spare-parts/pick-guards/guitars/sg_guitar_guard.jpg",
      alt: "A pick guard for a SG guitar",
      items: getProductsByCategory("doublecut guitar pick guard"),
    },
  ],
};

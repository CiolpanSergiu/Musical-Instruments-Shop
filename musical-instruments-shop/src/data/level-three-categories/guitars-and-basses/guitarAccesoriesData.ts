import getProductsByCategory from "../../../functions/get-data-functions/getProductsByCategory";
import caposSubcategories from "../../level-four-categories/guitar-and-basses/accesories/caposData";
import coversBagsAndCasesSubcategories from "../../level-four-categories/guitar-and-basses/accesories/coverBagsAndCasesData";
import slidersSubcategories from "../../level-four-categories/guitar-and-basses/accesories/slidersData";
import strapsSubcategories from "../../level-four-categories/guitar-and-basses/accesories/strapsData";
// brands
import capoBrands from "../../logo-data/guitar-and-basses-brands/accesories/capoBrands.json";
import coverBagsAndCaseseBrands from "../../logo-data/guitar-and-basses-brands/accesories/coverBagsAndCasesBrands.json";
import sliderBrands from "../../logo-data/guitar-and-basses-brands/accesories/sliderBrands.json";
import strapBrands from "../../logo-data/guitar-and-basses-brands/accesories/strapBrands.json";

export default [
  {
    title: "Guitar / Bass Stands",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/electric_guitar_stand.jpg",
    alt: "",
    items: getProductsByCategory("guitar/bass stand"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Guitar / Bass Covers and Cases",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/electric_guitar_case.jpg",
    alt: "",
    subcategories: coversBagsAndCasesSubcategories,
    brands: coverBagsAndCaseseBrands,
  },
  {
    title: "Instrument Cables",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_cable.jpg",
    alt: "",
    items: getProductsByCategory("instrument cable"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Guitar / Bass Straps",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_strap.jpg",
    alt: "",
    subcategories: strapsSubcategories,
    brands: strapBrands,
  },
  {
    title: "Capos",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_capo.jpg",
    alt: "",
    subcategories: caposSubcategories,
    brands: capoBrands,
  },
  {
    title: "Picks",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_picks.jpg",
    alt: "",
    items: getProductsByCategory("pick"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Tuners",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_tuner.jpg",
    alt: "",
    items: getProductsByCategory("tuner"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Guitar Sliders",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_slider.jpg",
    alt: "",
    subcategories: slidersSubcategories,
    brands: sliderBrands,
  },
  {
    title: "Instrument Tools and Maintenance",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_tools_and_maintenance.jpg",
    alt: "",
    items: getProductsByCategory("instrument tool"),
    subcategories: [],
    brands: [],
  },
];

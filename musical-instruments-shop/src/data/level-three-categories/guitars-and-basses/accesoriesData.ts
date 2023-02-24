import getStoreProducts from "../../../functions/get-data-functions/getStoreProducts";
import caposSubcategories from "../../level-four-categories/guitar-and-basses/accesories/caposData";
import coversBagsAndCasesSubcategories from "../../level-four-categories/guitar-and-basses/accesories/coverBagsAndCasesData";
import slidersSubcategories from "../../level-four-categories/guitar-and-basses/accesories/slidersData";
import strapsSubcategories from "../../level-four-categories/guitar-and-basses/accesories/strapsData";

const accesoriesSubcategories = [
  {
    title: "Guitar/Bass Stands",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/electric_guitar_stand.jpg",
    alt: "",
    items: getStoreProducts("guitar/bass stand"),
  },
  {
    title: "Guitar/Bass Covers and Cases",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/electric_guitar_case.jpg",
    alt: "",
    subcategories: coversBagsAndCasesSubcategories,
  },
  {
    title: "Instrument Cables",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_cable.jpg",
    alt: "",
    items: getStoreProducts("instrument cable"),
  },
  {
    title: "Guitar/Bass Straps",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_strap.jpg",
    alt: "",
    subcategories: strapsSubcategories,
  },
  {
    title: "Capos",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_capo.jpg",
    alt: "",
    subcategories: caposSubcategories,
  },
  {
    title: "Picks",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_picks.jpg",
    alt: "",
    items: getStoreProducts("pick"),
  },
  {
    title: "Tuners",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_tuner.jpg",
    alt: "",
    items: getStoreProducts("tuner"),
  },
  {
    title: "Guitar Sliders",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_slider.jpg",
    alt: "",
    subcategories: slidersSubcategories,
  },
  {
    title: "Instrument Tools and Maintenance",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_tools_and_maintenance.jpg",
    alt: "",
    items: getStoreProducts("instrument tool"),
  },
];

export default accesoriesSubcategories;

import caposSubcategories from "../../level-four-categories/guitar-and-basses/accesories/caposData";
import coversBagsAndCasesSubcategories from "../../level-four-categories/guitar-and-basses/accesories/coverBagsAndCasesData";
import slidersSubcategories from "../../level-four-categories/guitar-and-basses/accesories/slidersData";
import strapsSubcategories from "../../level-four-categories/guitar-and-basses/accesories/strapsData";

const accesoriesSubcategories = [
  {
    title: "Guitar/Bass Stands",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/electric_guitar_stand.jpg",
    alt: "",
    pageLink: "/guitar-and-bass-stands",
  },
  {
    title: "Guitar/Bass Covers and Cases",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/electric_guitar_case.jpg",
    alt: "",
    pageLink: "/guitar-and-bass-covers-and-cases",
    subcategories: coversBagsAndCasesSubcategories,
  },
  {
    title: "Instrument Cables",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_cable.jpg",
    alt: "",
    pageLink: "/instrument-cables",
  },
  {
    title: "Guitar/Bass Straps",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_strap.jpg",
    alt: "",
    pageLink: "/guitar-and-bass-straps",
    subcategories: strapsSubcategories,
  },
  {
    title: "Capos",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_capo.jpg",
    alt: "",
    pageLink: "/capos",
    subcategories: caposSubcategories,
  },
  {
    title: "Picks",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_picks.jpg",
    alt: "",
    pageLink: "/picks",
  },
  {
    title: "Tuners",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_tuner.jpg",
    alt: "",
    pageLink: "/tuners",
  },
  {
    title: "Guitar Sliders",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_slider.jpg",
    alt: "",
    pageLink: "/guitar-sliders",
    subcategories: slidersSubcategories,
  },
  {
    title: "Instrument Tools and Maintenance",
    src: "/images/categories/level-three-categories/guitars-and-basses/accesories/guitar_tools_and_maintenance.jpg",
    alt: "",
    pageLink: "/instrument-tools-and-maintenance",
  },
];

export default accesoriesSubcategories;

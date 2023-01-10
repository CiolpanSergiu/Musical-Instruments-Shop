import caposSubcategories from "../../LevelFourCategories/GuitarAndBasses/Accesories/caposData";
import coversAndBagsSubcategories from "../../LevelFourCategories/GuitarAndBasses/Accesories/coversAndBagsData";
import slidersSubcategories from "../../LevelFourCategories/GuitarAndBasses/Accesories/slidersData";
import strapsSubcategories from "../../LevelFourCategories/GuitarAndBasses/Accesories/strapsData";

const accesoriesSubcategories = [
  {
    title: "Guitar/Bass Stands",
    src: "/images/category/SubSubcategories/GuitarsAndBasses/Accesories/electric_guitar_stand.jpg",
    alt: "",
    pageLink: "/guitar-and-bass-stands",
  },
  {
    title: "Guitar/Bass Covers and Cases",
    src: "/images/category/SubSubcategories/GuitarsAndBasses/Accesories/electric_guitar_case.jpg",
    alt: "",
    pageLink: "/guitar-and-bass-covers-and-cases",
    subcategories: coversAndBagsSubcategories,
  },
  {
    title: "Instrument Cables",
    src: "/images/category/SubSubcategories/GuitarsAndBasses/Accesories/guitar_cable.jpg",
    alt: "",
    pageLink: "/instrument-cables",
  },
  {
    title: "Guitar/Bass Straps",
    src: "/images/category/SubSubcategories/GuitarsAndBasses/Accesories/guitar_strap.jpg",
    alt: "",
    pageLink: "/guitar-and-bass-straps",
    subcategories: strapsSubcategories,
  },
  {
    title: "Capos",
    src: "/images/category/SubSubcategories/GuitarsAndBasses/Accesories/guitar_capo.jpg",
    alt: "",
    pageLink: "/capos",
    subcategories: caposSubcategories,
  },
  {
    title: "Picks",
    src: "/images/category/SubSubcategories/GuitarsAndBasses/Accesories/guitar_picks.jpg",
    alt: "",
    pageLink: "/picks",
  },
  {
    title: "Tuners",
    src: "/images/category/SubSubcategories/GuitarsAndBasses/Accesories/guitar_tuner.jpg",
    alt: "",
    pageLink: "/tuners",
  },
  {
    title: "Guitar Sliders",
    src: "/images/category/SubSubcategories/GuitarsAndBasses/Accesories/guitar_slider.jpg",
    alt: "",
    pageLink: "/guitar-sliders",
    subcategories: slidersSubcategories,
  },
  {
    title: "Instrument Tools and Maintenance",
    src: "/images/category/SubSubcategories/GuitarsAndBasses/Accesories/guitar_tools_and_maintenance.jpg",
    alt: "",
    pageLink: "/instrument-tools-and-maintenance",
  },
];

export default accesoriesSubcategories;

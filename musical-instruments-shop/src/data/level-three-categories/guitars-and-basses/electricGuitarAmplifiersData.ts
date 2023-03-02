import tubesData from "../../level-four-categories/guitar-and-basses/amplifiers/tubes";
import guitarAmplifierHeadsSubcategories from "../../level-four-categories/guitar-and-basses/amplifiers/guitarAmplifierHeads";
import guitarAmplifiersSubcategories from "../../level-four-categories/guitar-and-basses/amplifiers/guitarAmplifiers";
import getProductsByCategory from "../../../functions/get-data-functions/getProductsByCategory";

const electricGuitarAmplifiersSubcategories = [
  {
    title: "Combo Amplifiers",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-guitar-amps/electric_guitar_combo_amp.jpg",
    alt: "",
    subcategories: guitarAmplifiersSubcategories,
  },
  {
    title: "Amplifier Heads",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-guitar-amps/electric_guitar_amp_head.jpg",
    alt: "",
    subcategories: guitarAmplifierHeadsSubcategories,
  },
  {
    title: "Preamplifiers",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-guitar-amps/electric_guitar_preamp.jpg",
    alt: "",
    items: getProductsByCategory("electric guitar preamp"),
  },
  {
    title: "Power Amplifiers",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-guitar-amps/electric_guitar_power_amp.jpg",
    alt: "",
    items: getProductsByCategory("electric guitar power amp"),
  },
  {
    title: "Tubes",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-guitar-amps/amplifier_tubes.jpg",
    alt: "",
    subcategories: tubesData,
  },
  {
    title: "1x12 Cabinets",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-guitar-amps/1x12_guitar_cab.jpg",
    alt: "",
    items: getProductsByCategory("1x12 electric guitar amp head cabinet"),
  },
  {
    title: "2x12 Cabinets",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-guitar-amps/2x12_guitar_cab.jpg",
    alt: "",
    items: getProductsByCategory("2x12 electric guitar amp head cabinet"),
  },
  {
    title: "4x12 Cabinets",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-guitar-amps/4x12_guitar_cab.jpg",
    alt: "",
    items: getProductsByCategory("4x12 electric guitar amp head cabinet"),
  },
  {
    title: "Guitar Amplifiers Cover Bags",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-guitar-amps/amp_cover_bag.jpg",
    alt: "",
    items: getProductsByCategory("guitar amp cover bag"),
  },
];

export default electricGuitarAmplifiersSubcategories;

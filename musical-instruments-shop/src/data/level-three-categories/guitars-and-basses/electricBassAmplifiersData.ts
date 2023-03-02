import bassAmplifierHeadsSubcategories from "../../level-four-categories/guitar-and-basses/amplifiers/bassAmpliferHeads";
import bassAmplifiersSubcategories from "../../level-four-categories/guitar-and-basses/amplifiers/bassAmplifiers";
import getProductsByCategory from "../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    title: "Bass Combo Amplifiers",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-bass-amps/bass_combo_amplifier.jpg",
    alt: "",
    subcategories: bassAmplifiersSubcategories,
  },
  {
    title: "Bass Amplifier Heads",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-bass-amps/bass_amplifier_head.jpg",
    alt: "",
    subcategories: bassAmplifierHeadsSubcategories,
  },
  {
    title: "Bass Preamplifiers",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-bass-amps/bass_preamplifier.jpg",
    alt: "",
    items: getProductsByCategory("electric bass preamp"),
  },
  {
    title: "1x15 Bass Cabinets",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-bass-amps/1x15_bass_cab.jpg",
    alt: "",
    items: getProductsByCategory("1x15 electric bass amp head cabinet"),
  },
  {
    title: "2x10 Bass Cabinets",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-bass-amps/2x10_bass_cab.jpg",
    alt: "",
    items: getProductsByCategory("2x10 electric bass amp head cabinet"),
  },
  {
    title: "4x10 Bass Cabinets",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-bass-amps/4x10_bass_cab.jpg",
    alt: "",
    items: getProductsByCategory("4x10 electric bass amp head cabinet"),
  },
  {
    title: "8x10 Bass Cabinets",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-bass-amps/8x10_bass_cab.jpg",
    alt: "",
    items: getProductsByCategory("8x10 electric bass amp head cabinet"),
  },
  {
    title: "Amplifier Cover Bags",
    src: "/images/categories/level-three-categories/guitars-and-basses/electric-bass-amps/amp_cover_bag.jpg",
    alt: "",
    items: getProductsByCategory("electric bass amp cover bag"),
  },
];

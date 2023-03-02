import electricGuitarStringsSubcategories from "../../level-four-categories/guitar-and-basses/strings/electricGuitarStringsData";
import acousticGuitarStringsSubcategories from "../../level-four-categories/guitar-and-basses/strings/acousticGuitarStringsData";
import electricBassStringsSubcategories from "../../level-four-categories/guitar-and-basses/strings/electricBassStringsData";
import getProductsByCategory from "../../../functions/get-data-functions/getProductsByCategory";

const stringsSubcategories = [
  {
    title: "Electric Guitar Strings",
    src: "/images/categories/level-three-categories/guitars-and-basses/strings/electric_guitar_strings.jpg",
    alt: "",
    subcategories: electricGuitarStringsSubcategories,
  },
  {
    title: "Acoustic Guitar Strings",
    src: "/images/categories/level-three-categories/guitars-and-basses/strings/acoustic_guitar_strings.jpg",
    alt: "",
    subcategories: acousticGuitarStringsSubcategories,
  },
  {
    title: "Classic Guitar Strings",
    src: "/images/categories/level-three-categories/guitars-and-basses/strings/classic_guitar_strings.jpg",
    alt: "",
    items: getProductsByCategory("classic guitar strings"),
  },
  {
    title: "Electric Bass Strings",
    src: "/images/categories/level-three-categories/guitars-and-basses/strings/electric_bass_strings.jpg",
    alt: "",
    subcategories: electricBassStringsSubcategories,
  },
  {
    title: "Acoustic Bass Strings",
    src: "/images/categories/level-three-categories/guitars-and-basses/strings/acoustic_bass_strings.jpg",
    alt: "",
    items: getProductsByCategory("acoustic bass strings"),
  },
  {
    title: "Ukulele Strings",
    src: "/images/categories/level-three-categories/guitars-and-basses/ukulele/ukulele_strings.jpg",
    alt: "",
    items: getProductsByCategory("ukulele strings"),
  },
];

export default stringsSubcategories;

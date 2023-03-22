import electricGuitarStringsSubcategories from "../../level-four-categories/guitar-and-basses/strings/electricGuitarStringsData";
import acousticGuitarStringsSubcategories from "../../level-four-categories/guitar-and-basses/strings/acousticGuitarStringsData";
import electricBassStringsSubcategories from "../../level-four-categories/guitar-and-basses/strings/electricBassStringsData";
import getProductsByCategory from "../../../functions/get-data-functions/getProductsByCategory";
// brands
import acousticGuitarStringBrands from "../../logo-data/guitar-and-basses-brands/strings/acousticGuitarStringsBrands.json";
import electricBassStringBrands from "../../logo-data/guitar-and-basses-brands/strings/electricBassStringsBrands.json";
import electricGuitarStringBrands from "../../logo-data/guitar-and-basses-brands/strings/electricGuitarStringsBrands.json";

export default [
  {
    title: "Electric Guitar Strings",
    src: "/images/categories/level-three-categories/guitars-and-basses/strings/electric_guitar_strings.jpg",
    alt: "",
    subcategories: electricGuitarStringsSubcategories,
    brands: electricGuitarStringBrands,
  },
  {
    title: "Acoustic Guitar Strings",
    src: "/images/categories/level-three-categories/guitars-and-basses/strings/acoustic_guitar_strings.jpg",
    alt: "",
    subcategories: acousticGuitarStringsSubcategories,
    brands: acousticGuitarStringBrands,
  },
  {
    title: "Classic Guitar Strings",
    src: "/images/categories/level-three-categories/guitars-and-basses/strings/classic_guitar_strings.jpg",
    alt: "",
    items: getProductsByCategory("classic guitar strings"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Electric Bass Strings",
    src: "/images/categories/level-three-categories/guitars-and-basses/strings/electric_bass_strings.jpg",
    alt: "",
    subcategories: electricBassStringsSubcategories,
    brands: electricBassStringBrands,
  },
  {
    title: "Acoustic Bass Strings",
    src: "/images/categories/level-three-categories/guitars-and-basses/strings/acoustic_bass_strings.jpg",
    alt: "",
    items: getProductsByCategory("acoustic bass strings"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Ukulele Strings",
    src: "/images/categories/level-three-categories/guitars-and-basses/ukulele/ukulele_strings.jpg",
    alt: "",
    items: getProductsByCategory("ukulele strings"),
    subcategories: [],
    brands: [],
  },
];

import getStoreProducts from "../../../../functions/get-data-functions/getStoreProducts";
import electricBassStringBrands from "../../../logo-data/guitar-and-basses-brands/strings/electricBassStringsBrands.json";

export default {
  title: "Electric Bass Strings",
  brands: electricBassStringBrands,
  subcategories: [
    {
      title: "0.40 Bass Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/electric-bass-strings/040_electric_bass_strings.jpg",
      alt: "A pack of 0.40-100 gauge strings for electric basses",
      items: getStoreProducts("0.40 electric bass strings"),
    },
    {
      title: "0.45 Bass Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/electric-bass-strings/045_electric_bass_strings.jpg",
      alt: "A pack of 0.45-105 gauge strings for electric basses",
      items: getStoreProducts("0.45 electric bass strings"),
    },
    {
      title: "0.50 Bass Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/electric-bass-strings/050_electric_bass_strings.jpg",
      alt: "A pack of 0.50-110 gauge strings for electric basses",
      items: getStoreProducts("0.50 electric bass strings"),
    },
    {
      title: "5 Strings Bass Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/electric-bass-strings/5_strings_electric_bass_strings.jpg",
      alt: "A pack of 0.45-130 gauge strings for electric basses with 5 strings",
      items: getStoreProducts("5 strings electric bass strings"),
    },
  ],
};

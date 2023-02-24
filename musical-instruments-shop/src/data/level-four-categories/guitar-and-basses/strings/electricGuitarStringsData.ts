import getStoreProducts from "../../../../functions/get-data-functions/getStoreProducts";
import electricGuitarStringBrands from "../../../logo-data/guitar-and-basses-brands/strings/electricGuitarStringsBrands.json";

export default {
  title: "Electric Guitar Strings",
  brands: electricGuitarStringBrands,
  subcategories: [
    {
      title: "0.08 Electric Guitar Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/electric-guitar-strings/008_electric_guitar_strings.jpg",
      alt: "0.8 gauge electric guitar strings pack",
      items: getStoreProducts("0.08 electric guitar strings"),
    },
    {
      title: "0.09 Electric Guitar Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/electric-guitar-strings/009_electric_guitar_strings.jpg",
      alt: "0.9 gauge electric guitar strings pack",
      items: getStoreProducts("0.09 electric guitar strings"),
    },
    {
      title: "0.10 Electric Guitar Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/electric-guitar-strings/010_electric_guitar_strings.jpg",
      alt: "0.10 gauge electric guitar strings pack",
      items: getStoreProducts("0.10 electric guitar strings"),
    },
    {
      title: "0.11 Electric Guitar Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/electric-guitar-strings/011_electric_guitar_strings.jpg",
      alt: "0.11 gauge electric guitar strings pack",
      items: getStoreProducts("0.11 electric guitar strings"),
    },
    {
      title: "7 Strings Electric Guitar Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/electric-guitar-strings/7_strings_electric_guitar_strings.jpg",
      alt: "A pack of strings for electric guitars with 7 strings",
      items: getStoreProducts("7 strings electric guitar strings"),
    },
    {
      title: "8 Strings Electric Guitar Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/electric-guitar-strings/8_strings_electric_guitar_strings.jpg",
      alt: "A pack of strings for electric guitars with 8 strings",
      items: getStoreProducts("8 strings electric guitar strings"),
    },
    {
      title: "12 Strings Electric Guitar Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/electric-guitar-strings/12_strings_electric_guitar_strings.jpg",
      alt: "A pack of strings for electric guitars with 12 strings",
      items: getStoreProducts("12 strings electric guitar strings"),
    },
  ],
};

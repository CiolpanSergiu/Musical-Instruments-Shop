import getStoreProducts from "../../../../functions/get-data-functions/getStoreProducts";
import acousticGuitarStringBrands from "../../../logo-data/guitar-and-basses-brands/strings/acousticGuitarStringsBrands.json";

export default {
  title: "Acoustic Guitar Strings",
  brands: acousticGuitarStringBrands,
  subcategories: [
    {
      title: "0.10 Acoustic Guitar Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/acoustic-guitar-strings/010_acoustic_guitar_strings.jpg",
      alt: "A pack of 0.10 gauge strings for acoustic guitars",
      items: getStoreProducts("0.10 acoustic guitar strings"),
    },
    {
      title: "0.11 Acoustic Guitar Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/acoustic-guitar-strings/011_acoustic_guitar_strings.jpg",
      alt: "A pack of 0.11 gauge strings for acoustic guitars",
      items: getStoreProducts("0.11 acoustic guitar strings"),
    },
    {
      title: "0.12 Acoustic Guitar Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/acoustic-guitar-strings/012_acoustic_guitar_strings.jpg",
      alt: "A pack of 0.12 gauge strings for acoustic guitars",
      items: getStoreProducts("0.12 acoustic guitar strings"),
    },
    {
      title: "0.13 Acoustic Guitar Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/acoustic-guitar-strings/013_acoustic_guitar_strings.jpg",
      alt: "A pack of 0.13 gauge strings for acoustic guitars",
      items: getStoreProducts("0.13 acoustic guitar strings"),
    },
    {
      title: "12 Strings Acoustic Guitar Strings",
      src: "/images/categories/level-four-categories/guitars-and-basses/strings/acoustic-guitar-strings/12_strings_acoustic_guitar_strings.jpg",
      alt: "A pack of 12 strings for acoustic guitars with 12 strings",
      items: getStoreProducts("12 strings acoustic guitar strings"),
    },
  ],
};

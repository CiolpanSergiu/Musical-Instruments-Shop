import getStoreProducts from "../../../../functions/get-data-functions/getStoreProducts";
import coverBagsAndCaseseBrands from "../../../logo-data/guitar-and-basses-brands/accesories/coverBagsAndCasesBrands.json";

export default {
  pageLink: "/guitar-and-bass-covers-and-cases",
  title: "Guitar and Bass Cover Bags and Cases",
  brands: coverBagsAndCaseseBrands,
  subcategories: [
    {
      title: "Electric Guitar Cases",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/cover-bags-and-cases/electric_guitar_case.jpg",
      alt: "A black case for electric guitars",
      items: getStoreProducts("electric guitar case"),
    },
    {
      title: "Acoustic Guitar Cases",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/cover-bags-and-cases/acoustic_guitar_case.jpg",
      alt: "A black case for acoustic guitars",
      items: getStoreProducts("acoustic guitar case"),
    },
    {
      title: "Electric Bass Cases",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/cover-bags-and-cases/electric_bass_case.jpg",
      alt: "A black case for electric basses",
      items: getStoreProducts("electric bass case"),
    },
    {
      title: "Acoustic Bass Cases",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/cover-bags-and-cases/acoustic_bass_case.jpg",
      alt: "A black case for acoustic basses",
      items: getStoreProducts("acoustic bass case"),
    },
    {
      title: "Electric Guitar Cover Bags",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/cover-bags-and-cases/electric_guitar_cover_bag.jpg",
      alt: "A black cover bag for electric guitars",
      items: getStoreProducts("electric guitar cover bag"),
    },
    {
      title: "Acoustic Guitar Cover Bags",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/cover-bags-and-cases/acoustic_guitar_cover_bag.jpg",
      alt: "A black cover bag for acoustic guitars",
      items: getStoreProducts("acoustic guitar cover bag"),
    },
    {
      title: "Electric Bass Cover Bags",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/cover-bags-and-cases/electric_bass_cover_bag.jpg",
      alt: "A black cover bag for electric basses",
      items: getStoreProducts("electric bass cover bag"),
    },
    {
      title: "Acoustic Bass Cover Bags",
      src: "/images/categories/level-four-categories/guitars-and-basses/accesories/cover-bags-and-cases/acoustic_bass_cover_bag.jpg",
      alt: "A black cover bag for acoustic basses",
      items: getStoreProducts("acoustic bass cover bag"),
    },
  ],
};

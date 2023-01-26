// subcategories
import chairsSubcategories from "../LevelThreeCategories/Accesories/chairsData.json";
import headphonesSubcategories from "../LevelThreeCategories/Accesories/headphonesData.json";
import powerSupplySubcategories from "../LevelThreeCategories/Accesories/powerSuppliesData.json";
import standsSubcategories from "../LevelThreeCategories/Accesories/stands";
// brands
import headphonesBrands from "../LogoData/AccesoriesBrands/Headphones/headphones.json";
import chairsBrands from "../LogoData/AccesoriesBrands/Chairs/chairBrands.json";
import powerSuppliesBrands from "../LogoData/AccesoriesBrands/PowerSupplies/powerSuppliesBrands.json";
import standsBrands from "../LogoData/AccesoriesBrands/Stands/standsBrands.json";

const musicalAccesoriesData = [
  {
    src: "/images/category/LevelTwoCategories/Accesories/headphone.jpg",
    alt: "A set of headphones",
    title: "Headphones",
    pageLink: "/headphones",
    subcategories: headphonesSubcategories,
    brands: headphonesBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/Accesories/battery.jpg",
    alt: "A set of two batteries",
    title: "Accumulators/Batteries",
    pageLink: "/accumulators-batteries",
  },
  {
    src: "/images/category/LevelTwoCategories/Accesories/extension_cord.jpg",
    alt: "An extension cord",
    title: "Extension Cords",
    pageLink: "/extension-cords",
  },
  {
    src: "/images/category/LevelTwoCategories/Accesories/metronome.jpg",
    alt: "A metronome",
    title: "Metronomes",
    pageLink: "/metronomes",
  },
  {
    src: "/images/category/LevelTwoCategories/Accesories/tunner.jpg",
    alt: "A guitar tunner",
    title: "Tunners",
    pageLink: "/tunners",
  },
  {
    src: "/images/category/LevelTwoCategories/Accesories/musician_chair.jpg",
    alt: "A chair for musicians",
    title: "Chairs",
    pageLink: "/chairs",
    subcategories: chairsSubcategories,
    brands: chairsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/Accesories/power_supply.jpg",
    alt: "A power supply",
    title: "Power Supplies",
    pageLink: "/power-supplies",
    subcategories: powerSupplySubcategories,
    brands: powerSuppliesBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/Accesories/stand.jpg",
    alt: "An instrument stand",
    title: "Stands",
    pageLink: "/stands",
    subcategories: standsSubcategories,
    brands: standsBrands,
  },
];

export default musicalAccesoriesData;

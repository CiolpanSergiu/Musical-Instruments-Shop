// subcategories
import chairsSubcategories from "../level-three-categories/accesories/chairsData";
import headphonesSubcategories from "../level-three-categories/accesories/headphonesData";
import powerSupplySubcategories from "../level-three-categories/accesories/powerSuppliesData";
import standsSubcategories from "../level-three-categories/accesories/stands";
// brands
import headphonesBrands from "../logo-data/accesories-brands/headphones/headphones.json";
import chairsBrands from "../logo-data/accesories-brands/chairs/chairBrands.json";
import powerSuppliesBrands from "../logo-data/accesories-brands/power-supplies/powerSuppliesBrands.json";
import standsBrands from "../logo-data/accesories-brands/stands/standsBrands.json";

const musicalaccesoriesData = [
  {
    src: "/images/categories/level-two-categories/accesories/headphone.jpg",
    alt: "A set of headphones",
    title: "Headphones",
    subcategories: headphonesSubcategories,
    brands: headphonesBrands,
  },
  {
    src: "/images/categories/level-two-categories/accesories/battery.jpg",
    alt: "A set of two batteries",
    title: "Accumulators / Batteries",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/accesories/extension_cord.jpg",
    alt: "An extension cord",
    title: "Extension Cords",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/accesories/metronome.jpg",
    alt: "A metronome",
    title: "Metronomes",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/accesories/tunner.jpg",
    alt: "A guitar tunner",
    title: "Tunners",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/accesories/musician_chair.jpg",
    alt: "A chair for musicians",
    title: "Chairs",
    subcategories: chairsSubcategories,
    brands: chairsBrands,
  },
  {
    src: "/images/categories/level-two-categories/accesories/power_supply.jpg",
    alt: "A power supply",
    title: "Power Supplies",
    subcategories: powerSupplySubcategories,
    brands: powerSuppliesBrands,
  },
  {
    src: "/images/categories/level-two-categories/accesories/stand.jpg",
    alt: "An instrument stand",
    title: "Stands",
    subcategories: standsSubcategories,
    brands: standsBrands,
  },
];

export default musicalaccesoriesData;

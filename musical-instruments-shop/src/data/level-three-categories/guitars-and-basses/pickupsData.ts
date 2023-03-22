import electricBassPickupsSubcategories from "../../level-four-categories/guitar-and-basses/pickpups/electricBassPickupsData";
import electricGuitarPickupsSubcategories from "../../level-four-categories/guitar-and-basses/pickpups/electricGuitarPickupsData";
// brands
import electricBassPickupsBrands from "../../logo-data/guitar-and-basses-brands/pickups/bassPickupsBrands.json";
import electricGuitarPickupsBrands from "../../logo-data/guitar-and-basses-brands/pickups/pickupsBrands.json";

export default [
  {
    title: "Electric Guitar Pickups",
    src: "/images/categories/level-three-categories/guitars-and-basses/pickups/electric_guitar_pickups.jpg",
    alt: "",
    pageLink: "/electric-guitar-pickups",
    subcategories: electricGuitarPickupsSubcategories,
    brands: electricGuitarPickupsBrands,
  },
  {
    title: "Electric Bass Pickups",
    src: "/images/categories/level-three-categories/guitars-and-basses/pickups/bass_pickups.jpg",
    alt: "",
    pageLink: "/electric-bass-pickups",
    subcategories: electricBassPickupsSubcategories,
    brands: electricBassPickupsBrands,
  },
];

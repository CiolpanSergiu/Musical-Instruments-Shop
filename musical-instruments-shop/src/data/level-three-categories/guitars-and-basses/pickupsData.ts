import electricBassPickupsSubcategories from "../../level-four-categories/guitar-and-basses/pickpups/electricBassPickupsData";
import electricGuitarPickupsSubcategories from "../../level-four-categories/guitar-and-basses/pickpups/electricGuitarPickupsData";

const pickupsSubcategories = [
  {
    title: "Electric Guitar Pickups",
    src: "/images/category/LevelThreeCategories/GuitarsAndBasses/Pickups/electric_guitar_pickups.jpg",
    alt: "",
    pageLink: "/electric-guitar-pickups",
    subcategories: electricGuitarPickupsSubcategories,
  },
  {
    title: "Electric Bass Pickups",
    src: "/images/category/LevelThreeCategories/GuitarsAndBasses/Pickups/bass_pickups.jpg",
    alt: "",
    pageLink: "/electric-bass-pickups",
    subcategories: electricBassPickupsSubcategories,
  },
];

export default pickupsSubcategories;

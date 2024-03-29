import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";

export default [
  {
    title: "Single Coil Pickups",
    src: "/images/categories/level-four-categories/guitars-and-basses/pickups/guitar-pickups/single_coil_guitar_pickup.jpg",
    alt: "A single coil electric guitar pickup",
    items: getProductsByCategory("single coil pickup"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Humbucker Pickups",
    src: "/images/categories/level-four-categories/guitars-and-basses/pickups/guitar-pickups/humbucker_guitar_pickup.jpg",
    alt: "A pair of humbuckers for electric guitars",
    items: getProductsByCategory("humbucker pickup"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Pickups for 7 Strings Guitars",
    src: "/images/categories/level-four-categories/guitars-and-basses/pickups/guitar-pickups/7_strings_guitar_pickup.jpg",
    alt: "A humbucker for 7 strings electric guitars",
    items: getProductsByCategory("7 strings guitar pickup"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Pickups for 8 Strings Guitars",
    src: "/images/categories/level-four-categories/guitars-and-basses/pickups/guitar-pickups/8_strings_guitar_pickup.jpg",
    alt: "A humbucker for 8 strings electric guitars",
    items: getProductsByCategory("8 strings guitar pickup"),
    subcategories: [],
    brands: [],
  },
];

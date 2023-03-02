import getProductsByCategory from "../../../../functions/get-data-functions/getProductsByCategory";
import electricBassPickupsBrands from "../../../logo-data/guitar-and-basses-brands/pickups/bassPickupsBrands.json";

export default {
  title: "Electric Bass Pickups",
  brands: electricBassPickupsBrands,
  subcategories: [
    {
      title: "4 Strings J Bass Pickups",
      src: "/images/categories/level-four-categories/guitars-and-basses/pickups/bass-pickups/4_strings_j_bass_pickup.jpg",
      alt: "A pickup for 4 strings Jazz Basses",
      items: getProductsByCategory("4 strings j bass pickup"),
    },
    {
      title: "5 Strings J Bass Pickups",
      src: "/images/categories/level-four-categories/guitars-and-basses/pickups/bass-pickups/5_strings_j_bass_pickup.jpg",
      alt: "A pickup for 5 strings Jzz Basses",
      items: getProductsByCategory("5 strings j bass pickup"),
    },
    {
      title: "4 Strings P Bass Pickups",
      src: "/images/categories/level-four-categories/guitars-and-basses/pickups/bass-pickups/4_strings_p_bass_pickup.jpg",
      alt: "A pickup for 4 strings Precision Basses",
      items: getProductsByCategory("4 strings p bass pickup"),
    },
    {
      title: "5 Strings P Bass Pickups",
      src: "/images/categories/level-four-categories/guitars-and-basses/pickups/bass-pickups/5_strings_p_bass_pickup.jpg",
      alt: "A pickup for 5 strings Precision Basses",
      items: getProductsByCategory("5 strings p bass pickup"),
    },
  ],
};

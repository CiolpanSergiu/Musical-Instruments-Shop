import getStoreProducts from "../../../../functions/get-data-functions/getStoreProducts";
import electricGuitarPickupsBrands from "../../../logo-data/guitar-and-basses-brands/pickups/pickupsBrands.json";

export default {
  title: "Electric Guitar Pickups",
  brands: electricGuitarPickupsBrands,
  subcategories: [
    {
      title: "Single Coil Pickups",
      src: "/images/categories/level-four-categories/guitars-and-basses/pickups/guitar-pickups/single_coil_guitar_pickup.jpg",
      alt: "A single coil electric guitar pickup",
      items: getStoreProducts("single coil pickup"),
    },
    {
      title: "Humbucker Pickups",
      src: "/images/categories/level-four-categories/guitars-and-basses/pickups/guitar-pickups/humbucker_guitar_pickup.jpg",
      alt: "A pair of humbuckers for electric guitars",
      items: getStoreProducts("humbucker pickup"),
    },
    {
      title: "Pickups for 7 Strings Guitars",
      src: "/images/categories/level-four-categories/guitars-and-basses/pickups/guitar-pickups/7_strings_guitar_pickup.jpg",
      alt: "A humbucker for 7 strings electric guitars",
      items: getStoreProducts("7 strings guitar pickup"),
    },
    {
      title: "Pickups for 8 Strings Guitars",
      src: "/images/categories/level-four-categories/guitars-and-basses/pickups/guitar-pickups/8_strings_guitar_pickup.jpg",
      alt: "A humbucker for 8 strings electric guitars",
      items: getStoreProducts("8 strings guitar pickup"),
    },
  ],
};

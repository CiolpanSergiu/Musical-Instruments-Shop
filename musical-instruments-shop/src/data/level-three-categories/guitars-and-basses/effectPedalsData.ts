import getProductsByCategory from "../../../functions/get-data-functions/getProductsByCategory";
// this is mostly for products that can be included in 2 or more categories
// for eg: a pedal for chorus, flanger and phaser simultaneously
import removeDuplicatedProducts from "../../../functions/get-data-functions/removeDuplicatedProducts";

export default [
  {
    title: "Multi Effect Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_multi_effect_pedal.jpg",
    alt: "",
    items: getProductsByCategory("multi effect pedal"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Distortion Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_distortion_pedal.jpg",
    alt: "",
    items: removeDuplicatedProducts(
      [
        getProductsByCategory("distortion pedal"),
        getProductsByCategory("fuzz pedal"),
        getProductsByCategory("overdrive pedal"),
      ].flat(1)
    ),
    subcategories: [],
    brands: [],
  },
  {
    title: "Chorus / Flanger / Phaser Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_chorus_pedal.jpg",
    alt: "",
    items: removeDuplicatedProducts(
      [
        getProductsByCategory("chorus pedal"),
        getProductsByCategory("flanger pedal"),
        getProductsByCategory("phaser pedal"),
      ].flat(1)
    ),
    subcategories: [],
    brands: [],
  },
  {
    title: "Delay Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_delay_pedal.jpg",
    alt: "",
    items: getProductsByCategory("delay pedal"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Reverb Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_reverb_pedal.jpg",
    alt: "",
    items: getProductsByCategory("reverb pedal"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Compressor Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_compressor_pedal.jpg",
    alt: "",
    items: getProductsByCategory("compressor pedal"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Wah Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_wah_pedal.jpg",
    alt: "",
    items: getProductsByCategory("wah pedal"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Loop Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_loop_pedal.jpg",
    alt: "",
    items: getProductsByCategory("loop pedal"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Volume and Expression Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_volume_pedal.jpg",
    alt: "",
    items: removeDuplicatedProducts(
      [
        getProductsByCategory("volume pedal"),
        getProductsByCategory("expression pedal"),
      ].flat(1)
    ),
    subcategories: [],
    brands: [],
  },
  {
    title: "Bands EQ Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_eq_pedal.jpg",
    alt: "",
    items: getProductsByCategory("bands eq pedal"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Pedal Boards",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/pedal_board.jpg",
    alt: "",
    items: getProductsByCategory("pedalboard"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Pedal Cables",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/pedal_cable.jpg",
    alt: "",
    items: getProductsByCategory("pedal cable"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Power Supplies",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/pedal_power_supply.jpg",
    alt: "",
    items: getProductsByCategory("power supply"),
    subcategories: [],
    brands: [],
  },
];

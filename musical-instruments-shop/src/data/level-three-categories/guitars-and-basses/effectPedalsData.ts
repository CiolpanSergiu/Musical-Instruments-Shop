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
  },
  {
    title: "Delay Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_delay_pedal.jpg",
    alt: "",
    items: getProductsByCategory("delay pedal"),
  },
  {
    title: "Reverb Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_reverb_pedal.jpg",
    alt: "",
    items: getProductsByCategory("reverb pedal"),
  },
  {
    title: "Compressor Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_compressor_pedal.jpg",
    alt: "",
    items: getProductsByCategory("compressor pedal"),
  },
  {
    title: "Wah Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_wah_pedal.jpg",
    alt: "",
    items: getProductsByCategory("wah pedal"),
  },
  {
    title: "Loop Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_loop_pedal.jpg",
    alt: "",
    items: getProductsByCategory("loop pedal"),
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
  },
  {
    title: "Bands EQ Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_eq_pedal.jpg",
    alt: "",
    items: getProductsByCategory("bands eq pedal"),
  },
  {
    title: "Pedal Boards",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/pedal_board.jpg",
    alt: "",
    items: getProductsByCategory("pedalboard"),
  },
  {
    title: "Pedal Cables",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/pedal_cable.jpg",
    alt: "",
    items: getProductsByCategory("pedal cable"),
  },
  {
    title: "Power Supplies",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/pedal_power_supply.jpg",
    alt: "",
    items: getProductsByCategory("power supply"),
  },
];

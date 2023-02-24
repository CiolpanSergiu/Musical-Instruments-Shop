import getStoreProducts from "../../../functions/get-data-functions/getStoreProducts";
// this is mostly for products that can be included in 2 or more categories
// for eg: a pedal for chorus, flanger and phaser simultaneously
import removeDuplicatedProducts from "../../../functions/get-data-functions/removeDuplicatedProducts";

export default [
  {
    title: "Multi Effect Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_multi_effect_pedal.jpg",
    alt: "",
    items: getStoreProducts("multi effect pedal"),
  },
  {
    title: "Distortion Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_distortion_pedal.jpg",
    alt: "",
    items: removeDuplicatedProducts(
      [
        getStoreProducts("distortion pedal"),
        getStoreProducts("fuzz pedal"),
        getStoreProducts("overdrive pedal"),
      ].flat(1)
    ),
  },
  {
    title: "Chorus / Flanger / Phaser Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_chorus_pedal.jpg",
    alt: "",
    items: removeDuplicatedProducts(
      [
        getStoreProducts("chorus pedal"),
        getStoreProducts("flanger pedal"),
        getStoreProducts("phaser pedal"),
      ].flat(1)
    ),
  },
  {
    title: "Delay Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_delay_pedal.jpg",
    alt: "",
    items: getStoreProducts("delay pedal"),
  },
  {
    title: "Reverb Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_reverb_pedal.jpg",
    alt: "",
    items: getStoreProducts("reverb pedal"),
  },
  {
    title: "Compressor Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_compressor_pedal.jpg",
    alt: "",
    items: getStoreProducts("compressor pedal"),
  },
  {
    title: "Wah Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_wah_pedal.jpg",
    alt: "",
    items: getStoreProducts("wah pedal"),
  },
  {
    title: "Loop Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_loop_pedal.jpg",
    alt: "",
    items: getStoreProducts("loop pedal"),
  },
  {
    title: "Volume and Expression Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_volume_pedal.jpg",
    alt: "",
    items: removeDuplicatedProducts(
      [
        getStoreProducts("volume pedal"),
        getStoreProducts("expression pedal"),
      ].flat(1)
    ),
  },
  {
    title: "Bands EQ Pedals",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/guitar_eq_pedal.jpg",
    alt: "",
    items: getStoreProducts("bands eq pedal"),
  },
  {
    title: "Pedal Boards",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/pedal_board.jpg",
    alt: "",
    items: getStoreProducts("pedalboard"),
  },
  {
    title: "Pedal Cables",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/pedal_cable.jpg",
    alt: "",
    items: getStoreProducts("pedal cable"),
  },
  {
    title: "Power Supplies",
    src: "/images/categories/level-three-categories/guitars-and-basses/effect-pedals/pedal_power_supply.jpg",
    alt: "",
    items: getStoreProducts("power supply"),
  },
];

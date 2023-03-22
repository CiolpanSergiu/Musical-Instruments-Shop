import getProductsByCategory from "../../../functions/get-data-functions/getProductsByCategory";
import bassPickGuardsSubcategories from "../../level-four-categories/guitar-and-basses/spare-parts/bassPickGuardsData";
import guitarPickGuardsSubcategories from "../../level-four-categories/guitar-and-basses/spare-parts/guitarPickGuardsData";
import bridgesAndTailpiecesSubcategories from "../../level-four-categories/guitar-and-basses/spare-parts/saddlesAndTailpiecesData";
import switchesSubcategories from "../../level-four-categories/guitar-and-basses/spare-parts/switchesData";
import tremoloBridgesSubcategories from "../../level-four-categories/guitar-and-basses/spare-parts/tremoloBridgeData";
// brands
import bassPickGuardBrands from "../../logo-data/guitar-and-basses-brands/spare-parts/bassPickGuardBrands.json";
import guitarPickGuardBrands from "../../logo-data/guitar-and-basses-brands/spare-parts/guitarPickGuardBrands.json";
import saddleAndTailpieceBrands from "../../logo-data/guitar-and-basses-brands/spare-parts/bridgesAndTailpiecesBrands.json";
import switchesBrands from "../../logo-data/guitar-and-basses-brands/spare-parts/switchesBrands.json";
import tremoloBrands from "../../logo-data/guitar-and-basses-brands/spare-parts/tremoloBrands.json";

export default [
  {
    title: "Electric Guitar Necks",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_guitar_neck.jpg",
    alt: "",
    items: getProductsByCategory("electric guitar neck"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Electric Bass Necks",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_bass_neck.jpg",
    alt: "",
    items: getProductsByCategory("electric bass neck"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Electric Guitar Bodies",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_guitar_body.jpg",
    alt: "",
    items: getProductsByCategory("electric guitar body"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Electric Bass Bodies",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_bass_body.jpg",
    alt: "",
    items: getProductsByCategory("electric bass body"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Electric Guitar Pick Guards",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_guitar_guard.jpg",
    alt: "",
    subcategories: guitarPickGuardsSubcategories,
    brands: guitarPickGuardBrands,
  },
  {
    title: "Electric Bass Pick Guards",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_bass_pick_guard.jpg",
    alt: "",
    subcategories: bassPickGuardsSubcategories,
    brands: bassPickGuardBrands,
  },
  {
    title: "Knobs",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/guitar_knobs.jpg",
    alt: "",
    items: getProductsByCategory("knob"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Switches",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_guitar_switch.jpg",
    alt: "",
    subcategories: switchesSubcategories,
    brands: switchesBrands,
  },
  {
    title: "Saddles and Tailpieces",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/guitar_tailpiece.jpg",
    alt: "",
    subcategories: bridgesAndTailpiecesSubcategories,
    brands: saddleAndTailpieceBrands,
  },
  {
    title: "Guitar Tremolo Bridges",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/guitar_tremolo_bridge.jpg",
    alt: "",
    subcategories: tremoloBridgesSubcategories,
    brands: tremoloBrands,
  },
  {
    title: "Jack Plates",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/jack_plate.jpg",
    alt: "",
    items: getProductsByCategory("jack plate"),
    subcategories: [],
    brands: [],
  },
  {
    title: "Tuning Pegs",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/guitar_pegs.jpg",
    alt: "",
    items: getProductsByCategory("tuning peg"),
    subcategories: [],
    brands: [],
  },
];

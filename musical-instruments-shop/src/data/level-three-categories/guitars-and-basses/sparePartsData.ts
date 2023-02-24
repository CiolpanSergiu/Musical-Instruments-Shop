import getStoreProducts from "../../../functions/get-data-functions/getStoreProducts";
import bassPickGuardsSubcategories from "../../level-four-categories/guitar-and-basses/spare-parts/bassPickGuardsData";
import guitarPickGuardsSubcategories from "../../level-four-categories/guitar-and-basses/spare-parts/guitarPickGuardsData";
import saddleAndTailpiecesSubcategories from "../../level-four-categories/guitar-and-basses/spare-parts/saddlesAndTailpiecesData";
import switchesSubcategories from "../../level-four-categories/guitar-and-basses/spare-parts/switchesData";
import tremoloBridgesSubcategories from "../../level-four-categories/guitar-and-basses/spare-parts/tremoloBridgeData";

const changePartsSubcategories = [
  {
    title: "Electric Guitar Necks",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_guitar_neck.jpg",
    alt: "",
    items: getStoreProducts("electric guitar neck"),
  },
  {
    title: "Electric Bass Necks",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_bass_neck.jpg",
    alt: "",
    items: getStoreProducts("electric bass neck"),
  },
  {
    title: "Electric Guitar Bodies",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_guitar_body.jpg",
    alt: "",
    items: getStoreProducts("electric guitar body"),
  },
  {
    title: "Electric Bass Bodies",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_bass_body.jpg",
    alt: "",
    items: getStoreProducts("electric bass body"),
  },
  {
    title: "Electric Guitar Pick Guards",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_guitar_guard.jpg",
    alt: "",
    subcategories: guitarPickGuardsSubcategories,
  },
  {
    title: "Electric Bass Pick Guards",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_bass_pick_guard.jpg",
    alt: "",
    subcategories: bassPickGuardsSubcategories,
  },
  {
    title: "Knobs",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/guitar_knobs.jpg",
    alt: "",
    items: getStoreProducts("knob"),
  },
  {
    title: "Switches",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/electric_guitar_switch.jpg",
    alt: "",
    subcategories: switchesSubcategories,
  },
  {
    title: "Saddles and Tailpieces",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/guitar_tailpiece.jpg",
    alt: "",
    subcategories: saddleAndTailpiecesSubcategories,
  },
  {
    title: "Guitar Tremolo Bridges",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/guitar_tremolo_bridge.jpg",
    alt: "",
    subcategories: tremoloBridgesSubcategories,
  },
  {
    title: "Jack Plates",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/jack_plate.jpg",
    alt: "",
    items: getStoreProducts("jack plate"),
  },
  {
    title: "Tuning Pegs",
    src: "/images/categories/level-three-categories/guitars-and-basses/spare-parts/guitar_pegs.jpg",
    alt: "",
    items: getStoreProducts("tuning peg"),
  },
];

export default changePartsSubcategories;

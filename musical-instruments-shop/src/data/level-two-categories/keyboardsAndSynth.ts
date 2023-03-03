// subcategories
import keyboardsSubcategories from "../level-three-categories/keyboards-and-synth/keyboardsData";
import synthesizerSubcategories from "../level-three-categories/keyboards-and-synth/synthesizersData";
// brands
import keyboardBrands from "../logo-data/keyboard-and-synth-brands/keyboards/keyboardBrands.json";
import synthesizerBrands from "../logo-data/keyboard-and-synth-brands/synthesizers/synthesizerBrands.json";

const keyboardAndSynthData = [
  {
    src: "/images/categories/level-two-categories/keyboards-and-synth/keyboard.jpeg",
    alt: "A simple keyboard",
    title: "Keyboards / Keyboard Accesories",
    pageLink: "/keyboards",
    subcategories: keyboardsSubcategories,
    brands: keyboardBrands,
  },
  {
    src: "/images/categories/level-two-categories/keyboards-and-synth/synthesizer.jpg",
    alt: "A synthesizer",
    title: "Synthesizers / Synthesizers Accesories",
    pageLink: "/synthesizers",
    subcategories: synthesizerSubcategories,
    brands: synthesizerBrands,
  },
  {
    src: "/images/categories/level-two-categories/keyboards-and-synth/piano.jpg",
    alt: "A piano",
    title: "Pianos",
    pageLink: "/pianos",
  },
  {
    src: "/images/categories/level-two-categories/keyboards-and-synth/grand_piano.jpg",
    alt: "A grand piano",
    title: "Grand Pianos",
    pageLink: "/grand-pianos",
  },
  {
    src: "/images/categories/level-two-categories/keyboards-and-synth/digital_piano.jpg",
    alt: "A digital piano",
    title: "Digital Pianos",
    pageLink: "/digital-pianos",
  },
  {
    src: "/images/categories/level-two-categories/keyboards-and-synth/stage_piano.jpg",
    alt: "A stage piano",
    title: "Stage Pianos",
    pageLink: "/stage-pianos",
  },
  {
    src: "/images/categories/level-two-categories/keyboards-and-synth/electric_organ.jpg",
    alt: "An electric organ. A pipeless organ",
    title: "Electric Organs",
    pageLink: "/electric-organs",
  },
  {
    src: "/images/categories/level-two-categories/keyboards-and-synth/classic_organ.jpg",
    alt: "An old, classic, piped organ",
    title: "Classic Organs",
    pageLink: "/classic-organs",
  },
];

export default keyboardAndSynthData;

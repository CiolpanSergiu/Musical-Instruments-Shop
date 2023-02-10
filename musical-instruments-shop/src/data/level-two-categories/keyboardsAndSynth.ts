// subcategories
import keyboardsSubcategories from "../level-three-categories/keyboards-and-synth/keyboardsData.json";
import synthesizerSubcategories from "../level-three-categories/keyboards-and-synth/synthesizersData.json";
// brands
import keyboardBrands from "../logo-data/keyboard-and-synth-brands/keyboards/keyboardBrands.json";
import synthesizerBrands from "../logo-data/keyboard-and-synth-brands/synthesizers/synthesizerBrands.json";

const keyboardAndSynthData = [
  {
    src: "/images/category/LevelTwoCategories/KeyboardsAndSynth/keyboard.jpeg",
    alt: "A simple keyboard",
    title: "Keyboards",
    pageLink: "/keyboards",
    subcategories: keyboardsSubcategories,
    brands: keyboardBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/KeyboardsAndSynth/synthesizer.jpg",
    alt: "A synthesizer",
    title: "Synthesizers",
    pageLink: "/synthesizers",
    subcategories: synthesizerSubcategories,
    brands: synthesizerBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/KeyboardsAndSynth/piano.jpg",
    alt: "A piano",
    title: "Pianos",
    pageLink: "/pianos",
  },
  {
    src: "/images/category/LevelTwoCategories/KeyboardsAndSynth/grand_piano.jpg",
    alt: "A grand piano",
    title: "Grand Pianos",
    pageLink: "/grand-pianos",
  },
  {
    src: "/images/category/LevelTwoCategories/KeyboardsAndSynth/digital_piano.jpg",
    alt: "A digital piano",
    title: "Digital Pianos",
    pageLink: "/digital-pianos",
  },
  {
    src: "/images/category/LevelTwoCategories/KeyboardsAndSynth/stage_piano.jpg",
    alt: "A stage piano",
    title: "Stage Pianos",
    pageLink: "/stage-pianos",
  },
  {
    src: "/images/category/LevelTwoCategories/KeyboardsAndSynth/electric_organ.jpg",
    alt: "An electric organ. A pipeless organ",
    title: "Electric Organs",
    pageLink: "/electric-organs",
  },
  {
    src: "/images/category/LevelTwoCategories/KeyboardsAndSynth/classic_organ.jpg",
    alt: "An old, classic, piped organ",
    title: "Classic Organs",
    pageLink: "/classic-organs",
  },
];

export default keyboardAndSynthData;

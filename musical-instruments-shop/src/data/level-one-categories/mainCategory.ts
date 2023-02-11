// subcategories
import guitarsAndBassesData from "../level-two-categories/guitarsAndBasses";
import drumsAndPercussionData from "../level-two-categories/drumsAndPercussion";
import softwaresData from "../level-two-categories/softwares";
import musicalAccesories from "../level-two-categories/musicalAccesories";
import keyboardAndSynthData from "../level-two-categories/keyboardsAndSynth";
import microphonesData from "../level-two-categories/microphones";
import paSystemsData from "../level-two-categories/paSystemEquipments";
import recordingAndStudioData from "../level-two-categories/recordingAndStudioEquipments";
import traditionalInstrumentsData from "../level-two-categories/traditionalInstruments";
// brands
import guitarAndBassBrands from "../logo-data/guitar-and-basses-brands/mainCategoriesBrands.json";
import drumsAndPercussionBrands from "../logo-data/drums-and-percussion-brands/mainCategoriesBrands.json";
import softwareBrands from "../logo-data/software-brands/mainCategoriesBrands.json";
import accesoriesBrands from "../logo-data/accesories-brands/mainCategoriesBrands.json";
import keyboardAndSynthBrands from "../logo-data/keyboard-and-synth-brands/mainCategoriesBrands.json";
import microphoneBrands from "../logo-data/microphone-brands/mainCategoriesBrands.json";
import paSystemEquipmentBrands from "../logo-data/pa-systems-brands/mainCategoriesBrands.json";
import studioAndRecordingBrands from "../logo-data/recording-and-studio-brands/mainCategoriesBrands.json";
import traditionalInstrumentBrands from "../logo-data/traditional-instruments-brands/mainCategoriesBrands.json";

const categoriesData = [
  {
    src: "/images/categories/level-one-categories/guitars_basses.jpg",
    alt: "A stratocaster type electric guitar",
    title: "Guitars and Basses",
    pageLink: "/guitars-and-basses",
    subcategories: guitarsAndBassesData,
    brands: guitarAndBassBrands,
  },
  {
    src: "/images/categories/level-one-categories/drums_percussion.jpg",
    alt: "A Yamaha drum set",
    title: "Drums and Percussion",
    pageLink: "/drums-and-percussion",
    subcategories: drumsAndPercussionData,
    brands: drumsAndPercussionBrands,
  },
  {
    src: "/images/categories/level-one-categories/guitar_softwares.jpg",
    alt: "A guitar software",
    title: "Softwares",
    pageLink: "/softwares",
    subcategories: softwaresData,
    brands: softwareBrands,
  },
  {
    src: "/images/categories/level-one-categories/accesory.jpg",
    alt: "A guitar cable",
    title: "Accesories",
    pageLink: "/musical-accesories",
    subcategories: musicalAccesories,
    brands: accesoriesBrands,
  },
  {
    src: "/images/categories/level-one-categories/keyboards_synth.jpg",
    alt: "A musical Keyboard",
    title: "Keyboards and Synth",
    pageLink: "/keyboards-and-synth",
    subcategories: keyboardAndSynthData,
    brands: keyboardAndSynthBrands,
  },
  {
    src: "/images/categories/level-one-categories/microphones.jpg",
    alt: "A microphone",
    title: "Microphones",
    pageLink: "/microphones",
    subcategories: microphonesData,
    brands: microphoneBrands,
  },
  {
    src: "/images/categories/level-one-categories/pa_systems.jpg",
    alt: "A PA System",
    title: "PA System Equipments",
    pageLink: "/pa-system-equipments",
    subcategories: paSystemsData,
    brands: paSystemEquipmentBrands,
  },
  {
    src: "/images/categories/level-one-categories/studio_recording_equipment.jpg",
    alt: "An audio interface",
    title: "Studio and Recording Equipment",
    pageLink: "/studio-and-recording-equipments",
    subcategories: recordingAndStudioData,
    brands: studioAndRecordingBrands,
  },
  {
    src: "/images/categories/level-one-categories/violin.jpg",
    alt: "A violin",
    title: "Traditional Instruments",
    pageLink: "/traditional-instruments",
    subcategories: traditionalInstrumentsData,
    brands: traditionalInstrumentBrands,
  },
];

export default categoriesData;

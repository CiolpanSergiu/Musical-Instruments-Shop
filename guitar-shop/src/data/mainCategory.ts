import guitarsAndBassesData from "./LevelTwoCategories/guitarsAndBassesSubcategories";
import drumsAndPercussionData from "./LevelTwoCategories/drumsAndPercussion";
import softwaresData from "./LevelTwoCategories/softwares";
import musicalAccesories from "./LevelTwoCategories/musicalAccesories";
import keyboardAndSynthData from "./LevelTwoCategories/keyboardsAndSynth";
import microphonesData from "./LevelTwoCategories/microphones";
import paSystemsData from "./LevelTwoCategories/paSystemEquipments";
import recordingAndStudioData from "./LevelTwoCategories/recordingAndStudioEquipments";
import traditionalInstrumentsData from "./LevelTwoCategories/traditionalInstruments";

const categoryData = [
  {
    src: "/images/category/MainCategories/guitars_basses.jpg",
    alt: "A stratocaster type electric guitar",
    title: "Guitars and Basses",
    pageLink: "/guitars-and-basses",
    subcategories: guitarsAndBassesData,
  },
  {
    src: "/images/category/MainCategories/drums_percussion.jpg",
    alt: "A Yamaha drum set",
    title: "Drums and Percussion",
    pageLink: "/drums-and-percussion",
    subcategories: drumsAndPercussionData,
  },
  {
    src: "/images/category/MainCategories/guitar_softwares.jpg",
    alt: "A guitar software",
    title: "Softwares",
    pageLink: "/softwares",
    subcategories: softwaresData,
  },
  {
    src: "/images/category/MainCategories/accesory.jpg",
    alt: "A guitar cable",
    title: "Accesories",
    pageLink: "/musical-accesories",
    subcategories: musicalAccesories,
  },
  {
    src: "/images/category/MainCategories/keyboards_synth.jpg",
    alt: "A musical Keyboard",
    title: "Keyboards and Synth",
    pageLink: "/keyboards-and-synth",
    subcategories: keyboardAndSynthData,
  },
  {
    src: "/images/category/MainCategories/microphones.jpg",
    alt: "A microphone",
    title: "Microphones",
    pageLink: "/microphones",
    subcategories: microphonesData,
  },
  {
    src: "/images/category/MainCategories/pa_systems.jpg",
    alt: "A PA System",
    title: "PA System Equipments",
    pageLink: "/pa-system-equipments",
    subcategories: paSystemsData,
  },
  {
    src: "/images/category/MainCategories/studio_recording_equipment.jpg",
    alt: "An audio interface",
    title: "Studio and Recording Equipment",
    pageLink: "/studio-and-recording-equipments",
    subcategories: recordingAndStudioData,
  },
  {
    src: "/images/category/MainCategories/violin.jpg",
    alt: "A violin",
    title: "Traditional Instruments",
    pageLink: "/traditional-instruments",
    subcategories: traditionalInstrumentsData,
  },
];

export default categoryData;

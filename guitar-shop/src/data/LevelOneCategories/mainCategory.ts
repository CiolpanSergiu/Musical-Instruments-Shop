// subcategories
import guitarsAndBassesData from "../LevelTwoCategories/guitarsAndBasses";
import drumsAndPercussionData from "../LevelTwoCategories/drumsAndPercussion";
import softwaresData from "../LevelTwoCategories/softwares";
import musicalAccesories from "../LevelTwoCategories/musicalAccesories";
import keyboardAndSynthData from "../LevelTwoCategories/keyboardsAndSynth";
import microphonesData from "../LevelTwoCategories/microphones";
import paSystemsData from "../LevelTwoCategories/paSystemEquipments";
import recordingAndStudioData from "../LevelTwoCategories/recordingAndStudioEquipments";
import traditionalInstrumentsData from "../LevelTwoCategories/traditionalInstruments";
// brands
import guitarAndBassBrands from "../LogoData/GuitarAndBassesBrands/mainCategoriesBrands.json";
import drumsAndPercussionBrands from "../LogoData/DrumsAndPercussionBrands/mainCategoriesBrands.json";
import softwareBrands from "../LogoData/SoftwareBrands/mainCategoriesBrands.json";
import accesoriesBrands from "../LogoData/AccesoriesBrands/mainCategoriesBrands.json";
import keyboardAndSynthBrands from "../LogoData/KeyboardAndSynthBrands/mainCategoriesBrands.json";
import microphoneBrands from "../LogoData/MicrophoneBrands/mainCategoriesBrands.json";
import paSystemEquipmentBrands from "../LogoData/PaSystemsBrands/mainCategoriesBrands.json";
import studioAndRecordingBrands from "../LogoData/RecordingAndStudioBrands/mainCategoriesBrands.json";
import traditionalInstrumentBrands from "../LogoData/TraditionalInstrumentsBrands/mainCategoriesBrands.json";

const categoryData = [
  {
    src: "/images/category/LevelOneCategories/guitars_basses.jpg",
    alt: "A stratocaster type electric guitar",
    title: "Guitars and Basses",
    pageLink: "/guitars-and-basses",
    subcategories: guitarsAndBassesData,
    brands: guitarAndBassBrands,
  },
  {
    src: "/images/category/LevelOneCategories/drums_percussion.jpg",
    alt: "A Yamaha drum set",
    title: "Drums and Percussion",
    pageLink: "/drums-and-percussion",
    subcategories: drumsAndPercussionData,
    brands: drumsAndPercussionBrands,
  },
  {
    src: "/images/category/LevelOneCategories/guitar_softwares.jpg",
    alt: "A guitar software",
    title: "Softwares",
    pageLink: "/softwares",
    subcategories: softwaresData,
    brands: softwareBrands,
  },
  {
    src: "/images/category/LevelOneCategories/accesory.jpg",
    alt: "A guitar cable",
    title: "Accesories",
    pageLink: "/musical-accesories",
    subcategories: musicalAccesories,
    brands: accesoriesBrands,
  },
  {
    src: "/images/category/LevelOneCategories/keyboards_synth.jpg",
    alt: "A musical Keyboard",
    title: "Keyboards and Synth",
    pageLink: "/keyboards-and-synth",
    subcategories: keyboardAndSynthData,
    brands: keyboardAndSynthBrands,
  },
  {
    src: "/images/category/LevelOneCategories/microphones.jpg",
    alt: "A microphone",
    title: "Microphones",
    pageLink: "/microphones",
    subcategories: microphonesData,
    brands: microphoneBrands,
  },
  {
    src: "/images/category/LevelOneCategories/pa_systems.jpg",
    alt: "A PA System",
    title: "PA System Equipments",
    pageLink: "/pa-system-equipments",
    subcategories: paSystemsData,
    brands: paSystemEquipmentBrands,
  },
  {
    src: "/images/category/LevelOneCategories/studio_recording_equipment.jpg",
    alt: "An audio interface",
    title: "Studio and Recording Equipment",
    pageLink: "/studio-and-recording-equipments",
    subcategories: recordingAndStudioData,
    brands: studioAndRecordingBrands,
  },
  {
    src: "/images/category/LevelOneCategories/violin.jpg",
    alt: "A violin",
    title: "Traditional Instruments",
    pageLink: "/traditional-instruments",
    subcategories: traditionalInstrumentsData,
    brands: traditionalInstrumentBrands,
  },
];

export default categoryData;

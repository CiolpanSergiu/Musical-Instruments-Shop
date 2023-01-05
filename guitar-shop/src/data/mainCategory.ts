import guitarsAndBassesData from "./Subcategories/guitarsAndBassesSubcategories";
import drumsAndPercussionData from "./Subcategories/drumsAndPercussion";
import SoftwaresData from "./Subcategories/softwares";
import MusicalAccesories from "./Subcategories/musicalAccesories";
import KeyboardAndSynthData from "./Subcategories/keyboardsAndSynth";
import MicrophonesData from "./Subcategories/microphones";
import PaSystemsData from "./Subcategories/paSystemEquipments";
import RecordingAndStudioData from "./Subcategories/recordingAndStudioEquipments";
import TraditionalInstrumentsData from "./Subcategories/traditionalInstruments";

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
    subcategories: SoftwaresData,
  },
  {
    src: "/images/category/MainCategories/accesory.jpg",
    alt: "A guitar cable",
    title: "Accesories",
    pageLink: "/musical-accesories",
    subcategories: MusicalAccesories,
  },
  {
    src: "/images/category/MainCategories/keyboards_synth.jpg",
    alt: "A musical Keyboard",
    title: "Keyboards and Synth",
    pageLink: "/keyboards-and-synth",
    subcategories: KeyboardAndSynthData,
  },
  {
    src: "/images/category/MainCategories/microphones.jpg",
    alt: "A microphone",
    title: "Microphones",
    pageLink: "/microphones",
    subcategories: MicrophonesData,
  },
  {
    src: "/images/category/MainCategories/pa_systems.jpg",
    alt: "A PA System",
    title: "PA System Equipments",
    pageLink: "/pa-system-equipments",
    subcategories: PaSystemsData,
  },
  {
    src: "/images/category/MainCategories/studio_recording_equipment.jpg",
    alt: "An audio interface",
    title: "Studio and Recording Equipment",
    pageLink: "/studio-and-recording-equipments",
    subcategories: RecordingAndStudioData,
  },
  {
    src: "/images/category/MainCategories/violin.jpg",
    alt: "A violin",
    title: "Traditional Instruments",
    pageLink: "/traditional-instruments",
    subcategories: TraditionalInstrumentsData,
  },
];

export default categoryData;

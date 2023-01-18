import instrumentMicrophoneSubcategories from "../LevelThreeCategories/Microphones/instrumentMicrophonesData.json";
import vocalMicrophoneSubcategories from "../LevelThreeCategories/Microphones/vocalMicrophonesData.json";

const microphonesData = [
  {
    src: "/images/category/LevelTwoCategories/Microphones/vocal_microphone.jpg",
    alt: "A microphone",
    title: "Vocal Microphones",
    pageLink: "/vocal-microphones",
    subcategories: vocalMicrophoneSubcategories,
  },
  {
    src: "/images/category/LevelTwoCategories/Microphones/wireless_microphone.jpg",
    alt: "A wireless microphone",
    title: "Wireless Microphones",
    pageLink: "/wireless-microphones",
  },
  {
    src: "/images/category/LevelTwoCategories/Microphones/large_diaphragm_microphone.jpg",
    alt: "A microphone with large diaphragm",
    title: "Large Diaphragm Microphones",
    pageLink: "/large-diaphragm-microphones",
  },
  {
    src: "/images/category/LevelTwoCategories/Microphones/small_diaphragm_microphone.jpg",
    alt: "A microphone with small diaphragm",
    title: "Small Diaphragm Microphones",
    pageLink: "/small-diaphragm-microphones",
  },
  {
    src: "/images/category/LevelTwoCategories/Microphones/headset_microphone.jpg",
    alt: "A headset microphone",
    title: "Headset Microphones",
    pageLink: "/headset-microphones",
  },
  {
    src: "/images/category/LevelTwoCategories/Microphones/stereo_microphone.jpg",
    alt: "A stereo microphone",
    title: "Stereo Microphones",
    pageLink: "/stereo-microphones",
  },
  {
    src: "/images/category/LevelTwoCategories/Microphones/instrument_microphone.jpg",
    alt: "A microphone for instruments",
    title: "Instrument Microphones",
    pageLink: "/instrument-microphones",
    subcategories: instrumentMicrophoneSubcategories,
  },
];

export default microphonesData;

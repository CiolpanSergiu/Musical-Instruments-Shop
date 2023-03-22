//subcategories
import instrumentMicrophoneSubcategories from "../level-three-categories/microphones/instrumentMicrophonesData";
import vocalMicrophoneSubcategories from "../level-three-categories/microphones/vocalMicrophonesData";
// brands
import vocalMicrophoneBrands from "../logo-data/microphone-brands/vocal-microphones/vocalMicrophoneBrands.json";
import instrumnetMicrophoneBrands from "../logo-data/microphone-brands/instrument-microphones/instrumentMicrophoneBrands.json";

const microphonesData = [
  {
    src: "/images/categories/level-two-categories/microphones/vocal_microphone.jpg",
    alt: "A microphone",
    title: "Vocal Microphones",
    subcategories: vocalMicrophoneSubcategories,
    brands: vocalMicrophoneBrands,
  },
  {
    src: "/images/categories/level-two-categories/microphones/wireless_microphone.jpg",
    alt: "A wireless microphone",
    title: "Wireless Microphones",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/microphones/large_diaphragm_microphone.jpg",
    alt: "A microphone with large diaphragm",
    title: "Large Diaphragm Microphones",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/microphones/small_diaphragm_microphone.jpg",
    alt: "A microphone with small diaphragm",
    title: "Small Diaphragm Microphones",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/microphones/headset_microphone.jpg",
    alt: "A headset microphone",
    title: "Headset Microphones",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/microphones/stereo_microphone.jpg",
    alt: "A stereo microphone",
    title: "Stereo Microphones",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/microphones/instrument_microphone.jpg",
    alt: "A microphone for instruments",
    title: "Instrument Microphones",
    subcategories: instrumentMicrophoneSubcategories,
    brands: instrumnetMicrophoneBrands,
  },
];

export default microphonesData;

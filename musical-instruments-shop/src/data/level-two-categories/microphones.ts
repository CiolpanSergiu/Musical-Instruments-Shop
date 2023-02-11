//subcategories
import instrumentMicrophoneSubcategories from "../level-three-categories/microphones/instrumentmicrophonesData.json";
import vocalMicrophoneSubcategories from "../level-three-categories/microphones/vocalmicrophonesData.json";
// brands
import vocalMicrophoneBrands from "../logo-data/microphone-brands/vocal-microphones/vocalMicrophoneBrands.json";
import instrumnetMicrophoneBrands from "../logo-data/microphone-brands/instrument-microphones/instrumentMicrophoneBrands.json";

const microphonesData = [
  {
    src: "/images/categories/level-two-categories/microphones/vocal_microphone.jpg",
    alt: "A microphone",
    title: "Vocal Microphones",
    pageLink: "/vocal-microphones",
    subcategories: vocalMicrophoneSubcategories,
    brands: vocalMicrophoneBrands,
  },
  {
    src: "/images/categories/level-two-categories/microphones/wireless_microphone.jpg",
    alt: "A wireless microphone",
    title: "Wireless Microphones",
    pageLink: "/wireless-microphones",
  },
  {
    src: "/images/categories/level-two-categories/microphones/large_diaphragm_microphone.jpg",
    alt: "A microphone with large diaphragm",
    title: "Large Diaphragm Microphones",
    pageLink: "/large-diaphragm-microphones",
  },
  {
    src: "/images/categories/level-two-categories/microphones/small_diaphragm_microphone.jpg",
    alt: "A microphone with small diaphragm",
    title: "Small Diaphragm Microphones",
    pageLink: "/small-diaphragm-microphones",
  },
  {
    src: "/images/categories/level-two-categories/microphones/headset_microphone.jpg",
    alt: "A headset microphone",
    title: "Headset Microphones",
    pageLink: "/headset-microphones",
  },
  {
    src: "/images/categories/level-two-categories/microphones/stereo_microphone.jpg",
    alt: "A stereo microphone",
    title: "Stereo Microphones",
    pageLink: "/stereo-microphones",
  },
  {
    src: "/images/categories/level-two-categories/microphones/instrument_microphone.jpg",
    alt: "A microphone for instruments",
    title: "Instrument Microphones",
    pageLink: "/instrument-microphones",
    subcategories: instrumentMicrophoneSubcategories,
    brands: instrumnetMicrophoneBrands,
  },
];

export default microphonesData;

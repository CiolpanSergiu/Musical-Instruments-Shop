// subcategories
import speakerSubcategories from "../LevelThreeCategories/PaSystemEquipments/speakersData.json";
import speakerStandsSubcategories from "../LevelThreeCategories/PaSystemEquipments/speakerStandsData.json";
import paMixersSubcategories from "../LevelThreeCategories/PaSystemEquipments/paMixersData.json";
import microphonesSubcategories from "../LevelThreeCategories/PaSystemEquipments/microphonesForPaData.json";
import cablesSubcategories from "../LevelThreeCategories/PaSystemEquipments/paCablesData.json";
import connectorsAndJacksSubcategories from "../LevelThreeCategories/PaSystemEquipments/connectorsAndJacksData";
// brands
import speakersBrands from "../LogoData/PaSystemsBrands/Speakers/speakersBrands.json";
import speakerStandsBrands from "../LogoData/PaSystemsBrands/Stands/standsBrands.json";
import paMixersBrands from "../LogoData/PaSystemsBrands/PaMixers/paMixersBrands.json";
import microphonesBrands from "../LogoData/PaSystemsBrands/Microphones/microphonesBrands.json";
import cablesBrands from "../LogoData/PaSystemsBrands/Cables/cablesBrands.json";
import connectorsAndJacksBrands from "../LogoData/PaSystemsBrands/ConnectorsAndJacks/connectorsAndJacksBrands.json";

const paSystemEquipmentsData = [
  {
    src: "/images/category/LevelTwoCategories/PaSystems/pa_system.jpg",
    alt: "A full PA System",
    title: "Complete PA Systems",
    pageLink: "/complete-pa-systems",
  },
  {
    src: "/images/category/LevelTwoCategories/PaSystems/speaker.jpg",
    alt: "A huge speaker with lights of different colors",
    title: "Speakers",
    pageLink: "/speakers",
    subcategories: speakerSubcategories,
    brands: speakersBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/PaSystems/speaker_stand.jpg",
    alt: "A stand for speakers",
    title: "Speaker Stands",
    pageLink: "/speaker-stands",
    subcategories: speakerStandsSubcategories,
    brands: speakerStandsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/PaSystems/pa_mixer.jpg",
    alt: "A PA mixer",
    title: "PA mixers",
    pageLink: "/pa-mixers",
    subcategories: paMixersSubcategories,
    brands: paMixersBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/PaSystems/pa_amplifier.jpg",
    alt: "An amplifier for PA Systems",
    title: "Power Amplifiers",
    pageLink: "/power-amplifiers",
  },
  {
    src: "/images/category/LevelTwoCategories/Microphones/vocal_microphone.jpg",
    alt: "A microphone",
    title: "Microphones",
    pageLink: "/microphones-for-pa",
    subcategories: microphonesSubcategories,
    brands: microphonesBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/PaSystems/cables.jpg",
    alt: "A guitar cable",
    title: "Cables",
    pageLink: "/cables-pa",
    subcategories: cablesSubcategories,
    brands: cablesBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/PaSystems/adapters_and_jacks.jpg",
    alt: "A jack adapter",
    title: "Connectors and Jacks",
    pageLink: "/connectors-and-jacks",
    subcategories: connectorsAndJacksSubcategories,
    brands: connectorsAndJacksBrands,
  },
];

export default paSystemEquipmentsData;

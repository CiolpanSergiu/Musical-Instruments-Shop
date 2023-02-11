// subcategories
import speakerSubcategories from "../level-three-categories/pa-system-equipments/speakersData.json";
import speakerStandsSubcategories from "../level-three-categories/pa-system-equipments/speakerStandsData.json";
import paMixersSubcategories from "../level-three-categories/pa-system-equipments/paMixersData.json";
import microphonesSubcategories from "../level-three-categories/pa-system-equipments/microphonesForPaData.json";
import cablesSubcategories from "../level-three-categories/pa-system-equipments/paCablesData.json";
import connectorsAndJacksSubcategories from "../level-three-categories/pa-system-equipments/connectorsAndJacksData";
// brands
import speakersBrands from "../logo-data/pa-systems-brands/speakers/speakersBrands.json";
import speakerStandsBrands from "../logo-data/pa-systems-brands/stands/standsBrands.json";
import paMixersBrands from "../logo-data/pa-systems-brands/pa-mixers/paMixersBrands.json";
import microphonesBrands from "../logo-data/pa-systems-brands/microphones/microphonesBrands.json";
import cablesBrands from "../logo-data/pa-systems-brands/cables/cablesBrands.json";
import connectorsAndJacksBrands from "../logo-data/pa-systems-brands/connectors-and-jacks/connectorsAndJacksBrands.json";

const paSystemEquipmentsData = [
  {
    src: "/images/categories/level-two-categories/pa-systems/pa_system.jpg",
    alt: "A full PA System",
    title: "Complete PA Systems",
    pageLink: "/complete-pa-systems",
  },
  {
    src: "/images/categories/level-two-categories/pa-systems/speaker.jpg",
    alt: "A huge speaker with lights of different colors",
    title: "Speakers",
    pageLink: "/speakers",
    subcategories: speakerSubcategories,
    brands: speakersBrands,
  },
  {
    src: "/images/categories/level-two-categories/pa-systems/speaker_stand.jpg",
    alt: "A stand for speakers",
    title: "Speaker Stands",
    pageLink: "/speaker-stands",
    subcategories: speakerStandsSubcategories,
    brands: speakerStandsBrands,
  },
  {
    src: "/images/categories/level-two-categories/pa-systems/pa_mixer.jpg",
    alt: "A PA mixer",
    title: "PA mixers",
    pageLink: "/pa-mixers",
    subcategories: paMixersSubcategories,
    brands: paMixersBrands,
  },
  {
    src: "/images/categories/level-two-categories/pa-systems/pa_amplifier.jpg",
    alt: "An amplifier for PA Systems",
    title: "Power Amplifiers",
    pageLink: "/power-amplifiers",
  },
  {
    src: "/images/categories/level-two-categories/microphones/vocal_microphone.jpg",
    alt: "A microphone",
    title: "Microphones",
    pageLink: "/microphones-for-pa",
    subcategories: microphonesSubcategories,
    brands: microphonesBrands,
  },
  {
    src: "/images/categories/level-two-categories/pa-systems/cables.jpg",
    alt: "A guitar cable",
    title: "Cables",
    pageLink: "/cables-pa",
    subcategories: cablesSubcategories,
    brands: cablesBrands,
  },
  {
    src: "/images/categories/level-two-categories/pa-systems/adapters_and_jacks.jpg",
    alt: "A jack adapter",
    title: "Connectors and Jacks",
    pageLink: "/connectors-and-jacks",
    subcategories: connectorsAndJacksSubcategories,
    brands: connectorsAndJacksBrands,
  },
];

export default paSystemEquipmentsData;

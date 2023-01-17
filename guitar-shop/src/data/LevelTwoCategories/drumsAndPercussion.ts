import acousticDrumsSubcategories from "../LevelThreeCategories/DrumsAndPercussion/acousticDrumsData";
import electronicDrumSubcategories from "../LevelThreeCategories/DrumsAndPercussion/electronicDrumsData.json";
import cymbalsDrumSubcategories from "../LevelThreeCategories/DrumsAndPercussion/cymbalsData";
import drumSticksSubcategories from "../LevelThreeCategories/DrumsAndPercussion/drumSticksData";
import drumStandsAndPedalsSubcategories from "../LevelThreeCategories/DrumsAndPercussion/drumPedalsAndStandsData";
import drumCoverBagsAndCasesSubcategories from "../LevelThreeCategories/DrumsAndPercussion/drumCoverBagsAndCasesData.json";
import drumSparePartsSubcategories from "../LevelThreeCategories/DrumsAndPercussion/drumSparePartsData.json";
import percussionInstrumentsSubcategories from "../LevelThreeCategories/DrumsAndPercussion/percussionInstrumentsData";

const drumsAndPercussionData = [
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/acoustic_drums.jpg",
    alt: "A set of classic, acoustic drumd like in the good old days",
    title: "Acoustic Drums",
    pageLink: "/acoustic-drums",
    subcategories: acousticDrumsSubcategories,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/electric_drums.jpg",
    alt: "A portable, modern set of electric drums",
    title: "Electronic Drums",
    pageLink: "/electronic-drums",
    subcategories: electronicDrumSubcategories,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/percussion_instrument.jpg",
    alt: "An african percussion drum instrument",
    title: "Percussion Instruments",
    pageLink: "/percussion-instruments",
    subcategories: percussionInstrumentsSubcategories,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/cymbal.jpg",
    alt: "A drum cymbal",
    title: "Cymbals",
    pageLink: "/cymbals",
    subcategories: cymbalsDrumSubcategories,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/drum_sticks.jpg",
    alt: "Two drumsticks",
    title: "Drumsticks",
    pageLink: "/drumsticks",
    subcategories: drumSticksSubcategories,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/drum_stand.jpg",
    alt: "A drum stand",
    title: "Drum Pedals and Stands",
    pageLink: "/drum-pedals-and-stands",
    subcategories: drumStandsAndPedalsSubcategories,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/drum_rim.jpg",
    alt: "A drum rim",
    title: "Drum Spare Parts",
    pageLink: "/drum-spare-parts",
    subcategories: drumSparePartsSubcategories,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/drum_cover.jpg",
    alt: "A full set of drum cover bags",
    title: "Drum Cover Bags and Cases",
    pageLink: "/drum-cover-bags-and-cases",
    subcategories: drumCoverBagsAndCasesSubcategories,
  },
];

export default drumsAndPercussionData;

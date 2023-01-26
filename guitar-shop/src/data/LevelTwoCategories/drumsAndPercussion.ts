// subcategories
import acousticDrumsSubcategories from "../LevelThreeCategories/DrumsAndPercussion/acousticDrumsData";
import electronicDrumSubcategories from "../LevelThreeCategories/DrumsAndPercussion/electronicDrumsData.json";
import cymbalsDrumSubcategories from "../LevelThreeCategories/DrumsAndPercussion/cymbalsData";
import drumSticksSubcategories from "../LevelThreeCategories/DrumsAndPercussion/drumSticksData";
import drumStandsAndPedalsSubcategories from "../LevelThreeCategories/DrumsAndPercussion/drumPedalsAndStandsData";
import drumCoverBagsAndCasesSubcategories from "../LevelThreeCategories/DrumsAndPercussion/drumCoverBagsAndCasesData.json";
import drumSparePartsSubcategories from "../LevelThreeCategories/DrumsAndPercussion/drumSparePartsData.json";
import percussionInstrumentsSubcategories from "../LevelThreeCategories/DrumsAndPercussion/percussionInstrumentsData";
// brands
import acousticDrumsBrands from "../LogoData/DrumsAndPercussionBrands/AcousticDrums/mainAcousticDrumBrands.json";
import electronicDrumsBrands from "../LogoData/DrumsAndPercussionBrands/ElectronicDrums/electronicDrumsBrands.json";
import percussionInstrumentsBrands from "../LogoData/DrumsAndPercussionBrands/PercussionInstruments/percussionInstrumentsBrands.json";
import cymbalBrands from "../LogoData/DrumsAndPercussionBrands/Cymbals/cymbalBrands.json";
import drumsticksBrands from "../LogoData/DrumsAndPercussionBrands/Drumsticks/drumsticksBrands.json";
import standsAndPedalsBrands from "../LogoData/DrumsAndPercussionBrands/StandsAndPedals/standsAndPedalsBrands.json";
import sparePartsBrands from "../LogoData/DrumsAndPercussionBrands/SpareParts/sparePartsBrands.json";
import coverBagsAndCases from "../LogoData/DrumsAndPercussionBrands/CoverBagsAndCases/coverBagsAndCases.json";

const drumsAndPercussionData = [
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/acoustic_drums.jpg",
    alt: "A set of classic, acoustic drumd like in the good old days",
    title: "Acoustic Drums",
    pageLink: "/acoustic-drums",
    subcategories: acousticDrumsSubcategories,
    brands: acousticDrumsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/electric_drums.jpg",
    alt: "A portable, modern set of electric drums",
    title: "Electronic Drums",
    pageLink: "/electronic-drums",
    subcategories: electronicDrumSubcategories,
    brands: electronicDrumsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/percussion_instrument.jpg",
    alt: "An african percussion drum instrument",
    title: "Percussion Instruments",
    pageLink: "/percussion-instruments",
    subcategories: percussionInstrumentsSubcategories,
    brands: percussionInstrumentsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/cymbal.jpg",
    alt: "A drum cymbal",
    title: "Cymbals",
    pageLink: "/cymbals",
    subcategories: cymbalsDrumSubcategories,
    brands: cymbalBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/drum_sticks.jpg",
    alt: "Two drumsticks",
    title: "Drumsticks",
    pageLink: "/sticks-for-drums-and-percussion",
    subcategories: drumSticksSubcategories,
    brands: drumsticksBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/drum_stand.jpg",
    alt: "A drum stand",
    title: "Drum Pedals and Stands",
    pageLink: "/drum-pedals-and-stands",
    subcategories: drumStandsAndPedalsSubcategories,
    brands: standsAndPedalsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/drum_rim.jpg",
    alt: "A drum rim",
    title: "Drum Spare Parts",
    pageLink: "/drum-spare-parts",
    subcategories: drumSparePartsSubcategories,
    brands: sparePartsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/DrumsAndPercussion/drum_cover.jpg",
    alt: "A full set of drum cover bags",
    title: "Drum Cover Bags and Cases",
    pageLink: "/drum-cover-bags-and-cases",
    subcategories: drumCoverBagsAndCasesSubcategories,
    brands: coverBagsAndCases,
  },
];

export default drumsAndPercussionData;

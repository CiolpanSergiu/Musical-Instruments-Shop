// subcategories
import acousticDrumsSubcategories from "../level-three-categories/drums-and-percussion/acousticDrumsData";
import electronicDrumSubcategories from "../level-three-categories/drums-and-percussion/electronicDrumsData.json";
import cymbalsDrumSubcategories from "../level-three-categories/drums-and-percussion/cymbalsData";
import drumSticksSubcategories from "../level-three-categories/drums-and-percussion/drumSticksData";
import drumStandsAndPedalsSubcategories from "../level-three-categories/drums-and-percussion/drumPedalsAndStandsData";
import drumCoverBagsAndCasesSubcategories from "../level-three-categories/drums-and-percussion/drumCoverBagsAndCasesData.json";
import drumSparePartsSubcategories from "../level-three-categories/drums-and-percussion/drumSparePartsData.json";
import percussionInstrumentsSubcategories from "../level-three-categories/drums-and-percussion/percussionInstrumentsData";
// brands
import acousticDrumsBrands from "../logo-data/drums-and-percussion-brands/acoustic-drums/mainAcousticDrumBrands.json";
import electronicDrumsBrands from "../logo-data/drums-and-percussion-brands/electronic-drums/electronicDrumsBrands.json";
import percussionInstrumentsBrands from "../logo-data/drums-and-percussion-brands/percussion-instruments/percussionInstrumentsBrands.json";
import cymbalBrands from "../logo-data/drums-and-percussion-brands/cymbals/cymbalBrands.json";
import drumsticksBrands from "../logo-data/drums-and-percussion-brands/drumsticks/drumsticksBrands.json";
import standsAndPedalsBrands from "../logo-data/drums-and-percussion-brands/stands-and-pedals/standsAndPedalsBrands.json";
import sparePartsBrands from "../logo-data/drums-and-percussion-brands/spare-parts/sparePartsBrands.json";
import coverBagsAndCases from "../logo-data/drums-and-percussion-brands/cover-bags-and-cases/coverBagsAndCases.json";

const drumsAndPercussionData = [
  {
    src: "/images/categories/level-two-categories/drums-and-percussion/acoustic_drums.jpg",
    alt: "A set of classic, acoustic drumd like in the good old days",
    title: "Acoustic Drums",
    pageLink: "/acoustic-drums",
    subcategories: acousticDrumsSubcategories,
    brands: acousticDrumsBrands,
  },
  {
    src: "/images/categories/level-two-categories/drums-and-percussion/electric_drums.jpg",
    alt: "A portable, modern set of electric drums",
    title: "Electronic Drums",
    pageLink: "/electronic-drums",
    subcategories: electronicDrumSubcategories,
    brands: electronicDrumsBrands,
  },
  {
    src: "/images/categories/level-two-categories/drums-and-percussion/percussion_instrument.jpg",
    alt: "An african percussion drum instrument",
    title: "Percussion Instruments",
    pageLink: "/percussion-instruments",
    subcategories: percussionInstrumentsSubcategories,
    brands: percussionInstrumentsBrands,
  },
  {
    src: "/images/categories/level-two-categories/drums-and-percussion/cymbal.jpg",
    alt: "A drum cymbal",
    title: "Cymbals",
    pageLink: "/cymbals",
    subcategories: cymbalsDrumSubcategories,
    brands: cymbalBrands,
  },
  {
    src: "/images/categories/level-two-categories/drums-and-percussion/drum_sticks.jpg",
    alt: "Two drumsticks",
    title: "Drumsticks",
    pageLink: "/sticks-for-drums-and-percussion",
    subcategories: drumSticksSubcategories,
    brands: drumsticksBrands,
  },
  {
    src: "/images/categories/level-two-categories/drums-and-percussion/drum_stand.jpg",
    alt: "A drum stand",
    title: "Drum Pedals and Stands",
    pageLink: "/drum-pedals-and-stands",
    subcategories: drumStandsAndPedalsSubcategories,
    brands: standsAndPedalsBrands,
  },
  {
    src: "/images/categories/level-two-categories/drums-and-percussion/drum_rim.jpg",
    alt: "A drum rim",
    title: "Drum Spare Parts",
    pageLink: "/drum-spare-parts",
    subcategories: drumSparePartsSubcategories,
    brands: sparePartsBrands,
  },
  {
    src: "/images/categories/level-two-categories/drums-and-percussion/drum_cover.jpg",
    alt: "A full set of drum cover bags",
    title: "Drum Cover Bags and Cases",
    pageLink: "/drum-cover-bags-and-cases",
    subcategories: drumCoverBagsAndCasesSubcategories,
    brands: coverBagsAndCases,
  },
];

export default drumsAndPercussionData;

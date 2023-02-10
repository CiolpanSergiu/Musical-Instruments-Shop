// subcategories
import accordionsSubcategories from "../level-three-categories/traditional-instruments/accordionsData.json";
import folkInstrumentsSubcategories from "../level-three-categories/traditional-instruments/folkInstrumentsData.json";
import stringedInstrumentsSubcategories from "../level-three-categories/traditional-instruments/stringedInstrumentsData";
// brands
import accordionBrands from "../logo-data/traditional-instruments-brands/accordions/accordionsBrands.json";
import folkInstrumentsBrands from "../logo-data/traditional-instruments-brands/folk-instruments/folkInstrumentsBrands.json";
import stringedInstrumentsBrands from "../logo-data/traditional-instruments-brands/stringed-instruments/stringedInstrumetnsBrands.json";

const traditionalInstrumentsData = [
  {
    src: "/images/category/LevelTwoCategories/TraditionalInstruments/double_bass.jpg",
    alt: "A double bass",
    title: "Stringed Instruments",
    pageLink: "/stringed-instruments",
    subcategories: stringedInstrumentsSubcategories,
    brands: stringedInstrumentsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/TraditionalInstruments/mandoline.jpg",
    alt: "A mandoline",
    title: "Folk Instruments",
    pageLink: "/fold-instruments",
    subcategories: folkInstrumentsSubcategories,
    brands: folkInstrumentsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/TraditionalInstruments/accordion.jpg",
    alt: "A black accordion",
    title: "Accordions",
    pageLink: "/accordions",
    subcategories: accordionsSubcategories,
    brands: accordionBrands,
  },
];

export default traditionalInstrumentsData;

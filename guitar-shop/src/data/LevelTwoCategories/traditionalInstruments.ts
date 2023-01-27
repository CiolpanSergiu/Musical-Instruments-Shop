// subcategories
import accordionsSubcategories from "../LevelThreeCategories/TraditionalInstruments/accordionsData.json";
import folkInstrumentsSubcategories from "../LevelThreeCategories/TraditionalInstruments/folkInstrumentsData.json";
import stringedInstrumentsSubcategories from "../LevelThreeCategories/TraditionalInstruments/stringedInstrumentsData";
// brands
import accordionBrands from "../LogoData/TraditionalInstrumentsBrands/Accordions/accordionsBrands.json";
import folkInstrumentsBrands from "../LogoData/TraditionalInstrumentsBrands/FolkInstruments/folkInstrumentsBrands.json";
import stringedInstrumentsBrands from "../LogoData/TraditionalInstrumentsBrands/StringedInstruments/stringedInstrumetnsBrands.json";

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

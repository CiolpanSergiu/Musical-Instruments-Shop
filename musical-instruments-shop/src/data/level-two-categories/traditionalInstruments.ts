// subcategories
import accordionsSubcategories from "../level-three-categories/traditional-instruments/accordionsData";
import folkInstrumentsSubcategories from "../level-three-categories/traditional-instruments/folkInstrumentsData";
import stringedInstrumentsSubcategories from "../level-three-categories/traditional-instruments/stringedInstrumentsData";
// brands
import accordionBrands from "../logo-data/traditional-instruments-brands/accordions/accordionsBrands.json";
import folkInstrumentsBrands from "../logo-data/traditional-instruments-brands/folk-instruments/folkInstrumentsBrands.json";
import stringedInstrumentsBrands from "../logo-data/traditional-instruments-brands/stringed-instruments/stringedInstrumetnsBrands.json";

const traditionalInstrumentsData = [
  {
    src: "/images/categories/level-two-categories/traditional-instruments/double_bass.jpg",
    alt: "A double bass",
    title: "Stringed Instruments",
    subcategories: stringedInstrumentsSubcategories,
    brands: stringedInstrumentsBrands,
  },
  {
    src: "/images/categories/level-two-categories/traditional-instruments/mandoline.jpg",
    alt: "A mandoline",
    title: "Folk Instruments",
    subcategories: folkInstrumentsSubcategories,
    brands: folkInstrumentsBrands,
  },
  {
    src: "/images/categories/level-two-categories/traditional-instruments/accordion.jpg",
    alt: "A black accordion",
    title: "Accordions",
    subcategories: accordionsSubcategories,
    brands: accordionBrands,
  },
];

export default traditionalInstrumentsData;

import accordionsSubcategories from "../LevelThreeCategories/TraditionalInstruments/accordionsData.json";
import folkInstrumentsSubcategories from "../LevelThreeCategories/TraditionalInstruments/folkInstrumentsData.json";
import stringedInstrumentsSubcategories from "../LevelThreeCategories/TraditionalInstruments/stringedInstrumentsData";

const traditionalInstrumentsData = [
  {
    src: "/images/category/LevelTwoCategories/TraditionalInstruments/double_bass.jpg",
    alt: "A double bass",
    title: "Stringed Instruments",
    pageLink: "/stringed-instruments",
    subcategories: stringedInstrumentsSubcategories,
  },
  {
    src: "/images/category/LevelTwoCategories/TraditionalInstruments/mandoline.jpg",
    alt: "A mandoline",
    title: "Folk Instruments",
    pageLink: "/fold-instruments",
    subcategories: folkInstrumentsSubcategories,
  },
  {
    src: "/images/category/LevelTwoCategories/TraditionalInstruments/accordion.jpg",
    alt: "A black accordion",
    title: "Accordions",
    pageLink: "/accordions",
    subcategories: accordionsSubcategories,
  },
];

export default traditionalInstrumentsData;

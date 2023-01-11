// amp tubes
import tubesData from "../../data/LevelFourCategories/GuitarAndBasses/Amplifiers/tubes";
// amplifiers
import bassAmplifierHeadsData from "../../data/LevelFourCategories/GuitarAndBasses/Amplifiers/bassAmpliferHeads";
import bassAmplifiersData from "../../data/LevelFourCategories/GuitarAndBasses/Amplifiers/bassAmplifiers";
import guitarAmplifierHeadsData from "../../data/LevelFourCategories/GuitarAndBasses/Amplifiers/guitarAmplifierHeads";
import guitarAmplifiersData from "../../data/LevelFourCategories/GuitarAndBasses/Amplifiers/guitarAmplifiers";
// strings
import electricGuitarStringsData from "../../data/LevelFourCategories/GuitarAndBasses/Strings/electricGuitarStringsData";
import acousticGuitarStringsSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/Strings/acousticGuitarStringsData";
import electricBassStringsSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/Strings/electricBassStringsData";
// pickups
import electricBassPickupsSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/Pickpups/electricBassPickupsData";
import electricGuitarPickupsSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/Pickpups/electricGuitarPickupsData";
// accesories
import caposSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/Accesories/caposData";
import coversBagsAndCasesSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/Accesories/coverBagsAndCasesData";
import slidersSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/Accesories/slidersData";
import strapsSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/Accesories/strapsData";
// change parts
import bassPickGuardsSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/ChangeParts/bassPickGuardsData";
import guitarPickGuardsSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/ChangeParts/guitarPickGuardsData";
import saddleAndTailpiecesSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/ChangeParts/saddlesAndTailpiecesData";
import switchesSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/ChangeParts/switchesData";
import tremoloBridgesSubcategories from "../../data/LevelFourCategories/GuitarAndBasses/ChangeParts/tremoloBridgeData";

import { createCategoryPages } from "../createRouteFunction";

const tubesPages = createCategoryPages(
  tubesData.data,
  false,
  true,
  false,
  tubesData.pageLink,
  tubesData.pageTitle
);

const bassAmplifiersPages = createCategoryPages(
  bassAmplifiersData.data,
  true,
  true,
  true,
  bassAmplifiersData.pageLink,
  bassAmplifiersData.pageTitle
);

const bassAmplifierHeadsPages = createCategoryPages(
  bassAmplifierHeadsData.data,
  true,
  true,
  true,
  bassAmplifierHeadsData.pageLink,
  bassAmplifierHeadsData.pageTitle
);

const guitarAmplifierHeadsPages = createCategoryPages(
  guitarAmplifierHeadsData.data,
  true,
  true,
  true,
  guitarAmplifierHeadsData.pageLink,
  guitarAmplifierHeadsData.pageTitle
);

const guitarAmplifiersPages = createCategoryPages(
  guitarAmplifiersData.data,
  true,
  true,
  true,
  guitarAmplifiersData.pageLink,
  guitarAmplifiersData.pageTitle
);

const electricGuitarStringsPages = createCategoryPages(
  electricGuitarStringsData.data,
  true,
  true,
  true,
  electricGuitarStringsData.pageLink,
  electricGuitarStringsData.pageTitle
);

const acousticGuitarStringsPages = createCategoryPages(
  acousticGuitarStringsSubcategories.data,
  true,
  true,
  true,
  acousticGuitarStringsSubcategories.pageLink,
  acousticGuitarStringsSubcategories.pageTitle
);

const electricBassStringsPages = createCategoryPages(
  electricBassStringsSubcategories.data,
  true,
  true,
  true,
  electricBassStringsSubcategories.pageLink,
  electricBassStringsSubcategories.pageTitle
);

const electricGuitarPickupsPages = createCategoryPages(
  electricGuitarPickupsSubcategories.data,
  true,
  true,
  true,
  electricGuitarPickupsSubcategories.pageLink,
  electricGuitarPickupsSubcategories.pageTitle
);

const electricBassPickupsPages = createCategoryPages(
  electricBassPickupsSubcategories.data,
  true,
  true,
  true,
  electricBassPickupsSubcategories.pageLink,
  electricBassPickupsSubcategories.pageTitle
);

const guitarPickGuardsPages = createCategoryPages(
  guitarPickGuardsSubcategories.data,
  true,
  true,
  true,
  guitarPickGuardsSubcategories.pageLink,
  guitarPickGuardsSubcategories.pageTitle
);

const bassPickGuardsPages = createCategoryPages(
  bassPickGuardsSubcategories.data,
  true,
  true,
  true,
  bassPickGuardsSubcategories.pageLink,
  bassPickGuardsSubcategories.pageTitle
);

const saddleAndTailpiecesPages = createCategoryPages(
  saddleAndTailpiecesSubcategories.data,
  true,
  true,
  true,
  saddleAndTailpiecesSubcategories.pageLink,
  saddleAndTailpiecesSubcategories.pageTitle
);

const switchesPages = createCategoryPages(
  switchesSubcategories.data,
  true,
  true,
  true,
  switchesSubcategories.pageLink,
  switchesSubcategories.pageTitle
);

const tremoloBirdgesPages = createCategoryPages(
  tremoloBridgesSubcategories.data,
  true,
  true,
  true,
  tremoloBridgesSubcategories.pageLink,
  tremoloBridgesSubcategories.pageTitle
);

const caposPages = createCategoryPages(
  caposSubcategories.data,
  true,
  true,
  true,
  caposSubcategories.pageLink,
  caposSubcategories.pageTitle
);

const coverBagsAndCasesPages = createCategoryPages(
  coversBagsAndCasesSubcategories.data,
  true,
  true,
  true,
  coversBagsAndCasesSubcategories.pageLink,
  coversBagsAndCasesSubcategories.pageTitle
);

const slidersPages = createCategoryPages(
  slidersSubcategories.data,
  true,
  true,
  true,
  slidersSubcategories.pageLink,
  slidersSubcategories.pageTitle
);

const strapsPages = createCategoryPages(
  strapsSubcategories.data,
  true,
  true,
  true,
  strapsSubcategories.pageLink,
  strapsSubcategories.pageTitle
);

export default [
  tubesPages,
  bassAmplifiersPages,
  bassAmplifierHeadsPages,
  guitarAmplifierHeadsPages,
  guitarAmplifiersPages,
  electricGuitarStringsPages,
  acousticGuitarStringsPages,
  electricBassStringsPages,
  electricBassPickupsPages,
  electricGuitarPickupsPages,
  caposPages,
  coverBagsAndCasesPages,
  slidersPages,
  strapsPages,
  bassPickGuardsPages,
  guitarPickGuardsPages,
  saddleAndTailpiecesPages,
  switchesPages,
  tremoloBirdgesPages,
];

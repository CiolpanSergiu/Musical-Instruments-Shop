import tubesData from "../../data/LevelFourCategories/GuitarAndBasses/Amplifiers/tubes";
import bassAmplifierHeadsData from "../../data/LevelFourCategories/GuitarAndBasses/Amplifiers/bassAmpliferHeads";
import bassAmplifiersData from "../../data/LevelFourCategories/GuitarAndBasses/Amplifiers/bassAmplifiers";
import guitarAmplifierHeadsData from "../../data/LevelFourCategories/GuitarAndBasses/Amplifiers/guitarAmplifierHeads";
import guitarAmplifiersData from "../../data/LevelFourCategories/GuitarAndBasses/Amplifiers/guitarAmplifiers";

import electricGuitarStringsData from "../../data/LevelFourCategories/GuitarAndBasses/Strings/electricGuitarStringsData";
import { createCategoryPages } from "../createRouteFunction";

const tubesPages = createCategoryPages(
  tubesData.data,
  false,
  true,
  false,
  tubesData.pageLink
);

const bassAmplifiersPages = createCategoryPages(
  bassAmplifiersData.data,
  true,
  true,
  true,
  bassAmplifiersData.pageLink
);

const bassAmplifierHeadsPages = createCategoryPages(
  bassAmplifierHeadsData.data,
  true,
  true,
  true,
  bassAmplifierHeadsData.pageLink
);

const guitarAmplifierHeadsPages = createCategoryPages(
  guitarAmplifierHeadsData.data,
  true,
  true,
  true,
  guitarAmplifierHeadsData.pageLink
);

const guitarAmplifiersPages = createCategoryPages(
  guitarAmplifiersData.data,
  true,
  true,
  true,
  guitarAmplifiersData.pageLink
);

const electricGuitarStringsPages = createCategoryPages(
  electricGuitarStringsData.data,
  true,
  true,
  true,
  electricGuitarStringsData.pageLink
);

export default [
  tubesPages,
  bassAmplifiersPages,
  bassAmplifierHeadsPages,
  guitarAmplifierHeadsPages,
  guitarAmplifiersPages,
  electricGuitarStringsPages,
];

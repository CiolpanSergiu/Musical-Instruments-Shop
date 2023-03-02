import guitarsAndBassesProducts from "./guitarsAndBasses";
import drumsAndPercussionProducts from "./drumsAndPercussion";
import keyboardsAndSynthProducts from "./keyboardAndSynth";
import microphonesProducts from "./microphones";
import musicalAccesoriesProducts from "./musicalAccesories";
import paSystemProducts from "./paSystems";
import recordingAndStudioProducts from "./recordingAndStudio";
import softwaresProducts from "./softwares";
import traditionalInstrumentsProducts from "./traditionalInstruments";
import { allPopularItems } from "../popular-items/allPopularItems";
import removeDuplicatedProducts from "../../functions/get-data-functions/removeDuplicatedProducts";

const allProducts = removeDuplicatedProducts([
  ...allPopularItems,
  ...guitarsAndBassesProducts,
  ...drumsAndPercussionProducts,
  ...keyboardsAndSynthProducts,
  ...microphonesProducts,
  ...musicalAccesoriesProducts,
  ...paSystemProducts,
  ...recordingAndStudioProducts,
  ...softwaresProducts,
  ...traditionalInstrumentsProducts,
]);

export default allProducts;

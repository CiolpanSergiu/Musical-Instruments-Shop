import amplifiersPopularItems from "./amplifiers";
import drumsAndPercussionPopularItems from "./drumsAndPercussion";
import guitarAndBassesPopularItems from "./guitarAndBasses";
import keyboardAndSynthPopularItems from "./keyboardsAndSynth";
import universalPopularItems from "./universalPopularItems";
import { Product } from "../../types/commonTypes";

const allPopularItems: Product[] = [
  ...universalPopularItems,
  ...guitarAndBassesPopularItems,
  ...amplifiersPopularItems,
  ...drumsAndPercussionPopularItems,
  ...keyboardAndSynthPopularItems,
];

export {
  allPopularItems,
  universalPopularItems,
  guitarAndBassesPopularItems,
  amplifiersPopularItems,
  drumsAndPercussionPopularItems,
  keyboardAndSynthPopularItems,
};

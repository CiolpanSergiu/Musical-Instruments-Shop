// subcategories
import electricGuitarSubcategories from "../level-three-categories/guitars-and-basses/electricGuitarsData.json";
import acousticGuitarsSubcategorie from "../level-three-categories/guitars-and-basses/acousticGuitarsData.json";
import electricBassesSubcategories from "../level-three-categories/guitars-and-basses/electricBassesData.json";
import acousticBassesSubcategories from "../level-three-categories/guitars-and-basses/acousticBassesData.json";
import ukuleleSubcategories from "../level-three-categories/guitars-and-basses/ukuleleData.json";
import electricGuitarAmplifiersSubcategories from "../level-three-categories/guitars-and-basses/electricGuitarAmplifiersData";
import electricBassAmplifiersSubcategories from "../level-three-categories/guitars-and-basses/electricBassAmplifiersData";
import acousticGuitarAmplifiersSubcategories from "../level-three-categories/guitars-and-basses/acousticGuitarAmplifiersData.json";
import stringsSubcategories from "../level-three-categories/guitars-and-basses/stringsData";
import effectPedalsSubcategories from "../level-three-categories/guitars-and-basses/effectPedalsData.json";
import pickupsSubcategories from "../level-three-categories/guitars-and-basses/pickupsData";
import changeSpareSubcategories from "../level-three-categories/guitars-and-basses/sparePartsData";
import accesoriesSubcategories from "../level-three-categories/guitars-and-basses/accesoriesData";
// brands
import electricGuitarBrands from "../logo-data/guitar-and-basses-brands/guitars/electricGuitarsBrands.json";
import acousticGuitarBrands from "../logo-data/guitar-and-basses-brands/guitars/acousticGuitarsBrands.json";
import electricBassBrands from "../logo-data/guitar-and-basses-brands/basses/electricBassBrands.json";
import acousticBassBrands from "../logo-data/guitar-and-basses-brands/basses/acousticBassBrands.json";
import ukuleleBrands from "../logo-data/guitar-and-basses-brands/ukulele/ukuleleBrands.json";
import electricGuitarAmpsBrands from "../logo-data/guitar-and-basses-brands/electric-guitar-amplifiers/electricGuitarAmpsBrands.json";
import electricBassAmpsBrands from "../logo-data/guitar-and-basses-brands/electric-bass-amplifiers/electricBassAmpsBrands.json";
import acousticGuitarAmpsBrands from "../logo-data/guitar-and-basses-brands/acoustic-Guitar-Amplifiers/acousticGuitarAmpsBrands.json";
import stringsBrands from "../logo-data/guitar-and-basses-brands/strings/stringsBrands.json";
import pedalsBrands from "../logo-data/guitar-and-basses-brands/pedals/pedalsBrands.json";
import pickupsBrands from "../logo-data/guitar-and-basses-brands/pickups/pickupsBrands.json";
import sparePartsBrands from "../logo-data/guitar-and-basses-brands/spare-parts/sparePartsBrands.json";
import accesoriesBrands from "../logo-data/guitar-and-basses-brands/accesories/accesoriesBrands.json";

const guitarsAndBassesData = [
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/electric_guitar.jpg",
    alt: "An orange sunburst singlecut electric guitar",
    title: "Electric Guitars",
    pageLink: "/electric-guitars",
    subcategories: electricGuitarSubcategories,
    brands: electricGuitarBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/acoustic_guitar.jpg",
    alt: "A simple acoustic guitar",
    title: "Acoustic guitars",
    pageLink: "/acoustic-guitars",
    subcategories: acousticGuitarsSubcategorie,
    brands: acousticGuitarBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/electric_bass.jpg",
    alt: "An orange sunburst electric bass with a black outline",
    title: "Electric Basses",
    pageLink: "/electric-basses",
    subcategories: electricBassesSubcategories,
    brands: electricBassBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/acoustic_bass.jpg",
    alt: "A simple acoustic bass",
    title: "Acoustic Basses",
    pageLink: "/acoustic-basses",
    subcategories: acousticBassesSubcategories,
    brands: acousticBassBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/ukulele.jpg",
    alt: "A small, acoustic ukulele",
    title: "Ukulele",
    pageLink: "/ukulele",
    subcategories: ukuleleSubcategories,
    brands: ukuleleBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/electric_guitar_amp.jpg",
    alt: "Small Marshal electric guitar amplifier",
    title: "Electric guitar amplifiers",
    pageLink: "/electric-guitar-amplifiers",
    subcategories: electricGuitarAmplifiersSubcategories,
    brands: electricGuitarAmpsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/acoustic_guitar_amp.jpg",
    alt: "Acoustic guitar amplifier made by Boss",
    title: "Acoustic guitar amplifiers",
    pageLink: "/acoustic-guitars-amplifiers",
    subcategories: acousticGuitarAmplifiersSubcategories,
    brands: acousticGuitarAmpsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/electric_bass_amp.jpg",
    alt: "Donner electric bass amplifier",
    title: "Electric bass amplifiers",
    pageLink: "/electric-bass-amplifiers",
    subcategories: electricBassAmplifiersSubcategories,
    brands: electricBassAmpsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/strings.jpg",
    alt: "A pack of D'Arrio guitar strings",
    title: "Strings",
    pageLink: "/strings",
    subcategories: stringsSubcategories,
    brands: stringsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/effect_pedal.jpg",
    alt: "A Boss DS2 distortion effect pedal for guitars",
    title: "Effect Pedals",
    pageLink: "/effect-pedals",
    subcategories: effectPedalsSubcategories,
    brands: pedalsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/pickup.jpg",
    alt: "A Seymour Duncan electric guitar pickup",
    title: "Pickups",
    pageLink: "/pickups",
    subcategories: pickupsSubcategories,
    brands: pickupsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/change_parts.jpg",
    alt: "Guitar saddle image",
    title: "Change Parts",
    pageLink: "/change-parts",
    subcategories: changeSpareSubcategories,
    brands: sparePartsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/GuitarsAndBasses/accesories.jpg",
    alt: "A fender red guitar pick",
    title: "Accesories",
    pageLink: "/guitar-and-basses-accesories",
    subcategories: accesoriesSubcategories,
    brands: accesoriesBrands,
  },
];

export default guitarsAndBassesData;
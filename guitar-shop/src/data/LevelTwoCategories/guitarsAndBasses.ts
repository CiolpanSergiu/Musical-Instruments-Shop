// subcategories
import electricGuitarSubcategories from "../LevelThreeCategories/GuitarsAndBasses/electricGuitarsData.json";
import acousticGuitarsSubcategorie from "../LevelThreeCategories/GuitarsAndBasses/acousticGuitarsData.json";
import electricBassesSubcategories from "../LevelThreeCategories/GuitarsAndBasses/electricBassesData.json";
import acousticBassesSubcategories from "../LevelThreeCategories/GuitarsAndBasses/acousticBassesData.json";
import ukuleleSubcategories from "../LevelThreeCategories/GuitarsAndBasses/ukuleleData.json";
import electricGuitarAmplifiersSubcategories from "../LevelThreeCategories/GuitarsAndBasses/electricGuitarAmplifiersData";
import electricBassAmplifiersSubcategories from "../LevelThreeCategories/GuitarsAndBasses/electricBassAmplifiersData";
import acousticGuitarAmplifiersSubcategories from "../LevelThreeCategories/GuitarsAndBasses/acousticGuitarAmplifiersData.json";
import stringsSubcategories from "../LevelThreeCategories/GuitarsAndBasses/stringsData";
import effectPedalsSubcategories from "../LevelThreeCategories/GuitarsAndBasses/effectPedalsData.json";
import pickupsSubcategories from "../LevelThreeCategories/GuitarsAndBasses/pickupsData";
import changeSpareSubcategories from "../LevelThreeCategories/GuitarsAndBasses/sparePartsData";
import accesoriesSubcategories from "../LevelThreeCategories/GuitarsAndBasses/accesoriesData";
// brands
import electricGuitarBrands from "../LogoData/GuitarAndBassesBrands/Guitars/electricGuitarsBrands.json";
import acousticGuitarBrands from "../LogoData/GuitarAndBassesBrands/Guitars/acousticGuitarsBrands.json";
import electricBassBrands from "../LogoData/GuitarAndBassesBrands/Basses/electricBassBrands.json";
import acousticBassBrands from "../LogoData/GuitarAndBassesBrands/Basses/acousticBassBrands.json";
import ukuleleBrands from "../LogoData/GuitarAndBassesBrands/Ukulele/ukuleleBrands.json";
import electricGuitarAmpsBrands from "../LogoData/GuitarAndBassesBrands/ElectricGuitarAmplifiers/electricGuitarAmpsBrands.json";
import electricBassAmpsBrands from "../LogoData/GuitarAndBassesBrands/ElectricBassAmplifiers/electricBassAmpsBrands.json";
import acousticGuitarAmpsBrands from "../LogoData/GuitarAndBassesBrands/acousticGuitarAmplifiers/acousticGuitarAmpsBrands.json";
import stringsBrands from "../LogoData/GuitarAndBassesBrands/Strings/stringsBrands.json";
import pedalsBrands from "../LogoData/GuitarAndBassesBrands/Pedals/pedalsBrands.json";
import pickupsBrands from "../LogoData/GuitarAndBassesBrands/Pickups/pickupsBrands.json";
import sparePartsBrands from "../LogoData/GuitarAndBassesBrands/SpareParts/sparePartsBrands.json";
import accesoriesBrands from "../LogoData/GuitarAndBassesBrands/Accesories/accesoriesBrands.json";

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

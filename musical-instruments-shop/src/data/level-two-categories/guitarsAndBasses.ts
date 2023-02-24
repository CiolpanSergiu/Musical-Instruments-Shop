// subcategories
import electricGuitarSubcategories from "../level-three-categories/guitars-and-basses/electricGuitarsData";
import acousticGuitarsSubcategorie from "../level-three-categories/guitars-and-basses/acousticGuitarsData";
import electricBassesSubcategories from "../level-three-categories/guitars-and-basses/electricBassesData";
import acousticBassesSubcategories from "../level-three-categories/guitars-and-basses/acousticBassesData";
import ukuleleSubcategories from "../level-three-categories/guitars-and-basses/ukuleleData";
import electricGuitarAmplifiersSubcategories from "../level-three-categories/guitars-and-basses/electricGuitarAmplifiersData";
import electricBassAmplifiersSubcategories from "../level-three-categories/guitars-and-basses/electricBassAmplifiersData";
import acousticGuitarAmplifiersSubcategories from "../level-three-categories/guitars-and-basses/acousticGuitarAmplifiersData";
import stringsSubcategories from "../level-three-categories/guitars-and-basses/stringsData";
import effectPedalsSubcategories from "../level-three-categories/guitars-and-basses/effectPedalsData";
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
import acousticGuitarAmpsBrands from "../logo-data/guitar-and-basses-brands/acoustic-guitar-amplifiers/acousticGuitarAmpsBrands.json";
import stringsBrands from "../logo-data/guitar-and-basses-brands/strings/stringsBrands.json";
import pedalsBrands from "../logo-data/guitar-and-basses-brands/pedals/pedalsBrands.json";
import pickupsBrands from "../logo-data/guitar-and-basses-brands/pickups/pickupsBrands.json";
import sparePartsBrands from "../logo-data/guitar-and-basses-brands/spare-parts/sparePartsBrands.json";
import accesoriesBrands from "../logo-data/guitar-and-basses-brands/accesories/accesoriesBrands.json";

const guitarsAndBassesData = [
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/electric_guitar.jpg",
    alt: "An orange sunburst singlecut electric guitar",
    title: "Electric Guitars",
    pageLink: "/electric-guitars",
    subcategories: electricGuitarSubcategories,
    brands: electricGuitarBrands,
  },
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/acoustic_guitar.jpg",
    alt: "A simple acoustic guitar",
    title: "Acoustic guitars",
    pageLink: "/acoustic-guitars",
    subcategories: acousticGuitarsSubcategorie,
    brands: acousticGuitarBrands,
  },
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/electric_bass.jpg",
    alt: "An orange sunburst electric bass with a black outline",
    title: "Electric Basses",
    pageLink: "/electric-basses",
    subcategories: electricBassesSubcategories,
    brands: electricBassBrands,
  },
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/acoustic_bass.jpg",
    alt: "A simple acoustic bass",
    title: "Acoustic Basses",
    pageLink: "/acoustic-basses",
    subcategories: acousticBassesSubcategories,
    brands: acousticBassBrands,
  },
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/ukulele.jpg",
    alt: "A small, acoustic ukulele",
    title: "Ukulele",
    pageLink: "/ukulele",
    subcategories: ukuleleSubcategories,
    brands: ukuleleBrands,
  },
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/electric_guitar_amp.jpg",
    alt: "Small Marshal electric guitar amplifier",
    title: "Electric guitar amplifiers",
    pageLink: "/electric-guitar-amplifiers",
    subcategories: electricGuitarAmplifiersSubcategories,
    brands: electricGuitarAmpsBrands,
  },
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/acoustic_guitar_amp.jpg",
    alt: "Acoustic guitar amplifier made by Boss",
    title: "Acoustic guitar amplifiers",
    pageLink: "/acoustic-guitars-amplifiers",
    subcategories: acousticGuitarAmplifiersSubcategories,
    brands: acousticGuitarAmpsBrands,
  },
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/electric_bass_amp.jpg",
    alt: "Donner electric bass amplifier",
    title: "Electric bass amplifiers",
    pageLink: "/electric-bass-amplifiers",
    subcategories: electricBassAmplifiersSubcategories,
    brands: electricBassAmpsBrands,
  },
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/strings.jpg",
    alt: "A pack of D'Arrio guitar strings",
    title: "Strings",
    pageLink: "/strings",
    subcategories: stringsSubcategories,
    brands: stringsBrands,
  },
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/effect_pedal.jpg",
    alt: "A Boss DS2 distortion effect pedal for guitars",
    title: "Effect Pedals",
    pageLink: "/effect-pedals",
    subcategories: effectPedalsSubcategories,
    brands: pedalsBrands,
  },
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/pickup.jpg",
    alt: "A Seymour Duncan electric guitar pickup",
    title: "Pickups",
    pageLink: "/pickups",
    subcategories: pickupsSubcategories,
    brands: pickupsBrands,
  },
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/change_parts.jpg",
    alt: "Guitar saddle image",
    title: "Spare Parts",
    pageLink: "/spare-parts",
    subcategories: changeSpareSubcategories,
    brands: sparePartsBrands,
  },
  {
    src: "/images/categories/level-two-categories/guitars-and-basses/accesories.jpg",
    alt: "A fender red guitar pick",
    title: "Guitar Accesories",
    pageLink: "/guitar-and-basses-accesories",
    subcategories: accesoriesSubcategories,
    brands: accesoriesBrands,
  },
];

export default guitarsAndBassesData;

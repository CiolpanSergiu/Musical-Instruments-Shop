// subcategories
import audioInterfacesSubcategories from "../level-three-categories/studio-and-recording/audioInterfacesData";
import audioControllersSubcategories from "../level-three-categories/studio-and-recording/audioControllersData";
import midiEquimpentsSubcategories from "../level-three-categories/studio-and-recording/midiEquipmentsData";
import studioMonitorsSubcategories from "../level-three-categories/studio-and-recording/studioMonitorsData";
import processorsAndEffectsSubcategories from "../level-three-categories/studio-and-recording/processorsAndEffectsData";
import microphonesSubcategories from "./microphones";
// brands
import audioInterfacesBrands from "../logo-data/recording-and-studio-brands/audio-interfaces/audioInterfacesBrands.json";
import audioControllersBrands from "../logo-data/recording-and-studio-brands/audio-controllers/audioControllersBrands.json";
import midiEquipmentsBrands from "../logo-data/recording-and-studio-brands/midi-equipments/midiEquipmentsBrands.json";
import studioMonitorsBrands from "../logo-data/recording-and-studio-brands/studio-monitors/studioMonitorsBrands.json";
import processorsAndEffectsBrands from "../logo-data/recording-and-studio-brands/processors-and-effects/processorsAndEffectsBrands.json";

const recordingAndStudioData = [
  {
    src: "/images/categories/level-two-categories/recording-and-studio/audio_interface.jpg",
    alt: "A red audio interface box",
    title: "Audio Interfaces",
    subcategories: audioInterfacesSubcategories,
    brands: audioInterfacesBrands,
  },
  {
    src: "/images/categories/level-two-categories/recording-and-studio/preamplifier.jpg",
    alt: "A preamplifier",
    title: "Preamplifiers",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/recording-and-studio/digital_mixer.jpg",
    alt: "A digital mixer",
    title: "Digital Mixers",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/recording-and-studio/analog_mixer.jpg",
    alt: "An analog mixer",
    title: "Analog Mixers",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/recording-and-studio/digital_converter.jpg",
    alt: "A digital converter",
    title: "Digital Converters",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/recording-and-studio/digital_recorder.jpg",
    alt: "A digital recorder",
    title: "Digital Recorders",
    subcategories: [],
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/recording-and-studio/audio_controllers.jpg",
    alt: "An audio controller",
    title: "Audio Controllers",
    subcategories: audioControllersSubcategories,
    brands: audioControllersBrands,
  },
  {
    src: "/images/categories/level-two-categories/recording-and-studio/midi_cable.jpg",
    alt: "A midi cable",
    title: "MIDI Equipments",
    subcategories: midiEquimpentsSubcategories,
    brands: midiEquipmentsBrands,
  },
  {
    src: "/images/categories/level-two-categories/recording-and-studio/studio_monitor.jpg",
    alt: "A studio monitor",
    title: "Studio Monitors",
    subcategories: studioMonitorsSubcategories,
    brands: studioMonitorsBrands,
  },
  {
    src: "/images/categories/level-two-categories/recording-and-studio/stereo_microphone.jpg",
    alt: "A stereo microphone",
    title: "Microphones",
    subcategories: microphonesSubcategories,
    brands: [],
  },
  {
    src: "/images/categories/level-two-categories/recording-and-studio/multieffect_processor.jpg",
    alt: "A multieffect processor box",
    title: "Processors and Effects",
    subcategories: processorsAndEffectsSubcategories,
    brands: processorsAndEffectsBrands,
  },
];

export default recordingAndStudioData;

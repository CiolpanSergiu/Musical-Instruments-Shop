// subcategories
import audioInterfacesSubcategories from "../LevelThreeCategories/StudioAndRecording/audioInterfacesData.json";
import audioControllersSubcategories from "../LevelThreeCategories/StudioAndRecording/audioControllersData.json";
import midiEquimpentsSubcategories from "../LevelThreeCategories/StudioAndRecording/midiEquipmentsData.json";
import studioMonitorsSubcategories from "../LevelThreeCategories/StudioAndRecording/studioMonitorsData.json";
import processorsAndEffectsSubcategories from "../LevelThreeCategories/StudioAndRecording/processorsAndEffectsData.json";
import microphonesSubcategories from "./microphones";
// brands
import audioInterfacesBrands from "../LogoData/RecordingAndStudioBrands/AudioInterfaces/audioInterfacesBrands.json";
import audioControllersBrands from "../LogoData/RecordingAndStudioBrands/AudioControllers/audioControllersBrands.json";
import midiEquipmentsBrands from "../LogoData/RecordingAndStudioBrands/MidiEquipments/midiEquipmentsBrands.json";
import studioMonitorsBrands from "../LogoData/RecordingAndStudioBrands/StudioMonitors/studioMonitorsBrands.json";
import processorsAndEffectsBrands from "../LogoData/RecordingAndStudioBrands/ProcessorsAndEffects/processorsAndEffectsBrands.json";

const recordingAndStudioData = [
  {
    src: "/images/category/LevelTwoCategories/RecordingAndStudio/audio_interface.jpg",
    alt: "A red audio interface box",
    title: "Audio Interfaces",
    pageLink: "/audio-interfaces",
    subcategories: audioInterfacesSubcategories,
    brands: audioInterfacesBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/RecordingAndStudio/preamplifier.jpg",
    alt: "A preamplifier",
    title: "Preamplifiers",
    pageLink: "/preamplifiers",
  },
  {
    src: "/images/category/LevelTwoCategories/RecordingAndStudio/digital_mixer.jpg",
    alt: "A digital mixer",
    title: "Digital Mixers",
    pageLink: "/digital-mixers",
  },
  {
    src: "/images/category/LevelTwoCategories/RecordingAndStudio/analog_mixer.jpg",
    alt: "An analog mixer",
    title: "Analog Mixers",
    pageLink: "/analog-mixers",
  },
  {
    src: "/images/category/LevelTwoCategories/RecordingAndStudio/digital_converter.jpg",
    alt: "A digital converter",
    title: "Digital Converters",
    pageLink: "/digital-converters",
  },
  {
    src: "/images/category/LevelTwoCategories/RecordingAndStudio/digital_recorder.jpg",
    alt: "A digital recorder",
    title: "Digital Recorders",
    pageLink: "/digital-recorders",
  },
  {
    src: "/images/category/LevelTwoCategories/RecordingAndStudio/audio_controllers.jpg",
    alt: "An audio controller",
    title: "Audio Controllers",
    pageLink: "/audio-controllers",
    subcategories: audioControllersSubcategories,
    brands: audioControllersBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/RecordingAndStudio/midi_cable.jpg",
    alt: "A midi cable",
    title: "MIDI Equipments",
    pageLink: "/midi-equipments",
    subcategories: midiEquimpentsSubcategories,
    brands: midiEquipmentsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/RecordingAndStudio/studio_monitor.jpg",
    alt: "A studio monitor",
    title: "Studio Monitors",
    pageLink: "/studio-monitors",
    subcategories: studioMonitorsSubcategories,
    brands: studioMonitorsBrands,
  },
  {
    src: "/images/category/LevelTwoCategories/RecordingAndStudio/stereo_microphone.jpg",
    alt: "A stereo microphone",
    title: "Microphones",
    pageLink: "/microphones",
    subcategories: microphonesSubcategories,
  },
  {
    src: "/images/category/LevelTwoCategories/RecordingAndStudio/multieffect_processor.jpg",
    alt: "A multieffect processor box",
    title: "Processors and Effects",
    pageLink: "/processors-and-effects",
    subcategories: processorsAndEffectsSubcategories,
    brands: processorsAndEffectsBrands,
  },
];

export default recordingAndStudioData;

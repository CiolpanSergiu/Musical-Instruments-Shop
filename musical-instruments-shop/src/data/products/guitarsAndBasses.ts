import Product from "./productType";

const products: Product = [
  // electric guitars

  // stratocaster guitars
  {
    title: "Yamaha Pacifica 112V OVS RL",
    srcBig: "/images/.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/electric-guitars/stratocaster-models/yamaha_pacifica_112v_ovs_rl.jpg",
    alt: "An Old Violin Sunburst Stratocaster electric guitar with one humbucker and two single coil pickups made by Yamaha.",
    pageLink: "/yamaha-pacifica-112v-hss-ov",
    category: ["electric guitar", "stratocaster guitar"],
    brand: "",
    price: 289,
    available: true,
    rating: 5,
    totalReviews: 58,
    specifications: [
      "24 Frets",
      "Body: Basswood",
      "Edge Tremolo",
      "Scale: 648 mm",
      "Super Wizard neck: Maple/walnut",
    ],
  },
  {
    title: "Ibanez RG550-RF",
    srcBig: "/images/.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/electric-guitars/stratocaster-models/ibanez_rg550_rf.jpg",
    alt: "A Red Flare Ibanez Electric guitar with two humbucker pickups",
    pageLink: "/ibanez-rg550-rf",
    category: ["electric guitar", "stratocaster guitar"],
    brand: "",
    price: 849,
    available: true,
    rating: 5,
    totalReviews: 27,
    specifications: [
      "24 Frets",
      "Body: Basswood",
      "Edge Tremolo",
      "Scale: 648 mm",
      "Super Wizard neck: Maple/walnut",
    ],
  },
  {
    title: "Harley Benton Fusion-III HSH Roasted FBB",
    srcBig: "",
    srcSmall:
      "/images/products/guitars-and-basses/electric-guitars/stratocaster-models/harley_benton_fusion_iii_hsh_roasted_fbb.jpg",
    alt: "Beautifull orange Harley Benton Guitar with two humbuckers and a single coil pickup",
    pageLink: "/harley-benton-fusion-iii-hsh-fbb",
    category: ["electric guitar", "stratocaster guitar"],
    brand: "",
    price: 355,
    available: true,
    rating: 4.5,
    totalReviews: 89,
    specifications: [
      "24 Frets",
      "Body: Basswood",
      "Edge Tremolo",
      "Scale: 648 mm",
      "Super Wizard neck: Maple/walnut",
    ],
  },
  {
    title: "Jackson JS22 Dinky BLK AH",
    srcBig: "",
    srcSmall:
      "/images/products/guitars-and-basses/electric-guitars/stratocaster-models/jackson_js22_dinky_blk_ah.jpg",
    alt: "Black Jackson electric guitar with two humbuckers",
    pageLink: "/jackson-js22-dinky-blk-ah",
    category: ["electric guitar", "stratocaster guitar"],
    brand: "",
    price: 205,
    available: true,
    rating: 4.5,
    totalReviews: 20,
    specifications: [
      "24 Frets",
      "Body: Basswood",
      "Edge Tremolo",
      "Scale: 648 mm",
      "Super Wizard neck: Maple/walnut",
    ],
  },

  {
    title: "",
    srcBig: "/images/.jpg",
    srcSmall: "/images/.jpg",
    alt: "",
    pageLink: "/",
    category: [""],
    brand: "",
    price: 5,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Telecaster Models

  // Singlecut Models
  // Doublecut Models
  // Hollowbody Models
  // Jazz Guitar Models
  // Hard and Heavy Models
  // Headless Models
  // Left Handed Models
  // 7 Strings Models
  // 8 Strings Models
  // 12 Strings Models

  // Acoustic Guitars

  // Dreadnought Models
  // Parlor Models
  // Jumbo Models
  // Classic Guitars
  // Auditorium Guitars
  // 12 Strings Acoustic

  // Electric Basses

  // 4 Strings J Bass Models
  // 5 Strings J Bass Models
  // 4 Strings P Bass Models
  // 5 Strings P Bass Models
  // 4 Strings Hard and Hevy Basses
  // 5 Strings Hard and Hevy Basses
  // Fretless Basses
  // Headless Basses
  // 4 Strings Left Handed Basses
  // 5 Strings Left Handed Basses
  // Multi-Scale Basses

  // Acoustic Basses

  // 4 Strings Acoustic Bass
  // 5 Strings Acoustic Bass
  // 6 Strings Acoustic Bass
  // Fretless Acoustic Bass
  // Left Handed Acoustic Bass
  // 4 Strings Semi-Acoustic Bass
  // 5 Strings Semi-Acoustic Bass
  // Fretless Semi-Acoustic Bass

  // Ukulele

  // Baritone Ukulele
  // Concert Ukulele
  // Soprano Ukulele
  // Tenor Ukulele
  // Bass Ukulele
  // Ukulele Straps
  // Ukulele Strings
  // Ukulele Cover Bags

  // Electric Guitar Amps

  // Combo Amps

  // Transistors Guitar Combo Amps
  // Digital Guitar Combo Amps
  // Lamps Guitar Combo Amps

  // Amp Heads

  // Transistors Guitar Amp Heads
  // Digital Guitar Amp Heads
  // Lamps Guitar Amp Heads

  // Preamplifiers
  // Power Amplifiers

  // Tubes

  // El34 Tubes
  // 6L6 Tubes
  // El84 Tubes
  // Ecc83 Tubes
  // Other Tubes

  // 1x12 Cabinets
  // 2x12 Cabinets
  // 4x12 Cabinets
  // Guitar Amp Cover Bags

  // Electric Bass Amps

  // Bass Combo Amps

  // Transistors Bass Combo Amps
  // Digital Bass Combo Amps

  // Bass Amp Heads

  // Transistors Bass Amp Heads
  // Digital Bass Amp Heads

  // Bass Preamplifiers
  // 1x15 Bass Cabinets
  // 2x10 Bass Cabinets
  // 4x10 Bass Cabinets
  // 8x10 Bass Cabinets
  // Bass Amp Cover Bags

  // Acoustic Guitar Amps

  // Acoustic Guitar Combo Amps
  // Acoustic Guitar Preamps
  // Acoustic Guitar Cover Bags

  // Strings

  // Electric Guitar Strings

  // 0.08 Electric Guitar Strings
  // 0.09 Electric Guitar Strings
  // 0.10 Electric Guitar Strings
  // 0.11 Electric Guitar Strings
  // 7 Strings Electric Guitar Strings
  // 8 Strings Electric Guitar Strings
  // 12 Strings Electric Guitar Strings

  // Acoustic Guitar Strings

  // 0.10 Acoustic Guitar Strings
  // 0.11 Acoustic Guitar Strings
  // 0.12 Acoustic Guitar Strings
  // 0.13 Acoustic Guitar Strings
  // 12 Strings Acoustic Guitar Strings

  // Classic Guitar Strings

  // Electric Bass Strings

  // 0.40 Electric Bass Strings
  // 0.45 Electric Bass Strings
  // 0.50 Electric Bass Strings
  // 0.60 Electric Bass Strings
  // 5 Strings Electric Bass Strings

  // Acoustic Bass Strings
  // Ukulele Strings

  // Effect Pedals

  // Multi Effect Pedals
  // Distortion Pedals
  // Chorus/Flanger/Phaser Pedals
  // Delay Pedals
  // Reverb Pedals
  // Compressor Pedals
  // Wah Pedals
  // Loop Pedals
  // Volume and Expression Pedals
  // Band EQ Pedals
  // Pedal Boards
  // Pedal Cables
  // Power Supplies

  // Pickups

  // Electric Guitar Pickups

  // Single Coil Pickups
  // Humbucker Pickups
  // Pickups for 7 Strings Guitars
  // Pickups for 8 Strings Guitars

  // Electric Bass Pickups

  // 4 Strings J Bass Pickups
  // 5 Strings J Bass Pickups
  // 4 Strings P Bass Pickups
  // 5 Strings P Bass Pickups

  // Spare Parts

  // Electric Guitar Necks
  // Acoustic Guitar Necks
  // Electric Bass Necks
  // Acoustic Guitar Bodies
  // Electric Guitar Bodies
  // Electric Bass Bodies

  // Guitar Pick Guards

  // Stratocaster Guitar Pick Guard
  // Telecaster Guitar Pick Guard
  // Les Paul Guitar Pick Guard
  // SG Guitar Pick Guard

  // Bass Pick Guards

  // J Bass Pick Guard
  // P Bass Pick Guard

  // Knobs

  // Switches

  // 3 Ways Switch Selectors
  // 5 Ways Switch Selectors
  // Toggle switches

  // Saddles and Tailpieces

  // Guitar Tailpieces
  // Guitar Saddles
  // Jazz Guitar Tailpieces
  // Jazz Guitar Saddles
  // Bass Bridges

  // Guitar Tremolos

  // Standard Tremolos
  // Floyd Rose Tremolos
  // Bigsby Tremolos

  // Jack Plates
  // Tuning Pegs

  // Accesories

  // Guitar/Stands Stands

  // Guitar/Bass Cover Bags

  // Electric Guitar Cases
  // Acoustic Guitar Cases
  // Electric Bass Cases
  // Acoustic Bass Cases
  // Electric Guitar Cover Bags
  // Acoustic Guitar Cover Bags
  // Electric Bass Cover Bags
  // Acoustic Bass Cover Bags

  // Instrument Cables

  // Guitar/Bass Straps

  // Leather Straps
  // Nylon Straps

  // Capos

  // Electric/Acoustic Guitar Capos
  // Classic Guitar Capos
  // 12 Strings Guitar Capos

  // Picks
  // Tuners

  // Guitar Sliders

  // Glass Sliders
  // Metal Sliders

  // Instrument Tools and Maintenance
];

export default products;

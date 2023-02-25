import Product from "./productType";

const products: Product[] = [
  // electric guitars

  // stratocaster guitars
  {
    title: "Yamaha Pacifica 112V OVS RL",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/stratocaster-models/yamaha_pacifica_112v_ovs_rl.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/stratocaster-models/yamaha_pacifica_112v_ovs_rl.jpg",
    alt: "An Old Violin Sunburst Stratocaster electric guitar with one humbucker and two single coil pickups made by Yamaha.",
    category: ["electric guitar", "stratocaster guitar"],
    brand: "Yamaha",
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
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/stratocaster-models/ibanez_rg550_rf.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/stratocaster-models/ibanez_rg550_rf.jpg",
    alt: "A Red Flare Ibanez Electric guitar with two humbucker pickups",
    category: ["electric guitar", "stratocaster guitar"],
    brand: "Ibanez",
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
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/stratocaster-models/harley_benton_fusion_iii_hsh_roasted_fbb.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/big-images/electric-guitars/stratocaster-models/harley_benton_fusion_iii_hsh_roasted_fbb.jpg",
    alt: "Beautifull orange Harley Benton Guitar with two humbuckers and a single coil pickup",
    category: ["electric guitar", "stratocaster guitar"],
    brand: "Harley Benton",
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
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/stratocaster-models/jackson_js22_dinky_blk_ah.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/stratocaster-models/jackson_js22_dinky_blk_ah.jpg",
    alt: "Black Jackson electric guitar with two humbuckers",
    category: ["electric guitar", "stratocaster guitar"],
    brand: "Jackson",
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
  // Telecaster Models
  {
    title: "Fender AM Pro II Tele MN BTB",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/telecaster-models/fender_am_pro_ii_tele_mn_btb.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/telecaster-models/fender_am_pro_ii_tele_mn_btb.jpg",
    alt: "",
    category: ["telecaster guitar"],
    brand: "Fender",
    price: 1745,
    available: true,
    rating: 4.76,
    totalReviews: 53,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Singlecut Models
  {
    title: "Gibson Les Paul Standard 60s BB",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/singlecut-models/gibson_les_paul_standard_60s_bb.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/singlecut-models/gibson_les_paul_standard_60s_bb.jpg",
    alt: "",
    category: ["singlecut guitar"],
    brand: "Gibson",
    price: 2050,
    available: true,
    rating: 4.5,
    totalReviews: 61,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Doublecut Models
  {
    title: "PRS SE Custom 24/08 VS",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/doublecut-models/prs_se_custom_24_08_vs.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/doublecut-models/prs_se_custom_24_08_vs.jpg",
    alt: "",
    category: ["doublecut guitar"],
    brand: "PRS",
    price: 899,
    available: true,
    rating: 5,
    totalReviews: 541,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Hollowbody Models
  {
    title: "Larry Carlton H7 STR",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/hollowbody-models/larry_carlton_h7_str.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/hollowbody-models/larry_carlton_h7_str.jpg",
    alt: "",
    category: ["hollowbody guitar"],
    brand: "Larry Carlton",
    price: 535,
    available: true,
    rating: 4.2,
    totalReviews: 23,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Jazz Guitar Models
  {
    title: "Godin 5th Avenue Kingpin Cognacburst",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/jazz-guitars-models/godin_5th_avenue_kingpin_cognacburst.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/jazz-guitars-models/godin_5th_avenue_kingpin_cognacburst.jpg",
    alt: "",
    category: ["jazz guitar"],
    brand: "Godin",
    price: 849,
    available: true,
    rating: 4.4,
    totalReviews: 6,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Hard and Heavy Models
  {
    title: "Epiphone Firebird Vintage Sunburst",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/hard-and-heavy-models/epiphone_firebird_vintage_sunburst.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/hard-and-heavy-models/epiphone_firebird_vintage_sunburst.jpg",
    alt: "",
    category: ["hard and heavy guitar"],
    brand: "Epiphone",
    price: 539,
    available: true,
    rating: 5,
    totalReviews: 200,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Headless Models
  {
    title: "Strandberg Boden Prog NX 7 Charcoal",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/headless-models/strandberg_boden_prog_nx_7_charcoal.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/headless-models/strandberg_boden_prog_nx_7_charcoal.jpg",
    alt: "",
    category: ["headless guitar"],
    brand: "Strandberg",
    price: 2499,
    available: true,
    rating: 5,
    totalReviews: 16,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Left Handed Models
  {
    title: "Harley Benton SC-550LH II Gotoh AFB",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/left-handed-models/harley_benton_sc_550lh_ii_gotoh_afb.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/left-handed-models/harley_benton_sc_550lh_ii_gotoh_afb.jpg",
    alt: "",
    category: ["left handed guitar"],
    brand: "Harley Benton",
    price: 322,
    available: true,
    rating: 4.5,
    totalReviews: 52,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 7 Strings Models
  {
    title: "Schecter Diamond Omen 7 Extreme BCH",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/7-strings-models/schecter_diamond_omen_7_extreme_bch.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/7-strings-models/schecter_diamond_omen_7_extreme_bch.jpg",
    alt: "",
    category: ["7 strings guitar"],
    brand: "Schecter",
    price: 579,
    available: true,
    rating: 5,
    totalReviews: 122,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 8 Strings Models
  {
    title: "Ibanez RGMS8-BK Multiscale",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/8-strings-models/ibanez_rgms8_bk_multiscale.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/8-strings-models/ibanez_rgms8_bk_multiscale.jpg",
    alt: "",
    category: ["8 strings guitar"],
    brand: "Ibanez",
    price: 589,
    available: true,
    rating: 4.87,
    totalReviews: 111,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 12 Strings Models
  {
    title: "Gretsch G5422G-12 Electromatic WS",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitars/12-strings-models/gretsch_g5422g_12_electromatic_ws_.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitars/12-strings-models/gretsch_g5422g_12_electromatic_ws_.jpg",
    alt: "",
    category: ["12 strings guitar"],
    brand: "Gretsch",
    price: 898,
    available: true,
    rating: 4.4,
    totalReviews: 53,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Acoustic Guitars

  // Dreadnought Models
  {
    title: "Takamine EF341SC",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-guitars/dreadnought-models/takamine_ef341sc.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-guitars/dreadnought-models/takamine_ef341sc.jpg",
    alt: "",
    category: ["dreadnought acoustic guitar"],
    brand: "Takamine",
    price: 1122,
    available: true,
    rating: 4.78,
    totalReviews: 544,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Parlor Models
  {
    title: "Höfner HC504-7/8",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-guitars/parlor-models/hofner_hc504_7_8.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-guitars/parlor-models/hofner_hc504_7_8.jpg",
    alt: "",
    category: ["parlor acoustic guitar"],
    brand: "Hofner",
    price: 222,
    available: true,
    rating: 4.25,
    totalReviews: 298,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Jumbo Models
  {
    title: "Epiphone J 200 AANG",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-guitars/jumbo-models/epiphone_j_200_aang.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-guitars/jumbo-models/epiphone_j_200_aang.jpg",
    alt: "Epiphone",
    category: ["jumbo acoustic guitar"],
    brand: "",
    price: 759,
    available: true,
    rating: 5,
    totalReviews: 364,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Classic Guitars
  {
    title: "Taylor 814ce-N",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-guitars/classic-guitars/taylor_814ce_n.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-guitars/classic-guitars/taylor_814ce_n.jpg",
    alt: "",
    category: ["classic guitar"],
    brand: "Taylor",
    price: 3399,
    available: true,
    rating: 5,
    totalReviews: 780,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 12 Strings Acoustic
  {
    title: "Harley Benton Custom Line CLJ-412E NT",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-guitars/12-strings-models/harley_benton_custom_line_clj_412e_nt.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-guitars/12-strings-models/harley_benton_custom_line_clj_412e_nt.jpg",
    alt: "",
    category: ["12 strings acoustic guitar"],
    brand: "Harley Benton",
    price: 239,
    available: true,
    rating: 4.5,
    totalReviews: 12,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Electric Basses

  // 4 Strings J Bass Models
  {
    title: "Fender Player Series Jazz Bass MN TPL",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-basses/4-strings-j-basses/fender_player_series_jazz_bass_mn_tpl.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-basses/4-strings-j-basses/fender_player_series_jazz_bass_mn_tpl.jpg",
    alt: "",
    category: ["4 strings j bass"],
    brand: "Fender",
    price: 769,
    available: true,
    rating: 5,
    totalReviews: 555,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 5 Strings J Bass Models
  {
    title: "Marcus Miller V7 Alder-5 BUR 2nd Gen",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-basses/5-strings-j-basses/marcus_miller_v7_alder_5_bur_2nd_gen.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-basses/5-strings-j-basses/marcus_miller_v7_alder_5_bur_2nd_gen.jpg",
    alt: "",
    category: ["5 strings j bass"],
    brand: "Larry Carlton",
    price: 489,
    available: true,
    rating: 5,
    totalReviews: 468,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 4 Strings P Bass Models
  // sadowsky_metroline_hyb_p_j_21_4_mo_bl
  {
    title: "Sadowsky MetroLine Hyb P/J 21-4 Mo Bl",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-basses/4-strings-p-basses/sadowsky_metroline_hyb_p_j_21_4_mo_bl.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-basses/4-strings-p-basses/sadowsky_metroline_hyb_p_j_21_4_mo_bl.jpg",
    alt: "",

    category: ["4 strings p bass"],
    brand: "Sadowsky",
    price: 2480,
    available: true,
    rating: 4.7,
    totalReviews: 27,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 5 Strings P Bass Models
  {
    title: "Yamaha BB735A DCSG RW",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-basses/5-strings-p-basses/yamaha_bb735a_dcsg_rw.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-basses/5-strings-p-basses/yamaha_bb735a_dcsg_rw.jpg",
    alt: "",
    category: ["5 strings p bass"],
    brand: "Yamaha",
    price: 943,
    available: true,
    rating: 4.9,
    totalReviews: 300,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 4 Strings Hard and Hevy Basses
  {
    title: "Warwick Artist Line Robert Trujillo 4",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-basses/heavy-4-strings-basses/warwick_artist_line_robert_trujillo_4.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-basses/heavy-4-strings-basses/warwick_artist_line_robert_trujillo_4.jpg",
    alt: "",
    category: ["4 strings hard and heavy bass"],
    brand: "Warwick",
    price: 1385,
    available: true,
    rating: 5,
    totalReviews: 444,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 5 Strings Hard and Hevy Basses
  {
    title: "ESP LTD F-5E NS",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-basses/heavy-5-strings-basses/esp_ltd_f_5e_ns.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-basses/heavy-5-strings-basses/esp_ltd_f_5e_ns.jpg",
    alt: "",
    category: ["5 strings hard and heavy bass"],
    brand: "Esp",
    price: 675,
    available: true,
    rating: 4.67,
    totalReviews: 126,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Fretless Basses
  {
    title: "Marcus Miller V7 Alder-4 FL TS 2nd Gen",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-basses/fretless-basses/marcus_miller_v7_alder_4_fl_ts_2nd_gen.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-basses/fretless-basses/marcus_miller_v7_alder_4_fl_ts_2nd_gen.jpg",
    alt: "",
    category: ["fretless bass"],
    brand: "Lary Carlton",
    price: 538,
    available: true,
    rating: 4.5,
    totalReviews: 99,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Headless Basses
  {
    title: "Ibanez EHB1505MS-PLF",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-basses/headless-basses/ibanez_ehb1505ms_plf.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-basses/headless-basses/ibanez_ehb1505ms_plf.jpg",
    alt: "",
    category: ["headless bass"],
    brand: "Ibanez",
    price: 1429,
    available: true,
    rating: 4.5,
    totalReviews: 54,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 4 Strings Left Handed Basses
  {
    title: "Sandberg California VS Lionel BK LH",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-basses/4-strings-left-handed-basses/sandberg_california_vs_lionel_bk_lh.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-basses/4-strings-left-handed-basses/sandberg_california_vs_lionel_bk_lh.jpg",
    alt: "",

    category: ["4 strings left handed bass"],
    brand: "Sandberg",
    price: 1199,
    available: true,
    rating: 5,
    totalReviews: 51,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 5 Strings Left Handed Basses
  {
    title: "Sterling by Music Man StingRay 5 LH MN VSB",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-basses/5-strings-left-handed-basses/sterling_by_music_man_stingray_5_lh_mn_vsb.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-basses/5-strings-left-handed-basses/sterling_by_music_man_stingray_5_lh_mn_vsb.jpg",
    alt: "",

    category: ["5 strings left handed bass"],
    brand: "Music Man",
    price: 555,
    available: true,
    rating: 4.8,
    totalReviews: 26,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Multi-Scale Basses
  {
    title: "Spector NS Dimension MS 4 Faded Black",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-basses/multi-scale-basses/spector_ns_dimension_ms_4_faded_black.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-basses/multi-scale-basses/spector_ns_dimension_ms_4_faded_black.jpg",
    alt: "",

    category: ["multi scale bass"],
    brand: "Spector",
    price: 1798,
    available: true,
    rating: 5,
    totalReviews: 21,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Acoustic Basses

  // 4 Strings Acoustic Bass
  {
    title: "Fender Kingman Bass V2 JTB",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-basses/4-strings-acoustic-basses/harley_benton_b_35nt_acoustic_bass_series.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-basses/4-strings-acoustic-basses/harley_benton_b_35nt_acoustic_bass_series.jpg",
    alt: "",
    category: ["4 strings acoustic bass"],
    brand: "Fender",
    price: 459,
    available: true,
    rating: 5,
    totalReviews: 33,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 5 Strings Acoustic Bass
  {
    title: "Harley Benton B-35NT Acoustic Bass Series",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-basses/5-strings-acoustic-basses/fender_kingman_bass_v2_jtb.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-basses/5-strings-acoustic-basses/fender_kingman_bass_v2_jtb.jpg",
    alt: "",
    category: ["5 strings acoustic bass"],
    brand: "Harley Benton",
    price: 159,
    available: true,
    rating: 4.5,
    totalReviews: 11,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 6 Strings Acoustic Bass
  {
    title: "Warwick Alien Deluxe 6 NT",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-basses/6-strings-acoustic-basses/warwick_alien_deluxe_6_nt.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-basses/6-strings-acoustic-basses/warwick_alien_deluxe_6_nt.jpg",
    alt: "",
    category: ["6 strings acoustic bass"],
    brand: "Warwick",
    price: 1429,
    available: true,
    rating: 4,
    totalReviews: 2,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Fretless Acoustic Bass
  {
    title: "Guild B-240EF Acoustic Bass",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-basses/fretless-acoustic-basses/guild_b_240ef_acoustic_bass.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-basses/fretless-acoustic-basses/guild_b_240ef_acoustic_bass.jpg",
    alt: "",
    category: ["fretless acoustic bass"],
    brand: "Guild",
    price: 475,
    available: true,
    rating: 4.76,
    totalReviews: 56,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Left Handed Acoustic Bass
  {
    title: "Taylor GS Mini-e Koa Bass LH",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-basses/left-handed-acoustic-basses/taylor_gs_mini_e_koa_bass_lh.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-basses/left-handed-acoustic-basses/taylor_gs_mini_e_koa_bass_lh.jpg",
    alt: "",
    category: ["left handed acoustic bass"],
    brand: "Taylor",
    price: 888,
    available: true,
    rating: 4.6,
    totalReviews: 21,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 4 Strings Semi-Acoustic Bass
  {
    title: "Harley Benton HB-60 WB",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-basses/4-strings-semi-acoustic-basses/harley_benton_hb_60_wb.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-basses/4-strings-semi-acoustic-basses/harley_benton_hb_60_wb.jpg",
    alt: "",
    category: ["4 strings semi-acoustic bass"],
    brand: "Harley Benton",
    price: 222,
    available: true,
    rating: 4.3,
    totalReviews: 5,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 5 Strings Semi-Acoustic Bass
  {
    title: "Warwick RB Star Bass 5 VSTHP",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-basses/5-strings-semi-acoustic-basses/warwick_rb_star_bass_5_vsthp.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-basses/5-strings-semi-acoustic-basses/warwick_rb_star_bass_5_vsthp.jpg",
    alt: "",
    category: ["5 strings semi-acoustic bass"],
    brand: "Warwick",
    price: 879,
    available: true,
    rating: 4.4,
    totalReviews: 3,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Fretless Semi-Acoustic Bass
  {
    title: "Takamine TB10",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-basses/fretless-semi-acoustic-basses/takamine_tb10.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-basses/fretless-semi-acoustic-basses/takamine_tb10.jpg",
    alt: "",
    category: ["fretless semi-acoustic bass"],
    brand: "Takamine",
    price: 2299,
    available: true,
    rating: 4.8,
    totalReviews: 13,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Ukulele

  // Baritone Ukulele
  {
    title: "Kala KALA KA-BE Baritone Ukulele",
    srcBig:
      "/images/products/guitars-and-basses/big-images/ukulele/baritone-ukulele/kala_kala_ka_be_baritone_ukulele.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/ukulele/baritone-ukulele/kala_kala_ka_be_baritone_ukulele.jpg",
    alt: "",
    category: ["baritone ukulele"],
    brand: "Kala",
    price: 285,
    available: true,
    rating: 5,
    totalReviews: 125,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Concert Ukulele
  {
    title: "Flight Nighthawk Concert EQ-A",
    srcBig:
      "/images/products/guitars-and-basses/big-images/ukulele/concert-ukulele/flight_nighthawk_concert_eq_a.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/ukulele/concert-ukulele/flight_nighthawk_concert_eq_a.jpg",
    alt: "",
    category: ["concert ukulele"],
    brand: "Flight",
    price: 319,
    available: true,
    rating: 4.5,
    totalReviews: 45,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Soprano Ukulele
  {
    title: "Baton Rouge V2-S sun",
    srcBig:
      "/images/products/guitars-and-basses/big-images/ukulele/soprano-ukulele/baton_rouge_v2_s_sun.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/ukulele/soprano-ukulele/baton_rouge_v2_s_sun.jpg",
    alt: "",
    category: ["soprano ukulele"],
    brand: "Baton Rouge",
    price: 61,
    available: true,
    rating: 4.7,
    totalReviews: 265,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Tenor Ukulele
  {
    title: "Epiphone Ukulele Hummingbird Outfit TSB",
    srcBig:
      "/images/products/guitars-and-basses/big-images/ukulele/tenor-ukulele/epiphone_ukulele_hummingbird_outfit_tsb.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/ukulele/tenor-ukulele/epiphone_ukulele_hummingbird_outfit_tsb.jpg",
    alt: "",
    category: ["tenor ukulele"],
    brand: "Epiphone",
    price: 159,
    available: true,
    rating: 4.6,
    totalReviews: 66,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Bass Ukulele
  {
    title: "Baton Rouge UV11-BS-SCC Bass Ukulele",
    srcBig:
      "/images/products/guitars-and-basses/big-images/ukulele/bass-ukulele/baton_rouge_uv11_bs_scc_bass_ukulele.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/ukulele/bass-ukulele/baton_rouge_uv11_bs_scc_bass_ukulele.jpg",
    alt: "",
    category: ["bass ukulele"],
    brand: "Baton Rouge",
    price: 209,
    available: true,
    rating: 4.4,
    totalReviews: 25,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Ukulele Straps
  // cascha_hh_2201_ukulele_strap_brown
  {
    title: "Cascha HH 2201 Ukulele Strap Brown",
    srcBig:
      "/images/products/guitars-and-basses/big-images/ukulele/ukulele-straps/cascha_hh_2201_ukulele_strap_brown.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/ukulele/ukulele-straps/cascha_hh_2201_ukulele_strap_brown.jpg",
    alt: "",
    category: ["ukulele strap"],
    brand: "Cascha",
    price: 9,
    available: true,
    rating: 5,
    totalReviews: 55,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Ukulele Strings
  {
    title: "Aquila Regular Sopran Ukulele Strings",
    srcBig:
      "/images/products/guitars-and-basses/big-images/ukulele/ukulele-strings/aquila_regular_sopran_ukulele_strings.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/ukulele/ukulele-strings/aquila_regular_sopran_ukulele_strings.jpg",
    alt: "",
    category: ["ukulele strings"],
    brand: "Aquila Regular",
    price: 7,
    available: true,
    rating: 5,
    totalReviews: 555,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Ukulele Cover Bags
  {
    title: "Gator Deluxe Teno.Ukulele Case Beige",
    srcBig:
      "/images/products/guitars-and-basses/big-images/ukulele/ukulele-cover-bags/gator_deluxe_teno_ukulele_case_beige.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/ukulele/ukulele-cover-bags/gator_deluxe_teno_ukulele_case_beige.jpg",
    alt: "",
    category: ["ukulele cover bag"],
    brand: "Gator Deluxe",
    price: 77,
    available: true,
    rating: 4.7,
    totalReviews: 76,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Electric Guitar Amps

  // Combo Amps

  // Solid State Guitar Combo Amps
  {
    title: "Orange Crush 35 RT",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/combo-amps/solid-state-guitar-combo-amps/orange_crush_35_rt.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/combo-amps/solid-state-guitar-combo-amps/orange_crush_35_rt.jpg",
    alt: "",
    category: ["electric guitar solid state combo amp"],
    brand: "Orange",
    price: 266,
    available: true,
    rating: 5,
    totalReviews: 1560,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Digital Guitar Combo Amps also named Modeling Amps
  {
    title: "Boss Katana 100 MKII",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/combo-amps/digital-guitar-combo-amps/boss_katana_100_mkii.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/combo-amps/digital-guitar-combo-amps/boss_katana_100_mkii.jpg",
    alt: "Boss",
    category: ["electric guitar digital combo amp"],
    brand: "",
    price: 348,
    available: true,
    rating: 5,
    totalReviews: 2104,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Lamps Guitar Combo Amps  also named Tubes Amps
  {
    title: "Bugera V22 Infinium",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/combo-amps/lamps-guitar-combo-amps/bugera_v22_infinium.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/combo-amps/lamps-guitar-combo-amps/bugera_v22_infinium.jpg",
    alt: "",
    category: ["electric guitar lamps combo amp"],
    brand: "Bugera",
    price: 379,
    available: true,
    rating: 4.9,
    totalReviews: 552,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Amp Heads

  // Solid State Guitar Amp Heads
  {
    title: "Quilter Tone Block 202",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/amp-heads/solid-state-guitar-amp-heads/quilter_tone_block_202.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/amp-heads/solid-state-guitar-amp-heads/quilter_tone_block_202.jpg",
    alt: "",
    category: ["electric guitar solid state amp head"],
    brand: "Quilter",
    price: 625,
    available: true,
    rating: 4.76,
    totalReviews: 521,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Digital Guitar Amp Heads
  {
    title: "Kemper Profiling Amp Head BK Set",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/amp-heads/digital-guitar-amp-heads/kemper_profiling_amp_head_bk_set.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/amp-heads/digital-guitar-amp-heads/kemper_profiling_amp_head_bk_set.jpg",
    alt: "",
    category: ["electric guitar digital amp head"],
    brand: "Kemper",
    price: 1999,
    available: true,
    rating: 5,
    totalReviews: 31,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Lamps Guitar Amp Heads
  {
    title: "Diezel VH4 EL34 Head",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/amp-heads/lamps-guitar-amp-heads/diezel_vh4_el34_head.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/amp-heads/lamps-guitar-amp-heads/diezel_vh4_el34_head.jpg",
    alt: "",
    category: ["electric guitar lamps amp head"],
    brand: "Diezel",
    price: 2599,
    available: true,
    rating: 5,
    totalReviews: 20,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Preamplifiers
  {
    title: "Boss GT-100",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/preamps/boss_gt_100.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/preamps/boss_gt_100.jpg",
    alt: "",
    category: ["electric guitar preamp"],
    brand: "Boss",
    price: 411,
    available: true,
    rating: 4.6,
    totalReviews: 56,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Power Amplifiers
  {
    title: "Engl E840/50 Poweramp",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/poweramps/engl_e840_50_poweramp.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/poweramps/engl_e840_50_poweramp.jpg",
    alt: "",
    category: ["electric guitar power amp"],
    brand: "Engl",
    price: 888,
    available: true,
    rating: 4.8,
    totalReviews: 43,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Tubes

  // El34 Tubes
  {
    title: "Engl EL34 Matched Quartett",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/tubes/el34-tubes/engl_el34_matched_quartett.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/tubes/el34-tubes/engl_el34_matched_quartett.jpg",
    alt: "",
    category: ["el34 tube"],
    brand: "Engl",
    price: 133,
    available: true,
    rating: 5,
    totalReviews: 71,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 6L6 Tubes
  {
    title: "TAD 6L6GCM-STR Redbase Pair ",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/tubes/6l6-tubes/tad_6l6gcm_str_redbase_pair.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/tubes/6l6-tubes/tad_6l6gcm_str_redbase_pair.jpg",
    alt: "",
    category: ["6l6 tube"],
    brand: "Tube Amp Doctor",
    price: 66,
    available: true,
    rating: 4.9,
    totalReviews: 57,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // El84 Tubes
  {
    title: "Sovtek EL84 Pair",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/tubes/el84-tubes/sovtek_el84_pair.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/tubes/el84-tubes/sovtek_el84_pair.jpg",
    alt: "",
    category: ["el84 tube"],
    brand: "Sovtek",
    price: 53,
    available: true,
    rating: 4.7,
    totalReviews: 34,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Ecc83 Tubes
  {
    title: "Engl Tube ECC 83 First Quality",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/tubes/ecc83-tubes/engl_tube_ecc_83_first_quality.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/tubes/ecc83-tubes/engl_tube_ecc_83_first_quality.jpg",
    alt: "",
    category: ["ecc83 tube"],
    brand: "Engl",
    price: 31,
    available: true,
    rating: 4.8,
    totalReviews: 44,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Other Tubes
  {
    title: "Electro Harmonix 12AY7 Tube",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/tubes/other-tubes/electro_harmonix_12ay7_tube.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/tubes/other-tubes/electro_harmonix_12ay7_tube.jpg",
    alt: "",
    category: ["other tube"],
    brand: "Electro Harmonix",
    price: 29,
    available: true,
    rating: 4.8,
    totalReviews: 29,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // 1x12 Cabinets
  {
    title: "Hughes&Kettner Tubemeister 112 Box",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/1x12-cabinets/hughes_kettner_tubemeister_112_box.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/1x12-cabinets/hughes_kettner_tubemeister_112_box.jpg",
    alt: "",
    category: ["1x12 electric guitar amp head cabinet"],
    brand: "Hughes & Kettner",
    price: 339,
    available: true,
    rating: 4.7,
    totalReviews: 52,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 2x12 Cabinets
  {
    title: "Marshall MX212AR",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/2x12-cabinets/marshall_mx212ar.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/2x12-cabinets/marshall_mx212ar.jpg",
    alt: "",
    category: ["2x12 electric guitar amp head cabinet"],
    brand: "Marshall",
    price: 285,
    available: true,
    rating: 4.9,
    totalReviews: 100,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 4x12 Cabinets
  {
    title: "Orange PPC412 BK",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/4x12-cabinets/orange_ppc412_bk.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/4x12-cabinets/orange_ppc412_bk.jpg",
    alt: "",
    category: ["4x12 electric guitar amp head cabinet"],
    brand: "Orange",
    price: 1035,
    available: true,
    rating: 5,
    totalReviews: 50,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Guitar Amp Cover Bags
  {
    title: "Boss Katana 100 Cover",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/guitar-amp-cover-bags/boss_katana_100_cover.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-guitar-amps/guitar-amp-cover-bags/boss_katana_100_cover.jpg",
    alt: "",
    category: ["guitar amp cover bag"],
    brand: "Boss",
    price: 23,
    available: true,
    rating: 5,
    totalReviews: 240,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Electric Bass Amps

  // Bass Combo Amps

  // Solid State Bass Combo Amps
  {
    title: "Markbass MB58R CMD 102 Pure Combo",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-bass-amps/bass-combo-amps/solid-state-bass-combo-amps/markbass_mb58r_cmd_102_pure_combo.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-bass-amps/bass-combo-amps/solid-state-bass-combo-amps/markbass_mb58r_cmd_102_pure_combo.jpg",
    alt: "",
    category: ["electric bass solid state combo amp"],
    brand: "Markbass",
    price: 1069,
    available: true,
    rating: 4.9,
    totalReviews: 116,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Digital Bass Combo Amps
  {
    title: "Boss Katana-210 Bass",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-bass-amps/bass-combo-amps/digital-bass-combo-amps/boss_katana_210_bass.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-bass-amps/bass-combo-amps/digital-bass-combo-amps/boss_katana_210_bass.jpg",
    alt: "",
    category: ["electric bass digital combo amp"],
    brand: "Boss",
    price: 535,
    available: true,
    rating: 4.8,
    totalReviews: 120,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Bass Amp Heads

  // Solid State Bass Amp Heads
  {
    title: "Phil Jones Bass Amp Head BP-800",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-bass-amps/bass-amp-heads/solid-state-bass-amp-heads/phil_jones_bass_amp_head_bp_800.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-bass-amps/bass-amp-heads/solid-state-bass-amp-heads/phil_jones_bass_amp_head_bp_800.jpg",
    alt: "",
    category: ["electric bass solid state amp head"],
    brand: "Phil Jones",
    price: 799,
    available: true,
    rating: 4.9,
    totalReviews: 76,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Lamps Bass Amp Heads
  {
    title: "Orange AD200B Mk3",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-bass-amps/bass-amp-heads/lamps-bass-amp-heads/orange_ad200b_mk3.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-bass-amps/bass-amp-heads/lamps-bass-amp-heads/orange_ad200b_mk3.jpg",
    alt: "",
    category: ["electric bass lamps amp head"],
    brand: "Orange",
    price: 2111,
    available: true,
    rating: 5,
    totalReviews: 4,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Bass Preamplifiers
  {
    title: "Kemper Profiler Stage",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-bass-amps/bass-preamps/kemper_profiler_stage.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-bass-amps/bass-preamps/kemper_profiler_stage.jpg",
    alt: "",
    category: ["electric bass preamp"],
    brand: "Kemper",
    price: 1525,
    available: true,
    rating: 4.9,
    totalReviews: 2,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 1x15 Bass Cabinets
  {
    title: "Fender Rumble 115 Cabinet V3",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-bass-amps/1x15-bass-cabinets/fender_rumble_115_cabinet_v3.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-bass-amps/1x15-bass-cabinets/fender_rumble_115_cabinet_v3.jpg",
    alt: "",
    category: ["1x15 electric bass amp head cabinet"],
    brand: "Fender",
    price: 359,
    available: true,
    rating: 4.9,
    totalReviews: 76,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 2x10 Bass Cabinets
  {
    title: "Markbass Traveler 102P - 4Ohm",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-bass-amps/2x10-bass-cabinets/markbass_traveler_102p_4ohm.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-bass-amps/2x10-bass-cabinets/markbass_traveler_102p_4ohm.jpg",
    alt: "",
    category: ["2x10 electric bass amp head cabinet"],
    brand: "Markbass",
    price: 444,
    available: true,
    rating: 5,
    totalReviews: 55,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 4x10 Bass Cabinets
  {
    title: "Markbass MB58R 104 Energy Box 4",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-bass-amps/4x10-bass-cabinets/markbass_mb58r_104_energy_box_4.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-bass-amps/4x10-bass-cabinets/markbass_mb58r_104_energy_box_4.jpg",
    alt: "",
    category: ["4x10 electric bass amp head cabinet"],
    brand: "Markbass",
    price: 799,
    available: true,
    rating: 4.7,
    totalReviews: 21,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 8x10 Bass Cabinets
  {
    title: "Ampeg SVT 810E",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-bass-amps/8x10-bass-cabinets/ampeg_svt_810e.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-bass-amps/8x10-bass-cabinets/ampeg_svt_810e.jpg",
    alt: "",
    category: ["8x10 electric bass amp head cabinet"],
    brand: "Ampeg",
    price: 1079,
    available: true,
    rating: 4.9,
    totalReviews: 1,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Bass Amp Cover Bags
  {
    title: "Boss Katana 210 Bass Cover",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-bass-amps/bass-amp-cover-bags/boss_katana_210_bass_cover.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/electric-bass-amps/bass-amp-cover-bags/boss_katana_210_bass_cover.jpg",
    alt: "",
    category: ["electric bass amp cover bag"],
    brand: "Boss",
    price: 31,
    available: true,
    rating: 5,
    totalReviews: 99,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Acoustic Guitar Amps

  // Acoustic Guitar Combo Amps
  {
    title: "Bugera AC60",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-guitar-amps/acoustic-guitar-combo-amps/bugera_ac60.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-guitar-amps/acoustic-guitar-combo-amps/bugera_ac60.jpg",
    alt: "",
    category: ["acoustic guitar combo amp"],
    brand: "Bugera",
    price: 211,
    available: true,
    rating: 5,
    totalReviews: 21,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Acoustic Guitar Preamps
  {
    title: "Fishman Platinum Stage Analog Preamp",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-guitar-amps/acoustic-guitar-preamps/fishman_platinum_stage_analog_preamp.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-guitar-amps/acoustic-guitar-preamps/fishman_platinum_stage_analog_preamp.jpg",
    alt: "",
    category: ["acoustic guitar preamp"],
    brand: "Fishman",
    price: 179,
    available: true,
    rating: 4.7,
    totalReviews: 6,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Acoustic Guitar Cover Bags
  {
    title: "Fishman Cover for Loudbox Artist",
    srcBig:
      "/images/products/guitars-and-basses/big-images/acoustic-guitar-amps/acoustic-guitar-amp-cover-bags/fishman_cover_for_loudbox_artist.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/acoustic-guitar-amps/acoustic-guitar-amp-cover-bags/fishman_cover_for_loudbox_artist.jpg",
    alt: "",
    category: ["acoustic guitar amp cover bag"],
    brand: "Fishman",
    price: 30,
    available: true,
    rating: 5,
    totalReviews: 21,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Strings

  // Electric Guitar Strings

  // 0.08 Electric Guitar Strings
  {
    title: "Daddario NYXL0838",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/electric-guitar-strings/008-strings/daddario_nyxl0838.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/electric-guitar-strings/008-strings/daddario_nyxl0838.jpg",
    alt: "",
    category: ["0.08 electric guitar strings"],
    brand: "D'Addario",
    price: 12.5,
    available: true,
    rating: 5,
    totalReviews: 465,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 0.09 Electric Guitar Strings
  {
    title: "Elixir Optiweb 19002 Super Light",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/electric-guitar-strings/009-strings/elixir_optiweb_19002_super_light.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/electric-guitar-strings/009-strings/elixir_optiweb_19002_super_light.jpg",
    alt: "",
    category: ["0.09 electric guitar strings"],
    brand: "Elixir",
    price: 11.5,
    available: true,
    rating: 5,
    totalReviews: 1508,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 0.10 Electric Guitar Strings
  {
    title: "Elixir Nanoweb Light-Heavy",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/electric-guitar-strings/010-strings/elixir_nanoweb_light_heavy.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/electric-guitar-strings/010-strings/elixir_nanoweb_light_heavy.jpg",
    alt: "",
    category: ["0.10 electric guitar strings"],
    brand: "Elixir",
    price: 11.6,
    available: true,
    rating: 5,
    totalReviews: 2876,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 0.11 Electric Guitar Strings
  {
    title: "Daddario EXL116",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/electric-guitar-strings/011-strings/daddario_exl116.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/electric-guitar-strings/011-strings/daddario_exl116.jpg",
    alt: "",
    category: ["0.11 electric guitar strings"],
    brand: "D'Addario",
    price: 7,
    available: true,
    rating: 5,
    totalReviews: 899,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 7 Strings Electric Guitar Strings
  {
    title: "Daddario EXL110-7",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/electric-guitar-strings/7-strings/daddario_exl110_7.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/electric-guitar-strings/7-strings/daddario_exl110_7.jpg",
    alt: "",
    category: ["7 strings electric guitar strings"],
    brand: "D'Addario",
    price: 8.5,
    available: true,
    rating: 5,
    totalReviews: 178,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 8 Strings Electric Guitar Strings
  {
    title: "DR Strings Tite-Fit TF8-10",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/electric-guitar-strings/8-strings/dr_strings_tite_fit_tf8_10.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/electric-guitar-strings/8-strings/dr_strings_tite_fit_tf8_10.jpg",
    alt: "",
    category: ["8 strings electric guitar strings"],
    brand: "Dr Strings",
    price: 10.7,
    available: true,
    rating: 5,
    totalReviews: 89,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 12 Strings Electric Guitar Strings
  {
    title: "GHS GB12XL-Boomers",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/electric-guitar-strings/12-strings/ghs_gb12xl_boomers.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/electric-guitar-strings/12-strings/ghs_gb12xl_boomers.jpg",
    alt: "Ghs",
    category: ["12 strings electric guitar strings"],
    brand: "",
    price: 11.6,
    available: true,
    rating: 5,
    totalReviews: 12,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Acoustic Guitar Strings

  // 0.10 Acoustic Guitar Strings
  {
    title: "Elixir Nanoweb Extra Light Acoustic",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/acoustic-guitar-strings/010-strings/elixir_nanoweb_extra_light_acoustic.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/acoustic-guitar-strings/010-strings/elixir_nanoweb_extra_light_acoustic.jpg",
    alt: "",
    category: ["0.10 acoustic guitar strings"],
    brand: "Elixir",
    price: 14.4,
    available: true,
    rating: 5,
    totalReviews: 304,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 0.11 Acoustic Guitar Strings
  {
    title: "Rotosound JK11 Jumbo King",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/acoustic-guitar-strings/011-strings/rotosound_jk11_jumbo_king.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/acoustic-guitar-strings/011-strings/rotosound_jk11_jumbo_king.jpg",
    alt: "",
    category: ["0.11 acoustic guitar strings"],
    brand: "Rotosound",
    price: 6.2,
    available: true,
    rating: 5,
    totalReviews: 500,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 0.12 Acoustic Guitar Strings
  {
    title: "Elixir Polyweb Light Acoustic",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/acoustic-guitar-strings/012-strings/elixir_polyweb_light_acoustic.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/acoustic-guitar-strings/012-strings/elixir_polyweb_light_acoustic.jpg",
    alt: "",
    category: ["0.12 acoustic guitar strings"],
    brand: "Elixir",
    price: 15,
    available: true,
    rating: 5,
    totalReviews: 211,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 0.13 Acoustic Guitar Strings
  {
    title: "Martin Guitars MA550T Authentic Treated",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/acoustic-guitar-strings/013-strings/martin_guitars_ma550t_authentic_treated.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/acoustic-guitar-strings/013-strings/martin_guitars_ma550t_authentic_treated.jpg",
    alt: "",
    category: ["0.13 acoustic guitar strings"],
    brand: "Martin Guitars",
    price: 13.4,
    available: true,
    rating: 5,
    totalReviews: 128,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 12 Strings Acoustic Guitar Strings
  {
    title: "Elixir Nanoweb Light 12 Str. Acoustic",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/acoustic-guitar-strings/12-strings/elixir_nanoweb_light_12_str__acoustic.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/acoustic-guitar-strings/12-strings/elixir_nanoweb_light_12_str__acoustic.jpg",
    alt: "",
    category: ["12 strings acoustic guitar strings"],
    brand: "Elixir",
    price: 22,
    available: true,
    rating: 5,
    totalReviews: 12,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Classic Guitar Strings
  {
    title: "Daddario EJ45",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/classic-guitar-strings/daddario_ej45.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/classic-guitar-strings/daddario_ej45.jpg",
    alt: "",
    category: ["classic guitar strings"],
    brand: "D'Addario",
    price: 11.6,
    available: true,
    rating: 5,
    totalReviews: 1392,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Electric Bass Strings

  // 0.40 Electric Bass Strings
  {
    title: "Harley Benton Valuestrings Bass 40-95",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/electric-bass-strings/040-strings/harley_benton_valuestrings_bass_40_95.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/electric-bass-strings/040-strings/harley_benton_valuestrings_bass_40_95.jpg",
    alt: "",
    category: ["0.40 electric bass strings"],
    brand: "Harley Benton",
    price: 5,
    available: true,
    rating: 5,
    totalReviews: 827,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 0.45 Electric Bass Strings
  {
    title: "Elixir Nanoweb Long Scale",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/electric-bass-strings/045-strings/elixir_nanoweb_long_scale.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/electric-bass-strings/045-strings/elixir_nanoweb_long_scale.jpg",
    alt: "",
    category: ["0.45 electric bass strings"],
    brand: "Elixir",
    price: 39,
    available: true,
    rating: 5,
    totalReviews: 126,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 0.50 Electric Bass Strings
  {
    title: "DR Strings Hi-Beams ER-50",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/electric-bass-strings/050-strings/dr_strings_hi_beams_er_50.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/electric-bass-strings/050-strings/dr_strings_hi_beams_er_50.jpg",
    alt: "",
    category: ["0.50 electric bass strings"],
    brand: "Dr Strings",
    price: 31,
    available: true,
    rating: 5,
    totalReviews: 245,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 5 Strings Electric Bass Strings
  {
    title: "Harley Benton Valuestrings Bass-5 45-130",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/electric-bass-strings/5-strings/harley_benton_valuestrings_bass_5_45_130.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/electric-bass-strings/5-strings/harley_benton_valuestrings_bass_5_45_130.jpg",
    alt: "",
    category: [
      "5 strings electric bass strings",
      "0.45-130 5 strings bass strings",
    ],
    brand: "Harley Benton",
    price: 7.9,
    available: true,
    rating: 5,
    totalReviews: 564,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Acoustic Bass Strings
  {
    title: "Fender 8060 Acoustic Bass",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/acoustic-bass-strings/fender_8060_acoustic_bass.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/acoustic-bass-strings/fender_8060_acoustic_bass.jpg",
    alt: "",
    category: ["0.45-100 acoustic bass strings", "acoustic bass strings"],
    brand: "Fender",
    price: 17.9,
    available: true,
    rating: 5,
    totalReviews: 43,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Ukulele Strings
  {
    title: "Martin Guitars M600 NEW Ukulele String Set",
    srcBig:
      "/images/products/guitars-and-basses/big-images/strings/ukulele-strings/martin_guitars_m600_new_ukulele_string_set.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/strings/ukulele-strings/martin_guitars_m600_new_ukulele_string_set.jpg",
    alt: "",
    category: [
      "soprano ukulele strings",
      "concert ukulele strings",
      "ukulele strings",
    ],
    brand: "Martin Guitars",
    price: 5.3,
    available: true,
    rating: 5,
    totalReviews: 78,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Effect Pedals

  // Multi Effect Pedals
  {
    title: "Neural DSP Quad Cortex",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/multi-effect-pedals/neural_dsp_quad_cortex.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/effect-pedals/multi-effect-pedals/neural_dsp_quad_cortex.jpg",
    alt: "",
    category: ["multi effect pedal"],
    brand: "Neural DSP",
    price: 1659,
    available: true,
    rating: 4.9,
    totalReviews: 21,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Distortion Pedals  (these includes distortion, overdrive and fuzz)
  {
    title: "Boss SD-1 Overdrive",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/distortion-pedals/boss_sd_1_overdrive.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/effect-pedals/distortion-pedals/boss_sd_1_overdrive.jpg",
    alt: "",
    category: ["overdrive pedal"],
    brand: "Boss",
    price: 68,
    available: true,
    rating: 5,
    totalReviews: 578,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Chorus/Flanger/Phaser Pedals
  {
    title: "Strymon Mobius",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/chorus-flanger-phaser-pedals/strymon_mobius.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/big-images/effect-pedals/chorus-flanger-phaser-pedals/strymon_mobius.jpg",
    alt: "",
    category: ["chorus pedal", "flanger pedal", "phaser pedal"],
    brand: "Strymon",
    price: 422,
    available: true,
    rating: 5,
    totalReviews: 70,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Delay Pedals
  {
    title: "Keeley Parallax - Spatial Generator",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/delay-pedals/keeley_parallax_spatial_generator.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/effect-pedals/delay-pedals/keeley_parallax_spatial_generator.jpg",
    alt: "",
    category: ["delay pedal"],
    brand: "Keeley",
    price: 249,
    available: true,
    rating: 4.9,
    totalReviews: 231,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Reverb Pedals
  {
    title: "Electro Harmonix Oceans 12 Reverb",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/reverb-pedals/electro_harmonix_oceans_12_reverb.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/effect-pedals/reverb-pedals/electro_harmonix_oceans_12_reverb.jpg",
    alt: "",
    category: ["reverb pedal"],
    brand: "Electro Harmonix",
    price: 222,
    available: true,
    rating: 4.7,
    totalReviews: 128,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Compressor Pedals
  {
    title: "Boss CS-3 Compression Sustainer",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/compressor-pedals/boss_cs_3_compression_sustainer.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/effect-pedals/compressor-pedals/boss_cs_3_compression_sustainer.jpg",
    alt: "",
    category: ["compressor pedal"],
    brand: "Boss",
    price: 98,
    available: true,
    rating: 4.7,
    totalReviews: 82,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Wah Pedals
  {
    title: "Dunlop Crybaby GCB95",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/wah-pedals/dunlop_crybaby_gcb95.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/effect-pedals/wah-pedals/dunlop_crybaby_gcb95.jpg",
    alt: "",
    category: ["wah pedal"],
    brand: "Dunlop",
    price: 105,
    available: true,
    rating: 4.8,
    totalReviews: 632,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Loop Pedals
  {
    title: "Electro Harmonix 22500 Dual Stereo Looper",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/loop-pedals/electro_harmonix_22500_dual_stereo_looper.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/effect-pedals/loop-pedals/electro_harmonix_22500_dual_stereo_looper.jpg",
    alt: "",
    category: ["loop pedal"],
    brand: "Electro Harmonix",
    price: 266,
    available: true,
    rating: 5,
    totalReviews: 139,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Volume and Expression Pedals
  {
    title: "Boss FV-50H",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/volume-and-expression-pedals/boss_fv_50h.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/effect-pedals/volume-and-expression-pedals/boss_fv_50h.jpg",
    alt: "",
    category: ["volume pedal"],
    brand: "Boss",
    price: 82,
    available: true,
    rating: 4.8,
    totalReviews: 51,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Band EQ Pedals
  {
    title: "Boss GE-7 Equalizer",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/bands-eq-pedals/boss_ge_7_equalizer.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/effect-pedals/bands-eq-pedals/boss_ge_7_equalizer.jpg",
    alt: "",
    category: ["bands eq pedal"],
    brand: "Boss",
    price: 105,
    available: true,
    rating: 4.7,
    totalReviews: 6,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Pedalboards
  {
    title: "Harley Benton SpaceShip 40",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/pedalboards/harley_benton_spaceship_40.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/effect-pedals/pedalboards/harley_benton_spaceship_40.jpg",

    alt: "",
    category: ["pedalboard"],
    brand: "Harley Benton",
    price: 49,
    available: true,
    rating: 4.9,
    totalReviews: 51,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Pedal Cables
  {
    title: "EBS EBS DC6-90F Flat Daisy Chain",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/pedal-cables/ebs_ebs_dc6_90f_flat_daisy_chain.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/effect-pedals/pedal-cables/ebs_ebs_dc6_90f_flat_daisy_chain.jpg",
    alt: "",
    category: ["pedal cable", "daisy chain cable"],
    brand: "Ebs",
    price: 8.8,
    available: true,
    rating: 4.8,
    totalReviews: 125,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Power Supplies
  {
    title: "Boss PSA 230S Power Supply",
    srcBig:
      "/images/products/guitars-and-basses/big-images/effect-pedals/power-supplies/boss_psa_230s_power_supply.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/effect-pedals/power-supplies/boss_psa_230s_power_supply.jpg",
    alt: "",
    category: ["power supply"],
    brand: "Boss",
    price: 8.8,
    available: true,
    rating: 5,
    totalReviews: 455,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Pickups

  // Electric Guitar Pickups

  // Single Coil Pickups
  {
    title: "Fender Yosemite Strat PickupSet",
    srcBig:
      "/images/products/guitars-and-basses/big-images/pickups/guitar-pickups/single-coil-pickups/fender_yosemite_strat_pickupset.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/pickups/guitar-pickups/single-coil-pickups/fender_yosemite_strat_pickupset.jpg",
    alt: "",
    category: ["single coil pickup"],
    brand: "Fender",
    price: 105,
    available: true,
    rating: 5,
    totalReviews: 357,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Humbucker Pickups
  {
    title: "EMG 81 Black",
    srcBig:
      "/images/products/guitars-and-basses/big-images/pickups/guitar-pickups/humbucker-pickups/emg_81_black.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/pickups/guitar-pickups/humbucker-pickups/emg_81_black.jpg",
    alt: "",
    category: ["humbucker pickup"],
    brand: "Emg",
    price: 69,
    available: true,
    rating: 5,
    totalReviews: 461,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Pickups for 7 Strings Guitars
  {
    title: "Fishman Fluence Tosin Abasi Set 7 BK",
    srcBig:
      "/images/products/guitars-and-basses/big-images/pickups/guitar-pickups/7-strings-guitar-pickups/fishman_fluence_tosin_abasi_set_7_bk.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/pickups/guitar-pickups/7-strings-guitar-pickups/fishman_fluence_tosin_abasi_set_7_bk.jpg",
    alt: "",
    category: ["7 strings guitar pickup"],
    brand: "Fishman",
    price: 259,
    available: true,
    rating: 4.8,
    totalReviews: 51,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Pickups for 8 Strings Guitars
  {
    title: "EMG 808X Black",
    srcBig:
      "/images/products/guitars-and-basses/big-images/pickups/guitar-pickups/8-strings-guitar-pickups/emg_808x_black.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/pickups/guitar-pickups/8-strings-guitar-pickups/emg_808x_black.jpg",
    alt: "",
    category: ["8 strings guitar pickup"],
    brand: "Emg",
    price: 105,
    available: true,
    rating: 4.7,
    totalReviews: 22,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Electric Bass Pickups

  // 4 Strings J Bass Pickups
  {
    title: "Seymour Duncan Quarter Pound P/J Bass Set",
    srcBig:
      "/images/products/guitars-and-basses/big-images/pickups/bass-pickups/4-strings-j-bass-pickups/seymour_duncan_quarter_pound_p_j_bass_set.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/pickups/bass-pickups/4-strings-j-bass-pickups/seymour_duncan_quarter_pound_p_j_bass_set.jpg",
    alt: "",
    category: ["4 strings j bass pickup", "4 strings p bass pickup"],
    brand: "Seymour Duncan",
    price: 229,
    available: true,
    rating: 5,
    totalReviews: 444,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 5 Strings J Bass Pickups
  {
    title: "Seymour Duncan Apollo J-Bass 5 67/70 Set",
    srcBig:
      "/images/products/guitars-and-basses/big-images/pickups/bass-pickups/5-strings-j-bass-pickups/seymour_duncan_apollo_j_bass_5_67_70_set.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/pickups/bass-pickups/5-strings-j-bass-pickups/seymour_duncan_apollo_j_bass_5_67_70_set.jpg",
    alt: "",
    category: ["5 strings j bass pickup"],
    brand: "Seymour Duncan",
    price: 314,
    available: true,
    rating: 5,
    totalReviews: 555,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 4 Strings P Bass Pickups
  {
    title: " EMG Geezer Butler PHZ Black",
    srcBig:
      "/images/products/guitars-and-basses/big-images/pickups/bass-pickups/4-strings-p-bass-pickups/emg_geezer_butler_phz_black.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/pickups/bass-pickups/4-strings-p-bass-pickups/emg_geezer_butler_phz_black.jpg",
    alt: "",
    category: ["4 strings p bass pickup"],
    brand: "Emg",
    price: 82,
    available: true,
    rating: 4.8,
    totalReviews: 247,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 5 Strings P Bass Pickups
  {
    title: "Seymour Duncan Quarter Pound 5 BK",
    srcBig:
      "/images/products/guitars-and-basses/big-images/pickups/bass-pickups/5-strings-p-bass-pickups/seymour_duncan_quarter_pound_5_bk.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/pickups/bass-pickups/5-strings-p-bass-pickups/seymour_duncan_quarter_pound_5_bk.jpg",
    alt: "",
    category: ["5 strings p bass pickup"],
    brand: "Seymour Duncan",
    price: 194,
    available: true,
    rating: 4.9,
    totalReviews: 453,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Spare Parts

  // Electric Guitar Necks
  {
    title: "Fender Neck Roasted Maple Strat",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/electric-guitar-necks/fender_neck_roasted_maple_strat.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/electric-guitar-necks/fender_neck_roasted_maple_strat.jpg",
    alt: "",
    category: ["electric guitar neck"],
    brand: "Fender",
    price: 279,
    available: true,
    rating: 4.5,
    totalReviews: 4,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Electric Bass Necks
  {
    title: "Fender Neck 70´s Jazz Bass",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/electric-bass-necks/fender_neck_70_s_jazz_bass.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/electric-bass-necks/fender_neck_70_s_jazz_bass.jpg",
    alt: "",
    category: ["electric bass neck"],
    brand: "Fender",
    price: 311,
    available: true,
    rating: 4,
    totalReviews: 6,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Electric Guitar Bodies
  {
    title: "Fender Body Alder Strat VIN BR CAR",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/electric-guitar-bodies/fender_body_alder_strat_vin_br_car.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/electric-guitar-bodies/fender_body_alder_strat_vin_br_car.jpg",
    alt: "",
    category: ["electric guitar body"],
    brand: "Fender",
    price: 349,
    available: true,
    rating: 5,
    totalReviews: 1,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Electric Bass Bodies
  {
    title: "Fender Body Alder J Bass Br. Sunburst",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/electric-bass-bodies/fender_body_alder_j_bass_br_sunburst.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/electric-bass-bodies/fender_body_alder_j_bass_br_sunburst.jpg",
    alt: "",
    category: ["electric bass body"],
    brand: "Fender",
    price: 277,
    available: true,
    rating: 5,
    totalReviews: 1,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Guitar Pick Guards

  // Stratocaster Guitar Pick Guard
  {
    title: "Fender Pickguard SSS Mint Green",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/guitar-pick-guards/stratocaster-pick-guards/fender_pickguard_sss_mint_green.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/guitar-pick-guards/stratocaster-pick-guards/fender_pickguard_sss_mint_green.jpg",
    alt: "",
    category: ["stratocaster guitar pick guard"],
    brand: "Fender",
    price: 44,
    available: true,
    rating: 4,
    totalReviews: 1,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Telecaster Guitar Pick Guard
  {
    title: "dAndrea T-Pickguard Vintage Pearl",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/guitar-pick-guards/telecaster-pick-guards/dandrea_t_pickguard_vintage_pearl.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/guitar-pick-guards/telecaster-pick-guards/dandrea_t_pickguard_vintage_pearl.jpg",
    alt: "",
    category: ["telecaster guitar pick guard"],
    brand: "D'Andrea",
    price: 17.8,
    available: true,
    rating: 0,
    totalReviews: 0,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Les Paul Guitar Pick Guard
  {
    title: "Gibson PRPG-020 Pickguard LP CustomBK",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/guitar-pick-guards/les-paul-pick-guards/gibson_prpg_020_pickguard_lp_custombk.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/guitar-pick-guards/les-paul-pick-guards/gibson_prpg_020_pickguard_lp_custombk.jpg",
    alt: "",
    category: ["les paul guitar pick guard"],
    brand: "Gibson",
    price: 22.4,
    available: true,
    rating: 0,
    totalReviews: 0,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Doublecut Guitar Pick Guard
  {
    title: "Göldo Pickguard Double Cut XSM3B",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/guitar-pick-guards/doublecut-pick-guards/goldo_pickguard_double_cut_xsm3b.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/guitar-pick-guards/doublecut-pick-guards/goldo_pickguard_double_cut_xsm3b.jpg",
    alt: "",
    category: ["doublecut guitar pick guard"],
    brand: "Goldo",
    price: 22.4,
    available: true,
    rating: 0,
    totalReviews: 0,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Bass Pick Guards

  // J Bass Pick Guard
  {
    title: "Harley Benton Parts JB Style Pickguard Black",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/bass-pick-guards/j-bass-pick-guards/harley_benton_parts_jb_style_pickguard_black.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/bass-pick-guards/j-bass-pick-guards/harley_benton_parts_jb_style_pickguard_black.jpg",
    alt: "",
    category: ["j bass pick guard"],
    brand: "Harley Benton",
    price: 7.9,
    available: true,
    rating: 5,
    totalReviews: 1,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // P Bass Pick Guard
  {
    title: "dAndrea PB-Pickguard Red Pearl",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/bass-pick-guards/p-bass-pick-guards/dandrea_pb_pickguard_red_pearl.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/bass-pick-guards/p-bass-pick-guards/dandrea_pb_pickguard_red_pearl.jpg",
    alt: "D'Andrea",
    category: ["p bass pick guard"],
    brand: "",
    price: 22.4,
    available: true,
    rating: 0,
    totalReviews: 0,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Knobs
  {
    title: "Harley Benton Parts Single Cut Speedknob BK",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/knobs/harley_benton_parts_single_cut_speedknob_bk.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/knobs/harley_benton_parts_single_cut_speedknob_bk.jpg",
    alt: "",
    category: ["knob"],
    brand: "Harley Benton",
    price: 2.2,
    available: true,
    rating: 5,
    totalReviews: 3,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Switches

  // 3 Ways Switch Selectors
  {
    title: "Fender 3-way Switch",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/switches/3-ways-selectors/fender_3_way_switch.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/switches/3-ways-selectors/fender_3_way_switch.jpg",
    alt: "",
    category: ["3 ways selector"],
    brand: "Fender",
    price: 15.9,
    available: true,
    rating: 0,
    totalReviews: 0,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 5 Ways Switch Selectors
  {
    title: "Fender 5way Switch",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/switches/5-ways-selectors/fender_5way_switch.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/switches/5-ways-selectors/fender_5way_switch.jpg",
    alt: "",
    category: ["5 ways selector"],
    brand: "Fender",
    price: 14.3,
    available: true,
    rating: 5,
    totalReviews: 2,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Toggle switches
  {
    title: "Göldo EL002 Toggle",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/switches/toggle-switches/goldo_el002_toggle.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/switches/toggle-switches/goldo_el002_toggle.jpg",
    alt: "Goldo",
    category: ["toggle switch"],
    brand: "",
    price: 13.4,
    available: true,
    rating: 5,
    totalReviews: 1,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Saddles and Tailpieces

  // Guitar Tailpieces
  {
    title: "Gibson PTTP-020 Stop Bar Gold",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/saddles-and-tailpieces/guitar-tailpieces/gibson_pttp_020_stop_bar_gold.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/saddles-and-tailpieces/guitar-tailpieces/gibson_pttp_020_stop_bar_gold.jpg",
    alt: "",
    category: ["guitar tailpiece"],
    brand: "Gibson",
    price: 62,
    available: true,
    rating: 5,
    totalReviews: 2,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Guitar Saddles
  {
    title: "Gotoh GE103B-T-C TOM-Style Bridge",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/saddles-and-tailpieces/guitar-bridges/gotoh_ge103b_t_c_tom_style_bridge.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/saddles-and-tailpieces/guitar-bridges/gotoh_ge103b_t_c_tom_style_bridge.jpg",
    alt: "",
    category: ["guitar bridge"],
    brand: "Gotoh",
    price: 27,
    available: true,
    rating: 5,
    totalReviews: 1,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Jazz Guitar Tailpieces and Bridges
  {
    title: "Harley Benton Parts Semi-Hollow Tailpiece",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/saddles-and-tailpieces/jazz-guitar-tailpieces-and-bridges/harley_benton_parts_semi_hollow_tailpiece.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/saddles-and-tailpieces/jazz-guitar-tailpieces-and-bridges/harley_benton_parts_semi_hollow_tailpiece.jpg",
    alt: "",
    category: ["jazz guitar tailpiece", "guitar tailpiece"],
    brand: "Harley Benton",
    price: 10.7,
    available: true,
    rating: 0,
    totalReviews: 0,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Bass Bridges
  {
    title: "Allparts Bass Bridge Badass II 4 C",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/saddles-and-tailpieces/bass-bridges/allparts_bass_bridge_badass_ii_4_c.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/saddles-and-tailpieces/bass-bridges/allparts_bass_bridge_badass_ii_4_c.jpg",
    alt: "",
    category: ["bass bridge"],
    brand: "Allparts",
    price: 115,
    available: true,
    rating: 5,
    totalReviews: 1,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Guitar Tremolos

  // Standard Tremolos
  {
    title: "Fender Vintage/Narrow Strat Tremolo C",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/tremolos/standard-tremolos/fender_vintage_narrow_strat_tremolo_c.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/tremolos/standard-tremolos/fender_vintage_narrow_strat_tremolo_c.jpg",
    alt: "",
    category: ["standard tremolo bridge"],
    brand: "Fender",
    price: 62,
    available: true,
    rating: 5,
    totalReviews: 2,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Floyd Rose Tremolos
  {
    title: "Gotoh GE1996T-40-B FR-Style Tremolo",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/tremolos/floyd-rose-tremolos/gotoh_ge1996t_40_b_fr_style_tremolo.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/tremolos/floyd-rose-tremolos/gotoh_ge1996t_40_b_fr_style_tremolo.jpg",
    alt: "",
    category: ["floyd rose tremolo bridge"],
    brand: "Gotoh",
    price: 133,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Bigsby Tremolos
  {
    title: "Harley Benton Parts Bigsby Lic. B70 Gold",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/tremolos/bigsby-tremolos/harley_benton_parts_bigsby_lic_b70_gold.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/tremolos/bigsby-tremolos/harley_benton_parts_bigsby_lic_b70_gold.jpg",
    alt: "",
    category: ["bigsby tremolo bridge"],
    brand: "Harley Benton",
    price: 178,
    available: true,
    rating: 5,
    totalReviews: 2,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Jack Plates
  {
    title: "Harley Benton Parts SC-Style Jack Plate CH",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/jack-plates/harley_benton_parts_sc_style_jack_plate_ch.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/jack-plates/harley_benton_parts_sc_style_jack_plate_ch.jpg",
    alt: "",
    category: ["jack plate"],
    brand: "Harley Benton",
    price: 2.2,
    available: true,
    rating: 4,
    totalReviews: 1,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Tuning Pegs
  {
    title: "Fender Locking Tuner CH",
    srcBig:
      "/images/products/guitars-and-basses/big-images/spare-parts/tuning-pegs/fender_locking_tuner_ch.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/spare-parts/tuning-pegs/fender_locking_tuner_ch.jpg",
    alt: "",
    category: ["tuning peg", "locking tuning peg"],
    brand: "Fender",
    price: 59,
    available: true,
    rating: 0,
    totalReviews: 0,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Accesories

  // Guitar/Stands Stands
  {
    title: "Millenium GS-2001 E",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/stands/millenium_gs_2001_e.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/stands/millenium_gs_2001_e.jpg",
    alt: "",
    category: ["guitar/bass stand"],
    brand: "Millenium",
    price: 7.1,
    available: true,
    rating: 5,
    totalReviews: 123,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Guitar/Bass Cover Bags

  // Electric Guitar Cases
  {
    title: "Gator GC-ELEC-XL Guitar ABS Case",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/cover-bags-and-cases/electric-guitar-cases/gator_gc_elec_xl_guitar_abs_case.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/cover-bags-and-cases/electric-guitar-cases/gator_gc_elec_xl_guitar_abs_case.jpg",
    alt: "",
    category: ["electric guitar case"],
    brand: "Gatorcases",
    price: 98,
    available: true,
    rating: 5,
    totalReviews: 223,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Acoustic Guitar Cases
  {
    title: "Gator GWE-Acou-3/4 Case",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/cover-bags-and-cases/acoustic-guitar-cases/gator_gwe_acou_3_4_case.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/cover-bags-and-cases/acoustic-guitar-cases/gator_gwe_acou_3_4_case.jpg",
    alt: "",
    category: ["acoustic guitar case"],
    brand: "Gatorcases",
    price: 79,
    available: true,
    rating: 5,
    totalReviews: 77,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Electric Bass Cases
  {
    title: "Gator GC-Bass ABS Case",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/cover-bags-and-cases/electric-bass-cases/gator_gc_bass_abs_case.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/cover-bags-and-cases/electric-bass-cases/gator_gc_bass_abs_case.jpg",
    alt: "",
    category: ["electric bass case"],
    brand: "Gatorcases",
    price: 109,
    available: true,
    rating: 5,
    totalReviews: 43,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Acoustic Bass Cases
  {
    title: "Rockcase Acoustic Bass ABS Case",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/cover-bags-and-cases/acoustic-bass-cases/rockcase_acoustic_bass_abs_case.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/cover-bags-and-cases/acoustic-bass-cases/rockcase_acoustic_bass_abs_case.jpg",
    alt: "",
    category: ["acoustic bass case"],
    brand: "Rockcase",
    price: 124,
    available: true,
    rating: 4.8,
    totalReviews: 21,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Electric Guitar Cover Bags
  {
    title: "Gator G-PG E-Guitar Bag",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/cover-bags-and-cases/electric-guitar-cover-bags/gator_g_pg_e_guitar_bag.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/cover-bags-and-cases/electric-guitar-cover-bags/gator_g_pg_e_guitar_bag.jpg",
    alt: "",
    category: ["electric guitar cover bag"],
    brand: "Gatorcases",
    price: 125,
    available: true,
    rating: 5,
    totalReviews: 254,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Acoustic Guitar Cover Bags
  {
    title: "Gator G-PG Acoustic Guitar Bag",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/cover-bags-and-cases/acoustic-guitar-cover-bags/gator_g_pg_acoustic_guitar_bag.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/cover-bags-and-cases/acoustic-guitar-cover-bags/gator_g_pg_acoustic_guitar_bag.jpg",
    alt: "",
    category: ["acoustic guitar cover bag"],
    brand: "Gatorcases",
    price: 139,
    available: true,
    rating: 5,
    totalReviews: 67,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Electric Bass Cover Bags
  {
    title: "Gator G-PG Bass Guitar Bag",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/cover-bags-and-cases/electric-bass-cover-bags/gator_g_pg_bass_guitar_bag.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/cover-bags-and-cases/electric-bass-cover-bags/gator_g_pg_bass_guitar_bag.jpg",
    alt: "",
    category: ["electric bass cover bag"],
    brand: "Gatorcases",
    price: 148,
    available: true,
    rating: 5,
    totalReviews: 126,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Acoustic Bass Cover Bags
  {
    title: "Ritter RGS7 Acoustic Bass MGB",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/cover-bags-and-cases/acoustic-bass-cover-bags/ritter_rgs7_acoustic_bass_mgb.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/cover-bags-and-cases/acoustic-bass-cover-bags/ritter_rgs7_acoustic_bass_mgb.jpg",
    alt: "",
    category: ["acoustic bass cover bag"],
    brand: "Ritter",
    price: 70,
    available: true,
    rating: 4.9,
    totalReviews: 52,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Instrument Cables
  {
    title: "the sssnake IPP1030",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/instrument-cables/the_sssnake_ipp1030.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/instrument-cables/the_sssnake_ipp1030.jpg",
    alt: "",
    category: ["instrument cable"],
    brand: "The Sssnake",
    price: 3.15,
    available: true,
    rating: 5,
    totalReviews: 585,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Guitar/Bass Straps

  // Leather Straps
  {
    title: "Fender Broken-in Leather Strap Tan",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/straps/leather-straps/fender_broken_in_leather_strap_tan.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/straps/leather-straps/fender_broken_in_leather_strap_tan.jpg",
    alt: "",
    category: ["guitar leather strap"],
    brand: "Fender",
    price: 32,
    available: true,
    rating: 5,
    totalReviews: 96,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Nylon Straps
  {
    title: "Fender Supersoft Strap Black",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/straps/nylon-straps/fender_supersoft_strap_black.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/straps/nylon-straps/fender_supersoft_strap_black.jpg",
    alt: "",
    category: ["guitar nylon strap"],
    brand: "Fender",
    price: 16.9,
    available: true,
    rating: 4.8,
    totalReviews: 56,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Capos

  // Electric/Acoustic Guitar Capos
  {
    title: "Harley Benton HBCA-K Acoustic/Electric Capo",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/capos/electric-acoustic-guitar-capos/harley_benton_hbca_k_acoustic_electric_capo.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/capos/electric-acoustic-guitar-capos/harley_benton_hbca_k_acoustic_electric_capo.jpg",
    alt: "",
    category: ["electric/acoustic guitar capo"],
    brand: "Harley Benton",
    price: 4.4,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Classic Guitar Capos
  {
    title: "Harley Benton HBCC-K Classic Capo",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/capos/classic-guitar-capos/harley_benton_hbcc_k_classic_capo.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/capos/classic-guitar-capos/harley_benton_hbcc_k_classic_capo.jpg",
    alt: "",
    category: ["classic guitar capo"],
    brand: "Harley Benton",
    price: 4.4,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // 12 Strings Guitar Capos
  // daddario_capo_cp02
  {
    title: "Daddario Capo CP02",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/capos/12-strings-guitar-capos/daddario_capo_cp02.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/capos/12-strings-guitar-capos/daddario_capo_cp02.jpg",
    alt: "",
    category: ["12 strings guitar capo"],
    brand: "D'Addario",
    price: 20.5,
    available: true,
    rating: 4.9,
    totalReviews: 12,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Picks
  //
  {
    title: "Dunlop Acoustic Pick Variety Pack",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/picks/dunlop_acoustic_pick_variety_pack.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/picks/dunlop_acoustic_pick_variety_pack.jpg",
    alt: "",
    category: ["pick"],
    brand: "Dunlop",
    price: 6.7,
    available: true,
    rating: 5,
    totalReviews: 2145,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Tuners
  // tc_electronic_polytune_clip_tuner
  {
    title: "TC Electronic PolyTune Clip Tuner",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/tuners/tc_electronic_polytune_clip_tuner.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/tuners/tc_electronic_polytune_clip_tuner.jpg",
    alt: "",
    category: ["tuner"],
    brand: "Tc Electronic",
    price: 44,
    available: true,
    rating: 4.9,
    totalReviews: 512,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Guitar Sliders

  // Glass Sliders
  {
    title: "Dunlop 215",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/sliders/glass-sliders/dunlop_215.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/sliders/glass-sliders/dunlop_215.jpg",
    alt: "",
    category: ["glass slider"],
    brand: "Dunlop",
    price: 11.5,
    available: true,
    rating: 4.6,
    totalReviews: 41,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
  // Metal Sliders
  {
    title: "Fender Steel Slide",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/sliders/metal-sliders/fender_steel_slide.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/sliders/metal-sliders/fender_steel_slide.jpg",
    alt: "",
    category: ["metal slider"],
    brand: "Fender",
    price: 7.1,
    available: true,
    rating: 4.8,
    totalReviews: 75,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },

  // Instrument Tools and Maintenance
  {
    title: "Dunlop Complete Guitar Setup Kit",
    srcBig:
      "/images/products/guitars-and-basses/big-images/accesories/instrument-tools-and-maintenance/dunlop_complete_guitar_setup_kit.jpg",
    srcSmall:
      "/images/products/guitars-and-basses/small-images/accesories/instrument-tools-and-maintenance/dunlop_complete_guitar_setup_kit.jpg",
    alt: "",
    category: ["complete guitar setup kit", "instrument tool"],
    brand: "Dunlop",
    price: 105,
    available: true,
    rating: 5,
    totalReviews: 31,
    specifications: [
      "Product Specification 1 ",
      "Product Specification 2",
      "Product Specification 3",
      "Product Specification 4",
      "Product Specification 5",
    ],
  },
];

export default products;

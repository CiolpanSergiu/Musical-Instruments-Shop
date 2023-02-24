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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
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
    specifications: ["", "", "", "", ""],
  },

  // Tubes

  // El34 Tubes
  // engl_el34_matched_quartett
  {
    title: "Engl EL34 Matched Quartett",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/.jpg",
    srcSmall: "",
    alt: "",
    category: [""],
    brand: "",
    price: 133,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 6L6 Tubes
  // tad_6l6gcm_str_redbase_pair
  {
    title: "TAD 6L6GCM-STR Redbase Pair ",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/.jpg",
    srcSmall: "",
    alt: "",
    category: [""],
    brand: "",
    price: 66,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // El84 Tubes
  // sovtek_el84_pair
  {
    title: "Sovtek EL84 Pair",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/.jpg",
    srcSmall: "",
    alt: "",
    category: [""],
    brand: "",
    price: 53,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Ecc83 Tubes
  // engl_tube_ecc_83_first_quality
  {
    title: "Engl Tube ECC 83 First Quality",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/.jpg",
    srcSmall: "",
    alt: "",
    category: [""],
    brand: "",
    price: 31,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Other Tubes
  // electro_harmonix_12ay7_tube
  {
    title: "Electro Harmonix 12AY7 Tube",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/.jpg",
    srcSmall: "",
    alt: "",
    category: [""],
    brand: "",
    price: 29,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // 1x12 Cabinets
  // hughes_kettner_tubemeister_112_box
  {
    title: "Hughes&Kettner Tubemeister 112 Box",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/.jpg",
    srcSmall: "",
    alt: "",
    category: [""],
    brand: "",
    price: 339,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 2x12 Cabinets
  // marshall_mx212ar
  {
    title: "Marshall MX212AR",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/.jpg",
    srcSmall: "",
    alt: "",
    category: [""],
    brand: "",
    price: 285,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 4x12 Cabinets
  // orange_ppc412_bk
  {
    title: "Orange PPC412 BK",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/.jpg",
    srcSmall: "",
    alt: "",
    category: [""],
    brand: "",
    price: 1035,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Guitar Amp Cover Bags
  // boss_katana_100_cover
  {
    title: "Boss Katana 100 Cover",
    srcBig:
      "/images/products/guitars-and-basses/big-images/electric-guitar-amps/.jpg",
    srcSmall: "",
    alt: "",
    category: [""],
    brand: "",
    price: 23,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Electric Bass Amps

  // Bass Combo Amps

  // Solid State Bass Combo Amps
  // markbass_mb58r_cmd_102_pure_combo
  {
    title: "Markbass MB58R CMD 102 Pure Combo",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 1069,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Digital Bass Combo Amps
  // boss_katana_210_bass
  {
    title: "Boss Katana-210 Bass",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 535,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Bass Amp Heads

  // Solid State Bass Amp Heads
  // phil_jones_bass_amp_head_bp_800
  {
    title: "Phil Jones Bass Amp Head BP-800",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 799,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Lamps Bass Amp Heads
  // orange_ad200b_mk3
  {
    title: "Orange AD200B Mk3",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 2111,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Bass Preamplifiers
  // kemper_profiler_stage
  {
    title: "Kemper Profiler Stage",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 1525,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 1x15 Bass Cabinets
  // fender_rumble_115_cabinet_v3
  {
    title: "Fender Rumble 115 Cabinet V3",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 359,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 2x10 Bass Cabinets
  // markbass_traveler_102p_4ohm
  {
    title: "Markbass Traveler 102P - 4Ohm",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 444,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 4x10 Bass Cabinets
  // markbass_mb58r_104_energy_box_4
  {
    title: "Markbass MB58R 104 Energy Box 4",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 799,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 8x10 Bass Cabinets
  //ampeg_svt_810e
  {
    title: "Ampeg SVT 810E",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 1079,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Bass Amp Cover Bags
  // boss_katana_210_bass_cover
  {
    title: "Boss Katana 210 Bass Cover",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 31,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Acoustic Guitar Amps

  // Acoustic Guitar Combo Amps
  // bugera_ac60
  {
    title: "Bugera AC60",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 211,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Acoustic Guitar Preamps
  // fishman_platinum_stage_analog_preamp
  {
    title: "Fishman Platinum Stage Analog Preamp",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 179,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Acoustic Guitar Cover Bags
  // fishman_cover_for_loudbox_artist
  {
    title: "Fishman Cover for Loudbox Artist",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 30,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Strings

  // Electric Guitar Strings

  // 0.08 Electric Guitar Strings
  // daddario_nyxl0838
  {
    title: "Daddario NYXL0838",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 12.5,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 0.09 Electric Guitar Strings
  // elixir_optiweb_19002_super_light
  {
    title: "Elixir Optiweb 19002 Super Light",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 11.5,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 0.10 Electric Guitar Strings
  // elixir_nanoweb_light_heavy
  {
    title: "Elixir Nanoweb Light-Heavy",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 11.6,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 0.11 Electric Guitar Strings
  // daddario_exl116
  {
    title: "Daddario EXL116",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 7,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 7 Strings Electric Guitar Strings
  // daddario_exl110_7
  {
    title: "Daddario EXL110-7",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 8.5,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 8 Strings Electric Guitar Strings
  // dr_strings_tite_fit_tf8_10
  {
    title: "DR Strings Tite-Fit TF8-10",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 10.7,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 12 Strings Electric Guitar Strings
  // ghs_gb12xl_boomers
  {
    title: "GHS GB12XL-Boomers",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 11.6,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Acoustic Guitar Strings

  // 0.10 Acoustic Guitar Strings
  // elixir_nanoweb_extra_light_acoustic
  {
    title: "Elixir Nanoweb Extra Light Acoustic",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 14.4,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 0.11 Acoustic Guitar Strings
  // rotosound_jk11_jumbo_king
  {
    title: "Rotosound JK11 Jumbo King",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 6.2,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 0.12 Acoustic Guitar Strings
  // elixir_polyweb_light_acoustic
  {
    title: "Elixir Polyweb Light Acoustic",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 15,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 0.13 Acoustic Guitar Strings
  // martin_guitars_ma550t_authentic_treated
  {
    title: "Martin Guitars MA550T Authentic Treated",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 13.4,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 12 Strings Acoustic Guitar Strings
  // elixir_nanoweb_light_12_str__acoustic
  {
    title: "Elixir Nanoweb Light 12 Str. Acoustic",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 22,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Classic Guitar Strings
  // daddario_ej45
  {
    title: "Daddario EJ45",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 11.6,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Electric Bass Strings

  // 0.40 Electric Bass Strings
  // harley_benton_valuestrings_bass_40_95
  {
    title: "Harley Benton Valuestrings Bass 40-95",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 5,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 0.45 Electric Bass Strings
  // elixir_nanoweb_long_scale
  {
    title: "Elixir Nanoweb Long Scale",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 39,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 0.50 Electric Bass Strings
  // dr_strings_hi_beams_er_50
  {
    title: "DR Strings Hi-Beams ER-50",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 31,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 5 Strings Electric Bass Strings
  // harley_benton_valuestrings_bass_5_45_130
  {
    title: "Harley Benton Valuestrings Bass-5 45-130",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 7.9,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Acoustic Bass Strings
  // fender_8060_acoustic_bass
  {
    title: "Fender 8060 Acoustic Bass",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 17.9,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Ukulele Strings
  // martin_guitars_m600_new_ukulele_string_set
  {
    title: "Martin Guitars M600 NEW Ukulele String Set",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 5.3,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Effect Pedals

  // Multi Effect Pedals
  // neural_dsp_quad_cortex
  {
    title: "Neural DSP Quad Cortex",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 1659,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Distortion Pedals
  // boss_sd_1_overdrive
  {
    title: "Boss SD-1 Overdrive",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 68,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Chorus/Flanger/Phaser Pedals
  // strymon_mobius
  {
    title: "Strymon Mobius",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 422,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Delay Pedals
  // keeley_parallax_spatial_generator
  {
    title: "Keeley Parallax - Spatial Generator",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 249,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Reverb Pedals
  // electro_harmonix_oceans_12_reverb
  {
    title: "Electro Harmonix Oceans 12 Reverb",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 222,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Compressor Pedals
  // boss_cs_3_compression_sustainer
  {
    title: "Boss CS-3 Compression Sustainer",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 98,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Wah Pedals
  // dunlop_crybaby_gcb95
  {
    title: "Dunlop Crybaby GCB95",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 105,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Loop Pedals
  // electro_harmonix_22500_dual_stereo_looper
  {
    title: "Electro Harmonix 22500 Dual Stereo Looper",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 266,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Volume and Expression Pedals
  // boss_fv_50h
  {
    title: "Boss FV-50H",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 82,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Band EQ Pedals
  // boss_ge_7_equalizer
  {
    title: "Boss GE-7 Equalizer",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 105,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Pedal Boards
  // harley_benton_spaceship_40
  {
    title: "Harley Benton SpaceShip 40",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 49,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Pedal Cables
  // ebs_ebs_dc6_90f_flat_daisy_chain
  {
    title: "EBS EBS DC6-90F Flat Daisy Chain",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 8.8,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Pickups

  // Electric Guitar Pickups

  // Single Coil Pickups
  // fender_yosemite_strat_pickupset
  {
    title: "Fender Yosemite Strat PickupSet",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 105,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Humbucker Pickups
  // emg_81_black
  {
    title: "EMG 81 Black",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 69,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Pickups for 7 Strings Guitars
  // fishman_fluence_tosin_abasi_set_7_bk
  {
    title: "Fishman Fluence Tosin Abasi Set 7 BK",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 259,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Pickups for 8 Strings Guitars
  // emg_808x_black
  {
    title: "EMG 808X Black",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 105,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Electric Bass Pickups

  // 4 Strings J Bass Pickups
  // seymour_duncan_quarter_pound_p_j_bass_set
  {
    title: "Seymour Duncan Quarter Pound P/J Bass Set",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 229,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 5 Strings J Bass Pickups
  // seymour_duncan_apollo_j_bass_5_67_70_set
  {
    title: "Seymour Duncan Apollo J-Bass 5 67/70 Set",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 314,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 4 Strings P Bass Pickups
  // emg_geezer_butler_phz_black
  {
    title: " EMG Geezer Butler PHZ Black",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 82,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 5 Strings P Bass Pickups
  // seymour_duncan_quarter_pound_5_bk
  {
    title: "Seymour Duncan Quarter Pound 5 BK",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 194,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Spare Parts

  // Electric Guitar Necks
  // fender_neck_roasted_maple_strat
  {
    title: "Fender Neck Roasted Maple Strat",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 279,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Electric Bass Necks
  // fender_neck_70_s_jazz_bass
  {
    title: "Fender Neck 70´s Jazz Bass",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 311,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Electric Guitar Bodies
  // fender_body_alder_strat_vin_br_car
  {
    title: "Fender Body Alder Strat VIN BR CAR",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 349,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Electric Bass Bodies
  // fender_body_alder_j_bass_br_sunburst
  {
    title: "Fender Body Alder J Bass Br. Sunburst",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 277,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Guitar Pick Guards

  // Stratocaster Guitar Pick Guard
  // fender_pickguard_sss_mint_green
  {
    title: "Fender Pickguard SSS Mint Green",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 44,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Telecaster Guitar Pick Guard
  // dandrea_t_pickguard_vintage_pearl
  {
    title: "dAndrea T-Pickguard Vintage Pearl",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 17.8,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Les Paul Guitar Pick Guard
  // gibson_prpg_020_pickguard_lp_custombk
  {
    title: "Gibson PRPG-020 Pickguard LP CustomBK",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 22.4,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Doublecut Guitar Pick Guard
  // goldo_pickguard_double_cut_xsm3b
  {
    title: "Göldo Pickguard Double Cut XSM3B",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 22.4,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Bass Pick Guards

  // J Bass Pick Guard
  // harley_benton_parts_jb_style_pickguard_black
  {
    title: "Harley Benton Parts JB Style Pickguard Black",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 7.9,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // P Bass Pick Guard
  // dandrea_pb_pickguard_red_pearl
  {
    title: "dAndrea PB-Pickguard Red Pearl",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 22.4,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Knobs
  // harley_benton_parts_single_cut_speedknob_bk
  {
    title: "Harley Benton Parts Single Cut Speedknob BK",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 2.2,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Switches

  // 3 Ways Switch Selectors
  // fender_3_way_switch
  {
    title: "Fender 3-way Switch",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 15.9,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 5 Ways Switch Selectors
  // fender_5way_switch
  {
    title: "Fender 5way Switch",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 5,
    available: true,
    rating: 14.3,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Toggle switches
  // goldo_el002_toggle
  {
    title: "Göldo EL002 Toggle",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 13.4,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Saddles and Tailpieces

  // Guitar Tailpieces
  // gibson_pttp_020_stop_bar_gold
  {
    title: "Gibson PTTP-020 Stop Bar Gold",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 62,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Guitar Saddles
  // gotoh_ge103b_t_c_tom_style_bridge
  {
    title: "Gotoh GE103B-T-C TOM-Style Bridge",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 27,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Jazz Guitar Tailpieces and Bridges
  // harley_benton_parts_semi_hollow_tailpiece
  {
    title: "Harley Benton Parts Semi-Hollow Tailpiece",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 10.7,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Bass Bridges
  // allparts_bass_bridge_badass_ii_4_c
  {
    title: "Allparts Bass Bridge Badass II 4 C",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 115,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Guitar Tremolos

  // Standard Tremolos
  // fender_vintage_narrow_strat_tremolo_c
  {
    title: "Fender Vintage/Narrow Strat Tremolo C",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 62,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Floyd Rose Tremolos
  // gotoh_ge1996t_40_b_fr_style_tremolo
  {
    title: "Gotoh GE1996T-40-B FR-Style Tremolo",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 133,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Bigsby Tremolos
  // harley_benton_parts_bigsby_lic_b70_gold
  {
    title: "Harley Benton Parts Bigsby Lic. B70 Gold",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 178,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Jack Plates
  // harley_benton_parts_sc_style_jack_plate_ch
  {
    title: "Harley Benton Parts SC-Style Jack Plate CH",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 2.2,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Tuning Pegs
  // fender_locking_tuner_ch
  {
    title: "Fender Locking Tuner CH",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 59,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Accesories

  // Guitar/Stands Stands
  // millenium_gs_2001_e
  {
    title: "Millenium GS-2001 E",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 7.1,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Guitar/Bass Cover Bags

  // Electric Guitar Cases
  // gator_gc_elec_xl_guitar_abs_case
  {
    title: "Gator GC-ELEC-XL Guitar ABS Case",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 98,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Acoustic Guitar Cases
  // gator_gwe_acou_3_4_case
  {
    title: "Gator GWE-Acou-3/4 Case",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 79,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Electric Bass Cases
  // gator_gc_bass_abs_case
  {
    title: "Gator GC-Bass ABS Case",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 109,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Acoustic Bass Cases
  // rockcase_acoustic_bass_abs_case
  {
    title: "Rockcase Acoustic Bass ABS Case",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 124,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Electric Guitar Cover Bags
  // gator_g_pg_e_guitar_bag
  {
    title: "Gator G-PG E-Guitar Bag",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 125,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Acoustic Guitar Cover Bags
  // gator_g_pg_acoustic_guitar_bag
  {
    title: "Gator G-PG Acoustic Guitar Bag",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 139,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Electric Bass Cover Bags
  // gator_g_pg_bass_guitar_bag
  {
    title: "Gator G-PG Bass Guitar Bag",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 148,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Acoustic Bass Cover Bags
  // ritter_rgs7_acoustic_bass_mgb
  {
    title: "Ritter RGS7 Acoustic Bass MGB",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 70,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Instrument Cables
  // the_sssnake_ipp1030
  {
    title: "the sssnake IPP1030",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 3.15,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Guitar/Bass Straps

  // Leather Straps
  // fender_broken_in_leather_strap_tan
  {
    title: "Fender Broken-in Leather Strap Tan",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 32,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Nylon Straps
  // fender_supersoft_strap_black
  {
    title: "Fender Supersoft Strap Black",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 16.9,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Capos

  // Electric/Acoustic Guitar Capos
  // harley_benton_hbca_k_acoustic_electric_capo
  {
    title: "Harley Benton HBCA-K Acoustic/Electric Capo",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 4.4,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Classic Guitar Capos
  // harley_benton_hbcc_k_classic_capo
  {
    title: "Harley Benton HBCC-K Classic Capo",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 4.4,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // 12 Strings Guitar Capos
  // daddario_capo_cp02
  {
    title: "Daddario Capo CP02",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 20.5,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Picks
  // dunlop_acoustic_pick_variety_pack
  {
    title: "Dunlop Acoustic Pick Variety Pack",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 6.7,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Tuners
  // tc_electronic_polytune_clip_tuner
  {
    title: "tc electronic PolyTune Clip Tuner",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 44,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Guitar Sliders

  // Glass Sliders
  // dunlop_215
  {
    title: "Dunlop 215",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 11.5,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
  // Metal Sliders
  // fender_steel_slide
  {
    title: "Fender Steel Slide",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 7.1,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },

  // Instrument Tools and Maintenance
  // dunlop_complete_guitar_setup_kit
  {
    title: "Dunlop Complete Guitar Setup Kit",
    srcBig: "/images/products/guitars-and-basses/big-images.jpg",
    srcSmall: "",
    alt: "",

    category: [""],
    brand: "",
    price: 105,
    available: true,
    rating: 5,
    totalReviews: 5,
    specifications: ["", "", "", "", ""],
  },
];

export default products;

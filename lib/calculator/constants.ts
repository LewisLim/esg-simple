// https://ourworldindata.org/grapher/co-emissions-per-capita
// CO2 emissions per capita, 2024, tonnes CO2 per person (territorial)
// Source: Global Carbon Budget (2025); Population various sources (2024) - OWID processing
// CC BY 4.0 - ourworldindata.org/co2-and-greenhouse-gas-emissions

export interface CountryEmissions {
  name: string;
  tonnesPerCapita: number;
}

export const co2PerCapita: Record<string, CountryEmissions> = {
  ABW: {
    name: "Aruba",
    tonnesPerCapita: 8.52,
  },
  AFG: {
    name: "Afghanistan",
    tonnesPerCapita: 0.25,
  },
  AGO: {
    name: "Angola",
    tonnesPerCapita: 0.59,
  },
  AIA: {
    name: "Anguilla",
    tonnesPerCapita: 10.13,
  },
  ALB: {
    name: "Albania",
    tonnesPerCapita: 1.59,
  },
  AND: {
    name: "Andorra",
    tonnesPerCapita: 5.18,
  },
  ARE: {
    name: "United Arab Emirates",
    tonnesPerCapita: 20.13,
  },
  ARG: {
    name: "Argentina",
    tonnesPerCapita: 3.74,
  },
  ARM: {
    name: "Armenia",
    tonnesPerCapita: 2.5,
  },
  ATG: {
    name: "Antigua and Barbuda",
    tonnesPerCapita: 7.09,
  },
  AUS: {
    name: "Australia",
    tonnesPerCapita: 14.48,
  },
  AUT: {
    name: "Austria",
    tonnesPerCapita: 6.18,
  },
  AZE: {
    name: "Azerbaijan",
    tonnesPerCapita: 3.85,
  },
  BDI: {
    name: "Burundi",
    tonnesPerCapita: 0.07,
  },
  BEL: {
    name: "Belgium",
    tonnesPerCapita: 7.28,
  },
  BEN: {
    name: "Benin",
    tonnesPerCapita: 0.42,
  },
  BES: {
    name: "Bonaire Sint Eustatius and Saba",
    tonnesPerCapita: 4.95,
  },
  BFA: {
    name: "Burkina Faso",
    tonnesPerCapita: 0.28,
  },
  BGD: {
    name: "Bangladesh",
    tonnesPerCapita: 0.62,
  },
  BGR: {
    name: "Bulgaria",
    tonnesPerCapita: 4.68,
  },
  BHR: {
    name: "Bahrain",
    tonnesPerCapita: 24.27,
  },
  BHS: {
    name: "Bahamas",
    tonnesPerCapita: 7.65,
  },
  BIH: {
    name: "Bosnia and Herzegovina",
    tonnesPerCapita: 6.14,
  },
  BLR: {
    name: "Belarus",
    tonnesPerCapita: 6.16,
  },
  BLZ: {
    name: "Belize",
    tonnesPerCapita: 1.91,
  },
  BMU: {
    name: "Bermuda",
    tonnesPerCapita: 8.51,
  },
  BOL: {
    name: "Bolivia",
    tonnesPerCapita: 2.31,
  },
  BRA: {
    name: "Brazil",
    tonnesPerCapita: 2.28,
  },
  BRB: {
    name: "Barbados",
    tonnesPerCapita: 4.83,
  },
  BRN: {
    name: "Brunei",
    tonnesPerCapita: 26.05,
  },
  BTN: {
    name: "Bhutan",
    tonnesPerCapita: 2.09,
  },
  BWA: {
    name: "Botswana",
    tonnesPerCapita: 2.96,
  },
  CAF: {
    name: "Central African Republic",
    tonnesPerCapita: 0.07,
  },
  CAN: {
    name: "Canada",
    tonnesPerCapita: 13.42,
  },
  CHE: {
    name: "Switzerland",
    tonnesPerCapita: 3.59,
  },
  CHL: {
    name: "Chile",
    tonnesPerCapita: 3.98,
  },
  CHN: {
    name: "China",
    tonnesPerCapita: 8.66,
  },
  CIV: {
    name: "Cote d'Ivoire",
    tonnesPerCapita: 0.46,
  },
  CMR: {
    name: "Cameroon",
    tonnesPerCapita: 0.33,
  },
  COD: {
    name: "Democratic Republic of Congo",
    tonnesPerCapita: 0.05,
  },
  COG: {
    name: "Congo",
    tonnesPerCapita: 1.4,
  },
  COK: {
    name: "Cook Islands",
    tonnesPerCapita: 5.82,
  },
  COL: {
    name: "Colombia",
    tonnesPerCapita: 1.75,
  },
  COM: {
    name: "Comoros",
    tonnesPerCapita: 0.64,
  },
  CPV: {
    name: "Cape Verde",
    tonnesPerCapita: 1.13,
  },
  CRI: {
    name: "Costa Rica",
    tonnesPerCapita: 1.71,
  },
  CUB: {
    name: "Cuba",
    tonnesPerCapita: 2.23,
  },
  CUW: {
    name: "Curacao",
    tonnesPerCapita: 12.34,
  },
  CYP: {
    name: "Cyprus",
    tonnesPerCapita: 5.37,
  },
  CZE: {
    name: "Czechia",
    tonnesPerCapita: 7.04,
  },
  DEU: {
    name: "Germany",
    tonnesPerCapita: 6.77,
  },
  DJI: {
    name: "Djibouti",
    tonnesPerCapita: 0.48,
  },
  DMA: {
    name: "Dominica",
    tonnesPerCapita: 2.58,
  },
  DNK: {
    name: "Denmark",
    tonnesPerCapita: 4.75,
  },
  DOM: {
    name: "Dominican Republic",
    tonnesPerCapita: 2.9,
  },
  DZA: {
    name: "Algeria",
    tonnesPerCapita: 4.23,
  },
  ECU: {
    name: "Ecuador",
    tonnesPerCapita: 2.54,
  },
  EGY: {
    name: "Egypt",
    tonnesPerCapita: 2.22,
  },
  ERI: {
    name: "Eritrea",
    tonnesPerCapita: 0.21,
  },
  ESP: {
    name: "Spain",
    tonnesPerCapita: 4.6,
  },
  EST: {
    name: "Estonia",
    tonnesPerCapita: 6.11,
  },
  ETH: {
    name: "Ethiopia",
    tonnesPerCapita: 0.14,
  },
  FIN: {
    name: "Finland",
    tonnesPerCapita: 5.3,
  },
  FJI: {
    name: "Fiji",
    tonnesPerCapita: 1.56,
  },
  FRA: {
    name: "France",
    tonnesPerCapita: 3.97,
  },
  FRO: {
    name: "Faroe Islands",
    tonnesPerCapita: 13.09,
  },
  FSM: {
    name: "Micronesia (country)",
    tonnesPerCapita: 1.33,
  },
  GAB: {
    name: "Gabon",
    tonnesPerCapita: 2.13,
  },
  GBR: {
    name: "United Kingdom",
    tonnesPerCapita: 4.53,
  },
  GEO: {
    name: "Georgia",
    tonnesPerCapita: 3.09,
  },
  GHA: {
    name: "Ghana",
    tonnesPerCapita: 0.61,
  },
  GIN: {
    name: "Guinea",
    tonnesPerCapita: 0.27,
  },
  GMB: {
    name: "Gambia",
    tonnesPerCapita: 0.29,
  },
  GNB: {
    name: "Guinea-Bissau",
    tonnesPerCapita: 0.16,
  },
  GNQ: {
    name: "Equatorial Guinea",
    tonnesPerCapita: 3.7,
  },
  GRC: {
    name: "Greece",
    tonnesPerCapita: 5.31,
  },
  GRD: {
    name: "Grenada",
    tonnesPerCapita: 3.22,
  },
  GRL: {
    name: "Greenland",
    tonnesPerCapita: 11.08,
  },
  GTM: {
    name: "Guatemala",
    tonnesPerCapita: 1.08,
  },
  GUY: {
    name: "Guyana",
    tonnesPerCapita: 5.43,
  },
  HKG: {
    name: "Hong Kong",
    tonnesPerCapita: 4.49,
  },
  HND: {
    name: "Honduras",
    tonnesPerCapita: 1.19,
  },
  HRV: {
    name: "Croatia",
    tonnesPerCapita: 4.76,
  },
  HTI: {
    name: "Haiti",
    tonnesPerCapita: 0.25,
  },
  HUN: {
    name: "Hungary",
    tonnesPerCapita: 4.14,
  },
  IDN: {
    name: "Indonesia",
    tonnesPerCapita: 2.87,
  },
  IND: {
    name: "India",
    tonnesPerCapita: 2.2,
  },
  IRL: {
    name: "Ireland",
    tonnesPerCapita: 6.34,
  },
  IRN: {
    name: "Iran",
    tonnesPerCapita: 8.66,
  },
  IRQ: {
    name: "Iraq",
    tonnesPerCapita: 5.07,
  },
  ISL: {
    name: "Iceland",
    tonnesPerCapita: 9.67,
  },
  ISR: {
    name: "Israel",
    tonnesPerCapita: 5.61,
  },
  ITA: {
    name: "Italy",
    tonnesPerCapita: 5.09,
  },
  JAM: {
    name: "Jamaica",
    tonnesPerCapita: 2.96,
  },
  JOR: {
    name: "Jordan",
    tonnesPerCapita: 2.01,
  },
  JPN: {
    name: "Japan",
    tonnesPerCapita: 7.77,
  },
  KAZ: {
    name: "Kazakhstan",
    tonnesPerCapita: 13.94,
  },
  KEN: {
    name: "Kenya",
    tonnesPerCapita: 0.38,
  },
  KGZ: {
    name: "Kyrgyzstan",
    tonnesPerCapita: 1.64,
  },
  KHM: {
    name: "Cambodia",
    tonnesPerCapita: 1.24,
  },
  KIR: {
    name: "Kiribati",
    tonnesPerCapita: 0.54,
  },
  KNA: {
    name: "Saint Kitts and Nevis",
    tonnesPerCapita: 5.54,
  },
  KOR: {
    name: "South Korea",
    tonnesPerCapita: 11.29,
  },
  KWT: {
    name: "Kuwait",
    tonnesPerCapita: 26.25,
  },
  LAO: {
    name: "Laos",
    tonnesPerCapita: 3.14,
  },
  LBN: {
    name: "Lebanon",
    tonnesPerCapita: 2.7,
  },
  LBR: {
    name: "Liberia",
    tonnesPerCapita: 0.15,
  },
  LBY: {
    name: "Libya",
    tonnesPerCapita: 8.84,
  },
  LCA: {
    name: "Saint Lucia",
    tonnesPerCapita: 2.99,
  },
  LIE: {
    name: "Liechtenstein",
    tonnesPerCapita: 3.3,
  },
  LKA: {
    name: "Sri Lanka",
    tonnesPerCapita: 0.9,
  },
  LSO: {
    name: "Lesotho",
    tonnesPerCapita: 1.1,
  },
  LTU: {
    name: "Lithuania",
    tonnesPerCapita: 4.39,
  },
  LUX: {
    name: "Luxembourg",
    tonnesPerCapita: 10.46,
  },
  LVA: {
    name: "Latvia",
    tonnesPerCapita: 3.45,
  },
  MAC: {
    name: "Macao",
    tonnesPerCapita: 1.47,
  },
  MAR: {
    name: "Morocco",
    tonnesPerCapita: 1.81,
  },
  MDA: {
    name: "Moldova",
    tonnesPerCapita: 1.76,
  },
  MDG: {
    name: "Madagascar",
    tonnesPerCapita: 0.14,
  },
  MDV: {
    name: "Maldives",
    tonnesPerCapita: 4.37,
  },
  MEX: {
    name: "Mexico",
    tonnesPerCapita: 3.52,
  },
  MHL: {
    name: "Marshall Islands",
    tonnesPerCapita: 4.11,
  },
  MKD: {
    name: "North Macedonia",
    tonnesPerCapita: 3.63,
  },
  MLI: {
    name: "Mali",
    tonnesPerCapita: 0.29,
  },
  MLT: {
    name: "Malta",
    tonnesPerCapita: 3.2,
  },
  MMR: {
    name: "Myanmar",
    tonnesPerCapita: 0.58,
  },
  MNE: {
    name: "Montenegro",
    tonnesPerCapita: 3.72,
  },
  MNG: {
    name: "Mongolia",
    tonnesPerCapita: 12.86,
  },
  MOZ: {
    name: "Mozambique",
    tonnesPerCapita: 0.25,
  },
  MRT: {
    name: "Mauritania",
    tonnesPerCapita: 1.01,
  },
  MSR: {
    name: "Montserrat",
    tonnesPerCapita: 6.02,
  },
  MUS: {
    name: "Mauritius",
    tonnesPerCapita: 3.68,
  },
  MWI: {
    name: "Malawi",
    tonnesPerCapita: 0.09,
  },
  MYS: {
    name: "Malaysia",
    tonnesPerCapita: 8.16,
  },
  NAM: {
    name: "Namibia",
    tonnesPerCapita: 1.14,
  },
  NCL: {
    name: "New Caledonia",
    tonnesPerCapita: 18.06,
  },
  NER: {
    name: "Niger",
    tonnesPerCapita: 0.12,
  },
  NGA: {
    name: "Nigeria",
    tonnesPerCapita: 0.58,
  },
  NIC: {
    name: "Nicaragua",
    tonnesPerCapita: 0.81,
  },
  NIU: {
    name: "Niue",
    tonnesPerCapita: 4.14,
  },
  NLD: {
    name: "Netherlands",
    tonnesPerCapita: 6.3,
  },
  NOR: {
    name: "Norway",
    tonnesPerCapita: 6.67,
  },
  NPL: {
    name: "Nepal",
    tonnesPerCapita: 0.63,
  },
  NRU: {
    name: "Nauru",
    tonnesPerCapita: 5.13,
  },
  NZL: {
    name: "New Zealand",
    tonnesPerCapita: 6.23,
  },
  OMN: {
    name: "Oman",
    tonnesPerCapita: 15.65,
  },
  OWID_KOS: {
    name: "Kosovo",
    tonnesPerCapita: 4.78,
  },
  PAK: {
    name: "Pakistan",
    tonnesPerCapita: 0.72,
  },
  PAN: {
    name: "Panama",
    tonnesPerCapita: 2.8,
  },
  PER: {
    name: "Peru",
    tonnesPerCapita: 2.05,
  },
  PHL: {
    name: "Philippines",
    tonnesPerCapita: 1.51,
  },
  PLW: {
    name: "Palau",
    tonnesPerCapita: 12.76,
  },
  PNG: {
    name: "Papua New Guinea",
    tonnesPerCapita: 0.79,
  },
  POL: {
    name: "Poland",
    tonnesPerCapita: 7.08,
  },
  PRK: {
    name: "North Korea",
    tonnesPerCapita: 2.36,
  },
  PRT: {
    name: "Portugal",
    tonnesPerCapita: 3.41,
  },
  PRY: {
    name: "Paraguay",
    tonnesPerCapita: 1.15,
  },
  PSE: {
    name: "Palestine",
    tonnesPerCapita: 0.87,
  },
  PYF: {
    name: "French Polynesia",
    tonnesPerCapita: 3.27,
  },
  QAT: {
    name: "Qatar",
    tonnesPerCapita: 41.27,
  },
  ROU: {
    name: "Romania",
    tonnesPerCapita: 3.61,
  },
  RUS: {
    name: "Russia",
    tonnesPerCapita: 12.29,
  },
  RWA: {
    name: "Rwanda",
    tonnesPerCapita: 0.14,
  },
  SAU: {
    name: "Saudi Arabia",
    tonnesPerCapita: 20.38,
  },
  SDN: {
    name: "Sudan",
    tonnesPerCapita: 0.35,
  },
  SEN: {
    name: "Senegal",
    tonnesPerCapita: 0.76,
  },
  SGP: {
    name: "Singapore",
    tonnesPerCapita: 9.24,
  },
  SHN: {
    name: "Saint Helena",
    tonnesPerCapita: 2.16,
  },
  SLB: {
    name: "Solomon Islands",
    tonnesPerCapita: 0.36,
  },
  SLE: {
    name: "Sierra Leone",
    tonnesPerCapita: 0.17,
  },
  SLV: {
    name: "El Salvador",
    tonnesPerCapita: 1.42,
  },
  SOM: {
    name: "Somalia",
    tonnesPerCapita: 0.07,
  },
  SPM: {
    name: "Saint Pierre and Miquelon",
    tonnesPerCapita: 9.79,
  },
  SRB: {
    name: "Serbia",
    tonnesPerCapita: 6.24,
  },
  SSD: {
    name: "South Sudan",
    tonnesPerCapita: 0.14,
  },
  STP: {
    name: "Sao Tome and Principe",
    tonnesPerCapita: 0.6,
  },
  SUR: {
    name: "Suriname",
    tonnesPerCapita: 4.71,
  },
  SVK: {
    name: "Slovakia",
    tonnesPerCapita: 5.28,
  },
  SVN: {
    name: "Slovenia",
    tonnesPerCapita: 6.02,
  },
  SWE: {
    name: "Sweden",
    tonnesPerCapita: 3.59,
  },
  SWZ: {
    name: "Eswatini",
    tonnesPerCapita: 0.84,
  },
  SXM: {
    name: "Sint Maarten (Dutch part)",
    tonnesPerCapita: 16.55,
  },
  SYC: {
    name: "Seychelles",
    tonnesPerCapita: 5.0,
  },
  SYR: {
    name: "Syria",
    tonnesPerCapita: 1.29,
  },
  TCA: {
    name: "Turks and Caicos Islands",
    tonnesPerCapita: 8.14,
  },
  TCD: {
    name: "Chad",
    tonnesPerCapita: 0.14,
  },
  TGO: {
    name: "Togo",
    tonnesPerCapita: 0.33,
  },
  THA: {
    name: "Thailand",
    tonnesPerCapita: 3.74,
  },
  TJK: {
    name: "Tajikistan",
    tonnesPerCapita: 1.01,
  },
  TKM: {
    name: "Turkmenistan",
    tonnesPerCapita: 10.81,
  },
  TLS: {
    name: "East Timor",
    tonnesPerCapita: 0.48,
  },
  TON: {
    name: "Tonga",
    tonnesPerCapita: 1.46,
  },
  TTO: {
    name: "Trinidad and Tobago",
    tonnesPerCapita: 22.93,
  },
  TUN: {
    name: "Tunisia",
    tonnesPerCapita: 2.66,
  },
  TUR: {
    name: "Turkey",
    tonnesPerCapita: 5.87,
  },
  TUV: {
    name: "Tuvalu",
    tonnesPerCapita: 1.18,
  },
  TWN: {
    name: "Taiwan",
    tonnesPerCapita: 11.3,
  },
  TZA: {
    name: "Tanzania",
    tonnesPerCapita: 0.29,
  },
  UGA: {
    name: "Uganda",
    tonnesPerCapita: 0.13,
  },
  UKR: {
    name: "Ukraine",
    tonnesPerCapita: 3.76,
  },
  URY: {
    name: "Uruguay",
    tonnesPerCapita: 2.35,
  },
  USA: {
    name: "United States",
    tonnesPerCapita: 14.2,
  },
  UZB: {
    name: "Uzbekistan",
    tonnesPerCapita: 3.83,
  },
  VCT: {
    name: "Saint Vincent and the Grenadines",
    tonnesPerCapita: 2.54,
  },
  VEN: {
    name: "Venezuela",
    tonnesPerCapita: 4.09,
  },
  VGB: {
    name: "British Virgin Islands",
    tonnesPerCapita: 4.87,
  },
  VNM: {
    name: "Vietnam",
    tonnesPerCapita: 3.67,
  },
  VUT: {
    name: "Vanuatu",
    tonnesPerCapita: 0.6,
  },
  WLF: {
    name: "Wallis and Futuna",
    tonnesPerCapita: 2.7,
  },
  WSM: {
    name: "Samoa",
    tonnesPerCapita: 1.13,
  },
  YEM: {
    name: "Yemen",
    tonnesPerCapita: 0.25,
  },
  ZAF: {
    name: "South Africa",
    tonnesPerCapita: 6.87,
  },
  ZMB: {
    name: "Zambia",
    tonnesPerCapita: 0.57,
  },
  ZWE: {
    name: "Zimbabwe",
    tonnesPerCapita: 0.82,
  },
};

// CO2 emissions per capita, 2024, tonnes CO2 per person (territorial)
// Regional / income-group / world aggregates (non-country entities)
// Source: Global Carbon Budget (2025); Population various sources (2024) - OWID processing
// CC BY 4.0 - ourworldindata.org/co2-and-greenhouse-gas-emissions

export interface RegionEmissions {
  name: string;
  tonnesPerCapita: number;
}

export const co2PerCapitaRegions: Record<string, RegionEmissions> = {
  ASIA_EXCL_CHINA_AND_INDIA: {
    name: "Asia (excl. China and India)",
    tonnesPerCapita: 4.09,
  },
  EUROPEAN_UNION_28: {
    name: "European Union (28)",
    tonnesPerCapita: 5.27,
  },
  "EUROPE_EXCL_EU-27": {
    name: "Europe (excl. EU-27)",
    tonnesPerCapita: 8.3,
  },
  "EUROPE_EXCL_EU-28": {
    name: "Europe (excl. EU-28)",
    tonnesPerCapita: 9.45,
  },
  NORTH_AMERICA_EXCL_USA: {
    name: "North America (excl. USA)",
    tonnesPerCapita: 4.48,
  },
  OWID_AFR: {
    name: "Africa",
    tonnesPerCapita: 0.99,
  },
  OWID_ASI: {
    name: "Asia",
    tonnesPerCapita: 4.87,
  },
  OWID_EU27: {
    name: "European Union (27)",
    tonnesPerCapita: 5.39,
  },
  OWID_EUR: {
    name: "Europe",
    tonnesPerCapita: 6.54,
  },
  OWID_HIC: {
    name: "High-income countries",
    tonnesPerCapita: 9.79,
  },
  OWID_LIC: {
    name: "Low-income countries",
    tonnesPerCapita: 0.28,
  },
  OWID_LMC: {
    name: "Lower-middle-income countries",
    tonnesPerCapita: 1.59,
  },
  OWID_NAM: {
    name: "North America",
    tonnesPerCapita: 9.99,
  },
  OWID_OCE: {
    name: "Oceania",
    tonnesPerCapita: 9.53,
  },
  OWID_SAM: {
    name: "South America",
    tonnesPerCapita: 2.55,
  },
  OWID_UMC: {
    name: "Upper-middle-income countries",
    tonnesPerCapita: 6.07,
  },
  OWID_WRL: {
    name: "World",
    tonnesPerCapita: 4.73,
  },
};

export interface HouseholdComposition {
  /** Total adults in household, INCLUDING the respondent. Must be >= 1. */
  adults: number;
  children: number;
  pets: number;
}

// OECD Recommendation
export const HOUSEHOLD_EQUIVALENCE_WEIGHTS = {
  firstAdult: 1.0,
  additionalAdult: 0.5,
  child: 0.3, // under ~14
  pet: 0.1, // not OECD-standard — approximation
};

// --- Emission factors: kg CO2e per km, by mode ---
// Reference-grade values (order of magnitude from UK DEFRA / EPA-style
// published factors). "Public transport" is a midpoint since the survey
// doesn't distinguish bus vs. rail.
export const TRANSPORT_EMISSION_FACTORS_KG_PER_KM = {
  walk_bike: 0,
  public_transport: 0.055, // midpoint of ~0.03 (rail) to ~0.1 (bus)
  car_petrol: 0.17,
  plane_longhaul: 0.117,
  plane_domestic: 0.229,
  plane_normalized: 0.14,
};

export const ASSUMED_ANNUAL_KM_BY_TRANSPORT_BUCKET = {
  walk_bike: 0, // no motorized km assumed
  public_transport: 9000, // mostly-PT commuter, some walking days
  drive_occasionally: 5000, // occasional driver/cab, PT/walk otherwise
  drive_everywhere: 12000, // daily driver
};

export type TransportBucket =
  keyof typeof ASSUMED_ANNUAL_KM_BY_TRANSPORT_BUCKET;

export const BUCKET_TO_MODE: Record<
  TransportBucket,
  keyof typeof TRANSPORT_EMISSION_FACTORS_KG_PER_KM
> = {
  walk_bike: "walk_bike",
  public_transport: "public_transport",
  drive_occasionally: "car_petrol",
  drive_everywhere: "car_petrol",
};

export const CRUISING_SPEED_KM_PER_HOUR = 880;

// Point-estimate assumed annual hours per survey bucket.
// "short_trips" and "longer_trips" use the survey's own stated ranges
// (midpoint). "very_rare" and "always_travelling" are open-ended in the
// survey copy, so these are judgment-call anchors — tune as needed.
export const ASSUMED_ANNUAL_FLIGHT_HOURS_BY_BUCKET = {
  very_rare: 2, // "almost no travel" — occasional short hop, not zero
  short_trips: 10, // survey states ~10 hours/year
  longer_trips: 35, // survey states 20-50 hrs/year, midpoint
  travel_lot: 75, // survey states >50hrs — anchor above the threshold
  always_travelling: 250, // survey states >200hrs — anchor above the threshold
} as const;
 
export type HolidayTravelBucket = keyof typeof ASSUMED_ANNUAL_FLIGHT_HOURS_BY_BUCKET;
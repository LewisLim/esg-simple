// https://ourworldindata.org/grapher/co-emissions-per-capita
// CO2 emissions per capita, 2024, tonnes CO2 per person (territorial)
// Source: Global Carbon Budget (2025); Population various sources (2024) - OWID processing
// CC BY 4.0 - ourworldindata.org/co2-and-greenhouse-gas-emissions

// Country-level energy/emissions data
// co2PerCapitaTonnes: Global Carbon Budget (2025) via OWID, CC BY 4.0
// gridIntensityGCo2PerKwh: Ember (2026) via OWID, lifecycle basis, CC BY 4.0
// null = no data available for this country (mostly small island states; Ukraine also missing, likely due to wartime data disruption)

// Country-level energy/emissions data
// co2PerCapitaTonnes: Global Carbon Budget (2025) via OWID, CC BY 4.0
// gridIntensityGCo2PerKwh: Ember (2026) via OWID, lifecycle basis, CC BY 4.0
// electricityDemandKwhPerCapita: Ember (2026) via OWID (per-capita electricity DEMAND,
//   not generation - closer to actual consumption incl. residential+commercial+industrial), CC BY 4.0
//   null = no data available for this country

export interface CountryEnergyData {
  name: string;
  co2PerCapitaTonnes: number;
  gridIntensityGCo2PerKwh: number | null;
  electricityDemandKwhPerCapita: number | null;
}

export const countryEnergyData: Record<string, CountryEnergyData> = {
  ABW: {
    co2PerCapitaTonnes: 8.52,
    electricityDemandKwhPerCapita: 9252.7,
    gridIntensityGCo2PerKwh: 550.0,
    name: "Aruba",
  },
  AFG: {
    co2PerCapitaTonnes: 0.25,
    electricityDemandKwhPerCapita: 159.9,
    gridIntensityGCo2PerKwh: 131.31,
    name: "Afghanistan",
  },
  AGO: {
    co2PerCapitaTonnes: 0.59,
    electricityDemandKwhPerCapita: 411.5,
    gridIntensityGCo2PerKwh: 185.38,
    name: "Angola",
  },
  AIA: {
    co2PerCapitaTonnes: 10.13,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Anguilla",
  },
  ALB: {
    co2PerCapitaTonnes: 1.59,
    electricityDemandKwhPerCapita: 3105.6,
    gridIntensityGCo2PerKwh: 25.18,
    name: "Albania",
  },
  AND: {
    co2PerCapitaTonnes: 5.18,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Andorra",
  },
  ARE: {
    co2PerCapitaTonnes: 20.13,
    electricityDemandKwhPerCapita: 16053.1,
    gridIntensityGCo2PerKwh: 467.51,
    name: "United Arab Emirates",
  },
  ARG: {
    co2PerCapitaTonnes: 3.74,
    electricityDemandKwhPerCapita: 3538.2,
    gridIntensityGCo2PerKwh: 344.83,
    name: "Argentina",
  },
  ARM: {
    co2PerCapitaTonnes: 2.5,
    electricityDemandKwhPerCapita: 2569.1,
    gridIntensityGCo2PerKwh: 240.31,
    name: "Armenia",
  },
  ATG: {
    co2PerCapitaTonnes: 7.09,
    electricityDemandKwhPerCapita: 3945.3,
    gridIntensityGCo2PerKwh: 594.6,
    name: "Antigua and Barbuda",
  },
  AUS: {
    co2PerCapitaTonnes: 14.48,
    electricityDemandKwhPerCapita: 10543.1,
    gridIntensityGCo2PerKwh: 553.83,
    name: "Australia",
  },
  AUT: {
    co2PerCapitaTonnes: 6.18,
    electricityDemandKwhPerCapita: 7860.0,
    gridIntensityGCo2PerKwh: 103.48,
    name: "Austria",
  },
  AZE: {
    co2PerCapitaTonnes: 3.85,
    electricityDemandKwhPerCapita: 2574.4,
    gridIntensityGCo2PerKwh: 634.34,
    name: "Azerbaijan",
  },
  BDI: {
    co2PerCapitaTonnes: 0.07,
    electricityDemandKwhPerCapita: 40.6,
    gridIntensityGCo2PerKwh: 183.67,
    name: "Burundi",
  },
  BEL: {
    co2PerCapitaTonnes: 7.28,
    electricityDemandKwhPerCapita: 7356.0,
    gridIntensityGCo2PerKwh: 126.96,
    name: "Belgium",
  },
  BEN: {
    co2PerCapitaTonnes: 0.42,
    electricityDemandKwhPerCapita: 159.7,
    gridIntensityGCo2PerKwh: 584.16,
    name: "Benin",
  },
  BES: {
    co2PerCapitaTonnes: 4.95,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Bonaire Sint Eustatius and Saba",
  },
  BFA: {
    co2PerCapitaTonnes: 0.28,
    electricityDemandKwhPerCapita: 135.5,
    gridIntensityGCo2PerKwh: 562.13,
    name: "Burkina Faso",
  },
  BGD: {
    co2PerCapitaTonnes: 0.62,
    electricityDemandKwhPerCapita: 643.8,
    gridIntensityGCo2PerKwh: 695.7,
    name: "Bangladesh",
  },
  BGR: {
    co2PerCapitaTonnes: 4.68,
    electricityDemandKwhPerCapita: 5521.1,
    gridIntensityGCo2PerKwh: 278.85,
    name: "Bulgaria",
  },
  BHR: {
    co2PerCapitaTonnes: 24.27,
    electricityDemandKwhPerCapita: 23919.5,
    gridIntensityGCo2PerKwh: 902.24,
    name: "Bahrain",
  },
  BHS: {
    co2PerCapitaTonnes: 7.65,
    electricityDemandKwhPerCapita: 5607.0,
    gridIntensityGCo2PerKwh: 653.33,
    name: "Bahamas",
  },
  BIH: {
    co2PerCapitaTonnes: 6.14,
    electricityDemandKwhPerCapita: 4895.3,
    gridIntensityGCo2PerKwh: 601.03,
    name: "Bosnia and Herzegovina",
  },
  BLR: {
    co2PerCapitaTonnes: 6.16,
    electricityDemandKwhPerCapita: 4993.0,
    gridIntensityGCo2PerKwh: 329.55,
    name: "Belarus",
  },
  BLZ: {
    co2PerCapitaTonnes: 1.91,
    electricityDemandKwhPerCapita: 2038.0,
    gridIntensityGCo2PerKwh: 170.21,
    name: "Belize",
  },
  BMU: {
    co2PerCapitaTonnes: 8.51,
    electricityDemandKwhPerCapita: 9434.0,
    gridIntensityGCo2PerKwh: 639.34,
    name: "Bermuda",
  },
  BOL: {
    co2PerCapitaTonnes: 2.31,
    electricityDemandKwhPerCapita: 1090.0,
    gridIntensityGCo2PerKwh: 495.2,
    name: "Bolivia",
  },
  BRA: {
    co2PerCapitaTonnes: 2.28,
    electricityDemandKwhPerCapita: 3572.2,
    gridIntensityGCo2PerKwh: 106.06,
    name: "Brazil",
  },
  BRB: {
    co2PerCapitaTonnes: 4.83,
    electricityDemandKwhPerCapita: 3929.5,
    gridIntensityGCo2PerKwh: 594.6,
    name: "Barbados",
  },
  BRN: {
    co2PerCapitaTonnes: 26.05,
    electricityDemandKwhPerCapita: 12015.5,
    gridIntensityGCo2PerKwh: 892.09,
    name: "Brunei",
  },
  BTN: {
    co2PerCapitaTonnes: 2.09,
    electricityDemandKwhPerCapita: 15741.7,
    gridIntensityGCo2PerKwh: 23.64,
    name: "Bhutan",
  },
  BWA: {
    co2PerCapitaTonnes: 2.96,
    electricityDemandKwhPerCapita: 1852.3,
    gridIntensityGCo2PerKwh: 851.31,
    name: "Botswana",
  },
  CAF: {
    co2PerCapitaTonnes: 0.07,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Central African Republic",
  },
  CAN: {
    co2PerCapitaTonnes: 13.42,
    electricityDemandKwhPerCapita: 15710.2,
    gridIntensityGCo2PerKwh: 185.35,
    name: "Canada",
  },
  CHE: {
    co2PerCapitaTonnes: 3.59,
    electricityDemandKwhPerCapita: 7169.9,
    gridIntensityGCo2PerKwh: 34.58,
    name: "Switzerland",
  },
  CHL: {
    co2PerCapitaTonnes: 3.98,
    electricityDemandKwhPerCapita: 4483.7,
    gridIntensityGCo2PerKwh: 259.87,
    name: "Chile",
  },
  CHN: {
    co2PerCapitaTonnes: 8.66,
    electricityDemandKwhPerCapita: 7094.9,
    gridIntensityGCo2PerKwh: 555.4,
    name: "China",
  },
  CIV: {
    co2PerCapitaTonnes: 0.46,
    electricityDemandKwhPerCapita: 315.0,
    gridIntensityGCo2PerKwh: 405.01,
    name: "Cote d'Ivoire",
  },
  CMR: {
    co2PerCapitaTonnes: 0.33,
    electricityDemandKwhPerCapita: 251.3,
    gridIntensityGCo2PerKwh: 225.9,
    name: "Cameroon",
  },
  COD: {
    co2PerCapitaTonnes: 0.05,
    electricityDemandKwhPerCapita: 158.9,
    gridIntensityGCo2PerKwh: 27.64,
    name: "Democratic Republic of Congo",
  },
  COG: {
    co2PerCapitaTonnes: 1.4,
    electricityDemandKwhPerCapita: 849.5,
    gridIntensityGCo2PerKwh: 716.12,
    name: "Congo",
  },
  COK: {
    co2PerCapitaTonnes: 5.82,
    electricityDemandKwhPerCapita: 2909.1,
    gridIntensityGCo2PerKwh: 250.0,
    name: "Cook Islands",
  },
  COL: {
    co2PerCapitaTonnes: 1.75,
    electricityDemandKwhPerCapita: 1685.5,
    gridIntensityGCo2PerKwh: 298.3,
    name: "Colombia",
  },
  COM: {
    co2PerCapitaTonnes: 0.64,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Comoros",
  },
  CPV: {
    co2PerCapitaTonnes: 1.13,
    electricityDemandKwhPerCapita: 990.7,
    gridIntensityGCo2PerKwh: 461.54,
    name: "Cape Verde",
  },
  CRI: {
    co2PerCapitaTonnes: 1.71,
    electricityDemandKwhPerCapita: 2187.2,
    gridIntensityGCo2PerKwh: 25.46,
    name: "Costa Rica",
  },
  CUB: {
    co2PerCapitaTonnes: 2.23,
    electricityDemandKwhPerCapita: 1769.6,
    gridIntensityGCo2PerKwh: 642.82,
    name: "Cuba",
  },
  CUW: {
    co2PerCapitaTonnes: 12.34,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Curacao",
  },
  CYP: {
    co2PerCapitaTonnes: 5.37,
    electricityDemandKwhPerCapita: 4262.7,
    gridIntensityGCo2PerKwh: 511.23,
    name: "Cyprus",
  },
  CZE: {
    co2PerCapitaTonnes: 7.04,
    electricityDemandKwhPerCapita: 6161.6,
    gridIntensityGCo2PerKwh: 414.23,
    name: "Czechia",
  },
  DEU: {
    co2PerCapitaTonnes: 6.77,
    electricityDemandKwhPerCapita: 6176.8,
    gridIntensityGCo2PerKwh: 336.38,
    name: "Germany",
  },
  DJI: {
    co2PerCapitaTonnes: 0.48,
    electricityDemandKwhPerCapita: 684.5,
    gridIntensityGCo2PerKwh: 450.0,
    name: "Djibouti",
  },
  DMA: {
    co2PerCapitaTonnes: 2.58,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Dominica",
  },
  DNK: {
    co2PerCapitaTonnes: 4.75,
    electricityDemandKwhPerCapita: 6486.1,
    gridIntensityGCo2PerKwh: 131.77,
    name: "Denmark",
  },
  DOM: {
    co2PerCapitaTonnes: 2.9,
    electricityDemandKwhPerCapita: 2102.8,
    gridIntensityGCo2PerKwh: 567.62,
    name: "Dominican Republic",
  },
  DZA: {
    co2PerCapitaTonnes: 4.23,
    electricityDemandKwhPerCapita: 2004.5,
    gridIntensityGCo2PerKwh: 632.94,
    name: "Algeria",
  },
  ECU: {
    co2PerCapitaTonnes: 2.54,
    electricityDemandKwhPerCapita: 1839.5,
    gridIntensityGCo2PerKwh: 203.61,
    name: "Ecuador",
  },
  EGY: {
    co2PerCapitaTonnes: 2.22,
    electricityDemandKwhPerCapita: 2025.0,
    gridIntensityGCo2PerKwh: 574.5,
    name: "Egypt",
  },
  ERI: {
    co2PerCapitaTonnes: 0.21,
    electricityDemandKwhPerCapita: 127.3,
    gridIntensityGCo2PerKwh: 577.78,
    name: "Eritrea",
  },
  ESP: {
    co2PerCapitaTonnes: 4.6,
    electricityDemandKwhPerCapita: 5650.3,
    gridIntensityGCo2PerKwh: 146.22,
    name: "Spain",
  },
  EST: {
    co2PerCapitaTonnes: 6.11,
    electricityDemandKwhPerCapita: 6747.3,
    gridIntensityGCo2PerKwh: 343.45,
    name: "Estonia",
  },
  ETH: {
    co2PerCapitaTonnes: 0.14,
    electricityDemandKwhPerCapita: 177.5,
    gridIntensityGCo2PerKwh: 23.41,
    name: "Ethiopia",
  },
  FIN: {
    co2PerCapitaTonnes: 5.3,
    electricityDemandKwhPerCapita: 15261.8,
    gridIntensityGCo2PerKwh: 66.63,
    name: "Finland",
  },
  FJI: {
    co2PerCapitaTonnes: 1.56,
    electricityDemandKwhPerCapita: 1238.2,
    gridIntensityGCo2PerKwh: 278.26,
    name: "Fiji",
  },
  FRA: {
    co2PerCapitaTonnes: 3.97,
    electricityDemandKwhPerCapita: 7089.6,
    gridIntensityGCo2PerKwh: 40.48,
    name: "France",
  },
  FRO: {
    co2PerCapitaTonnes: 13.09,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Faroe Islands",
  },
  FSM: {
    co2PerCapitaTonnes: 1.33,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Micronesia (country)",
  },
  GAB: {
    co2PerCapitaTonnes: 2.13,
    electricityDemandKwhPerCapita: 1252.5,
    gridIntensityGCo2PerKwh: 523.08,
    name: "Gabon",
  },
  GBR: {
    co2PerCapitaTonnes: 4.53,
    electricityDemandKwhPerCapita: 4590.1,
    gridIntensityGCo2PerKwh: 216.5,
    name: "United Kingdom",
  },
  GEO: {
    co2PerCapitaTonnes: 3.09,
    electricityDemandKwhPerCapita: 3705.7,
    gridIntensityGCo2PerKwh: 145.01,
    name: "Georgia",
  },
  GHA: {
    co2PerCapitaTonnes: 0.61,
    electricityDemandKwhPerCapita: 634.1,
    gridIntensityGCo2PerKwh: 468.89,
    name: "Ghana",
  },
  GIN: {
    co2PerCapitaTonnes: 0.27,
    electricityDemandKwhPerCapita: 273.1,
    gridIntensityGCo2PerKwh: 181.14,
    name: "Guinea",
  },
  GMB: {
    co2PerCapitaTonnes: 0.29,
    electricityDemandKwhPerCapita: 184.8,
    gridIntensityGCo2PerKwh: 666.67,
    name: "Gambia",
  },
  GNB: {
    co2PerCapitaTonnes: 0.16,
    electricityDemandKwhPerCapita: 36.3,
    gridIntensityGCo2PerKwh: 625.0,
    name: "Guinea-Bissau",
  },
  GNQ: {
    co2PerCapitaTonnes: 3.7,
    electricityDemandKwhPerCapita: 787.3,
    gridIntensityGCo2PerKwh: 644.3,
    name: "Equatorial Guinea",
  },
  GRC: {
    co2PerCapitaTonnes: 5.31,
    electricityDemandKwhPerCapita: 5650.0,
    gridIntensityGCo2PerKwh: 321.65,
    name: "Greece",
  },
  GRD: {
    co2PerCapitaTonnes: 3.22,
    electricityDemandKwhPerCapita: 2047.5,
    gridIntensityGCo2PerKwh: 666.67,
    name: "Grenada",
  },
  GRL: {
    co2PerCapitaTonnes: 11.08,
    electricityDemandKwhPerCapita: 10740.4,
    gridIntensityGCo2PerKwh: 150.0,
    name: "Greenland",
  },
  GTM: {
    co2PerCapitaTonnes: 1.08,
    electricityDemandKwhPerCapita: 888.3,
    gridIntensityGCo2PerKwh: 301.46,
    name: "Guatemala",
  },
  GUY: {
    co2PerCapitaTonnes: 5.43,
    electricityDemandKwhPerCapita: 1660.5,
    gridIntensityGCo2PerKwh: 644.93,
    name: "Guyana",
  },
  HKG: {
    co2PerCapitaTonnes: 4.49,
    electricityDemandKwhPerCapita: 6582.7,
    gridIntensityGCo2PerKwh: 675.48,
    name: "Hong Kong",
  },
  HND: {
    co2PerCapitaTonnes: 1.19,
    electricityDemandKwhPerCapita: 1166.7,
    gridIntensityGCo2PerKwh: 322.12,
    name: "Honduras",
  },
  HRV: {
    co2PerCapitaTonnes: 4.76,
    electricityDemandKwhPerCapita: 5070.5,
    gridIntensityGCo2PerKwh: 170.7,
    name: "Croatia",
  },
  HTI: {
    co2PerCapitaTonnes: 0.25,
    electricityDemandKwhPerCapita: 73.1,
    gridIntensityGCo2PerKwh: 534.88,
    name: "Haiti",
  },
  HUN: {
    co2PerCapitaTonnes: 4.14,
    electricityDemandKwhPerCapita: 5036.1,
    gridIntensityGCo2PerKwh: 184.47,
    name: "Hungary",
  },
  IDN: {
    co2PerCapitaTonnes: 2.87,
    electricityDemandKwhPerCapita: 1314.0,
    gridIntensityGCo2PerKwh: 680.25,
    name: "Indonesia",
  },
  IND: {
    co2PerCapitaTonnes: 2.2,
    electricityDemandKwhPerCapita: 1402.0,
    gridIntensityGCo2PerKwh: 705.4,
    name: "India",
  },
  IRL: {
    co2PerCapitaTonnes: 6.34,
    electricityDemandKwhPerCapita: 6877.2,
    gridIntensityGCo2PerKwh: 270.91,
    name: "Ireland",
  },
  IRN: {
    co2PerCapitaTonnes: 8.66,
    electricityDemandKwhPerCapita: 4296.2,
    gridIntensityGCo2PerKwh: 648.68,
    name: "Iran",
  },
  IRQ: {
    co2PerCapitaTonnes: 5.07,
    electricityDemandKwhPerCapita: 3406.2,
    gridIntensityGCo2PerKwh: 683.1,
    name: "Iraq",
  },
  ISL: {
    co2PerCapitaTonnes: 9.67,
    electricityDemandKwhPerCapita: 48423.5,
    gridIntensityGCo2PerKwh: 27.82,
    name: "Iceland",
  },
  ISR: {
    co2PerCapitaTonnes: 5.61,
    electricityDemandKwhPerCapita: 7883.2,
    gridIntensityGCo2PerKwh: 540.55,
    name: "Israel",
  },
  ITA: {
    co2PerCapitaTonnes: 5.09,
    electricityDemandKwhPerCapita: 5368.1,
    gridIntensityGCo2PerKwh: 281.4,
    name: "Italy",
  },
  JAM: {
    co2PerCapitaTonnes: 2.96,
    electricityDemandKwhPerCapita: 1732.9,
    gridIntensityGCo2PerKwh: 563.01,
    name: "Jamaica",
  },
  JOR: {
    co2PerCapitaTonnes: 2.01,
    electricityDemandKwhPerCapita: 2054.0,
    gridIntensityGCo2PerKwh: 529.79,
    name: "Jordan",
  },
  JPN: {
    co2PerCapitaTonnes: 7.77,
    electricityDemandKwhPerCapita: 8213.1,
    gridIntensityGCo2PerKwh: 483.43,
    name: "Japan",
  },
  KAZ: {
    co2PerCapitaTonnes: 13.94,
    electricityDemandKwhPerCapita: 5872.0,
    gridIntensityGCo2PerKwh: 802.04,
    name: "Kazakhstan",
  },
  KEN: {
    co2PerCapitaTonnes: 0.38,
    electricityDemandKwhPerCapita: 261.4,
    gridIntensityGCo2PerKwh: 85.22,
    name: "Kenya",
  },
  KGZ: {
    co2PerCapitaTonnes: 1.64,
    electricityDemandKwhPerCapita: 2678.8,
    gridIntensityGCo2PerKwh: 119.21,
    name: "Kyrgyzstan",
  },
  KHM: {
    co2PerCapitaTonnes: 1.24,
    electricityDemandKwhPerCapita: 1133.9,
    gridIntensityGCo2PerKwh: 538.76,
    name: "Cambodia",
  },
  KIR: {
    co2PerCapitaTonnes: 0.54,
    electricityDemandKwhPerCapita: 297.4,
    gridIntensityGCo2PerKwh: 500.0,
    name: "Kiribati",
  },
  KNA: {
    co2PerCapitaTonnes: 5.54,
    electricityDemandKwhPerCapita: 4907.5,
    gridIntensityGCo2PerKwh: 608.7,
    name: "Saint Kitts and Nevis",
  },
  KOR: {
    co2PerCapitaTonnes: 11.29,
    electricityDemandKwhPerCapita: 12092.2,
    gridIntensityGCo2PerKwh: 415.51,
    name: "South Korea",
  },
  KWT: {
    co2PerCapitaTonnes: 26.25,
    electricityDemandKwhPerCapita: 18743.5,
    gridIntensityGCo2PerKwh: 635.2,
    name: "Kuwait",
  },
  LAO: {
    co2PerCapitaTonnes: 3.14,
    electricityDemandKwhPerCapita: 2009.1,
    gridIntensityGCo2PerKwh: 232.08,
    name: "Laos",
  },
  LBN: {
    co2PerCapitaTonnes: 2.7,
    electricityDemandKwhPerCapita: 919.7,
    gridIntensityGCo2PerKwh: 389.51,
    name: "Lebanon",
  },
  LBR: {
    co2PerCapitaTonnes: 0.15,
    electricityDemandKwhPerCapita: 101.6,
    gridIntensityGCo2PerKwh: 315.79,
    name: "Liberia",
  },
  LBY: {
    co2PerCapitaTonnes: 8.84,
    electricityDemandKwhPerCapita: 4686.3,
    gridIntensityGCo2PerKwh: 826.83,
    name: "Libya",
  },
  LCA: {
    co2PerCapitaTonnes: 2.99,
    electricityDemandKwhPerCapita: 2225.3,
    gridIntensityGCo2PerKwh: 650.0,
    name: "Saint Lucia",
  },
  LIE: {
    co2PerCapitaTonnes: 3.3,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Liechtenstein",
  },
  LKA: {
    co2PerCapitaTonnes: 0.9,
    electricityDemandKwhPerCapita: 738.8,
    gridIntensityGCo2PerKwh: 378.44,
    name: "Sri Lanka",
  },
  LSO: {
    co2PerCapitaTonnes: 1.1,
    electricityDemandKwhPerCapita: 248.1,
    gridIntensityGCo2PerKwh: null,
    name: "Lesotho",
  },
  LTU: {
    co2PerCapitaTonnes: 4.39,
    electricityDemandKwhPerCapita: 4473.4,
    gridIntensityGCo2PerKwh: 116.37,
    name: "Lithuania",
  },
  LUX: {
    co2PerCapitaTonnes: 10.46,
    electricityDemandKwhPerCapita: 10044.0,
    gridIntensityGCo2PerKwh: 132.45,
    name: "Luxembourg",
  },
  LVA: {
    co2PerCapitaTonnes: 3.45,
    electricityDemandKwhPerCapita: 3953.3,
    gridIntensityGCo2PerKwh: 134.28,
    name: "Latvia",
  },
  MAC: {
    co2PerCapitaTonnes: 1.47,
    electricityDemandKwhPerCapita: 8719.0,
    gridIntensityGCo2PerKwh: 474.36,
    name: "Macao",
  },
  MAR: {
    co2PerCapitaTonnes: 1.81,
    electricityDemandKwhPerCapita: 1180.1,
    gridIntensityGCo2PerKwh: 594.81,
    name: "Morocco",
  },
  MDA: {
    co2PerCapitaTonnes: 1.76,
    electricityDemandKwhPerCapita: 1996.7,
    gridIntensityGCo2PerKwh: 634.27,
    name: "Moldova",
  },
  MDG: {
    co2PerCapitaTonnes: 0.14,
    electricityDemandKwhPerCapita: 76.0,
    gridIntensityGCo2PerKwh: 432.1,
    name: "Madagascar",
  },
  MDV: {
    co2PerCapitaTonnes: 4.37,
    electricityDemandKwhPerCapita: 1610.5,
    gridIntensityGCo2PerKwh: 611.77,
    name: "Maldives",
  },
  MEX: {
    co2PerCapitaTonnes: 3.52,
    electricityDemandKwhPerCapita: 2711.8,
    gridIntensityGCo2PerKwh: 483.14,
    name: "Mexico",
  },
  MHL: {
    co2PerCapitaTonnes: 4.11,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Marshall Islands",
  },
  MKD: {
    co2PerCapitaTonnes: 3.63,
    electricityDemandKwhPerCapita: 3850.8,
    gridIntensityGCo2PerKwh: 510.3,
    name: "North Macedonia",
  },
  MLI: {
    co2PerCapitaTonnes: 0.29,
    electricityDemandKwhPerCapita: 223.1,
    gridIntensityGCo2PerKwh: 538.59,
    name: "Mali",
  },
  MLT: {
    co2PerCapitaTonnes: 3.2,
    electricityDemandKwhPerCapita: 5856.1,
    gridIntensityGCo2PerKwh: 488.58,
    name: "Malta",
  },
  MMR: {
    co2PerCapitaTonnes: 0.58,
    electricityDemandKwhPerCapita: 402.2,
    gridIntensityGCo2PerKwh: 502.99,
    name: "Myanmar",
  },
  MNE: {
    co2PerCapitaTonnes: 3.72,
    electricityDemandKwhPerCapita: 5278.2,
    gridIntensityGCo2PerKwh: 422.1,
    name: "Montenegro",
  },
  MNG: {
    co2PerCapitaTonnes: 12.86,
    electricityDemandKwhPerCapita: 3320.3,
    gridIntensityGCo2PerKwh: 810.66,
    name: "Mongolia",
  },
  MOZ: {
    co2PerCapitaTonnes: 0.25,
    electricityDemandKwhPerCapita: 476.2,
    gridIntensityGCo2PerKwh: 129.36,
    name: "Mozambique",
  },
  MRT: {
    co2PerCapitaTonnes: 1.01,
    electricityDemandKwhPerCapita: 458.5,
    gridIntensityGCo2PerKwh: 512.08,
    name: "Mauritania",
  },
  MSR: {
    co2PerCapitaTonnes: 6.02,
    electricityDemandKwhPerCapita: 2265.5,
    gridIntensityGCo2PerKwh: 1000.0,
    name: "Montserrat",
  },
  MUS: {
    co2PerCapitaTonnes: 3.68,
    electricityDemandKwhPerCapita: 2682.6,
    gridIntensityGCo2PerKwh: 642.23,
    name: "Mauritius",
  },
  MWI: {
    co2PerCapitaTonnes: 0.09,
    electricityDemandKwhPerCapita: 83.6,
    gridIntensityGCo2PerKwh: 54.65,
    name: "Malawi",
  },
  MYS: {
    co2PerCapitaTonnes: 8.16,
    electricityDemandKwhPerCapita: 5541.4,
    gridIntensityGCo2PerKwh: 600.44,
    name: "Malaysia",
  },
  NAM: {
    co2PerCapitaTonnes: 1.14,
    electricityDemandKwhPerCapita: 1333.3,
    gridIntensityGCo2PerKwh: 48.78,
    name: "Namibia",
  },
  NCL: {
    co2PerCapitaTonnes: 18.06,
    electricityDemandKwhPerCapita: 10661.0,
    gridIntensityGCo2PerKwh: 560.9,
    name: "New Caledonia",
  },
  NER: {
    co2PerCapitaTonnes: 0.12,
    electricityDemandKwhPerCapita: 79.5,
    gridIntensityGCo2PerKwh: 673.68,
    name: "Niger",
  },
  NGA: {
    co2PerCapitaTonnes: 0.58,
    electricityDemandKwhPerCapita: 151.5,
    gridIntensityGCo2PerKwh: 495.74,
    name: "Nigeria",
  },
  NIC: {
    co2PerCapitaTonnes: 0.81,
    electricityDemandKwhPerCapita: 783.7,
    gridIntensityGCo2PerKwh: 300.89,
    name: "Nicaragua",
  },
  NIU: {
    co2PerCapitaTonnes: 4.14,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Niue",
  },
  NLD: {
    co2PerCapitaTonnes: 6.3,
    electricityDemandKwhPerCapita: 6479.3,
    gridIntensityGCo2PerKwh: 250.72,
    name: "Netherlands",
  },
  NOR: {
    co2PerCapitaTonnes: 6.67,
    electricityDemandKwhPerCapita: 24866.2,
    gridIntensityGCo2PerKwh: 29.66,
    name: "Norway",
  },
  NPL: {
    co2PerCapitaTonnes: 0.63,
    electricityDemandKwhPerCapita: 372.0,
    gridIntensityGCo2PerKwh: 24.26,
    name: "Nepal",
  },
  NRU: {
    co2PerCapitaTonnes: 5.13,
    electricityDemandKwhPerCapita: 4177.8,
    gridIntensityGCo2PerKwh: 600.0,
    name: "Nauru",
  },
  NZL: {
    co2PerCapitaTonnes: 6.23,
    electricityDemandKwhPerCapita: 8440.8,
    gridIntensityGCo2PerKwh: 112.02,
    name: "New Zealand",
  },
  OMN: {
    co2PerCapitaTonnes: 15.65,
    electricityDemandKwhPerCapita: 9296.5,
    gridIntensityGCo2PerKwh: 542.77,
    name: "Oman",
  },
  OWID_KOS: {
    co2PerCapitaTonnes: 4.78,
    electricityDemandKwhPerCapita: 4338.8,
    gridIntensityGCo2PerKwh: 924.67,
    name: "Kosovo",
  },
  PAK: {
    co2PerCapitaTonnes: 0.72,
    electricityDemandKwhPerCapita: 698.2,
    gridIntensityGCo2PerKwh: 373.69,
    name: "Pakistan",
  },
  PAN: {
    co2PerCapitaTonnes: 2.8,
    electricityDemandKwhPerCapita: 2943.1,
    gridIntensityGCo2PerKwh: 221.15,
    name: "Panama",
  },
  PER: {
    co2PerCapitaTonnes: 2.05,
    electricityDemandKwhPerCapita: 1733.6,
    gridIntensityGCo2PerKwh: 258.73,
    name: "Peru",
  },
  PHL: {
    co2PerCapitaTonnes: 1.51,
    electricityDemandKwhPerCapita: 1071.9,
    gridIntensityGCo2PerKwh: 621.73,
    name: "Philippines",
  },
  PLW: {
    co2PerCapitaTonnes: 12.76,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Palau",
  },
  PNG: {
    co2PerCapitaTonnes: 0.79,
    electricityDemandKwhPerCapita: 447.2,
    gridIntensityGCo2PerKwh: 513.74,
    name: "Papua New Guinea",
  },
  POL: {
    co2PerCapitaTonnes: 7.08,
    electricityDemandKwhPerCapita: 4517.2,
    gridIntensityGCo2PerKwh: 608.18,
    name: "Poland",
  },
  PRK: {
    co2PerCapitaTonnes: 2.36,
    electricityDemandKwhPerCapita: 1022.7,
    gridIntensityGCo2PerKwh: 340.59,
    name: "North Korea",
  },
  PRT: {
    co2PerCapitaTonnes: 3.41,
    electricityDemandKwhPerCapita: 5538.5,
    gridIntensityGCo2PerKwh: 110.64,
    name: "Portugal",
  },
  PRY: {
    co2PerCapitaTonnes: 1.15,
    electricityDemandKwhPerCapita: 3811.4,
    gridIntensityGCo2PerKwh: 24.76,
    name: "Paraguay",
  },
  PSE: {
    co2PerCapitaTonnes: 0.87,
    electricityDemandKwhPerCapita: 1453.9,
    gridIntensityGCo2PerKwh: 414.14,
    name: "Palestine",
  },
  PYF: {
    co2PerCapitaTonnes: 3.27,
    electricityDemandKwhPerCapita: 2554.9,
    gridIntensityGCo2PerKwh: 430.56,
    name: "French Polynesia",
  },
  QAT: {
    co2PerCapitaTonnes: 41.27,
    electricityDemandKwhPerCapita: 18593.2,
    gridIntensityGCo2PerKwh: 581.69,
    name: "Qatar",
  },
  ROU: {
    co2PerCapitaTonnes: 3.61,
    electricityDemandKwhPerCapita: 2928.2,
    gridIntensityGCo2PerKwh: 251.33,
    name: "Romania",
  },
  RUS: {
    co2PerCapitaTonnes: 12.29,
    electricityDemandKwhPerCapita: 8237.2,
    gridIntensityGCo2PerKwh: 445.98,
    name: "Russia",
  },
  RWA: {
    co2PerCapitaTonnes: 0.14,
    electricityDemandKwhPerCapita: 85.6,
    gridIntensityGCo2PerKwh: 353.98,
    name: "Rwanda",
  },
  SAU: {
    co2PerCapitaTonnes: 20.38,
    electricityDemandKwhPerCapita: 13385.0,
    gridIntensityGCo2PerKwh: 691.95,
    name: "Saudi Arabia",
  },
  SDN: {
    co2PerCapitaTonnes: 0.35,
    electricityDemandKwhPerCapita: 308.6,
    gridIntensityGCo2PerKwh: 153.69,
    name: "Sudan",
  },
  SEN: {
    co2PerCapitaTonnes: 0.76,
    electricityDemandKwhPerCapita: 439.4,
    gridIntensityGCo2PerKwh: 539.97,
    name: "Senegal",
  },
  SGP: {
    co2PerCapitaTonnes: 9.24,
    electricityDemandKwhPerCapita: 10223.9,
    gridIntensityGCo2PerKwh: 498.74,
    name: "Singapore",
  },
  SHN: {
    co2PerCapitaTonnes: 2.16,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Saint Helena",
  },
  SLB: {
    co2PerCapitaTonnes: 0.36,
    electricityDemandKwhPerCapita: 134.3,
    gridIntensityGCo2PerKwh: 636.36,
    name: "Solomon Islands",
  },
  SLE: {
    co2PerCapitaTonnes: 0.17,
    electricityDemandKwhPerCapita: 24.3,
    gridIntensityGCo2PerKwh: 47.62,
    name: "Sierra Leone",
  },
  SLV: {
    co2PerCapitaTonnes: 1.42,
    electricityDemandKwhPerCapita: 978.2,
    gridIntensityGCo2PerKwh: 113.32,
    name: "El Salvador",
  },
  SOM: {
    co2PerCapitaTonnes: 0.07,
    electricityDemandKwhPerCapita: 22.6,
    gridIntensityGCo2PerKwh: 511.63,
    name: "Somalia",
  },
  SPM: {
    co2PerCapitaTonnes: 9.79,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Saint Pierre and Miquelon",
  },
  SRB: {
    co2PerCapitaTonnes: 6.24,
    electricityDemandKwhPerCapita: 5564.0,
    gridIntensityGCo2PerKwh: 666.4,
    name: "Serbia",
  },
  SSD: {
    co2PerCapitaTonnes: 0.14,
    electricityDemandKwhPerCapita: 46.9,
    gridIntensityGCo2PerKwh: 642.86,
    name: "South Sudan",
  },
  STP: {
    co2PerCapitaTonnes: 0.6,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Sao Tome and Principe",
  },
  SUR: {
    co2PerCapitaTonnes: 4.71,
    electricityDemandKwhPerCapita: 2742.6,
    gridIntensityGCo2PerKwh: 321.84,
    name: "Suriname",
  },
  SVK: {
    co2PerCapitaTonnes: 5.28,
    electricityDemandKwhPerCapita: 4825.0,
    gridIntensityGCo2PerKwh: 96.55,
    name: "Slovakia",
  },
  SVN: {
    co2PerCapitaTonnes: 6.02,
    electricityDemandKwhPerCapita: 6749.4,
    gridIntensityGCo2PerKwh: 230.4,
    name: "Slovenia",
  },
  SWE: {
    co2PerCapitaTonnes: 3.59,
    electricityDemandKwhPerCapita: 13077.2,
    gridIntensityGCo2PerKwh: 34.91,
    name: "Sweden",
  },
  SWZ: {
    co2PerCapitaTonnes: 0.84,
    electricityDemandKwhPerCapita: 1327.6,
    gridIntensityGCo2PerKwh: 131.15,
    name: "Eswatini",
  },
  SXM: {
    co2PerCapitaTonnes: 16.55,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Sint Maarten (Dutch part)",
  },
  SYC: {
    co2PerCapitaTonnes: 5.0,
    electricityDemandKwhPerCapita: 4830.0,
    gridIntensityGCo2PerKwh: 555.56,
    name: "Seychelles",
  },
  SYR: {
    co2PerCapitaTonnes: 1.29,
    electricityDemandKwhPerCapita: 984.1,
    gridIntensityGCo2PerKwh: 706.19,
    name: "Syria",
  },
  TCA: {
    co2PerCapitaTonnes: 8.14,
    electricityDemandKwhPerCapita: 5798.6,
    gridIntensityGCo2PerKwh: 629.63,
    name: "Turks and Caicos Islands",
  },
  TCD: {
    co2PerCapitaTonnes: 0.14,
    electricityDemandKwhPerCapita: 18.2,
    gridIntensityGCo2PerKwh: 621.62,
    name: "Chad",
  },
  TGO: {
    co2PerCapitaTonnes: 0.33,
    electricityDemandKwhPerCapita: 262.9,
    gridIntensityGCo2PerKwh: 422.54,
    name: "Togo",
  },
  THA: {
    co2PerCapitaTonnes: 3.74,
    electricityDemandKwhPerCapita: 3236.2,
    gridIntensityGCo2PerKwh: 554.73,
    name: "Thailand",
  },
  TJK: {
    co2PerCapitaTonnes: 1.01,
    electricityDemandKwhPerCapita: 1850.6,
    gridIntensityGCo2PerKwh: 71.17,
    name: "Tajikistan",
  },
  TKM: {
    co2PerCapitaTonnes: 10.81,
    electricityDemandKwhPerCapita: 3203.7,
    gridIntensityGCo2PerKwh: 1306.27,
    name: "Turkmenistan",
  },
  TLS: {
    co2PerCapitaTonnes: 0.48,
    electricityDemandKwhPerCapita: 364.1,
    gridIntensityGCo2PerKwh: 666.67,
    name: "East Timor",
  },
  TON: {
    co2PerCapitaTonnes: 1.46,
    electricityDemandKwhPerCapita: 671.8,
    gridIntensityGCo2PerKwh: 571.43,
    name: "Tonga",
  },
  TTO: {
    co2PerCapitaTonnes: 22.93,
    electricityDemandKwhPerCapita: 6333.8,
    gridIntensityGCo2PerKwh: 681.68,
    name: "Trinidad and Tobago",
  },
  TUN: {
    co2PerCapitaTonnes: 2.66,
    electricityDemandKwhPerCapita: 1951.6,
    gridIntensityGCo2PerKwh: 558.26,
    name: "Tunisia",
  },
  TUR: {
    co2PerCapitaTonnes: 5.87,
    electricityDemandKwhPerCapita: 3889.6,
    gridIntensityGCo2PerKwh: 469.74,
    name: "Turkey",
  },
  TUV: {
    co2PerCapitaTonnes: 1.18,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Tuvalu",
  },
  TWN: {
    co2PerCapitaTonnes: 11.3,
    electricityDemandKwhPerCapita: 12430.4,
    gridIntensityGCo2PerKwh: 635.19,
    name: "Taiwan",
  },
  TZA: {
    co2PerCapitaTonnes: 0.29,
    electricityDemandKwhPerCapita: 131.7,
    gridIntensityGCo2PerKwh: 345.02,
    name: "Tanzania",
  },
  UGA: {
    co2PerCapitaTonnes: 0.13,
    electricityDemandKwhPerCapita: 107.4,
    gridIntensityGCo2PerKwh: 58.52,
    name: "Uganda",
  },
  UKR: {
    co2PerCapitaTonnes: 3.76,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Ukraine",
  },
  URY: {
    co2PerCapitaTonnes: 2.35,
    electricityDemandKwhPerCapita: 4287.5,
    gridIntensityGCo2PerKwh: 69.56,
    name: "Uruguay",
  },
  USA: {
    co2PerCapitaTonnes: 14.2,
    electricityDemandKwhPerCapita: 12751.9,
    gridIntensityGCo2PerKwh: 383.78,
    name: "United States",
  },
  UZB: {
    co2PerCapitaTonnes: 3.83,
    electricityDemandKwhPerCapita: 2321.9,
    gridIntensityGCo2PerKwh: 1040.12,
    name: "Uzbekistan",
  },
  VCT: {
    co2PerCapitaTonnes: 2.54,
    electricityDemandKwhPerCapita: 1490.6,
    gridIntensityGCo2PerKwh: 600.0,
    name: "Saint Vincent and the Grenadines",
  },
  VEN: {
    co2PerCapitaTonnes: 4.09,
    electricityDemandKwhPerCapita: 2820.9,
    gridIntensityGCo2PerKwh: 85.86,
    name: "Venezuela",
  },
  VGB: {
    co2PerCapitaTonnes: 4.87,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "British Virgin Islands",
  },
  VNM: {
    co2PerCapitaTonnes: 3.67,
    electricityDemandKwhPerCapita: 3041.8,
    gridIntensityGCo2PerKwh: 484.32,
    name: "Vietnam",
  },
  VUT: {
    co2PerCapitaTonnes: 0.6,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Vanuatu",
  },
  WLF: {
    co2PerCapitaTonnes: 2.7,
    electricityDemandKwhPerCapita: null,
    gridIntensityGCo2PerKwh: null,
    name: "Wallis and Futuna",
  },
  WSM: {
    co2PerCapitaTonnes: 1.13,
    electricityDemandKwhPerCapita: 733.8,
    gridIntensityGCo2PerKwh: 375.0,
    name: "Samoa",
  },
  YEM: {
    co2PerCapitaTonnes: 0.25,
    electricityDemandKwhPerCapita: 129.4,
    gridIntensityGCo2PerKwh: 592.38,
    name: "Yemen",
  },
  ZAF: {
    co2PerCapitaTonnes: 6.87,
    electricityDemandKwhPerCapita: 3846.8,
    gridIntensityGCo2PerKwh: 717.36,
    name: "South Africa",
  },
  ZMB: {
    co2PerCapitaTonnes: 0.57,
    electricityDemandKwhPerCapita: 778.8,
    gridIntensityGCo2PerKwh: 119.68,
    name: "Zambia",
  },
  ZWE: {
    co2PerCapitaTonnes: 0.82,
    electricityDemandKwhPerCapita: 727.4,
    gridIntensityGCo2PerKwh: 384.02,
    name: "Zimbabwe",
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

export type HolidayTravelBucket =
  keyof typeof ASSUMED_ANNUAL_FLIGHT_HOURS_BY_BUCKET;

/**
 * Food greenhouse gas emissions per kilogram of product.
 * Source: Poore & Nemecek (2018), via Our World in Data.
 * ourworldindata.org/environmental-impacts-of-food | CC BY 4.0
 *
 * Covers full lifecycle: land use change, farm-stage, processing,
 * transport, retail. Unit: kg CO2e per kg of food product.
 */

export const FOOD_EMISSION_FACTORS_KG_CO2E_PER_KG = {
  apples: 0.43,
  bananas: 0.86,
  barley: 1.18,
  beef_beef_herd: 99.48,
  beef_dairy_herd: 33.3,
  beet_sugar: 1.81,
  berries_grapes: 1.53,
  brassicas: 0.51,
  cane_sugar: 3.2,
  cassava: 1.32,
  cheese: 23.88,
  citrus_fruit: 0.39,
  coffee: 28.53,
  dark_chocolate: 46.65,
  eggs: 4.67,
  fish_farmed: 13.63,
  groundnuts: 3.23,
  lamb_mutton: 39.72,
  maize: 1.7,
  milk: 3.15,
  nuts: 0.43,
  oatmeal: 2.48,
  onions_leeks: 0.5,
  other_fruit: 1.05,
  other_pulses: 1.79,
  other_vegetables: 0.53,
  peas: 0.98,
  pig_meat: 12.31,
  potatoes: 0.46,
  poultry_meat: 9.87,
  prawns_farmed: 26.87,
  rice: 4.45,
  root_vegetables: 0.43,
  soy_milk: 0.98,
  tofu: 3.16,
  tomatoes: 2.09,
  wheat_rye: 1.57,
  wine: 1.79,
} as const;

export type FoodItem = keyof typeof FOOD_EMISSION_FACTORS_KG_CO2E_PER_KG;

/**
 * Diet emissions — pageId 4 ("What kind of food do you eat?")
 *
 * Survey buckets by MEAT FREQUENCY only, not actual food quantities. To
 * turn each bucket into a number, each is modeled as an assumed daily
 * food basket (kg/day per food item), using FOOD_EMISSION_FACTORS from
 * food-emission-factors.ts.
 *
 * Full diet varies per bucket (not just the meat component) — a vegan
 * eats more plant protein/tofu, a daily-meat-eater's plate has less
 * room for vegetables, etc. This is more realistic than holding
 * non-meat intake fixed, but it means every basket below is a holistic
 * judgment call, not just "add meat servings" on top of a shared base.
 *
 * MEAT MIX (within any bucket that includes meat):
 *   55% poultry, 15% fish, 30% red meat
 *   Red meat split ~80% beef / 20% lamb (beef dominates real-world
 *   consumption; lamb is a minority meat, especially in Singapore).
 *
 * STRUCTURE: emissions = sum(food_kg_per_day x factor) x 365, in tonnes/year
 */

export const MEAT_MIX = {
  poultry: 0.55,
  fish: 0.15,
  red_meat: 0.3,
} as const;

export const RED_MEAT_SPLIT = {
  beef: 0.8,
  lamb: 0.2,
} as const;

// Assumed daily food basket, in kg/day per food item, by diet bucket.
// Not exhaustive of every food a person eats — models the carbon-relevant
// staples (protein source, grains, dairy, produce) since low-impact foods
// (most fruits/veg) barely move the total regardless of exact quantity.
export const DIET_BASKETS_KG_PER_DAY: Record<
  string,
  Partial<Record<FoodItem, number>>
> = {
  plant_based: {
    tofu: 0.15,
    other_pulses: 0.1,
    rice: 0.2,
    wheat_rye: 0.15,
    soy_milk: 0.25,
    other_vegetables: 0.3,
    other_fruit: 0.2,
    nuts: 0.03,
  },
  vegetarian: {
    tofu: 0.08,
    eggs: 0.06, // ~1 egg/day
    cheese: 0.03,
    milk: 0.2,
    rice: 0.2,
    wheat_rye: 0.15,
    other_vegetables: 0.25,
    other_fruit: 0.2,
  },
  meat_weekly: {
    // meat: ~0.06 kg/day averaged (~22 kg/year — roughly 1-2 modest meat
    // meals/week, spread across the week). Calibrated against real-world
    // per-capita meat consumption so buckets don't exceed plausible national
    // averages (see comment on meat_daily below).
    poultry_meat: 0.06 * MEAT_MIX.poultry,
    fish_farmed: 0.06 * MEAT_MIX.fish,
    beef_beef_herd: 0.06 * MEAT_MIX.red_meat * RED_MEAT_SPLIT.beef,
    lamb_mutton: 0.06 * MEAT_MIX.red_meat * RED_MEAT_SPLIT.lamb,
    eggs: 0.04,
    milk: 0.15,
    rice: 0.2,
    wheat_rye: 0.1,
    other_vegetables: 0.2,
    other_fruit: 0.15,
  },
  meat_most_days: {
    // meat: ~0.15 kg/day (~55 kg/year — meat 5-6 days/week)
    poultry_meat: 0.15 * MEAT_MIX.poultry,
    fish_farmed: 0.15 * MEAT_MIX.fish,
    beef_beef_herd: 0.15 * MEAT_MIX.red_meat * RED_MEAT_SPLIT.beef,
    lamb_mutton: 0.15 * MEAT_MIX.red_meat * RED_MEAT_SPLIT.lamb,
    eggs: 0.03,
    cheese: 0.02,
    rice: 0.2,
    wheat_rye: 0.1,
    other_vegetables: 0.15,
    other_fruit: 0.1,
  },
  meat_daily: {
    // meat: ~0.28 kg/day (~102 kg/year). Deliberately calibrated to land
    // near the HIGH END of real-world national per-capita meat consumption
    // (US, one of the highest globally, averages ~100-120 kg/year) rather
    // than exceeding it. "Eats meat every day" is a frequency signal, not
    // license to assume unrealistically large total quantity — an earlier
    // draft of this basket assumed 0.45 kg/day (~164 kg/year), which
    // exceeded even the US national average and produced an implausibly
    // high result (~6.3 tonnes/year vs. the ~2.5-3.5 tonnes/year that
    // published diet-footprint research cites for high-meat diets).
    poultry_meat: 0.28 * MEAT_MIX.poultry,
    fish_farmed: 0.28 * MEAT_MIX.fish,
    beef_beef_herd: 0.28 * MEAT_MIX.red_meat * RED_MEAT_SPLIT.beef,
    lamb_mutton: 0.28 * MEAT_MIX.red_meat * RED_MEAT_SPLIT.lamb,
    eggs: 0.03,
    cheese: 0.03,
    rice: 0.2,
    wheat_rye: 0.1,
    other_vegetables: 0.12,
    other_fruit: 0.08,
  },
};

export type DietBucket = keyof typeof DIET_BASKETS_KG_PER_DAY;

export const HOME_AGE_MULTIPLIER = {
  new: 0.9, // <10 years - modern insulation/appliance standards
  medium_age: 1.0, // 10-30 years - baseline, no strong efficiency signal either way
  old: 1.25, // >30 years - worse insulation, older HVAC/appliances, more thermal loss
} as const;

export type HomeAgeBucket = keyof typeof HOME_AGE_MULTIPLIER;

// Ratios relative to a country's own typical household electricity baseline.
// "medium" = 1.0 (the baseline itself). Others scale up/down from there.
export const HOME_SIZE_RATIO = {
  small: 0.55, // 1-2 room equivalent
  medium: 1.0, // baseline - "typical" household for that country
  large: 1.4, // 5-room/condo equivalent
  very_large: 3.5, // landed/bungalow equivalent - largest jump, matches
  // real-world spread (Singapore landed ~3.3x the national HDB average)
  rural: 0.4, // grid access, basic appliances only, no A/C (see pageId 6
  // discussion) - below "small" since it excludes the single biggest
  // residential electricity driver in most climates
} as const;

/**
 * Home energy — pageId 6 ("I live in a...")
 *
 * PROBLEM THIS SOLVES: home size categories ("small"/"large") don't mean
 * the same thing in every country — a "large" home in Singapore is modest
 * by US/Australian standards. Anchoring fixed kWh numbers to one country
 * (e.g. Singapore HDB data) would misrepresent every other country's users.
 *
 * APPROACH: home size is expressed as a RATIO relative to that country's
 * own typical household electricity baseline, not a fixed kWh number.
 * "Large" means "larger than typical for wherever you live" — a portable,
 * relative concept, unlike a fixed kWh figure.
 *
 * DERIVING A RESIDENTIAL BASELINE FROM PER-CAPITA DEMAND:
 * electricityDemandKwhPerCapita (country-energy-data.ts) is TOTAL
 * electricity demand per person — includes commercial + industrial use,
 * not just homes. Using it directly would overstate residential
 * consumption by roughly 2-3x (confirmed by cross-checking Singapore's
 * per-capita demand, ~10,224 kWh/year, against Singapore's actual
 * average HDB household consumption, ~4,511 kWh/year/household, per
 * MSE parliamentary reply data).
 *
 * RESIDENTIAL_SHARE_OF_TOTAL_DEMAND (~15%) is a single-country
 * calibration (Singapore is the only country with a verified residential
 * anchor in this project). Applied globally as an approximation — actual
 * residential share varies by country's economic structure (more
 * industrial economies likely have a LOWER residential share; this
 * constant doesn't capture that). Documented here so it isn't mistaken
 * for a precise, sourced-per-country figure.
 *
 * STRUCTURE:
 *   countryResidentialBaseline = electricityDemandKwhPerCapita x RESIDENTIAL_SHARE_OF_TOTAL_DEMAND x avgHouseholdSize
 *   householdKwh = countryResidentialBaseline x sizeRatio(bucket)
 *   emissions = householdKwh x gridIntensity(country) / 1_000_000
 */

export const RESIDENTIAL_SHARE_OF_TOTAL_DEMAND = 0.15;

// Assumed average household size for converting per-capita to per-household,
// where the survey's own household_size answer isn't yet known at this
// calculation step (or as a fallback). Global average household size is
// commonly cited around 3.0-3.5; using a conservative mid estimate.
export const ASSUMED_AVERAGE_HOUSEHOLD_SIZE = 3.0;

export type HomeSizeBucket = keyof typeof HOME_SIZE_RATIO;

export const WORLD_AVERAGE_GRID_INTENSITY_G_CO2_PER_KWH = 471.08;
export const WORLD_AVERAGE_ELECTRICITY_DEMAND_KWH_PER_CAPITA = 3789.6;

// Assumed monthly spend, USD, per survey bucket (currency shown to user
// varies via {{CURRENCY}} templating, but underlying calc uses USD-
// equivalent assumptions since actual rate/PPP data isn't wired in yet)
export const ASSUMED_MONTHLY_SPEND_USD = {
  low: 50, // survey: <100/mo
  medium: 550, // survey: 100-1000/mo, midpoint
  high: 3000, // survey: 1000-5000/mo, midpoint
  very_high: 7000, // survey: >5000/mo, open-ended - anchor above threshold
} as const;

// Share of spend assumed to go toward physical goods with embodied
// carbon (vs. services, experiences, savings, rent - lower/zero
// embodied carbon per dollar, or already captured by other categories)
export const GOODS_RELEVANT_SPEND_FRACTION = {
  low: 0.9, // mostly necessities/physical goods at this spend level
  medium: 0.7,
  high: 0.45,
  very_high: 0.25, // majority of spend at this level is services/savings/investment
} as const;

// kg CO2e per $ of goods-relevant spend (manufacturing, packaging,
// shipping). Flat across buckets - the decline is modeled via
// GOODS_RELEVANT_SPEND_FRACTION above, not the rate itself.
export const GOODS_EMISSION_RATE_KG_CO2E_PER_USD = 0.5;

export type ShoppingBucket = keyof typeof ASSUMED_MONTHLY_SPEND_USD;

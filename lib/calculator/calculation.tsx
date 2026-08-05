import {
  ASSUMED_ANNUAL_FLIGHT_HOURS_BY_BUCKET,
  ASSUMED_ANNUAL_KM_BY_TRANSPORT_BUCKET,
  BUCKET_TO_MODE,
  CRUISING_SPEED_KM_PER_HOUR,
  HolidayTravelBucket,
  HOUSEHOLD_EQUIVALENCE_WEIGHTS,
  HouseholdComposition,
  TRANSPORT_EMISSION_FACTORS_KG_PER_KM,
  TransportBucket,
  FOOD_EMISSION_FACTORS_KG_CO2E_PER_KG,
  FoodItem,
} from "./constants";

export function getHouseholdEquivalenceWeight(
  composition: HouseholdComposition,
): number {
  const { adults, children, pets } = composition;

  if (adults < 1) {
    throw new Error(
      "adults must be >= 1 (the respondent themselves counts as the first adult)",
    );
  }

  const additionalAdults = adults - 1;

  return (
    HOUSEHOLD_EQUIVALENCE_WEIGHTS.firstAdult +
    additionalAdults * HOUSEHOLD_EQUIVALENCE_WEIGHTS.additionalAdult +
    children * HOUSEHOLD_EQUIVALENCE_WEIGHTS.child +
    pets * HOUSEHOLD_EQUIVALENCE_WEIGHTS.pet
  );
}

/**
 * Annual transport emissions in tonnes CO2e for a given survey bucket.
 */
export function getTransportEmissionsTonnes(bucket: TransportBucket): number {
  const mode = BUCKET_TO_MODE[bucket];
  const factor = TRANSPORT_EMISSION_FACTORS_KG_PER_KM[mode];
  const km = ASSUMED_ANNUAL_KM_BY_TRANSPORT_BUCKET[bucket];
  const kg = factor * km;
  return kg / 1000; // kg -> tonnes
}

/**
 * Annual holiday-travel (flight) emissions in tonnes CO2e for a given
 * survey bucket. Uses the normalized (long-haul-weighted) emission factor
 * from TRANSPORT_EMISSION_FACTORS_KG_PER_KM.plane_normalized.
 */
export function getHolidayTravelEmissionsTonnes(
  bucket: HolidayTravelBucket,
  planeNormalizedFactorKgPerKm: number, // pass TRANSPORT_EMISSION_FACTORS_KG_PER_KM.plane_normalized
): number {
  const hours = ASSUMED_ANNUAL_FLIGHT_HOURS_BY_BUCKET[bucket];
  const km = hours * CRUISING_SPEED_KM_PER_HOUR;
  const kg = km * planeNormalizedFactorKgPerKm;
  return kg / 1000; // kg -> tonnes
}

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

/**
 * Annual diet emissions in tonnes CO2e for a given diet bucket.
 */
export function getDietEmissionsTonnes(bucket: DietBucket): number {
  const basket = DIET_BASKETS_KG_PER_DAY[bucket];
  let dailyKgCo2e = 0;

  for (const [food, kgPerDay] of Object.entries(basket)) {
    const factor = FOOD_EMISSION_FACTORS_KG_CO2E_PER_KG[food as FoodItem];
    dailyKgCo2e += (kgPerDay ?? 0) * factor;
  }

  const annualKgCo2e = dailyKgCo2e * 365;
  return annualKgCo2e / 1000; // kg -> tonnes
}

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

export type HomeSizeBucket = keyof typeof HOME_SIZE_RATIO;

export const WORLD_AVERAGE_GRID_INTENSITY_G_CO2_PER_KWH = 471.08;
export const WORLD_AVERAGE_ELECTRICITY_DEMAND_KWH_PER_CAPITA = 3789.6;

/**
 * Annual home-energy emissions in tonnes CO2, for the FULL HOUSEHOLD
 * (not yet divided by household equivalence weight - do that separately
 * using getRespondentHomeEnergyShare from household-equivalence.ts).
 *
 * @param bucket - home size bucket
 * @param electricityDemandKwhPerCapita - country's per-capita demand;
 *   falls back to world average if country has no data
 * @param gridIntensityGCo2PerKwh - country's grid intensity; falls back
 *   to world average if country has no data
 * @param householdSize - actual household size from pageId 5 (people
 *   slider), if known. Falls back to ASSUMED_AVERAGE_HOUSEHOLD_SIZE.
 */
export function getHouseholdHomeEnergyTonnes(
  bucket: HomeSizeBucket,
  electricityDemandKwhPerCapita: number | null,
  gridIntensityGCo2PerKwh: number | null,
  householdSize: number = ASSUMED_AVERAGE_HOUSEHOLD_SIZE,
): number {
  const demand =
    electricityDemandKwhPerCapita ??
    WORLD_AVERAGE_ELECTRICITY_DEMAND_KWH_PER_CAPITA;
  const intensity =
    gridIntensityGCo2PerKwh ?? WORLD_AVERAGE_GRID_INTENSITY_G_CO2_PER_KWH;

  const countryResidentialBaselinePerCapita =
    demand * RESIDENTIAL_SHARE_OF_TOTAL_DEMAND;
  const countryResidentialBaselineHousehold =
    countryResidentialBaselinePerCapita * householdSize;

  const householdKwh =
    countryResidentialBaselineHousehold * HOME_SIZE_RATIO[bucket];
  const gramsCo2 = householdKwh * intensity;

  return gramsCo2 / 1_000_000; // g -> tonnes
}

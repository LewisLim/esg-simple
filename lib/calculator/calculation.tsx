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
  ShoppingBucket,
  ASSUMED_MONTHLY_SPEND_USD,
  GOODS_RELEVANT_SPEND_FRACTION,
  GOODS_EMISSION_RATE_KG_CO2E_PER_USD,
  DietBucket,
  DIET_BASKETS_KG_PER_DAY,
  HomeAgeBucket,
  HOME_AGE_MULTIPLIER,
  HomeSizeBucket,
  WORLD_AVERAGE_ELECTRICITY_DEMAND_KWH_PER_CAPITA,
  WORLD_AVERAGE_GRID_INTENSITY_G_CO2_PER_KWH,
  HOME_SIZE_RATIO,
  ASSUMED_AVERAGE_HOUSEHOLD_SIZE,
  RESIDENTIAL_SHARE_OF_TOTAL_DEMAND,
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

/**
 * Applies the home-age efficiency multiplier to an already-computed
 * household home-energy figure (from getHouseholdHomeEnergyTonnes).
 */
export function applyHomeAgeMultiplier(
  householdHomeEnergyTonnes: number,
  ageBucket: HomeAgeBucket,
): number {
  return householdHomeEnergyTonnes * HOME_AGE_MULTIPLIER[ageBucket];
}

/**
 * Shopping / consumption emissions — pageId 8 ("How much do you spend
 * on shopping?")
 *
 * Represents embedded carbon in PHYSICAL GOODS purchased (manufacturing,
 * packaging, shipping) — a genuinely separate category from diet,
 * transport, home energy, and holiday travel, which are all covered by
 * their own direct survey questions already. This category should NOT
 * be used to adjust/multiply those other categories (see prior
 * discussion) — that would double-count behavior the user already
 * reported directly.
 *
 * WHY NOT A FLAT RATE (kg CO2e per $): research on income and carbon
 * footprint finds the relationship is sub-linear, not proportional —
 * higher spend does correlate with higher total footprint, but carbon
 * intensity PER DOLLAR actually decreases as spend rises, because
 * marginal dollars at high spend levels increasingly go to services,
 * experiences, savings, and investment rather than more physical goods
 * (Ivanova & Wood 2020 finding: consumption patterns narrow the
 * per-dollar carbon gap between income groups). A flat per-dollar rate
 * across a 140x spend range (buckets span ~$50 to ~$7000/month) produces
 * an absurd result (~30 tonnes/year for the top bucket, dwarfing every
 * other category combined) — the rate has to decline.
 *
 * STRUCTURE: rather than declining the RATE alone (which still explodes
 * at this spend range), this applies a declining "goods-relevant
 * fraction" of spend — modeling that a shrinking share of very-high
 * spend goes toward physical goods with embodied carbon, and a growing
 * share goes to housing/services/savings that are either captured
 * elsewhere in this calculator or carry much lower embodied carbon.
 *
 * All figures here (bucket midpoints, goods fraction, rate) are
 * judgment-call estimates — there is no authoritative per-bucket
 * dataset for this. Reasonable to tune.
 */

/**
 * Annual shopping/goods emissions in tonnes CO2e for a given spend bucket.
 */
export function getShoppingEmissionsTonnes(bucket: ShoppingBucket): number {
  const monthlySpend = ASSUMED_MONTHLY_SPEND_USD[bucket];
  const goodsFraction = GOODS_RELEVANT_SPEND_FRACTION[bucket];
  const effectiveMonthlySpend = monthlySpend * goodsFraction;
  const monthlyKg = effectiveMonthlySpend * GOODS_EMISSION_RATE_KG_CO2E_PER_USD;
  const annualKg = monthlyKg * 12;
  return annualKg / 1000; // kg -> tonnes
}

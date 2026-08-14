import {
  applyHomeAgeMultiplier,
  getHolidayTravelEmissionsTonnes,
  getHouseholdEquivalenceWeight,
  getHouseholdHomeEnergyTonnes,
  getTransportEmissionsTonnes,
  getDietEmissionsTonnes,
  getShoppingEmissionsTonnes,
} from "@/lib/calculator/calculation"; // adjust path to match your actual file layout
import {
  countryEnergyData,
  DietBucket,
  HolidayTravelBucket,
  HomeAgeBucket,
  HomeSizeBucket,
  HouseholdComposition,
  ShoppingBucket,
  TransportBucket,
  TRANSPORT_EMISSION_FACTORS_KG_PER_KM,
} from "@/lib/calculator/constants";
import { BaseSurvey } from "@/types/interface/calculator-interface";

export interface FootprintBreakdown {
  transport: number;
  holidayTravel: number;
  diet: number;
  homeEnergy: number; // already divided down to the respondent's own share
  shopping: number;
  total: number;
}

/**
 * homePeople is treated as TOTAL household headcount, INCLUDING the
 * children counted in `dependency`. adults = homePeople - dependency,
 * clamped to a minimum of 1 — never 0, since the respondent themselves
 * is always at least one adult by definition (they're the one filling
 * out the survey). Clamping to 0 instead of 1 would crash
 * getHouseholdEquivalenceWeight, which requires adults >= 1.
 */
function getHouseholdComposition(survey: BaseSurvey): HouseholdComposition {
  const adults = Math.max(1, survey.homePeople - survey.dependency);
  return {
    adults,
    children: survey.dependency,
    pets: survey.pets,
  };
}

/**
 * Computes the respondent's full annual carbon footprint (tonnes CO2e)
 * from their survey answers, broken down by category.
 *
 * Country lookup: falls back to null-safe world averages inside
 * getHouseholdHomeEnergyTonnes if the country code isn't found or has
 * incomplete data (see country-energy-data.ts nulls).
 */
export function calculateTotalFootprint(
  survey: BaseSurvey,
): FootprintBreakdown {
  const countryData = countryEnergyData[survey.country] ?? null;

  // --- Transport (pageId 2) ---
  const transport = getTransportEmissionsTonnes(
    survey.transport as TransportBucket,
  );

  // --- Holiday travel (pageId 3) ---
  const holidayTravel = getHolidayTravelEmissionsTonnes(
    survey.travel as HolidayTravelBucket,
    TRANSPORT_EMISSION_FACTORS_KG_PER_KM.plane_normalized,
  );

  // --- Diet (pageId 4) ---
  const diet = getDietEmissionsTonnes(survey.diet as DietBucket);

  // --- Home energy (pageId 5, 6, 7) ---
  // Step 1: full household home-energy total, using country data
  // (falls back to world averages internally if countryData is null
  // or has null fields)
  const householdHomeEnergyRaw = getHouseholdHomeEnergyTonnes(
    survey.homeSize as HomeSizeBucket,
    countryData?.electricityDemandKwhPerCapita ?? null,
    countryData?.gridIntensityGCo2PerKwh ?? null,
    survey.homePeople,
  );

  // Step 2: apply home age efficiency multiplier
  const householdHomeEnergyWithAge = applyHomeAgeMultiplier(
    householdHomeEnergyRaw,
    survey.homeAge as HomeAgeBucket,
  );

  // Step 3: divide down to the RESPONDENT'S OWN SHARE using household
  // equivalence weighting (see household-equivalence.ts) — without this
  // step, the respondent would be charged for the ENTIRE household's
  // home energy, not their fair share.
  const composition = getHouseholdComposition(survey);
  const equivalenceWeight = getHouseholdEquivalenceWeight(composition);
  const homeEnergy = householdHomeEnergyWithAge / equivalenceWeight;

  // --- Shopping (pageId 8) ---
  const shopping = getShoppingEmissionsTonnes(
    survey.shopping as ShoppingBucket,
  );

  const total = transport + holidayTravel + diet + homeEnergy + shopping;

  return {
    transport,
    holidayTravel,
    diet,
    homeEnergy,
    shopping,
    total,
  };
}

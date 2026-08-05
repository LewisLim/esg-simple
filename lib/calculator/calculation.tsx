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

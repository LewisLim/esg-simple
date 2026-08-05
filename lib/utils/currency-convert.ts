import { COUNTRY_TO_CURRENCY, CURRENCY_SYMBOLS } from "./currency-data";

/**
 * Live currency conversion for the shopping page, using Frankfurter
 * (api.frankfurter.dev) - free, no API key, backed by ECB daily rates,
 * no request quotas. Chosen over hardcoding rates because FX rates move
 * daily; a hardcoded rate would silently go stale.
 *
 * FALLBACK: if the live fetch fails (network issue, API down), falls
 * back to displaying the raw USD amount with a "$" symbol rather than
 * blocking the page - a stale/unconverted amount is a better failure
 * mode than a broken shopping page.
 */

interface FrankfurterRateEntry {
  date: string;
  base: string;
  quote: string;
  rate: number;
}

// Frankfurter returns a flat array of {date, base, quote, rate} entries,
// not a {base, rates: {...}} object as originally assumed. Converting
// to a flat currencyCode -> rate map here so the rest of this module
// doesn't need to know about the array shape.
function toRateMap(entries: FrankfurterRateEntry[]): Record<string, number> {
  const map: Record<string, number> = {};
  for (const entry of entries) {
    map[entry.quote] = entry.rate;
  }
  return map;
}

// Simple in-memory cache so we don't re-fetch on every render within
// the same session - rates don't need to be fetched more than once
// per page load.
let cachedRates: Record<string, number> | null = null;
let cachedAt: number | null = null;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

async function fetchRatesFromUSD(): Promise<Record<string, number> | null> {
  const now = Date.now();
  if (cachedRates && cachedAt && now - cachedAt < CACHE_TTL_MS) {
    return cachedRates;
  }

  try {
    const res = await fetch("https://api.frankfurter.dev/v2/rates?base=USD");
    if (!res.ok) return null;
    const data: FrankfurterRateEntry[] = await res.json();
    const rateMap = toRateMap(data);
    cachedRates = rateMap;
    cachedAt = now;
    return rateMap;
  } catch {
    return null;
  }
}

/**
 * Warms the exchange-rate cache ahead of time, so later calls to
 * convertUsdToLocal() (e.g. on the shopping page, several steps later
 * in the survey) resolve instantly from cache instead of showing a
 * loading state. Safe to call speculatively - errors are swallowed,
 * since this is a background optimization, not a required step
 * (convertUsdToLocal falls back to USD display if rates never load).
 */
export function prefetchExchangeRates(): void {
  fetchRatesFromUSD().catch(() => {
    // swallow - convertUsdToLocal has its own fallback path
  });
}

export interface ConvertedAmount {
  amount: number; // rounded, in local currency
  symbol: string;
  currencyCode: string;
  isConverted: boolean; // false if fallback (still USD) was used
}

/**
 * Converts a USD amount to the local currency for the given country,
 * rounded to a sensible display precision (no decimals for typical
 * spend-bucket amounts). Falls back to USD if live rates aren't
 * available.
 */
export async function convertUsdToLocal(
  usdAmount: number,
  countryCode: string,
): Promise<ConvertedAmount> {
  const currencyCode = COUNTRY_TO_CURRENCY[countryCode] ?? "USD";
  const symbol = CURRENCY_SYMBOLS[currencyCode] ?? currencyCode;

  if (currencyCode === "USD") {
    return {
      amount: Math.round(usdAmount),
      symbol: CURRENCY_SYMBOLS["USD"] ?? "$",
      currencyCode: "USD",
      isConverted: true,
    };
  }

  const rates = await fetchRatesFromUSD();

  if (!rates || !(currencyCode in rates)) {
    // Fallback: show as USD rather than a broken/missing amount
    return {
      amount: Math.round(usdAmount),
      symbol: CURRENCY_SYMBOLS["USD"] ?? "$",
      currencyCode: "USD",
      isConverted: false,
    };
  }

  const rawConverted = usdAmount * rates[currencyCode];
  const rounded = roundForDisplay(rawConverted);

  return {
    amount: rounded,
    symbol,
    currencyCode,
    isConverted: true,
  };
}

/**
 * Rounds a converted amount to a clean display value. Large amounts
 * round to the nearest 10 or 100 to avoid ugly decimals like
 * "S$134.87" for a bucket label - these are approximate spend
 * thresholds, not precise billing amounts, so clean round numbers
 * read better and don't imply false precision.
 */
function roundForDisplay(amount: number): number {
  if (amount >= 1000) return Math.round(amount / 100) * 100;
  if (amount >= 100) return Math.round(amount / 10) * 10;
  return Math.round(amount);
}

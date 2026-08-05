import { TIMEZONE_TO_ALPHA3 } from "@/types/timezone-to-alpha3";
import { ALPHA2_TO_ALPHA3 } from "@/types/alpha2-to-alpha3";
import { countryEnergyData } from "@/lib/calculator/constants";

/**
 * Attempts to detect the user's country from the browser, for pre-filling
 * the country dropdown.
 *
 * PRIMARY SIGNAL: IANA timezone (Intl.DateTimeFormat().resolvedOptions().timeZone).
 * Reflects the device's actual clock/location, not a language preference,
 * so it's a better proxy for physical location than locale. Only used for
 * countries with a single unambiguous timezone (184 of 214) — see
 * timezone-to-alpha3.ts for why multi-timezone countries are excluded
 * rather than guessed.
 *
 * FALLBACK SIGNAL: navigator.language's region code (e.g. "en-US" -> "US").
 * Used only if timezone detection doesn't resolve (ambiguous/unmapped
 * timezone). This reflects browser/OS language settings, NOT physical
 * location — known to misfire for users whose device locale doesn't match
 * where they actually are (e.g. an en-US-configured browser used in
 * Singapore). Kept only as a last-resort guess, not the primary signal,
 * after timezone-based detection incorrectly returned "United States" for
 * a Singapore-based user in testing.
 *
 * Returns null if neither signal resolves — callers should fall back to
 * the "Select your country" placeholder. The dropdown must always remain
 * user-editable regardless of what's detected.
 */
export function detectUserCountryCode(): string | null {
  if (typeof Intl === "undefined") {
    return null; // SSR / no browser context
  }

  // Primary: timezone
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const fromTimezone = TIMEZONE_TO_ALPHA3[timeZone];
    if (fromTimezone && countryEnergyData[fromTimezone]) {
      return fromTimezone;
    }
  } catch {
    // Intl.DateTimeFormat threw or timeZone unavailable - fall through
  }

  // Fallback: locale region code
  if (typeof navigator !== "undefined") {
    const locale = navigator.language;
    const parts = locale.split("-");
    if (parts.length >= 2) {
      const regionCode = parts[parts.length - 1].toUpperCase();
      const fromLocale = ALPHA2_TO_ALPHA3[regionCode];
      if (fromLocale && countryEnergyData[fromLocale]) {
        return fromLocale;
      }
    }
  }

  return null;
}

/**
 * Human-readable country name for the detected code, for use in the
 * "Looks like you're in {country} - is that right?" placeholder text.
 */
export function getDetectedCountryName(): string | null {
  const code = detectUserCountryCode();
  if (!code) return null;
  return countryEnergyData[code]?.name ?? null;
}

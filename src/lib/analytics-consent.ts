export const ANALYTICS_CONSENT_KEY = 'imai_rika.analytics_consent.v1';

export type AnalyticsConsent = 'granted' | 'denied' | null;

export function readAnalyticsConsent(): AnalyticsConsent {
  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    // A read-only store must not silently restore a grant that cannot be withdrawn.
    if (value === 'granted') window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function saveAnalyticsConsent(value: Exclude<AnalyticsConsent, null>): boolean {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
    return true;
  } catch {
    try {
      window.localStorage.removeItem(ANALYTICS_CONSENT_KEY);
    } catch {
      // The UI reports the save failure; this document still applies the choice.
    }
    return false;
  }
}

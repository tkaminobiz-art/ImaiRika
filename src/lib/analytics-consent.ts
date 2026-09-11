export const ANALYTICS_CONSENT_KEY = 'imai_rika.analytics_consent.v1';

export type AnalyticsConsent = 'granted' | 'denied' | null;

export function readAnalyticsConsent(): AnalyticsConsent {
  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
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
    return false;
  }
}

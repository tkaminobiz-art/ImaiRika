import { type AnalyticsConsent, readAnalyticsConsent } from './analytics-consent';

export const MEASUREMENT_ID = 'G-14SDT60F3D';
export const ANALYTICS_ORIGIN = 'https://www.imai-rika.com';
const COOKIE_PREFIX = 'imai_ga4';
const SCRIPT_ID = 'imai-rika-ga4';
const PAGE_TITLES: Record<string, string> = {
  '/': '今井りか',
  '/policy': '政策',
  '/profile': 'プロフィール',
  '/newsletter': 'いまいだより',
  '/assembly': '議会動画',
  '/support': '応援する',
  '/contact': 'お問い合わせ',
  '/interview': 'インタビュー',
  '/news': '活動報告',
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    'ga-disable-G-14SDT60F3D'?: boolean;
  }
}

let granted = false;
let started = false;
let lastPath: string | null = null;

function gtag(..._args: unknown[]) {
  // Google expects an arguments object, not a custom DOM/event payload.
  window.dataLayer?.push(arguments);
}

export function isAnalyticsOrigin() {
  return typeof window !== 'undefined' && window.location.origin === ANALYTICS_ORIGIN;
}

function safePage(pathname: string) {
  if (!Object.prototype.hasOwnProperty.call(PAGE_TITLES, pathname)) return null;
  return {
    page_location: ANALYTICS_ORIGIN + pathname,
    page_referrer: '',
    page_title: PAGE_TITLES[pathname],
  };
}

function removeAnalyticsCookies() {
  for (const part of document.cookie.split(';')) {
    const name = part.split('=')[0].trim();
    if (!name.startsWith(COOKIE_PREFIX + '_')) continue;
    for (const domain of ['', 'www.imai-rika.com', '.www.imai-rika.com', 'imai-rika.com', '.imai-rika.com']) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax; Secure${domain ? `; Domain=${domain}` : ''}`;
    }
  }
}

export function trackPageView(pathname: string) {
  if (!isAnalyticsOrigin() || !granted) return;
  const page = safePage(pathname);
  if (!page) {
    window['ga-disable-G-14SDT60F3D'] = true;
    lastPath = null;
    return;
  }
  if (lastPath === pathname) return;

  window['ga-disable-G-14SDT60F3D'] = false;
  window.dataLayer ??= [];
  // Global scope covers standard automatic events as well as explicit page_view.
  // Do not set these fields at config scope, which would override later route updates.
  gtag('set', {
    ...page,
    ignore_referrer: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    ads_data_redaction: true,
    url_passthrough: false,
  });

  if (!started) {
    started = true;
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    gtag('consent', 'update', { analytics_storage: 'granted' });
    gtag('js', new Date());
    gtag('config', MEASUREMENT_ID, {
      send_page_view: false,
      cookie_prefix: COOKIE_PREFIX,
      cookie_domain: 'www.imai-rika.com',
      cookie_flags: 'SameSite=Lax;Secure',
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.referrerPolicy = 'no-referrer';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  lastPath = pathname;
  gtag('event', 'page_view', { ...page, send_to: MEASUREMENT_ID });
}

export function updateAnalyticsConsent(choice: AnalyticsConsent, persisted = true) {
  if (!isAnalyticsOrigin()) return;
  const wasGranted = granted;
  granted = choice === 'granted';
  if (granted) {
    trackPageView(window.location.pathname);
    return;
  }

  // Disable synchronously, before reload/pagehide can emit user_engagement.
  window['ga-disable-G-14SDT60F3D'] = true;
  lastPath = null;
  removeAnalyticsCookies();
  if (started) {
    document.getElementById(SCRIPT_ID)?.remove();
    if (window.dataLayer) window.dataLayer.length = 0;
  }
  // A confirmed persisted denial prevents loading again after the reload.
  // On storage failure, keep this document disabled instead of rereading an old grant.
  if (wasGranted && persisted) window.location.reload();
}

export function syncAnalyticsConsentOnRestore() {
  updateAnalyticsConsent(readAnalyticsConsent());
}

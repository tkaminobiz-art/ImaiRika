'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import AnalyticsConsent from './AnalyticsConsent';
import {
  isAnalyticsOrigin,
  syncAnalyticsConsentOnRestore,
  trackPageView,
  updateAnalyticsConsent,
} from '@/lib/analytics';

export default function SiteAnalytics() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(isAnalyticsOrigin());
    window.addEventListener('pageshow', syncAnalyticsConsentOnRestore);
    return () => window.removeEventListener('pageshow', syncAnalyticsConsentOnRestore);
  }, []);

  useEffect(() => {
    if (pathname) trackPageView(pathname);
  }, [pathname]);

  return enabled ? <AnalyticsConsent onConsentChange={updateAnalyticsConsent} /> : null;
}

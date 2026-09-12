'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ANALYTICS_COPY } from '@/lib/analytics-copy';
import {
  ANALYTICS_CONSENT_KEY,
  type AnalyticsConsent as ConsentChoice,
  readAnalyticsConsent,
  saveAnalyticsConsent,
} from '@/lib/analytics-consent';

type Props = {
  onConsentChange?: (choice: ConsentChoice, persisted?: boolean) => void;
};

// This component stores choices and reports changes; it never loads or sends analytics.
export default function AnalyticsConsent({ onConsentChange }: Props) {
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [open, setOpen] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const changeHandler = useRef(onConsentChange);
  const settingsButton = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const openedFromSettings = useRef(false);
  const titleId = useId();

  useEffect(() => {
    changeHandler.current = onConsentChange;
  }, [onConsentChange]);

  useEffect(() => {
    const applyStoredChoice = () => {
      const stored = readAnalyticsConsent();
      setChoice(stored);
      setOpen(stored === null);
      setStorageError(false);
      changeHandler.current?.(stored);
    };

    applyStoredChoice();
    setReady(true);

    const handleStorage = (event: StorageEvent) => {
      if (event.key === ANALYTICS_CONSENT_KEY || event.key === null) {
        applyStoredChoice();
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  function closePanel() {
    setOpen(false);
    if (openedFromSettings.current) {
      settingsButton.current?.focus({ preventScroll: true });
    }
    openedFromSettings.current = false;
  }

  function choose(next: Exclude<ConsentChoice, null>) {
    const saved = saveAnalyticsConsent(next);
    setChoice(next);
    setStorageError(!saved);
    if (next !== choice || storageError) changeHandler.current?.(next, saved);
    if (saved) closePanel();
  }

  function openSettings() {
    openedFromSettings.current = true;
    setOpen(true);
    requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }));
  }

  if (!ready) return null;

  const actionClass =
    'min-h-11 rounded-md border border-v2-blue bg-white px-5 py-2.5 text-sm font-bold text-v2-blue transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v2-blue';

  return (
    <>
      <button
        ref={settingsButton}
        type="button"
        onClick={openSettings}
        aria-expanded={open}
        className="min-h-11 px-2 text-sm underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {ANALYTICS_COPY.settings}
      </button>
      {open && (
        <section
          role="region"
          aria-labelledby={titleId}
          onKeyDown={(event) => {
            if (event.key === 'Escape') closePanel();
          }}
          className="fixed inset-x-0 bottom-0 z-[300] max-h-[85dvh] overflow-y-auto border-t border-black/15 bg-white px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 text-left font-sans text-text-body shadow-[0_-6px_24px_rgba(0,0,0,0.12)] md:px-8"
        >
          <div className="mx-auto max-w-content">
            <div className="flex items-start justify-between gap-4">
              <h2 id={titleId} ref={heading} tabIndex={-1} className="text-base font-bold outline-none">
                {ANALYTICS_COPY.title}
              </h2>
              {choice !== null && (
                <button type="button" onClick={closePanel} className="min-h-11 shrink-0 px-2 text-sm underline underline-offset-4">
                  {ANALYTICS_COPY.close}
                </button>
              )}
            </div>
            <p className="mt-2 text-sm leading-7">{ANALYTICS_COPY.description}</p>
            <p className="text-sm leading-7">{ANALYTICS_COPY.dataNotice}</p>
            <p className="text-sm leading-7">{ANALYTICS_COPY.settingsNotice}</p>
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-sm text-v2-blue underline underline-offset-4">
              {ANALYTICS_COPY.googlePrivacy}
            </a>
            {choice !== null && (
              <p className="mt-2 text-sm font-bold" role="status">
                {choice === 'granted' ? ANALYTICS_COPY.granted : ANALYTICS_COPY.denied}
              </p>
            )}
            {storageError && <p className="mt-2 text-sm text-red-800" role="alert">{ANALYTICS_COPY.storageError}</p>}
            {choice === 'granted' && <p className="mt-2 text-sm leading-7">{ANALYTICS_COPY.withdrawNotice}</p>}
            <div className="mt-4 grid grid-cols-2 gap-3 md:max-w-md">
              <button type="button" onClick={() => choose('denied')} className={actionClass}>
                {choice === 'granted' ? ANALYTICS_COPY.withdraw : ANALYTICS_COPY.decline}
              </button>
              <button type="button" onClick={() => choose('granted')} className={actionClass}>
                {ANALYTICS_COPY.accept}
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

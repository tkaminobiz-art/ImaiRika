'use client';

import React from 'react';
import Link from 'next/link';

export default function FloatingButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-5 right-4 z-[90] max-w-[min(100vw-2rem,280px)] md:bottom-8 md:right-8"
      title="お気軽にご連絡ください"
    >
      <span className="flex items-center justify-center rounded-full bg-cdp-yellow px-4 py-3 text-center text-xs font-bold leading-tight text-cdp-blue shadow-lg ring-2 ring-cdp-blue/10 transition hover:brightness-95 md:px-6 md:py-4 md:text-sm">
        お気軽にご連絡ください
      </span>
    </Link>
  );
}

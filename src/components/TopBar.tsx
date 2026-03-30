'use client';

import React from 'react';
import Link from 'next/link';
import { TOPBAR_LINKS } from '@/lib/constants';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-2 py-2.5 pl-14 pr-4 md:px-10 md:py-3 md:pl-10">
        <Link
          href="/support"
          className="text-sm font-bold text-cdp-blue md:text-base"
        >
          応援する
        </Link>
        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-body md:gap-x-6 md:text-sm"
          aria-label="応援・お問い合わせ"
        >
          {TOPBAR_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-cdp-blue-link transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { NewsTickerItem } from '@/lib/data';

interface NewsTickerProps {
  items: NewsTickerItem[];
}

export default function NewsTicker({ items }: NewsTickerProps) {
  const [index, setIndex] = useState(0);
  const current = items[index] ?? items[0];
  if (!current) return null;

  const prev = () =>
    setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  const inner = (
    <>
      <time
        dateTime={current.date.replace(/\./g, '-')}
        className="shrink-0 font-bold text-text-dark"
      >
        {current.date}
      </time>
      <span className="min-w-0 flex-1 text-text-body">{current.text}</span>
    </>
  );

  return (
    <div className="border-t border-white/20 bg-white/85 px-3 py-3 text-sm md:px-10 md:text-base">
      <div className="mx-auto flex max-w-content items-center gap-3">
        <button
          type="button"
          onClick={prev}
          className="shrink-0 rounded-full p-1.5 text-cdp-blue hover:bg-black/5"
          aria-label="前のニュース"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        {current.href ? (
          <Link
            href={current.href}
            className="flex min-w-0 flex-1 items-center gap-4 hover:opacity-80"
          >
            {inner}
          </Link>
        ) : (
          <div className="flex min-w-0 flex-1 items-center gap-4">{inner}</div>
        )}
        <button
          type="button"
          onClick={next}
          className="shrink-0 rounded-full p-1.5 text-cdp-blue hover:bg-black/5"
          aria-label="次のニュース"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { COLOR_BANNERS } from '@/lib/constants';

export default function ColorBanners() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-content px-4 md:px-10">
        <div className="grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {COLOR_BANNERS.map((banner) => (
            <Link
              key={banner.id}
              href={banner.href}
              className={`group relative flex min-h-[200px] flex-col justify-between overflow-hidden p-6 text-white md:min-h-[220px] md:p-8 ${banner.bg}`}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 12px,
                    rgba(255,255,255,0.35) 12px,
                    rgba(255,255,255,0.35) 24px
                  )`,
                }}
                aria-hidden
              />
              <div className="relative z-[1]">
                <p className="text-lg font-black leading-snug md:text-xl">
                  {banner.main}
                </p>
                <p className="mt-2 text-sm text-white/90">{banner.sub}</p>
              </div>
              <div className="relative z-[1] flex items-end justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-white/85">
                  {banner.titleEn}
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import NewsTicker from '@/components/NewsTicker';
import { HERO_CONTENT, HERO_IMAGE, NEWS_TICKER_ITEMS } from '@/lib/data';

export default function Hero() {
  const slogan = HERO_CONTENT.slogan;
  const accent = HERO_CONTENT.sloganAccent;
  const beforeAccent = slogan.replace(accent, '');

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f2eb]">
      {/* 和柄風の淡いパターン（CSSのみ） */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c2 8 8 14 16 16-8 2-14 8-16 16-2-8-8-14-16-16 8-2 14-8 16-16z' fill='%23004098'/%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />

      <div className="relative z-[1] flex min-h-[min(100vh,720px)] flex-col md:min-h-[500px]">
        <div className="flex flex-1 flex-col md:flex-row">
          {/* モバイル: 写真上 */}
          <div className="relative order-1 h-[52vh] min-h-[280px] w-full md:order-2 md:h-auto md:min-h-[420px] md:w-[58%]">
            <Image
              src={HERO_IMAGE}
              alt="今井りか"
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#004098]/90 to-transparent md:hidden" />
          </div>

          {/* テキストブロック */}
          <div className="relative order-2 flex flex-1 flex-col justify-center bg-gradient-to-br from-cdp-blue from-40% to-[#003070] px-6 py-10 text-white md:order-1 md:w-[42%] md:px-10 md:py-16">
            <p className="mb-2 text-xs font-medium text-white/85 md:text-sm">
              {HERO_CONTENT.party}
            </p>
            <h1 className="font-black leading-[1.15] tracking-tight [font-size:clamp(1.75rem,5vw,3.75rem)]">
              <span className="block">{beforeAccent}</span>
              <span className="relative inline-block">
                <span className="relative z-[1]">{accent}</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-2 bg-cdp-yellow/90 md:h-2.5"
                  aria-hidden
                />
              </span>
            </h1>
            <p className="mt-6 text-base font-bold md:text-xl">{HERO_CONTENT.name}</p>
          </div>
        </div>

        <NewsTicker items={NEWS_TICKER_ITEMS} />
      </div>
    </section>
  );
}

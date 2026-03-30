'use client';

import React from 'react';
import Image from 'next/image';
import { ACTIVITY_PILLARS } from '@/lib/data';

export default function ActivityIcons() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-content px-4 md:px-10">
        <h2 className="mb-2 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-black tracking-tight text-text-dark">
          今井りかの活動
        </h2>
        <p className="mb-10 text-center text-sm text-text-body md:text-base">
          議会・地域・座談会・発信。あなたのまちのこと、一緒に考えていきます。
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {ACTIVITY_PILLARS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg ring-2 ring-cdp-blue/20 md:h-32 md:w-32">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="text-base font-bold text-cdp-blue md:text-lg">
                {item.label}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-text-body md:text-sm">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

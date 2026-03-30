'use client';

import React from 'react';
import Image from 'next/image';
import { HERO_CONTENT } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-cdp-blue/5 to-white">
      <div className="min-h-[500px] flex items-center justify-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-cdp-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cdp-cyan rounded-full blur-3xl"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text content */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-cdp-blue mb-4 leading-tight">
                  {HERO_CONTENT.slogan}
                </h1>
                <p className="text-xl md:text-2xl text-text-dark font-semibold">
                  {HERO_CONTENT.name}
                </p>
              </div>

              <p className="text-lg text-text-body leading-relaxed max-w-md">
                {HERO_CONTENT.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/profile"
                  className="inline-flex items-center justify-center px-8 py-3 bg-cdp-blue text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                >
                  プロフィールを見る
                </a>
                <a
                  href="/policy"
                  className="inline-flex items-center justify-center px-8 py-3 bg-cdp-yellow text-cdp-blue font-bold rounded-lg hover:opacity-90 transition-opacity"
                >
                  政策について
                </a>
              </div>
            </div>

            {/* Right: Hero image placeholder */}
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cdp-blue/20 to-cdp-cyan/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-text-body font-semibold">
                    カスタムヒーロー画像
                  </p>
                </div>
              </div>
              {/* Image will be replaced with actual hero image */}
              <Image
                src="/images/hero/hero-placeholder.jpg"
                alt="今井りか"
                fill
                className="object-cover opacity-0"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cdp-red via-cdp-yellow to-cdp-cyan"></div>
      </div>
    </section>
  );
}

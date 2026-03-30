'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { COLOR_BANNERS } from '@/lib/constants';

export default function ColorBanners() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="w-full max-w-content mx-auto px-4 md:px-6">
        {/* Grid of 4 color banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {COLOR_BANNERS.map((banner) => (
            <Link
              key={banner.id}
              href={banner.href}
              className={`${banner.bgColor} group relative overflow-hidden rounded-lg p-6 md:p-8 text-white min-h-[200px] md:min-h-[240px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-2">
                  {banner.title}
                </h3>
                <p className="text-sm md:text-base font-semibold opacity-90">
                  {banner.titleEn}
                </p>
              </div>

              <div className="relative z-10">
                <p className="text-sm md:text-base font-medium mb-4 leading-relaxed">
                  {banner.subtitle}
                </p>

                {/* Arrow icon */}
                <div className="flex items-center gap-2 font-bold text-sm md:text-base group-hover:translate-x-2 transition-transform">
                  <span>詳しく見る</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

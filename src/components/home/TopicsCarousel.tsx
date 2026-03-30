'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { TOPICS } from '@/lib/copy';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TopicsCarousel() {
  return (
    <section className="bg-section-gray py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <h2 className="mb-10 text-center text-xl font-bold text-shio-heading md:text-2xl">
          注目のトピックス
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3 },
          }}
          className="topics-swiper pb-10"
        >
          {TOPICS.map((t) => (
            <SwiperSlide key={t.id}>
              <Link
                href={t.href}
                className="group block overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={t.image}
                    alt=""
                    fill
                    className="object-cover transition group-hover:scale-[1.02]"
                    sizes="400px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 font-bold text-text-body group-hover:text-shio-heading">
                    {t.title}
                  </h3>
                  <p className="text-sm text-text-body/90">{t.desc}</p>
                  <span className="mt-3 inline-flex items-center text-sm font-bold text-shio-accent">
                    記事を読む →
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

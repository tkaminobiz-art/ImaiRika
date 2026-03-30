'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { PickUpMovie } from '@/lib/data';

interface PickUpMovieProps {
  movies: PickUpMovie[];
}

export default function PickUpMovie({ movies }: PickUpMovieProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollPosition(el.scrollLeft);
  };

  useEffect(() => {
    const el = scrollRef.current;
    el?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll();
    return () => {
      el?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollBy = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -340 : 340,
      behavior: 'smooth',
    });
  };

  const el = scrollRef.current;
  const maxScroll = el
    ? el.scrollWidth - el.clientWidth
    : 1;
  const progress = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

  return (
    <section className="w-full bg-gray-bg py-10 md:py-14">
      <div className="mx-auto w-full max-w-content px-4 md:px-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-text-body">議会・活動の動画</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-black tracking-tight text-text-dark">
              Pick Up Movie
            </h2>
          </div>
          <Link
            href="/assembly"
            className="text-sm font-bold text-cdp-blue-link hover:underline"
          >
            すべてを見る →
          </Link>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="carousel-container flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
          >
            {movies.map((m) => (
              <Link
                key={m.id}
                href={m.href}
                className="card group flex w-[min(100%,300px)] shrink-0 snap-start flex-col overflow-hidden bg-white shadow-sm"
              >
                <div className="relative aspect-video w-full bg-gray-bg">
                  <Image
                    src={m.thumbnail}
                    alt=""
                    fill
                    className="object-cover transition-transform group-hover:scale-[1.02]"
                    sizes="300px"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-cdp-blue shadow">
                      <svg
                        className="ml-1 h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  {m.date && (
                    <p className="mb-1 text-xs text-text-body">{m.date}</p>
                  )}
                  <p className="line-clamp-2 font-bold text-text-dark">{m.title}</p>
                </div>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollBy('left')}
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-2 -translate-y-1/2 rounded-full bg-cdp-blue p-2 text-white shadow md:flex"
            aria-label="前へ"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => scrollBy('right')}
            className="absolute right-0 top-1/2 z-10 hidden translate-x-2 -translate-y-1/2 rounded-full bg-cdp-blue p-2 text-white shadow md:flex"
            aria-label="次へ"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-black/10">
          <div
            className="h-full bg-text-dark transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
}

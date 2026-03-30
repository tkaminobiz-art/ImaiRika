'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface CarouselCard {
  id: string;
  title: string;
  sub?: string;
  description: string;
  image?: string;
  link?: string;
}

interface CardCarouselProps {
  titleEn: string;
  titleJa: string;
  cards: CarouselCard[];
  showArrows?: boolean;
  viewAllHref?: string;
  viewAllLabel?: string;
  /** 白背景 or グレー背景 */
  bg?: 'white' | 'gray';
}

export default function CardCarousel({
  titleEn,
  titleJa,
  cards,
  showArrows = true,
  viewAllHref,
  viewAllLabel = 'すべてを見る →',
  bg = 'white',
}: CardCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const checkScrollPosition = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setScrollPosition(el.scrollLeft);
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
    return () => {
      container?.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    scrollContainerRef.current?.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth',
    });
  };

  const el = scrollContainerRef.current;
  const maxScroll = el ? el.scrollWidth - el.clientWidth : 0;
  const progress = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

  const bgClass = bg === 'gray' ? 'bg-gray-bg' : 'bg-white';

  const CardWrap = ({
    href,
    children,
  }: {
    href?: string;
    children: React.ReactNode;
  }) =>
    href ? (
      <Link href={href} className="card block h-full">
        {children}
      </Link>
    ) : (
      <div className="card block h-full">{children}</div>
    );

  return (
    <section className={`w-full py-10 md:py-14 ${bgClass}`}>
      <div className="mx-auto w-full max-w-content px-4 md:px-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-text-body">{titleJa}</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-black tracking-tight text-text-dark">
              {titleEn}
            </h2>
          </div>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="text-sm font-bold text-cdp-blue-link hover:underline"
            >
              {viewAllLabel}
            </Link>
          )}
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="carousel-container flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-[min(100%,300px)] shrink-0 snap-start"
              >
                <CardWrap href={card.link}>
                  {card.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-gray-bg">
                      <Image
                        src={card.image}
                        alt=""
                        fill
                        className="object-cover transition-transform hover:scale-[1.02]"
                        sizes="300px"
                      />
                    </div>
                  )}
                  <div className="flex flex-col p-4 md:p-5">
                    {card.sub && (
                      <p className="mb-1 text-xs font-medium text-cdp-blue">
                        {card.sub}
                      </p>
                    )}
                    <h3 className="mb-2 line-clamp-2 text-lg font-bold text-text-dark">
                      {card.title}
                    </h3>
                    <p className="line-clamp-3 text-sm text-text-body">
                      {card.description}
                    </p>
                    {card.link && (
                      <span className="mt-4 inline-flex items-center text-sm font-bold text-cdp-blue">
                        詳しく見る
                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden />
                      </span>
                    )}
                  </div>
                </CardWrap>
              </div>
            ))}
          </div>

          {showArrows && (
            <>
              <button
                type="button"
                onClick={() => scroll('left')}
                className="absolute left-0 top-[40%] z-10 hidden -translate-x-2 -translate-y-1/2 rounded-full bg-cdp-blue p-2 text-white shadow md:flex"
                aria-label="前へ"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="absolute right-0 top-[40%] z-10 hidden translate-x-2 -translate-y-1/2 rounded-full bg-cdp-blue p-2 text-white shadow md:flex"
                aria-label="次へ"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-black/10">
          <div
            className="h-full bg-text-dark transition-all duration-300"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </section>
  );
}

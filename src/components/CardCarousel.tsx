'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface CarouselCard {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

interface CardCarouselProps {
  cards: CarouselCard[];
  title: string;
  showArrows?: boolean;
  variant?: 'default' | 'compact';
}

export default function CardCarousel({
  cards,
  title,
  showArrows = true,
  variant = 'default',
}: CardCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setScrollPosition(scrollLeft);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
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
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Calculate progress (0-100)
  const maxScroll = scrollContainerRef.current
    ? scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
    : 100;
  const progress = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

  const isCompact = variant === 'compact';

  return (
    <section className="w-full py-8 md:py-12">
      <div className="w-full max-w-content mx-auto px-4 md:px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-cdp-blue mb-2">
          {title}
        </h2>

        {/* Carousel container */}
        <div className="relative">
          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            className="carousel-container flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-full sm:w-80 snap-start"
              >
                <Link
                  href={card.link || '#'}
                  className="card block h-full hover:shadow-lg transition-all"
                >
                  {/* Card image */}
                  {card.image && (
                    <div className="relative w-full h-48 bg-gray-bg overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  )}

                  {/* Card content */}
                  <div className="p-4 md:p-6 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-text-dark mb-2 line-clamp-2">
                        {card.title}
                      </h3>
                      <p className="text-sm md:text-base text-text-body line-clamp-3">
                        {card.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center text-cdp-blue font-semibold text-sm">
                      詳しく見る
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          {showArrows && (
            <>
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:translate-x-0 z-10 bg-cdp-blue text-white p-2 rounded-full hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                aria-label="前へ"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-0 z-10 bg-cdp-blue text-white p-2 rounded-full hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                aria-label="次へ"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-4 w-full bg-gray-bg rounded-full h-1 overflow-hidden">
          <div
            className="bg-cdp-blue h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>
    </section>
  );
}

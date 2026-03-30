'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <Link
      href="/support"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-30 no-print"
      title="ご支援ください"
    >
      <div className="relative">
        {/* Animated background circle */}
        <div className="absolute inset-0 bg-cdp-yellow rounded-full animate-pulse"></div>

        {/* Button content */}
        <div className="relative bg-cdp-yellow hover:bg-cdp-yellow/90 text-cdp-blue rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110 cursor-pointer font-bold text-sm md:text-base flex-col gap-1 md:gap-0">
          <Heart size={24} className="md:hidden" />
          <Heart size={32} className="hidden md:block" />
          <span className="hidden md:inline text-xs font-bold mt-1">支援</span>
        </div>
      </div>
    </Link>
  );
}

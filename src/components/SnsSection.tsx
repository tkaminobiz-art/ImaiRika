'use client';

import React from 'react';
import Link from 'next/link';
import { SNS_LINKS } from '@/lib/constants';

function XLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.265-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.012 7.053.07 2.695.272.273 2.69.07 7.052.012 8.333 0 8.741 0 12c0 3.259.012 3.668.07 4.948.202 4.358 2.623 6.78 6.98 6.98 1.281.058 1.689.07 4.948.07 3.259 0 3.668-.012 4.948-.07 4.354-.202 6.782-2.623 6.979-6.98.058-1.28.07-1.689.07-4.948 0-3.259-.012-3.668-.07-4.948C23.728 2.694 21.3.275 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function SnsSection() {
  return (
    <section className="w-full bg-gray-bg py-12 md:py-16">
      <div className="mx-auto w-full max-w-content px-4 md:px-10">
        <h2 className="mb-10 text-center text-[clamp(1.75rem,4vw,2.5rem)] font-black tracking-tight text-text-dark">
          SNS
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <a
            href={SNS_LINKS.twitter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-24 w-24 items-center justify-center rounded-full bg-cdp-blue text-white shadow-lg transition-transform hover:scale-105 md:h-28 md:w-28"
            aria-label={`${SNS_LINKS.twitter.label} ${SNS_LINKS.twitter.handle}`}
          >
            <XLogo className="h-10 w-10 md:h-12 md:w-12" />
          </a>
          <a
            href={SNS_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg transition-transform hover:scale-105 md:h-28 md:w-28"
            aria-label={`${SNS_LINKS.instagram.label} ${SNS_LINKS.instagram.handle}`}
          >
            <InstagramLogo className="h-10 w-10 md:h-12 md:w-12" />
          </a>
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/contact"
            className="text-sm font-bold text-cdp-blue-link hover:underline"
          >
            公式SNS・お問い合わせはこちら →
          </Link>
        </p>
      </div>
    </section>
  );
}

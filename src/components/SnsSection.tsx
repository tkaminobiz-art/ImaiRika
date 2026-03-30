'use client';

import React from 'react';
import { SNS_LINKS } from '@/lib/constants';

export default function SnsSection() {
  return (
    <section className="w-full py-8 md:py-12 bg-gray-bg">
      <div className="w-full max-w-content mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-cdp-blue mb-2">
            SNSで最新情報をチェック
          </h2>
          <p className="text-text-body text-lg">
            議会活動や地域の様子を日々発信しています
          </p>
        </div>

        {/* SNS Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Twitter / X */}
          <a
            href={SNS_LINKS.twitter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-lg p-8 text-center shadow hover:shadow-lg transition-all hover:scale-105"
          >
            <div className="mb-4">
              <svg
                className="w-12 h-12 mx-auto text-cdp-blue group-hover:text-cdp-blue/70 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 0 9-5.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cdp-blue mb-2">
              X (Twitter)
            </h3>
            <p className="text-text-body text-sm mb-4">
              @imirk411
            </p>
            <div className="inline-flex items-center text-cdp-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
              フォローする
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
          </a>

          {/* Instagram */}
          <a
            href={SNS_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-lg p-8 text-center shadow hover:shadow-lg transition-all hover:scale-105"
          >
            <div className="mb-4">
              <svg
                className="w-12 h-12 mx-auto text-cdp-blue group-hover:text-cdp-blue/70 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.265-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.012 7.053.07 2.695.272.273 2.69.07 7.052C.012 8.333 0 8.741 0 12c0 3.259.012 3.668.07 4.948.202 4.358 2.623 6.78 6.98 6.98 1.281.058 1.689.07 4.948.07 3.259 0 3.668-.012 4.948-.07 4.354-.202 6.782-2.623 6.979-6.98.058-1.28.07-1.689.07-4.948 0-3.259-.012-3.668-.07-4.948C23.728 2.694 21.3.275 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cdp-blue mb-2">
              Instagram
            </h3>
            <p className="text-text-body text-sm mb-4">
              @imai_rika_0411
            </p>
            <div className="inline-flex items-center text-cdp-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
              フォローする
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
          </a>
        </div>
      </div>
    </section>
  );
}

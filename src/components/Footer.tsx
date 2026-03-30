'use client';

import React from 'react';
import Link from 'next/link';
import { FOOTER_LINKS, CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-cdp-blue text-white">
      {/* Main footer content */}
      <div className="w-full max-w-content mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-black mb-4">IR</h2>
            <p className="text-white/80 text-sm mb-6">
              橿原市議会議員 今井りか
            </p>
            <p className="text-white/80 text-sm">
              生活者の立場から、社会の矛盾を。
            </p>
          </div>

          {/* Links columns */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            {FOOTER_LINKS.map((column) => (
              <div key={column.category}>
                <h3 className="font-bold text-white mb-4">{column.category}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/80 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h3 className="font-bold text-lg mb-4">お問い合わせ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-white/80 mb-2">電話</p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-white hover:text-cdp-yellow transition-colors font-semibold"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div>
              <p className="text-white/80 mb-2">メール</p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-white hover:text-cdp-yellow transition-colors font-semibold break-all"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Social links */}
          <div className="mb-6">
            <p className="text-white/80 text-sm mb-3">Follow us on social media</p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/imirk411"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cdp-yellow transition-colors"
              >
                <span className="sr-only">X (Twitter)</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 0 9-5.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/imai_rika_0411/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cdp-yellow transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.265-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.012 7.053.07 2.695.272.273 2.69.07 7.052C.012 8.333 0 8.741 0 12c0 3.259.012 3.668.07 4.948.202 4.358 2.623 6.78 6.98 6.98 1.281.058 1.689.07 4.948.07 3.259 0 3.668-.012 4.948-.07 4.354-.202 6.782-2.623 6.979-6.98.058-1.28.07-1.689.07-4.948 0-3.259-.012-3.668-.07-4.948C23.728 2.694 21.3.275 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-white/60 text-xs text-center">
            <p>
              &copy; {currentYear} 橿原市議会議員 今井りか. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

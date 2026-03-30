'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_LINKS, CONTACT_INFO, SITE } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black/10 bg-white">
      <div className="mx-auto w-full max-w-content px-4 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div className="flex flex-col items-start gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-black/10">
              <Image
                src="/images/profile_portrait-white-bg-smile.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <p className="text-lg font-black text-cdp-blue">{SITE.name}</p>
            <p className="text-sm text-text-body">{SITE.position}</p>
            <p className="text-sm text-text-body">{SITE.slogan}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {FOOTER_LINKS.map((column) => (
              <div key={column.category}>
                <h3 className="mb-4 text-lg font-bold text-cdp-blue">
                  {column.category}
                </h3>
                <ul className="space-y-2 text-sm">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-cdp-blue-link hover:underline"
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

        <div className="mt-12 border-t border-black/10 pt-8 text-sm text-text-body">
          <p className="mb-2">
            <span className="font-semibold text-text-dark">TEL</span>{' '}
            <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`} className="text-cdp-blue-link">
              {CONTACT_INFO.phone}
            </a>
          </p>
          <p>
            <span className="font-semibold text-text-dark">MAIL</span>{' '}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="break-all text-cdp-blue-link"
            >
              {CONTACT_INFO.email}
            </a>
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-text-body">
          © {currentYear} {SITE.position} {SITE.name}
        </p>
      </div>
    </footer>
  );
}

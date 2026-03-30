'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SNS_LINKS } from '@/lib/constants';

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white shadow-sm">
      {/* 上部 SNS バー */}
      <div className="border-b border-black/5">
        <div className="mx-auto flex max-w-content items-center justify-end gap-4 px-4 py-2 md:px-6">
          <a
            href={SNS_LINKS.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-body transition hover:text-shio-accent"
            aria-label={SNS_LINKS.x.label}
          >
            <XIcon className="h-5 w-5" />
          </a>
          <a
            href={SNS_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-body transition hover:text-shio-accent"
            aria-label={SNS_LINKS.instagram.label}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.265-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.012 7.053.07 2.695.272.273 2.69.07 7.052.012 8.333 0 8.741 0 12c0 3.259.012 3.668.07 4.948.202 4.358 2.623 6.78 6.98 6.98 1.281.058 1.689.07 4.948.07 3.259 0 3.668-.012 4.948-.07 4.354-.202 6.782-2.623 6.979-6.98.058-1.28.07-1.689.07-4.948 0-3.259-.012-3.668-.07-4.948C23.728 2.694 21.3.275 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>

      {/* メインヘッダー */}
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link
          href="/"
          className="shrink-0 font-bold tracking-wide text-shio-heading md:text-xl"
          style={{ fontFamily: 'inherit' }}
        >
          今井りか <span className="text-base opacity-80">🌸</span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="メインナビゲーション"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-body transition hover:text-shio-heading hover:underline hover:decoration-shio-heading hover:underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/support"
            className="rounded-full bg-shio-accent px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:brightness-95"
          >
            応援する
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-shio-blue px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:brightness-95"
          >
            お問い合わせ
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-text-body lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="メニューを開く"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* モバイルドロワー */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="閉じる"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col bg-white p-6 shadow-xl">
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2"
                aria-label="閉じる"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-text-body"
                >
                  {item.label}
                </Link>
              ))}
              <hr className="my-2 border-black/10" />
              <Link
                href="/support"
                onClick={() => setOpen(false)}
                className="rounded-full bg-shio-accent py-3 text-center font-bold text-white"
              >
                応援する
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-shio-blue py-3 text-center font-bold text-white"
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

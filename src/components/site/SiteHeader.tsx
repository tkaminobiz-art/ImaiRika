'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SNS_LINKS } from '@/lib/constants';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] bg-v2-blue text-white transition-shadow duration-[400ms] ${scrolled ? 'shadow-[0_2px_16px_rgba(0,0,0,0.15)]' : ''}`}
    >
      <div className="flex items-center justify-end gap-4 border-b border-white/[0.12] px-6 py-2 md:px-10">
        <a
          href={SNS_LINKS.x.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 transition hover:text-white"
          aria-label={SNS_LINKS.x.label}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href={SNS_LINKS.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 transition hover:text-white"
          aria-label={SNS_LINKS.instagram.label}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>

      <div className="mx-auto flex h-[52px] max-w-[100vw] items-center justify-between gap-4 px-4 md:h-[60px] md:px-10">
        <Link
          href="/"
          className="shrink-0 font-serif text-[20px] font-bold tracking-[0.08em] text-white md:text-[22px]"
        >
          <em className="not-italic text-white/85">今井</em>りか
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="メインナビゲーション"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[13px] font-medium tracking-[0.04em] text-white/85 transition hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-white transition-[width] duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/support"
            className="rounded-full bg-v2-pink px-[18px] py-[7px] text-[12px] font-semibold tracking-[0.06em] text-white shadow-none transition hover:-translate-y-px hover:bg-v2-pink-deep hover:shadow-[0_4px_16px_rgba(214,70,114,0.3)]"
          >
            応援する
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/30 bg-white/15 px-[18px] py-[7px] text-[12px] font-semibold tracking-[0.06em] text-white transition hover:bg-white/25"
          >
            お問い合わせ
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="メニューを開く"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[110] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="閉じる"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col bg-white p-6 text-text-body shadow-xl">
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 text-text-body"
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
                className="rounded-full bg-v2-pink py-3 text-center font-bold text-white"
              >
                応援する
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-v2-blue py-3 text-center font-bold text-white"
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

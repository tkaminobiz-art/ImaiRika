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
      <div className="flex justify-end gap-5 border-b border-white/[0.12] px-6 py-1.5 md:px-10">
        <a
          href={SNS_LINKS.x.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-en text-[11px] font-medium uppercase tracking-[0.08em] text-white/60 transition hover:text-white"
          aria-label={SNS_LINKS.x.label}
        >
          X
        </a>
        <a
          href={SNS_LINKS.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-en text-[11px] font-medium uppercase tracking-[0.08em] text-white/60 transition hover:text-white"
          aria-label={SNS_LINKS.instagram.label}
        >
          Instagram
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

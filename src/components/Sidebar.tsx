'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuOverlay from './MenuOverlay';

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* 左固定サイドバー（デスクトップ） */}
      <aside className="fixed left-0 top-0 z-[100] hidden h-screen w-[100px] flex-col items-center bg-cdp-blue md:flex">
        <div className="flex flex-1 flex-col items-center pt-5">
          <Link
            href="/"
            className="group flex flex-col items-center gap-2 px-2 text-center"
            aria-label="トップへ"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white/30">
              <Image
                src="/images/profile_portrait-white-bg-smile.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <span className="text-[10px] font-bold leading-tight text-white">
              今井りか
            </span>
          </Link>
        </div>

        <div className="flex flex-[0.6] flex-col items-center justify-center pb-8">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col items-center gap-2 text-white"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu-overlay"
            aria-label="メニューを開く"
          >
            <span className="flex h-[2px] w-7 bg-white" />
            <span className="flex h-[2px] w-7 bg-white" />
            <span className="flex h-[2px] w-7 bg-white" />
            <span className="mt-1 text-[11px] font-bold tracking-widest">MENU</span>
          </button>
        </div>
      </aside>

      {/* モバイル：左上ハンバーガー */}
      <div className="fixed left-3 top-3 z-[100] md:hidden">
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col items-center gap-1.5 rounded-sm bg-cdp-blue px-3 py-2.5 text-white shadow-md"
          aria-expanded={isMenuOpen}
          aria-controls="site-menu-overlay"
          aria-label="メニューを開く"
        >
          <span className="flex h-[2px] w-6 bg-white" />
          <span className="flex h-[2px] w-6 bg-white" />
          <span className="flex h-[2px] w-6 bg-white" />
        </button>
      </div>

      <MenuOverlay
        id="site-menu-overlay"
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

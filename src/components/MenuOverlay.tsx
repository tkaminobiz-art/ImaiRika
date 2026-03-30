'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { MENU_SECTIONS } from '@/lib/constants';

interface MenuOverlayProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({
  id = 'site-menu-overlay',
  isOpen,
  onClose,
}: MenuOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id={id}
      className="fixed inset-0 z-[110] flex"
      role="dialog"
      aria-modal="true"
      aria-label="サイトメニュー"
    >
      <div
        className="absolute inset-0 bg-cdp-blue/92 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <nav className="relative z-[1] flex h-full w-full max-w-lg flex-col overflow-y-auto bg-cdp-blue shadow-2xl md:left-0 md:max-w-md">
        <div className="flex items-center justify-between border-b border-white/15 px-6 py-4">
          <p className="text-lg font-black text-white">MENU</p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-white hover:bg-white/10"
            aria-label="メニューを閉じる"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 space-y-8 px-6 py-8">
          <Link
            href="/"
            onClick={onClose}
            className="block text-lg font-bold text-white hover:text-cdp-yellow"
          >
            トップ
          </Link>

          {MENU_SECTIONS.map((section) => (
            <div key={section.title}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/60">
                {section.title}
              </p>
              <ul className="space-y-2 border-l border-white/20 pl-4">
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-base text-white hover:text-cdp-yellow"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

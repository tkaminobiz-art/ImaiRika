'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { SNS_LINKS, CONTACT_INFO } from '@/lib/constants';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'ホーム', href: '/' },
    { label: 'プロフィール', href: '/profile' },
    { label: '政策', href: '/policy' },
    { label: 'ニュースレター', href: '/newsletter' },
    { label: '議会活動', href: '/assembly' },
    { label: 'インタビュー', href: '/interview' },
    { label: 'お問い合わせ', href: '/contact' },
    { label: 'ご支援ください', href: '/support' },
  ];

  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Menu Panel - Desktop (sidebar menu) */}
      <nav
        className={`hidden md:fixed md:left-[100px] md:top-0 md:w-64 md:h-screen md:bg-white md:shadow-lg md:transform md:transition-all md:duration-300 md:z-40 md:overflow-y-auto ${
          isOpen ? 'md:translate-x-0' : 'md:-translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-cdp-blue mb-8">メニュー</h2>

          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg text-cdp-blue hover:text-cdp-blue/70 transition-colors font-medium"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <hr className="my-8 border-gray-300" />

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cdp-blue">お問い合わせ</h3>
            <div className="space-y-2 text-sm text-text-body">
              <p>
                <span className="font-semibold">電話:</span>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="ml-2 hover:text-cdp-blue"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold">メール:</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="ml-2 hover:text-cdp-blue break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* SNS Links */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-cdp-blue mb-4">SNS</h3>
            <div className="flex gap-4">
              <a
                href={SNS_LINKS.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cdp-blue hover:text-cdp-blue/70"
              >
                <span className="sr-only">{SNS_LINKS.twitter.label}</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 0 9-5.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href={SNS_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cdp-blue hover:text-cdp-blue/70"
              >
                <span className="sr-only">{SNS_LINKS.instagram.label}</span>
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
        </div>
      </nav>

      {/* Menu Panel - Mobile (full-screen slide-in) */}
      <nav
        className={`md:hidden fixed inset-y-0 left-0 w-80 bg-white shadow-xl transform transition-transform duration-300 z-40 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-cdp-blue">メニュー</h2>
            <button
              onClick={onClose}
              className="text-cdp-blue hover:text-cdp-blue/70"
              aria-label="メニューを閉じる"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu items */}
          <ul className="space-y-4 mb-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg text-cdp-blue hover:text-cdp-blue/70 transition-colors font-medium block"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <hr className="my-8 border-gray-300" />

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-bold text-cdp-blue">お問い合わせ</h3>
            <div className="space-y-3 text-sm text-text-body">
              <p>
                <span className="font-semibold block mb-1">電話:</span>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-cdp-blue"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold block mb-1">メール:</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-cdp-blue break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* SNS Links */}
          <div className="pt-8 border-t border-gray-300">
            <h3 className="text-lg font-bold text-cdp-blue mb-4">SNS</h3>
            <div className="flex gap-4">
              <a
                href={SNS_LINKS.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cdp-blue hover:text-cdp-blue/70"
              >
                <span className="sr-only">{SNS_LINKS.twitter.label}</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 0 9-5.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href={SNS_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cdp-blue hover:text-cdp-blue/70"
              >
                <span className="sr-only">{SNS_LINKS.instagram.label}</span>
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
        </div>
      </nav>
    </>
  );
}

import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { SITE_METADATA } from '@/lib/constants';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import './globals.css';

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E74291',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.url),
  title: {
    default: SITE_METADATA.title,
    template: '%s | ' + SITE_METADATA.title,
  },
  description: SITE_METADATA.description,
  openGraph: {
    type: 'website',
    locale: SITE_METADATA.locale,
    url: SITE_METADATA.url,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: [
      {
        url: '/images/fv_pc.jpg',
        width: 1920,
        height: 1080,
        alt: SITE_METADATA.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: ['/images/fv_pc.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={noto.variable}>
      <body
        className={`${noto.className} min-h-screen bg-white text-text-body antialiased`}
      >
        <a
          href="#content"
          className="skip-link"
        >
          コンテンツにスキップ
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

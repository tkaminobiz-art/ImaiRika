import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Montserrat, Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import { SITE_METADATA } from '@/lib/constants';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import 'yakuhanjp/dist/css/yakuhanjp.css';
import './globals.css';

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-en',
  display: 'swap',
});

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#004098',
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
        url: '/images/ogp_portrait-soft-smile.jpg',
        width: 1200,
        height: 630,
        alt: SITE_METADATA.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: ['/images/ogp_portrait-soft-smile.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${noto.variable} ${montserrat.variable} ${notoSerif.variable}`}
    >
      <body className={`${noto.className} min-h-screen bg-white antialiased`}>
        <a href="#content" className="skip-link">
          コンテンツにスキップ
        </a>
        <SiteHeader />
        <main id="content" className="pt-[var(--header-h)]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

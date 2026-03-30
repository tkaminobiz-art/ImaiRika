import React from 'react';
import type { Metadata } from 'next';
import { SITE_METADATA } from '@/lib/constants';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import './globals.css';

export const metadata: Metadata = {
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
    images: [{ url: '/images/ogp_portrait-soft-smile.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="description" content={SITE_METADATA.description} />
        <meta name="theme-color" content="#004098" />
      </head>
      <body className="bg-white antialiased">
        <Sidebar />

        <div className="min-h-screen md:ml-[100px]">
          <TopBar />
          {children}
          <Footer />
        </div>

        <FloatingButton />
      </body>
    </html>
  );
}

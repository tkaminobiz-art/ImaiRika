import type { MetadataRoute } from 'next';
import { SITE_METADATA } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/policy',
    '/profile',
    '/newsletter',
    '/assembly',
    '/support',
    '/contact',
    '/interview',
    '/news',
  ];

  return paths.map((path) => ({
    url: new URL(path, SITE_METADATA.url).toString(),
  }));
}

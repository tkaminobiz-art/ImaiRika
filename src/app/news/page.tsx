import type { Metadata } from 'next';
import Link from 'next/link';
import { NEWS_ITEMS } from '@/lib/copy';

export const metadata: Metadata = {
  title: '活動報告',
};

export default function NewsPage() {
  return (
    <div className="bg-white pb-20 pt-8">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <nav className="mb-8 text-sm text-text-body/80">
          <Link href="/" className="hover:text-shio-heading">
            TOP
          </Link>
          <span className="mx-2">&gt;</span>
          <span>活動報告</span>
        </nav>
        <h1 className="mb-10 text-3xl font-bold text-shio-heading md:text-4xl">活動報告</h1>
        <ul className="space-y-8">
          {NEWS_ITEMS.map((n, i) => (
            <li
              key={i}
              className="border-b border-black/10 pb-8 last:border-0"
            >
              <time className="text-sm text-text-body/70">{n.date}</time>
              <h2 className="mt-2 text-xl font-bold text-text-body">{n.title}</h2>
              <p className="mt-2 text-text-body/90">{n.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

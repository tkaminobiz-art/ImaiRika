import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'いまいだより',
};

const ISSUES = [
  { vol: 18, title: '2026年冬号', date: '2026.01', pdf: '/pdf/vol18_2026fuyu.pdf' },
  { vol: 17, title: '2025年秋号', date: '2025.10', pdf: '/pdf/vol17_2025aki.pdf' },
  { vol: 16, title: '2025年夏号', date: '2025.08', pdf: '/pdf/vol16_2025natsu.pdf' },
  { vol: 15, title: '2025年春号', date: '2025.06', pdf: '/pdf/vol15_2025haru.pdf' },
  { vol: 14, title: '2024年冬号', date: '2025.02', pdf: '/pdf/vol14_2024fuyu.pdf' },
];

export default function NewsletterPage() {
  return (
    <div className="bg-section-gray pb-20 pt-8">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <nav className="mb-8 text-sm text-text-body/80">
          <Link href="/" className="hover:text-shio-heading">
            TOP
          </Link>
          <span className="mx-2">&gt;</span>
          <span>いまいだより</span>
        </nav>
        <h1 className="mb-4 text-3xl font-bold text-shio-heading md:text-4xl">いまいだより</h1>
        <p className="mb-10 text-text-body">
          市政のこと、わかりやすくお届けしています。PDFは順次公開予定です。
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ISSUES.map((issue) => (
            <a
              key={issue.vol}
              href={issue.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:border-shio-accent hover:shadow-md"
            >
              <FileText className="mb-4 h-10 w-10 text-shio-accent" aria-hidden />
              <p className="text-sm font-bold text-shio-heading">Vol.{issue.vol}</p>
              <h2 className="mt-1 text-lg font-bold text-text-body">{issue.title}</h2>
              <p className="mt-2 text-sm text-text-body/80">{issue.date}</p>
              <span className="mt-4 text-sm font-bold text-shio-accent">PDFを開く →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

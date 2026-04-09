import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'いまいだより',
  description: '今井りかの市政報告「いまいだより」バックナンバー。Vol.1〜Vol.18のPDFをご覧いただけます。',
};

type Issue = {
  vol: number | string;
  title: string;
  date: string;
  pdf: string;
  badge?: string;
};

const ISSUES: Issue[] = [
  { vol: 18, title: '2026年冬号', date: '2026.01', pdf: '/pdf/vol18_2026fuyu.pdf', badge: '最新号' },
  { vol: 17, title: '2025年秋号', date: '2025.10', pdf: '/pdf/vol17_2025aki.pdf' },
  { vol: 16, title: '2025年夏号', date: '2025.08', pdf: '/pdf/vol16_2025natsu.pdf' },
  { vol: 15, title: '2025年春号', date: '2025.06', pdf: '/pdf/vol15_2025haru.pdf' },
  { vol: '選挙', title: '選挙チラシ', date: '2025.01', pdf: '/pdf/senkyo_chirashi_2025.pdf', badge: '選挙' },
  { vol: 14, title: '特別号 2024年冬', date: '2025.01', pdf: '/pdf/vol14_special2024.pdf', badge: '特別号' },
  { vol: 13, title: '2024年秋号', date: '2024.10', pdf: '/pdf/vol13_2024aki.pdf' },
  { vol: 12, title: '2024年夏号', date: '2024.07', pdf: '/pdf/vol12_2024natsu.pdf' },
  { vol: 11, title: '2024年春号', date: '2024.04', pdf: '/pdf/vol11_2024haru.pdf' },
  { vol: 10, title: '2023年冬号', date: '2024.01', pdf: '/pdf/vol10_2023fuyu.pdf' },
  { vol: 9, title: '2023年秋号', date: '2023.10', pdf: '/pdf/vol9_2023aki.pdf' },
  { vol: 8, title: '2023年夏号', date: '2023.07', pdf: '/pdf/vol8_2023natsu.pdf' },
  { vol: 7, title: '2023年春号', date: '2023.04', pdf: '/pdf/vol7_2023haru.pdf' },
  { vol: 6, title: '2023年冬号', date: '2023.01', pdf: '/pdf/vol6_2023fuyu.pdf' },
  { vol: 5, title: '2022年秋号', date: '2022.10', pdf: '/pdf/vol5_2022aki.pdf' },
  { vol: 4, title: '2022年夏号', date: '2022.07', pdf: '/pdf/vol4_2022natsu.pdf' },
  { vol: 3, title: '2022年春号', date: '2022.04', pdf: '/pdf/vol3_2022haru.pdf' },
  { vol: 2, title: '2021年秋号', date: '2021.10', pdf: '/pdf/vol2_2021aki.pdf' },
  { vol: 1, title: '2021年夏号', date: '2021.07', pdf: '/pdf/vol1_2021natsu.pdf' },
];

export default function NewsletterPage() {
  return (
    <div className="bg-section-gray pb-20 pt-8">
      <div className="mx-auto max-w-content px-4 md:px-6">
        {/* パンくず */}
        <nav className="mb-8 text-sm text-text-body/80">
          <Link href="/" className="hover:text-shio-heading">
            TOP
          </Link>
          <span className="mx-2">&gt;</span>
          <span>いまいだより</span>
        </nav>

        {/* ヘッダー */}
        <h1 className="mb-2 text-3xl font-bold text-shio-heading md:text-4xl">
          いまいだより
        </h1>
        <p className="mb-4 text-lg font-semibold text-shio-accent">
          全{ISSUES.length}号のバックナンバー
        </p>
        <p className="mb-10 leading-relaxed text-text-body">
          定例会ごとに、議会での質問や活動をわかりやすくまとめてお届けしています。
          <br className="hidden md:inline" />
          各号のPDFをタップすると、新しいタブで開きます。
        </p>

        {/* グリッド */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ISSUES.map((issue) => (
            <a
              key={`${issue.vol}`}
              href={issue.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-xl border border-black/10 bg-white p-5 shadow-sm transition hover:border-shio-accent hover:shadow-md"
            >
              {/* バッジ */}
              {issue.badge && (
                <span className="absolute -top-2 right-3 rounded-full bg-shio-accent px-2.5 py-0.5 text-[11px] font-bold text-white">
                  {issue.badge}
                </span>
              )}

              <FileText className="mb-3 h-8 w-8 text-shio-accent" aria-hidden />

              <p className="text-sm font-bold text-shio-heading">
                {typeof issue.vol === 'number' ? `Vol.${issue.vol}` : issue.vol}
              </p>
              <h2 className="mt-0.5 text-base font-bold text-text-body">
                {issue.title}
              </h2>
              <p className="mt-1.5 text-xs text-text-body/60">{issue.date}</p>

              <span className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-bold text-shio-accent transition-all group-hover:gap-2.5">
                PDFを開く
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3.5 w-3.5" aria-hidden>
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* フッター注記 */}
        <div className="mt-12 rounded-lg bg-white/80 p-6 text-center">
          <p className="text-sm text-text-body/70">
            Vol.1（2021年夏号）から継続して発行しています。
            <br />
            議会での質問テーマは30以上。5年間にわたり、暮らしの声を届けてきました。
          </p>
        </div>
      </div>
    </div>
  );
}

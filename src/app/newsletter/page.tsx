import type { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'いまいだより',
};

interface NewsletterIssue {
  vol: number;
  title: string;
  date: string;
  pdfPath: string;
}

const NEWSLETTER_ISSUES: NewsletterIssue[] = [
  { vol: 18, title: '2026年冬号', date: '2026.01', pdfPath: '/pdf/vol18_2026fuyu.pdf' },
  { vol: 17, title: '2024年秋号', date: '2024.10', pdfPath: '/pdf/imaidayori-vol17.pdf' },
  { vol: 16, title: '2024年夏号', date: '2024.08', pdfPath: '/pdf/imaidayori-vol16.pdf' },
  { vol: 15, title: '2024年春号', date: '2024.06', pdfPath: '/pdf/imaidayori-vol15.pdf' },
  { vol: 14, title: '2024年冬号', date: '2024.02', pdfPath: '/pdf/imaidayori-vol14.pdf' },
  { vol: 13, title: '2023年秋号', date: '2023.10', pdfPath: '/pdf/imaidayori-vol13.pdf' },
  { vol: 12, title: '2023年夏号', date: '2023.08', pdfPath: '/pdf/imaidayori-vol12.pdf' },
  { vol: 11, title: '2023年春号', date: '2023.06', pdfPath: '/pdf/imaidayori-vol11.pdf' },
  { vol: 10, title: '2023年冬号', date: '2023.02', pdfPath: '/pdf/imaidayori-vol10.pdf' },
  { vol: 9, title: '2022年秋号', date: '2022.10', pdfPath: '/pdf/imaidayori-vol9.pdf' },
  { vol: 8, title: '2022年夏号', date: '2022.08', pdfPath: '/pdf/imaidayori-vol8.pdf' },
  { vol: 7, title: '2022年春号', date: '2022.06', pdfPath: '/pdf/imaidayori-vol7.pdf' },
  { vol: 6, title: '2022年冬号', date: '2022.02', pdfPath: '/pdf/imaidayori-vol6.pdf' },
  { vol: 5, title: '2021年秋号', date: '2021.10', pdfPath: '/pdf/imaidayori-vol5.pdf' },
  { vol: 4, title: '2021年夏号', date: '2021.08', pdfPath: '/pdf/imaidayori-vol4.pdf' },
  { vol: 3, title: '2021年春号', date: '2021.06', pdfPath: '/pdf/imaidayori-vol3.pdf' },
  { vol: 2, title: '2021年冬号', date: '2021.02', pdfPath: '/pdf/imaidayori-vol2.pdf' },
  { vol: 1, title: '創刊号', date: '2020.12', pdfPath: '/pdf/imaidayori-vol1.pdf' },
];

export default function NewsletterPage() {
  return (
    <>
      {/* Page Header */}
      <section className="w-full bg-gradient-to-r from-cdp-cyan/10 to-cdp-cyan/5 py-12 md:py-16 border-b-4 border-cdp-cyan">
        <div className="w-full max-w-content mx-auto px-4 md:px-6">
          <div className="space-y-2">
            <p className="text-cdp-cyan font-semibold text-sm md:text-base tracking-wide">Newsletter</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark">いまいだより</h1>
            <p className="text-lg md:text-xl text-text-body mt-2">市政のこと、わかりやすくお届け</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="w-full max-w-content mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="bg-cdp-cyan/5 border-l-4 border-cdp-cyan rounded-r-lg p-6 md:p-8">
              <p className="text-lg leading-relaxed text-text-dark">
                「いまいだより」は、議会のことや日々の活動を、できるだけわかりやすくお届けしたくて作っている市政報告です。2ヶ月に一度くらいのペースで発行しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Grid */}
      <section className="w-full bg-gray-bg py-8 md:py-12">
        <div className="w-full max-w-content mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-8">
            バックナンバー
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWSLETTER_ISSUES.map((issue) => (
              <a
                key={issue.vol}
                href={issue.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow hover:bg-gray-50 group"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-cdp-cyan/10 rounded-lg mb-4 group-hover:bg-cdp-cyan/20 transition-colors">
                  <FileText className="w-6 h-6 text-cdp-cyan" />
                </div>

                {/* Volume Number */}
                <p className="text-sm font-semibold text-cdp-cyan tracking-wide mb-2">
                  Vol.{issue.vol}
                </p>

                {/* Title and Date */}
                <h3 className="text-lg font-bold text-text-dark mb-1 group-hover:text-cdp-cyan transition-colors">
                  {issue.title}
                </h3>
                <p className="text-sm text-text-body mb-4">
                  {issue.date}
                </p>

                {/* Link Text */}
                <div className="inline-flex items-center text-cdp-cyan font-semibold text-sm group-hover:gap-2 transition-all">
                  PDFを開く
                  <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-cdp-blue py-14 md:py-20">
        <div className="mx-auto w-full max-w-content px-4 text-center md:px-6">
          <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            読んでみて、気になったことがあれば
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/90">
            ご感想やご質問も、お待ちしています。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-cdp-yellow px-8 py-3 font-bold text-cdp-blue transition-opacity hover:opacity-90"
            >
              お問い合わせ
            </a>
            <a
              href="mailto:rika.imai0411@gmail.com"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-bold text-cdp-blue transition-opacity hover:opacity-90"
            >
              メールを送る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

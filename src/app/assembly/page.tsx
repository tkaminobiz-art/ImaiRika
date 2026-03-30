import type { Metadata } from 'next';
import Link from 'next/link';
import { SNS_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: '議会動画',
};

export default function AssemblyPage() {
  return (
    <div className="bg-white pb-20 pt-8">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <nav className="mb-8 text-sm text-text-body/80">
          <Link href="/" className="hover:text-shio-heading">
            TOP
          </Link>
          <span className="mx-2">&gt;</span>
          <span>議会動画</span>
        </nav>
        <h1 className="mb-6 text-3xl font-bold text-shio-heading md:text-4xl">議会動画</h1>
        <p className="mb-12 max-w-2xl leading-relaxed text-text-body">
          議会での様子を、動画でも見られるようにしています。
          チャンネル全体は{' '}
          <a
            href={SNS_LINKS.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-shio-blue underline-offset-2 hover:underline"
          >
            YouTube
          </a>
          からもご覧いただけます。
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-video w-full rounded-xl bg-section-gray/80 p-8 text-center text-sm text-text-body/80">
            動画の埋め込みは順次更新予定です
          </div>
          <div className="aspect-video w-full rounded-xl bg-section-gray/80 p-8 text-center text-sm text-text-body/80">
            最新の議会映像は橿原市公式サイトもご覧ください
          </div>
        </div>
      </div>
    </div>
  );
}

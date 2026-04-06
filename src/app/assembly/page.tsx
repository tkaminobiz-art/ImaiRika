import type { Metadata } from 'next';
import Image from 'next/image';
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
        <div className="relative mb-8 h-48 overflow-hidden rounded-xl md:h-64">
          <Image
            src="/images/council_speaking-podium.jpg"
            alt="議会で質問する今井りか"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1140px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <h1 className="absolute bottom-6 left-6 text-3xl font-bold text-white md:text-4xl">議会動画</h1>
        </div>
        <p className="mb-12 max-w-2xl leading-relaxed text-text-body">
          議会での様子を、動画でもご覧いただけます。
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

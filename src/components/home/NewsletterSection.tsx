'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useReveal, revealClass } from '@/hooks/useReveal';

const vols = [
  { vol: '第18号', sub: '最新号', image: '/images/hero_slogan-board-green.jpg', pdf: '/pdf/vol18_2026fuyu.pdf' },
  { vol: '第17号', sub: '2025年秋号', image: '/images/community_facility-visit-nara.jpg', pdf: '/pdf/vol17_2025aki.pdf' },
  { vol: '第16号', sub: '2025年夏号', image: '/images/community_shaved-ice-serving.jpg', pdf: '/pdf/vol16_2025natsu.pdf' },
  { vol: '第15号', sub: '2025年春号', image: '/images/humanrights_event-closeup.jpg', pdf: '/pdf/vol15_2025haru.pdf' },
];

export default function NewsletterSection() {
  const [ref, visible] = useReveal();

  return (
    <section className="px-[var(--gutter)] py-20 md:py-[120px]">
      <div ref={ref} className={`mx-auto max-w-v2 ${revealClass(visible)}`}>
        <p className="mb-1.5 text-[11px] font-semibold tracking-[0.14em] text-v2-pink">
          市政だより
        </p>
        <h2 className="mb-10 text-[clamp(1.15rem,2vw,1.4rem)] font-bold leading-relaxed">
          いまいだより
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {vols.map((v, i) => (
            <a
              key={v.vol}
              href={v.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`group cursor-pointer overflow-hidden rounded-[var(--r-md)] bg-v2-cool shadow-[var(--shadow-rest)] transition duration-[400ms] ease-[var(--spring)] hover:-translate-y-[3px] hover:scale-[1.01] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${revealClass(visible, i * 80)}`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={v.image}
                  alt={`${v.vol} サムネイル`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="px-3.5 py-3">
                <span className="text-[11px] font-bold tracking-[0.04em] text-v2-pink">
                  {v.vol}
                </span>
                {v.sub && (
                  <>
                    <br />
                    <span className="text-[11px] text-[var(--text-muted)]">{v.sub}</span>
                  </>
                )}
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.04em] text-v2-pink transition hover:gap-3 hover:text-v2-pink-deep"
          >
            バックナンバーを見る（全19号）
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              className="h-3.5 w-3.5 transition"
              aria-hidden
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

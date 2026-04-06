'use client';

import Link from 'next/link';
import { useReveal, revealClass } from '@/hooks/useReveal';

const NEWSLETTERS = [
  { vol: '第18号', note: '最新号', bg: 'bg-[var(--pink-soft)]' },
  { vol: '第17号', note: '特別号', bg: 'bg-[var(--blue-soft)]' },
  { vol: '第16号', note: '', bg: 'bg-v2-cool' },
  { vol: '第15号', note: '', bg: 'bg-[var(--bg-warm)]' },
];

export default function NewsletterSection() {
  const [labelRef, labelVisible] = useReveal<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-v2 px-[var(--gutter)] py-[120px] max-md:px-6 max-md:py-[80px]">
      <div ref={labelRef} className={revealClass(labelVisible)}>
        <p className="mb-1.5 text-[11px] font-semibold tracking-[0.14em] text-v2-pink">
          市政だより
        </p>
        <h2 className="text-[clamp(1.15rem,2vw,1.4rem)] font-bold leading-relaxed text-[var(--text)]">
          いまいだより
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {NEWSLETTERS.map((nl, i) => (
          <NewsletterItem key={nl.vol} item={nl} delay={i * 80} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/newsletter"
          className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] text-v2-pink transition hover:text-v2-pink-deep"
        >
          バックナンバーを見る
          <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

function NewsletterItem({
  item,
  delay,
}: {
  item: (typeof NEWSLETTERS)[number];
  delay: number;
}) {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`cursor-pointer overflow-hidden rounded-[var(--r-md)] bg-v2-cool transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-[3px] hover:scale-[1.01] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${revealClass(visible)}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {/* Thumbnail placeholder */}
      <div
        className={`flex aspect-[3/4] items-center justify-center text-xs text-[var(--text-muted)] ${item.bg}`}
      >
        {item.vol} サムネイル
      </div>
      <div className="px-3.5 py-3">
        <span className="text-[11px] font-bold tracking-[0.04em] text-v2-pink">
          {item.vol}
        </span>
        {item.note && (
          <>
            <br />
            <span className="text-[11px] text-[var(--text-muted)]">
              {item.note}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

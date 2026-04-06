'use client';

import Link from 'next/link';
import { useReveal, revealClass } from '@/hooks/useReveal';

export default function CtaSection() {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-gradient-to-br from-[var(--pink-bg)] via-white to-[var(--blue-bg)] px-[var(--gutter)] py-[100px] text-center max-md:px-6 max-md:py-16 ${revealClass(visible)}`}
    >
      <h2 className="mb-3 text-[clamp(1.3rem,2.5vw,1.6rem)] font-bold text-[var(--text)]">
        一緒に声を届けませんか？
      </h2>
      <p className="mb-9 text-sm leading-[1.9] text-[var(--text-sub)]">
        「ちょっと気になること」「こうなったらいいのに」
        <br />
        なんでもお気軽にどうぞ。
      </p>
      <div className="flex flex-wrap justify-center gap-4 max-md:flex-col max-md:items-center">
        <Link
          href="/support"
          className="inline-flex items-center gap-2 rounded-[40px] bg-v2-pink px-10 py-3.5 text-sm font-bold tracking-[0.06em] text-white transition-all duration-[350ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:bg-v2-pink-deep hover:shadow-[0_8px_28px_rgba(214,70,114,0.25)] max-md:w-full max-md:max-w-[280px] max-md:justify-center"
        >
          応援する
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-[40px] bg-v2-blue px-10 py-3.5 text-sm font-bold tracking-[0.06em] text-white transition-all duration-[350ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:bg-v2-blue-deep hover:shadow-[0_8px_28px_rgba(0,64,152,0.25)] max-md:w-full max-md:max-w-[280px] max-md:justify-center"
        >
          お問い合わせ
        </Link>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useReveal, revealClass } from '@/hooks/useReveal';

export default function CtaSection() {
  const [ref, visible] = useReveal();

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden px-[var(--gutter)] py-16 text-center md:py-[100px] ${revealClass(visible)}`}
    >
      <Image
        src="/images/campaign_wave-blue-sash-back.jpg"
        alt=""
        fill
        className="object-cover opacity-[0.12]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--pink-bg)] via-white/90 to-[var(--blue-bg)]" />
      <div className="relative z-[1]">
        <h2 className="mb-3 text-[clamp(1.3rem,2.5vw,1.6rem)] font-bold">
          一緒に声を届けませんか？
        </h2>
        <p className="mb-9 text-sm leading-[1.9] text-[var(--text-sub)]">
          「ちょっと気になること」「こうなったらいいのに」
          <br />
          なんでもお気軽にどうぞ。
        </p>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Link
            href="/support"
            className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-[40px] bg-v2-pink px-10 py-3.5 text-sm font-bold tracking-[0.06em] text-white transition duration-[350ms] ease-[var(--spring)] hover:-translate-y-0.5 hover:bg-v2-pink-deep hover:shadow-[0_8px_28px_rgba(214,70,114,0.25)] md:w-auto"
          >
            応援する
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-[40px] bg-v2-blue px-10 py-3.5 text-sm font-bold tracking-[0.06em] text-white transition duration-[350ms] ease-[var(--spring)] hover:-translate-y-0.5 hover:bg-v2-blue-deep hover:shadow-[0_8px_28px_rgba(0,64,152,0.25)] md:w-auto"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}

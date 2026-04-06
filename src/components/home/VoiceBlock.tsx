'use client';

import { useReveal, revealClass } from '@/hooks/useReveal';

export default function VoiceBlock() {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-v2 px-[var(--gutter)] pt-[120px] max-md:px-6 max-md:pt-[80px]">
      <div
        ref={ref}
        className={`relative rounded-[var(--r-lg)] border-l-[3px] border-v2-pink bg-[var(--bg-warm)] px-14 py-12 max-md:px-8 max-md:py-8 ${revealClass(visible)}`}
      >
        {/* 大きなクォーテーション */}
        <span
          aria-hidden
          className="absolute -top-6 left-8 font-serif text-[96px] leading-none text-v2-pink/[0.12] max-md:text-[64px]"
        >
          &ldquo;
        </span>

        <p className="relative z-[1] font-serif text-lg leading-[2.2] text-[var(--text)] max-md:text-base">
          届いていない声がある。<br />
          子育ての現場で感じた「おかしいな」を、<br className="max-md:hidden" />
          議会に届けたくて、この道に進みました。
        </p>

        <p className="mt-4 text-xs tracking-[0.04em] text-[var(--text-muted)]">
          橿原市議会議員 今井りか
        </p>
      </div>

      {/* 下矢印（次セクションへの視線誘導） */}
      <div className="pt-8 text-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="mx-auto h-6 w-6 animate-[arrowBounce_2s_ease-in-out_infinite] text-v2-pink/50"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}

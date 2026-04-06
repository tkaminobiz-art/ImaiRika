'use client';

import Image from 'next/image';
import { useReveal, revealClass } from '@/hooks/useReveal';

export default function VoiceBlock() {
  const [ref, visible] = useReveal();

  return (
    <section className="pt-20 md:pt-[120px]">
      <div className="mx-auto max-w-v2 px-[var(--gutter)]">
        <div
          ref={ref}
          className={`relative flex items-center gap-6 rounded-[var(--r-lg)] border-l-[3px] border-v2-pink bg-[var(--bg-warm)] px-8 py-10 md:gap-10 md:px-14 md:py-12 ${revealClass(visible)}`}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 left-6 font-serif text-[72px] leading-none text-v2-pink/[0.12] md:left-8 md:text-[96px]"
          >
            &ldquo;
          </span>
          <div className="relative z-[1] flex-1">
            <p className="font-serif text-base leading-[2.2] md:text-lg">
              届いていない声がある——。<br />
              議会でいつもそう感じていました。お母さんたちの声、地域で暮らすお年寄りの声、
              <br className="hidden md:inline" />
              子どもたちのこと。聞こえているのに、届いていない。<br />
              だから私は、その声を届ける仕事を続けています。
            </p>
            <p className="mt-4 text-xs tracking-[0.04em] text-[var(--text-muted)]">
              —— 今井りか
            </p>
          </div>
          <div className="hidden shrink-0 md:block">
            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full shadow-md">
              <Image
                src="/images/sns_portrait-laughing.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="120px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-0 pt-8">
        <svg
          className="h-6 w-6 animate-[arrowBounce_2s_ease-in-out_infinite] text-v2-pink opacity-50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useReveal, revealClass } from '@/hooks/useReveal';

export default function ProfileTeaser() {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <section className="bg-[var(--bg-warm)] py-[120px] max-md:py-[80px]">
      <div
        ref={ref}
        className={`mx-auto grid max-w-v2 items-center gap-12 px-[var(--gutter)] max-md:grid-cols-1 max-md:px-6 max-md:text-center md:grid-cols-[280px_1fr] ${revealClass(visible)}`}
      >
        {/* Photo */}
        <div className="relative max-md:mx-auto max-md:h-[260px] max-md:w-[200px] md:h-[340px] md:w-[280px]">
          <Image
            src="/images/profile_portrait-angle-white-bg.jpg"
            alt="今井りか"
            fill
            className="rounded-[var(--r-lg)] object-cover object-top"
            sizes="280px"
          />
        </div>

        {/* Body */}
        <div>
          <h2 className="mb-1 font-serif text-[28px] font-bold text-[var(--text)]">
            今井 りか
          </h2>
          <p className="mb-5 text-[13px] font-medium tracking-[0.08em] text-[var(--text-muted)]">
            橿原市議会議員 ・ 立憲民主党
          </p>
          <p className="mb-6 font-serif text-[15px] leading-[2.2] text-[var(--text-sub)]">
            「おかしいな」と思ったこと、ありませんか。
            <br />
            私もそうでした。子育てをしながら暮らす中で、
            <br />
            どうしても気になることがあって、届けたくなったんです。
          </p>
          <Link
            href="/profile"
            className="group inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] text-v2-pink transition-[gap] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:gap-3.5 hover:text-v2-pink-deep"
          >
            もっと読む
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-[3px]"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

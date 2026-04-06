'use client';

import Image from 'next/image';
import Link from 'next/link';
import { POLICY_PILLARS } from '@/lib/copy';
import { useReveal, revealClass } from '@/hooks/useReveal';

export default function PolicyThreePillars() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-v2 px-[var(--gutter)] py-[140px] max-md:px-6 max-md:py-[80px]">
      {/* Section header */}
      <div
        ref={headerRef}
        className={`mb-16 text-center ${revealClass(headerVisible)}`}
      >
        <p className="mb-1.5 text-[11px] font-semibold tracking-[0.14em] text-v2-pink">
          政策の柱
        </p>
        <h2 className="text-[clamp(1.15rem,2vw,1.4rem)] font-bold leading-relaxed text-[var(--text)]">
          大切にしている、3つのこと
        </h2>
      </div>

      {/* Pillars */}
      {POLICY_PILLARS.map((pillar, idx) => (
        <PillarItem key={pillar.id} pillar={pillar} idx={idx} />
      ))}
    </section>
  );
}

function PillarItem({
  pillar,
  idx,
}: {
  pillar: (typeof POLICY_PILLARS)[number];
  idx: number;
}) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  const isEven = idx % 2 === 1;

  return (
    <div
      ref={ref}
      className={`mb-[120px] grid items-start gap-14 last:mb-0 max-md:mb-16 max-md:grid-cols-1 max-md:gap-6 ${
        isEven
          ? 'md:grid-cols-[1fr_46%]'
          : 'md:grid-cols-[46%_1fr]'
      } ${revealClass(visible)}`}
    >
      {/* Photo */}
      <div
        className={`pillar-visual relative ${isEven ? 'md:order-2' : ''} max-md:order-none`}
      >
        <span
          className={`absolute -top-3.5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-v2-pink font-en text-base font-extrabold text-white shadow-[0_4px_14px_rgba(214,70,114,0.3)] ${
            isEven
              ? 'right-[-14px] max-md:left-auto max-md:right-4'
              : 'left-[-14px] max-md:left-auto max-md:right-4'
          }`}
        >
          {pillar.num}
        </span>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--r-lg)] max-md:aspect-[16/10]">
          <Image
            src={pillar.image}
            alt=""
            fill
            className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015]"
            sizes="(max-width: 768px) 100vw, 46vw"
            style={{ objectPosition: pillar.imagePosition ?? 'center' }}
          />
        </div>
      </div>

      {/* Text */}
      <div className={isEven ? 'md:order-1' : ''}>
        <p className="mb-2 text-xs font-semibold tracking-[0.06em] text-v2-pink">
          {pillar.title}
        </p>
        <h3 className="mb-5 text-[clamp(1.25rem,2.5vw,1.55rem)] font-bold leading-relaxed text-[var(--text)]">
          {pillar.short}
        </h3>

        {/* Lead prose */}
        <div className="mb-7 space-y-0">
          {pillar.lead.map((line, i) => (
            <p
              key={i}
              className="text-[15px] leading-[2] text-[var(--text-sub)] [&+&]:-mt-1"
            >
              {line}
            </p>
          ))}
        </div>

        {/* Done list */}
        <div className="mb-6">
          <div className="mb-2.5 flex items-center gap-2 text-xs font-bold text-[var(--text)]">
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-v2-pink text-[9px] text-white">
              &#10003;
            </span>
            これまでやってきたこと
          </div>
          <ul className="list-none">
            {pillar.done.map((item, i) => (
              <li
                key={i}
                className="relative border-b border-[var(--border,#E8E4DF)]/30 py-[7px] pl-5 text-sm leading-[1.7] text-[var(--text)] last:border-b-0 before:absolute before:left-0 before:top-[14px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-v2-pink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Next list */}
        <div className="mb-6">
          <div className="mb-2.5 flex items-center gap-2 text-xs font-bold text-[var(--text)]">
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-v2-blue text-[9px] text-white">
              &rarr;
            </span>
            これからやりたいこと
          </div>
          <ul className="list-none">
            {pillar.next.map((item, i) => (
              <li
                key={i}
                className="relative border-b border-[var(--border,#E8E4DF)]/30 py-[7px] pl-5 text-sm leading-[1.7] text-[var(--text)] last:border-b-0 before:absolute before:left-0 before:top-[14px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-v2-blue/40"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

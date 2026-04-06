'use client';

import { SNS_LINKS } from '@/lib/constants';
import { useReveal, revealClass } from '@/hooks/useReveal';

export default function SnsSection() {
  const [labelRef, labelVisible] = useReveal<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-v2 px-[var(--gutter)] py-[80px] max-md:px-6 max-md:py-[60px]">
      <div ref={labelRef} className={revealClass(labelVisible)}>
        <p className="mb-1.5 text-[11px] font-semibold tracking-[0.14em] text-v2-pink">
          つながる
        </p>
        <h2 className="text-[clamp(1.15rem,2vw,1.4rem)] font-bold leading-relaxed text-[var(--text)]">
          SNSで日々の活動を発信しています
        </h2>
      </div>

      <div className="mt-10 grid gap-6 max-md:grid-cols-1 md:grid-cols-2">
        <SnsEmbed label="X" handle={SNS_LINKS.x.handle} url={SNS_LINKS.x.url} delay={0} />
        <SnsEmbed
          label="Instagram"
          handle={SNS_LINKS.instagram.handle}
          url={SNS_LINKS.instagram.url}
          delay={80}
        />
      </div>
    </section>
  );
}

function SnsEmbed({
  label,
  handle,
  url,
  delay,
}: {
  label: string;
  handle: string;
  url: string;
  delay: number;
}) {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`flex min-h-[360px] flex-col items-center justify-center rounded-[var(--r-md)] bg-v2-cool ${revealClass(visible)}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      <p className="mb-6 text-sm font-bold text-[var(--text)]">
        {label} {handle}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full px-6 py-3 font-bold text-white transition hover:brightness-95 ${
          label === 'Instagram'
            ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400'
            : 'bg-v2-pink'
        }`}
      >
        {label === 'Instagram' ? 'Instagram を見る' : 'X でフォローする'}
      </a>
    </div>
  );
}

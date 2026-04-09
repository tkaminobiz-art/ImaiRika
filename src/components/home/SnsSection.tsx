'use client';

import Image from 'next/image';
import { useReveal, revealClass } from '@/hooks/useReveal';
import { SnsIconInstagram, SnsIconX } from '@/components/ui/SnsBrandIcons';
import { SNS_LINKS } from '@/lib/constants';

export default function SnsSection() {
  const [ref, visible] = useReveal();

  return (
    <section className="px-[var(--gutter)] pb-20 md:pb-[120px]">
      <div ref={ref} className={`mx-auto max-w-v2 ${revealClass(visible)}`}>
        <p className="mb-1.5 text-[11px] font-semibold tracking-[0.14em] text-v2-pink">
          つながる
        </p>
        <h2 className="mb-10 text-[clamp(1.15rem,2vw,1.4rem)] font-bold leading-relaxed">
          SNSで日々の活動を発信しています
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex min-h-[360px] flex-col items-center justify-center gap-5 rounded-[var(--r-md)] bg-v2-cool">
            <div className="relative h-16 w-16 overflow-hidden rounded-full shadow">
              <Image
                src="/images/profile_portrait-white-bg-smile.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <span className="text-text-body">
              <SnsIconX className="mx-auto h-10 w-10" />
            </span>
            <span className="text-sm text-[var(--text-muted)]">
              X ({SNS_LINKS.x.handle})
            </span>
            <a
              href={SNS_LINKS.x.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-6 py-2 text-xs font-bold text-white transition hover:bg-black/80"
            >
              フォローする
            </a>
          </div>
          <div className="flex min-h-[360px] flex-col items-center justify-center gap-5 rounded-[var(--r-md)] bg-v2-cool">
            <div className="relative h-16 w-16 overflow-hidden rounded-full shadow">
              <Image
                src="/images/profile_portrait-white-bg-smile.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <span className="text-text-body">
              <SnsIconInstagram className="mx-auto h-10 w-10" />
            </span>
            <span className="text-sm text-[var(--text-muted)]">
              Instagram ({SNS_LINKS.instagram.handle})
            </span>
            <a
              href={SNS_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-2 text-xs font-bold text-white transition hover:opacity-90"
            >
              フォローする
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

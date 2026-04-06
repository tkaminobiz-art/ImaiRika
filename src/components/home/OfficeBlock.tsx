'use client';

import { CONTACT } from '@/lib/constants';
import { useReveal, revealClass } from '@/hooks/useReveal';

export default function OfficeBlock() {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <section className="bg-[var(--bg-warm)] py-20 max-md:py-14">
      <div
        ref={ref}
        className={`mx-auto max-w-v2 px-[var(--gutter)] text-center max-md:px-6 ${revealClass(visible)}`}
      >
        <p className="mb-1.5 text-[11px] font-semibold tracking-[0.14em] text-v2-pink">
          ご連絡先
        </p>
        <h2 className="mb-6 text-[clamp(1.15rem,2vw,1.4rem)] font-bold leading-relaxed text-[var(--text)]">
          なんでもお気軽にどうぞ
        </h2>

        <div className="flex justify-center gap-12 max-md:flex-col max-md:gap-5">
          <div>
            <p className="mb-0.5 text-[11px] font-semibold tracking-[0.08em] text-[var(--text-muted)]">
              お電話
            </p>
            <p className="text-base font-medium tracking-[0.04em] text-[var(--text)]">
              <a
                href={`tel:${CONTACT.tel.replace(/-/g, '')}`}
                className="text-[var(--text)] underline-offset-2 hover:text-v2-pink hover:underline"
              >
                {CONTACT.tel}
              </a>
            </p>
          </div>
          <div>
            <p className="mb-0.5 text-[11px] font-semibold tracking-[0.08em] text-[var(--text-muted)]">
              メール
            </p>
            <p className="text-base font-medium tracking-[0.04em] text-[var(--text)]">
              <a
                href={`mailto:${CONTACT.email}`}
                className="break-all text-[var(--text)] underline-offset-2 hover:text-v2-pink hover:underline"
              >
                {CONTACT.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { useReveal, revealClass } from '@/hooks/useReveal';
import { CHRONOLOGY, type ChronoEvent } from '@/lib/chronology';

const STATS = [
  { num: 20, unit: '号', label: 'いまいだよりを発行' },
  { num: 30, unit: '+', label: 'の議会質問テーマ' },
  { num: 5, unit: '年間', label: '継続して取り組み中' },
] as const;

function EventItem({ event }: { event: ChronoEvent }) {
  const dotBase =
    'absolute left-[-37px] top-[8px] rounded-full border-2 border-v2-cool';
  const dotClass =
    event.type === 'big'
      ? 'absolute left-[-39px] top-[5px] h-3.5 w-3.5 rounded-full bg-v2-pink shadow-[0_0_0_4px_rgba(214,70,114,0.15)]'
      : event.type === 'achievement'
        ? `${dotBase} h-2.5 w-2.5 bg-v2-pink`
        : event.type === 'start'
          ? 'absolute left-[-38px] top-[6px] h-3 w-3 rounded-full bg-v2-blue border-2 border-v2-cool'
          : `${dotBase} h-2.5 w-2.5 bg-[var(--border)]`;

  return (
    <div className="relative mb-5 last:mb-0">
      <span className={dotClass} />

      {event.type === 'start' && (
        <>
          {event.role && (
            <p className="mb-1 text-xs font-medium tracking-[0.03em] text-[var(--text-muted)]">
              {event.role}
            </p>
          )}
          {event.headline && (
            <h3 className="mb-1.5 text-[17px] font-bold leading-relaxed text-[var(--text)]">
              {event.headline}
            </h3>
          )}
          {event.body && (
            <p className="text-sm leading-[1.85] text-[var(--text-sub)]">
              {event.body}
            </p>
          )}
        </>
      )}

      {(event.type === 'achievement' || event.type === 'big') && (
        <>
          <p
            className={`flex items-start gap-2 font-bold leading-relaxed ${
              event.type === 'big'
                ? 'text-[16px] text-v2-pink-deep'
                : 'text-[15px] text-[var(--text)]'
            }`}
          >
            <span className="mt-[9px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-v2-pink" />
            {event.achieve}
          </p>
          {event.detail && (
            <p className="mt-1 pl-3.5 text-[13.5px] leading-[1.85] text-[var(--text-sub)]">
              {event.detail}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default function Chronology() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();

  return (
    <section className="bg-v2-cool py-[120px] max-md:py-[80px]">
      <div className="mx-auto max-w-v2 px-[var(--gutter)] max-md:px-6">
        {/* Header */}
        <div ref={headerRef} className={`text-center ${revealClass(headerVisible)}`}>
          <p className="mb-1.5 text-[11px] font-semibold tracking-[0.14em] text-v2-pink">
            これまでの歩み
          </p>
          <h2 className="mb-2 text-[clamp(1.15rem,2vw,1.4rem)] font-bold leading-relaxed text-[var(--text)]">
            現役ママの声を、地域発展に。
          </h2>
          <p className="text-sm leading-[1.9] text-[var(--text-sub)]">
            2021年の初当選から、暮らしの中の声に向き合ってきました。
          </p>

          {/* Stats row — 年表ヘッダー直下に統合 */}
          <div className="mt-10 grid grid-cols-3 gap-5 max-md:gap-3">
            {STATS.map((s) => (
              <StatCard key={s.label} stat={s} visible={headerVisible} />
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-14">
          {CHRONOLOGY.map((yearData) => (
            <YearBlock key={yearData.year} data={yearData} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  visible,
}: {
  stat: (typeof STATS)[number];
  visible: boolean;
}) {
  const numRef = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    if (!visible || counted.current || !numRef.current) return;
    counted.current = true;

    const el = numRef.current;
    const target = stat.num;
    const dur = 1100;
    const start = performance.now();

    function frame(now: number) {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(ease * target));
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }, [visible, stat.num]);

  return (
    <div className="rounded-[var(--r-md)] border border-[var(--border)] bg-white px-4 py-9 text-center transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-[3px] hover:scale-[1.01] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <p className="leading-none">
        <span
          ref={numRef}
          className="font-en text-[clamp(2.8rem,5vw,3.8rem)] font-extrabold tracking-tight text-v2-pink"
        >
          0
        </span>
        <span className="ml-0.5 text-sm font-medium text-v2-pink-deep">
          {stat.unit}
        </span>
      </p>
      <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-sub)]">
        {stat.label}
      </p>
    </div>
  );
}

function YearBlock({ data }: { data: (typeof CHRONOLOGY)[number] }) {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`grid grid-cols-[80px_1fr] gap-0 pb-10 last:pb-0 max-md:grid-cols-[56px_1fr] ${revealClass(visible)}`}
    >
      {/* 左: 年号 + 縦線 */}
      <div className="chrono-year-label relative pr-7 text-right">
        <span className="font-en text-xl font-extrabold tracking-tight text-[var(--text)] max-md:text-base md:sticky md:top-[120px]">
          {data.year}
        </span>
      </div>

      {/* 右: イベント群 */}
      <div className="pl-8 pb-2 max-md:pl-6">
        {data.events.map((event, i) => (
          <EventItem key={i} event={event} />
        ))}
      </div>
    </div>
  );
}

'use client';

import { useReveal, revealClass } from '@/hooks/useReveal';
import { CHRONOLOGY, type ChronoEvent } from '@/lib/chronology';
import { useEffect, useRef, useState, useCallback, type RefCallback } from 'react';

function useCountUp(target: number, duration = 1100): [RefCallback<HTMLElement>, number] {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const elRef = useRef<HTMLElement | null>(null);
  const obsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => () => { obsRef.current?.disconnect(); }, []);

  const setRef: RefCallback<HTMLElement> = useCallback((node) => {
    obsRef.current?.disconnect();
    elRef.current = node;
    if (!node) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started.current) return;
      started.current = true;
      const start = performance.now();
      (function frame(now: number) {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        setVal(Math.round(ease * target));
        if (t < 1) requestAnimationFrame(frame);
      })(start);
      obs.unobserve(node);
    }, { threshold: 0.3 });
    obs.observe(node);
    obsRef.current = obs;
  }, [target, duration]);

  return [setRef, val];
}

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [ref, val] = useCountUp(target);
  return (
    <div
      ref={ref}
      className="rounded-[var(--r-md)] border border-[var(--border)] bg-white px-4 py-9 text-center transition duration-[400ms] ease-[var(--spring)] hover:-translate-y-[3px] hover:scale-[1.01] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
    >
      <span className="font-en text-[clamp(2.8rem,5vw,3.8rem)] font-extrabold leading-none tracking-tight text-v2-pink">
        {val}
      </span>
      <span className="ml-0.5 text-sm font-medium text-v2-pink-deep">{suffix}</span>
      <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-sub)]">{label}</p>
    </div>
  );
}

function EventItem({ ev }: { ev: ChronoEvent }) {
  const dotBase =
    'absolute h-[10px] w-[10px] rounded-full border-2 border-[var(--bg-cool)]';
  const dotCls =
    ev.type === 'start'
      ? `${dotBase} bg-v2-blue -left-[37px] top-[8px] h-3 w-3 -left-[38px] top-[6px]`
      : ev.type === 'big'
        ? `${dotBase} bg-v2-pink -left-[39px] top-[5px] h-[14px] w-[14px] shadow-[0_0_0_4px_rgba(214,70,114,0.15)]`
        : `${dotBase} bg-v2-pink -left-[37px] top-[8px]`;

  return (
    <div className="relative mb-5 last:mb-0">
      <span className={dotCls} />
      {ev.role && (
        <p className="mb-1 text-xs font-medium tracking-[0.03em] text-[var(--text-muted)]">
          {ev.role}
        </p>
      )}
      {ev.headline && (
        <h3 className="mb-1.5 text-[17px] font-bold leading-relaxed">{ev.headline}</h3>
      )}
      {ev.type === 'start' && ev.body && (
        <p className="text-sm leading-[1.85] text-[var(--text-sub)]">{ev.body}</p>
      )}
      {ev.achieve && (
        <p
          className={`flex items-start gap-2 font-bold leading-relaxed ${ev.type === 'big' ? 'text-base text-v2-pink-deep' : 'text-[15px]'}`}
        >
          <span className="mt-[9px] flex h-1.5 w-1.5 shrink-0 rounded-full bg-v2-pink" />
          {ev.achieve}
        </p>
      )}
      {ev.detail && (
        <p className="mt-1 pl-3.5 text-[13.5px] leading-[1.85] text-[var(--text-sub)]">
          {ev.detail}
        </p>
      )}
    </div>
  );
}

export default function Chronology() {
  const [ref, visible] = useReveal();

  return (
    <section className="bg-v2-cool py-20 md:py-[120px]">
      <div className="mx-auto max-w-v2 px-[var(--gutter)]">
        <div ref={ref} className={`text-center ${revealClass(visible)}`}>
          <p className="mb-1.5 text-[11px] font-semibold tracking-[0.14em] text-v2-pink">
            これまでの歩み
          </p>
          <h2 className="mb-2 text-[clamp(1.15rem,2vw,1.4rem)] font-bold leading-relaxed">
            現役ママの声を、地域発展に。
          </h2>
          <p className="text-sm leading-[1.9] text-[var(--text-sub)]">
            2021年の初当選から、暮らしの中の声に向き合ってきました。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-5">
          <StatCard target={20} suffix="号" label="いまいだよりを発行" />
          <StatCard target={30} suffix="+" label="の議会質問テーマ" />
          <StatCard target={5} suffix="年間" label="継続して取り組み中" />
        </div>

        <div className="mt-14">
          {CHRONOLOGY.map((yr, yi) => {
            const isLast = yi === CHRONOLOGY.length - 1;
            return (
              <div
                key={yr.year}
                className={`grid grid-cols-[56px_1fr] gap-0 md:grid-cols-[80px_1fr] ${isLast ? '' : 'pb-10'}`}
              >
                <div className="chrono-year-label relative pr-6 text-right md:pr-7">
                  <span className="font-en text-base font-extrabold tracking-tight md:sticky md:top-[120px] md:text-xl">
                    {yr.year}
                  </span>
                </div>
                <div className="pl-6 pb-2 md:pl-8">
                  {yr.events.map((ev, ei) => (
                    <EventItem key={ei} ev={ev} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

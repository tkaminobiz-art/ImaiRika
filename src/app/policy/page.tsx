import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { POLICY_PILLARS } from '@/lib/copy';

export const metadata: Metadata = {
  title: '政策',
  description:
    '暮らしの中の「気になること」から始まった、3つの柱。こども・子育て、地域、対話と発信。',
};

export default function PolicyPage() {
  return (
    <div className="bg-white pb-20 pt-8">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <nav className="mb-8 text-sm text-text-body/80">
          <Link href="/" className="hover:text-shio-heading">
            TOP
          </Link>
          <span className="mx-2">&gt;</span>
          <span>政策</span>
        </nav>

        <h1 className="mb-6 text-3xl font-bold text-shio-heading md:text-4xl">政策</h1>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-text-body">
          暮らしの中の「気になること」から始まった、3つの柱。
          <br />
          どれも、毎日の生活の中から生まれたものです。
        </p>

        <div className="space-y-20">
          {POLICY_PILLARS.map((pillar) => (
            <section
              key={pillar.id}
              id={pillar.id}
              className="scroll-mt-28 border-t border-black/10 pt-16 first:border-t-0 first:pt-0"
            >
              <div className="mb-8 grid gap-8 md:grid-cols-2 md:items-start">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow">
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-shio-accent">{pillar.title}</p>
                  <h2 className="mb-6 text-2xl font-bold text-shio-heading md:text-3xl">
                    {pillar.short}
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed text-text-body">
                    {pillar.lead.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-8 rounded-xl bg-section-blue p-6 md:p-8">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-ritsyo">
                  Point
                </p>
                <h3 className="mb-2 text-lg font-bold text-ritsyo">{pillar.pointTitle}</h3>
                <p className="text-text-body">{pillar.pointBody}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 font-bold text-text-body">これまでやってきたこと</h3>
                  <ul className="space-y-2 text-sm text-text-body md:text-base">
                    {pillar.done.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="text-shio-accent">・</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 font-bold text-text-body">これからやりたいこと</h3>
                  <ul className="space-y-2 text-sm text-text-body md:text-base">
                    {pillar.next.map((n) => (
                      <li key={n} className="flex gap-2">
                        <span className="text-shio-blue">→</span>
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

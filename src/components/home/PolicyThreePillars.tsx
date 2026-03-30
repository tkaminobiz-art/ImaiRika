import Image from 'next/image';
import Link from 'next/link';
import { POLICY_PILLARS } from '@/lib/copy';

export default function PolicyThreePillars() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <h2 className="mb-12 text-center text-xl font-bold text-shio-heading md:text-2xl">
          今井りかの政策 3つの柱
        </h2>

        <div className="space-y-6 md:space-y-8">
          {POLICY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="grid gap-8 rounded-xl border border-black/5 bg-section-gray/50 p-6 md:grid-cols-2 md:p-10 lg:gap-12"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-lg shadow ${
                  idx % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <p className="mb-2 text-4xl font-black text-shio-accent/40">
                  {pillar.num}
                </p>
                <h3 className="mb-4 text-xl font-bold text-shio-heading md:text-2xl">
                  {pillar.short}
                </h3>
                <div className="mb-6 space-y-3 text-sm leading-relaxed text-text-body md:text-base">
                  {pillar.lead.slice(0, 3).map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <div className="mb-4 rounded-lg bg-ritsyo/10 px-4 py-3">
                  <p className="text-xs font-bold text-ritsyo">Point</p>
                  <p className="font-bold text-ritsyo">{pillar.pointTitle}</p>
                  <p className="mt-1 text-sm text-text-body">{pillar.pointBody}</p>
                </div>
                <Link
                  href={`/policy#${pillar.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-shio-accent px-6 py-2 text-sm font-bold text-white transition hover:brightness-95"
                >
                  詳しく見る
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

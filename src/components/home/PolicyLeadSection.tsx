import Image from 'next/image';
import { HOME } from '@/lib/copy';
import { SITE } from '@/lib/constants';

export default function PolicyLeadSection() {
  return (
    <section className="bg-section-gray py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-shio-heading md:text-base">
            {HOME.policyLeadLabel}
          </p>
          <h2 className="text-2xl font-bold leading-snug text-shio-heading md:text-3xl lg:text-4xl">
            「{HOME.policyLeadCatch}」
          </h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-md md:order-1">
            <Image
              src="/images/profile_portrait-angle-white-bg.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-text-body md:order-2 md:text-lg">
            {HOME.policyLeadBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="pt-2 text-sm text-text-body/80">
              {SITE.position} · {SITE.party}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

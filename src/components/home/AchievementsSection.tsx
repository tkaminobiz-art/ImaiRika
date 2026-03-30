import Image from 'next/image';
import { HOME } from '@/lib/copy';

export default function AchievementsSection() {
  return (
    <section className="bg-section-blue py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <h2 className="mb-10 text-center text-xl font-bold text-shio-heading md:text-2xl">
          {HOME.achievementsTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {HOME.achievements.map((a, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="relative aspect-[16/10] bg-section-gray">
                <Image
                  src={
                    i === 0
                      ? '/images/community_kindergarten-sakura.jpg'
                      : i === 1
                        ? '/images/council_speaking-podium.jpg'
                        : '/images/community_kids-voting-event.jpg'
                  }
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 font-bold text-text-body">{a.title}</h3>
                <p className="text-sm leading-relaxed text-text-body/90">
                  {a.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

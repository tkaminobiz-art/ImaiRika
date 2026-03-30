import Image from 'next/image';
import { ACTIVITY_CIRCLES } from '@/lib/copy';

export default function ActivityCircles() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <h2 className="mb-12 text-center text-xl font-bold text-shio-heading md:text-2xl">
          今井りかの活動
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {ACTIVITY_CIRCLES.map((item) => (
            <div key={item.label} className="text-center">
              <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg ring-2 ring-shio-accent/25 md:h-32 md:w-32">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <p className="font-bold text-shio-heading">{item.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-text-body md:text-sm">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

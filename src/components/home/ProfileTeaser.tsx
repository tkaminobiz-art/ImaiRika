import Image from 'next/image';
import Link from 'next/link';
import { HOME } from '@/lib/copy';

export default function ProfileTeaser() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-section-blue/40 to-white py-16 md:py-24">
      <div className="relative mx-auto max-w-content px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[3/4] max-w-md overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/profile_portrait-angle-white-bg.jpg"
              alt="今井りか"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold text-shio-heading md:text-3xl">
              プロフィール
            </h2>
            <p className="mb-8 text-base leading-relaxed text-text-body md:text-lg">
              {HOME.profileTeaserLead}
            </p>
            <Link
              href="/profile"
              className="inline-flex rounded-full bg-shio-accent px-8 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              もっと見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

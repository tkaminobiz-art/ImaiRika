import Link from 'next/link';
import { HOME } from '@/lib/copy';

export default function LinkBannerRow() {
  return (
    <section className="border-y border-black/5 bg-white py-10">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <h2 className="mb-6 text-center text-sm font-bold tracking-wider text-text-body/70">
          関連リンク
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {HOME.linkBanners.map((b) => (
            <Link
              key={b.title}
              href={b.href}
              {...(b.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="min-w-[160px] flex-1 rounded-lg border border-black/10 bg-section-gray px-6 py-4 text-center text-sm font-bold text-ritsyo transition hover:border-shio-accent hover:bg-white md:min-w-[200px]"
            >
              {b.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

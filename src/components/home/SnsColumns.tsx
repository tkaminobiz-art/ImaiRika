import { SNS_LINKS } from '@/lib/constants';

export default function SnsColumns() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <h2 className="mb-10 text-center text-xl font-bold text-shio-heading">
          SNS
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="min-h-[320px] rounded-xl border border-black/10 bg-section-gray/50 p-4">
            <p className="mb-4 text-center text-sm font-bold text-text-body">
              {SNS_LINKS.x.label} {SNS_LINKS.x.handle}
            </p>
            <div className="flex min-h-[260px] items-center justify-center rounded-lg bg-white p-4 text-center text-sm text-text-body/80">
              <a
                href={SNS_LINKS.x.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-shio-accent px-6 py-3 font-bold text-white hover:brightness-95"
              >
                X でフォローする
              </a>
            </div>
          </div>
          <div className="min-h-[320px] rounded-xl border border-black/10 bg-section-gray/50 p-4">
            <p className="mb-4 text-center text-sm font-bold text-text-body">
              {SNS_LINKS.instagram.label} {SNS_LINKS.instagram.handle}
            </p>
            <div className="flex min-h-[260px] items-center justify-center rounded-lg bg-white p-4 text-center text-sm text-text-body/80">
              <a
                href={SNS_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3 font-bold text-white hover:opacity-95"
              >
                Instagram を見る
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-text-body/70">
          埋め込みウィジェットは環境により表示されない場合があります。リンクからご覧ください。
        </p>
      </div>
    </section>
  );
}

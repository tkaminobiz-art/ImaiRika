/**
 * FV — 3デバイス対応（スマホ / iPad / PC）
 * - スマホ（〜767px）: fv_mobile.jpg 768×1376
 * - iPad（768〜1023px）: fv_tablet.jpg 1200×896
 * - PC（1024px〜）: fv_pc.jpg 1920×814
 */
export default function HeroFull() {
  return (
    <section
      className="relative z-10 overflow-hidden bg-v2-warm"
      aria-label="ファーストビュー"
    >
      {/* スマホ */}
      <div className="md:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fv_mobile.jpg"
          alt="今井りか 橿原市議会議員"
          width={768}
          height={1376}
          className="block w-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      {/* iPad（768〜1023px） */}
      <div className="hidden md:block lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fv_tablet.jpg"
          alt="今井りか 橿原市議会議員"
          width={1200}
          height={896}
          className="block w-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      {/* PC（1024px〜） */}
      <div className="hidden lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fv_pc.jpg"
          alt="今井りか 橿原市議会議員"
          width={1920}
          height={814}
          className="block w-full max-h-[82vh] object-cover object-top"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}

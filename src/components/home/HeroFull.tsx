/**
 * FV — v2: .fv / .fv-img（HTMLプロトタイプ準拠）
 * - 背景: bg-warm、画像は max-h 82vh・object-cover・object-top
 * - main に pt-[var(--header-h)] 済みのため FV 自体に margin-top は付けない
 */
export default function HeroFull() {
  return (
    <section
      className="relative z-10 overflow-hidden bg-v2-warm"
      aria-label="ファーストビュー"
    >
      {/* モバイル */}
      <div className="md:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fv_mobile.jpg"
          alt="今井りか 橿原市議会議員"
          width={571}
          height={1024}
          className="block w-full max-h-[82vh] object-cover object-top"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      {/* デスクトップ */}
      <div className="hidden md:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fv_pc.jpg"
          alt="今井りか 橿原市議会議員"
          width={1920}
          height={814}
          className="fv-img block w-full max-h-[82vh] object-cover object-top"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}

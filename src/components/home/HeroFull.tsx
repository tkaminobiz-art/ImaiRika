/**
 * FV — CLAUDE.md: 完成済み画像をそのまま表示（テキストオーバーレイなし）
 * PC: fv_pc.png / モバイル: fv_mobile.jpg
 */
export default function HeroFull() {
  return (
    <section className="m-0 w-full overflow-hidden p-0" aria-label="ファーストビュー">
      <picture className="block w-full leading-none">
        <source media="(max-width: 768px)" srcSet="/images/fv_mobile.jpg" />
        <source media="(min-width: 769px)" srcSet="/images/fv_pc.png" />
        {/* デザイン済み画像に文言・写真・和柄が含まれるため img のみ */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fv_pc.png"
          alt="今井りか 橿原市議会議員"
          width={1920}
          height={1080}
          className="block h-auto w-full md:h-[80vh] md:object-cover md:object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
    </section>
  );
}

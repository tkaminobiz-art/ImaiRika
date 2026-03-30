/**
 * FV — 完成済み画像のみ表示（HTMLでテキストオーバーレイしない）
 *
 * 注意:
 * - Tailwind の bg-[url(...)] は JIT が本番で欠落したり、環境によって効かないことがあるため使わない
 * - 画像の拡張子と実体の形式を一致させる（.png 名で JPEG を置くと表示されない）
 *
 * 画像: public/images/fv_pc.jpg（横 1024×571） / fv_mobile.jpg（縦 571×1024）
 */
export default function HeroFull() {
  return (
    <section className="relative z-10 m-0 w-full overflow-hidden p-0" aria-label="ファーストビュー">
      {/* モバイル〜768px */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/fv_mobile.jpg"
        alt="今井りか 橿原市議会議員"
        width={571}
        height={1024}
        className="block h-auto w-full md:hidden"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      {/* 769px〜（高さを確定させて object-cover が効くようにする） */}
      <div className="relative hidden h-[80vh] max-h-[900px] min-h-[240px] w-full overflow-hidden md:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fv_pc.jpg"
          alt="今井りか 橿原市議会議員"
          width={1024}
          height={571}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}

/**
 * FV — 完成済み画像のみ表示（HTMLでテキストオーバーレイしない）
 *
 * 注意:
 * - Tailwind の「背景画像を url で指定する任意クラス」は JIT が誤検出しうるため使わない（コメントに bg と url を併記しない）
 * - 画像の拡張子と実体の形式を一致させる（.png 名で JPEG を置くと表示されない）
 *
 * 画像: public/images/fv_pc.jpg（横 1024×571） / fv_mobile.jpg（縦 571×1024）
 * 見切れ防止: object-cover は使わず object-contain + max-height でビューポート内に全体表示
 */
export default function HeroFull() {
  return (
    <section className="relative z-10 m-0 w-full overflow-hidden p-0" aria-label="ファーストビュー">
      {/* モバイル〜768px（縦長・上下に余白） */}
      <div className="w-full px-3 pb-8 pt-1 md:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fv_mobile.jpg"
          alt="今井りか 橿原市議会議員"
          width={571}
          height={1024}
          className="mx-auto block h-auto w-full max-w-[min(100%,520px)] object-contain object-center"
          style={{
            maxHeight: 'min(88svh, calc(100vw * 1024 / 571))',
          }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* 769px〜（横長・左右・下に余白、全体が収まる高さ上限） */}
      <div className="hidden w-full px-4 pb-10 pt-2 md:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fv_pc.jpg"
          alt="今井りか 橿原市議会議員"
          width={1024}
          height={571}
          className="mx-auto block h-auto w-full max-w-[min(100%,min(1400px,96vw))] object-contain object-center"
          style={{
            // レイアウト幅に合わせた自然高さと 78svh の小さい方（上下見切れ防止）
            maxHeight:
              'min(78svh, calc(min(100vw - 2rem, 1400px) * 571 / 1024))',
          }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}

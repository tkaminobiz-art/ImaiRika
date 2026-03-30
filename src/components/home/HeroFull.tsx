/**
 * FV — CLAUDE.md: 完成済み画像をそのまま表示（テキストオーバーレイなし）
 * PC: fv_pc.jpg / モバイル: fv_mobile.jpg
 *
 * next/image の fill はラッパーと z-index の都合で「白背景の背後」に回り見えなくなることがあるため、
 * セクションの background-image で描画し、常にコンテンツ面として表示する。
 */
export default function HeroFull() {
  return (
    <section
      aria-label="ファーストビュー"
      role="img"
      className="relative z-10 w-full overflow-hidden bg-cover bg-center bg-no-repeat max-md:aspect-[750/1334] max-md:bg-[url('/images/fv_mobile.jpg')] md:min-h-[80vh] md:bg-[url('/images/fv_pc.jpg')]"
    />
  );
}

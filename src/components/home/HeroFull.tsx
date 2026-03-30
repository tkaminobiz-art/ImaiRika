import Image from 'next/image';

/**
 * FV — CLAUDE.md: 完成済み画像をそのまま表示（テキストオーバーレイなし）
 * PC: fv_pc.jpg / モバイル: fv_mobile.jpg
 * `<picture>` より表示が安定するよう、ブレークポイントで別コンポーネントに分離
 */
export default function HeroFull() {
  return (
    <section className="m-0 w-full overflow-hidden p-0" aria-label="ファーストビュー">
      {/* モバイル（〜768px） */}
      <div className="relative w-full md:hidden">
        <Image
          src="/images/fv_mobile.jpg"
          alt="今井りか 橿原市議会議員"
          width={750}
          height={1334}
          className="block h-auto w-full"
          sizes="100vw"
          priority
        />
      </div>
      {/* デスクトップ（769px〜） */}
      <div className="relative hidden h-[80vh] max-h-[80vh] w-full md:block">
        <Image
          src="/images/fv_pc.jpg"
          alt="今井りか 橿原市議会議員"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}

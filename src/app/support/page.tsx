import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SUPPORT_FORM_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '応援する',
};

export default function SupportPage() {
  return (
    <div className="bg-white pb-20 pt-8">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <nav className="mb-8 text-sm text-text-body/80">
          <Link href="/" className="hover:text-shio-heading">
            TOP
          </Link>
          <span className="mx-2">&gt;</span>
          <span>応援する</span>
        </nav>
        <h1 className="mb-8 text-3xl font-bold text-shio-heading md:text-4xl">
          応援してくださる方へ
        </h1>

        <div className="relative mb-12 aspect-[16/10] max-w-2xl overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/support_portrait-fist-pump.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        <div className="mb-12 max-w-2xl space-y-6 text-base leading-relaxed text-text-body">
          <p>いつも見守ってくださって、ありがとうございます。</p>
          <p>
            名前を書いてくださった一人ひとりのこと、
            ほんとうに忘れたことがありません。
            みなさんの応援があるから、
            今日も声を届け続けることができています。
          </p>
          <p>
            「応援するよ」と言ってくださる方、
            よろしければお力を貸してください。
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-black/10 bg-section-gray p-4">
          <iframe
            src={SUPPORT_FORM_URL}
            title="カンパのお申込み"
            className="min-h-[720px] w-full rounded border-0"
          />
        </div>

        <div className="mt-8 space-y-2 text-sm text-text-body/80">
          <p>※ 政治資金規正法に基づき、適正に管理・報告しています。</p>
          <p>※ 日本国籍をお持ちの方に限らせていただいています。</p>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import { SUPPORT_FORM_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'ご支援ください | 今井りか',
  description: '今井りかの活動を支援していただける方へ。ご支援方法とお問い合わせ先をご紹介します。',
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="border-b-4" style={{ borderColor: '#FF7F00' }}>
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ご支援ください</h1>
          <p className="text-gray-600 text-lg">Support</p>
        </div>
      </section>

      {/* Lead Text */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6 text-lg leading-relaxed text-gray-800">
          <p>いつも見守ってくださって、ありがとうございます。</p>

          <p>
            名前を書いてくださった一人ひとりのこと、
            <br />
            ほんとうに忘れたことがありません。
            <br />
            みなさんの応援があるから、
            <br />
            今日も声を届け続けることができています。
          </p>

          <p className="pt-4">
            「応援するよ」と言ってくださる方、
            <br />
            よろしければお力を貸してください。
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/images/support_portrait-fist-pump.jpg"
            alt="ご支援ください"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Google Forms Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gray-50 rounded-lg p-8">
          {/* Google Forms URL goes here */}
          <iframe
            src={SUPPORT_FORM_URL}
            width="100%"
            height={900}
            className="min-h-[600px] w-full rounded border-0"
            title="カンパのお申込み"
          />
        </div>
      </section>

      {/* Footnotes */}
      <section className="bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>※ 政治資金規正法に基づき、適正に管理・報告しています。</p>
            <p>※ 日本国籍をお持ちの方に限らせていただいています。</p>
          </div>
        </div>
      </section>
    </div>
  );
}

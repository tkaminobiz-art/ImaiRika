import type { Metadata } from 'next';
import React from 'react';
import { Check, Target } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '政策',
  description: '今井りかの政策ページです。こども・子育て、地域、対話と発信の3つの柱を紹介しています。',
};

export default function PolicyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="w-full bg-gradient-to-r from-cdp-purple to-cdp-purple/80 py-12 md:py-16">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            政策
          </h1>
          <p className="text-white/90 text-lg">Policy</p>
        </div>
      </section>

      {/* Page Intro */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-text-body leading-relaxed mb-6">
              暮らしの中の「気になること」から始まった、3つの柱。
            </p>
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              どれも、毎日の生活の中から生まれたものです。
            </p>
          </div>
        </div>
      </section>

      {/* Pillar 1: こども・子育て */}
      <section
        id="children"
        className="w-full py-12 md:py-20 bg-gray-bg"
      >
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Image */}
            <div className="order-1 md:order-1">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/community_kids-voting-event.jpg"
                  alt="こども・子育て"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-2 md:order-2">
              <div className="border-l-4 border-cdp-yellow pl-6 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
                  子どもたちのこと、一緒に考えませんか
                </h2>
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-text-body leading-relaxed">
                  2人の男の子を育てています。
                </p>
                <p className="text-text-body leading-relaxed">
                  毎日お弁当をつくって、送り出して、仕事をして。
                </p>
                <p className="text-text-body leading-relaxed">
                  そんな中で「これ、もうちょっとなんとかならないかな」
                </p>
                <p className="text-text-body leading-relaxed">
                  と思うことが、やっぱりあるんです。
                </p>
                <p className="text-text-body leading-relaxed">
                  同じ気持ちのお母さん、お父さん、きっと多いですよね。
                </p>
                <p className="text-text-body leading-relaxed font-semibold">
                  その声を議会に届けるのが、私の一番大事な仕事です。
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-cdp-yellow" />
                  これまでやってきたこと
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-yellow flex-shrink-0 mt-1">
                      •
                    </span>
                    <span>幼稚園にエアコンがつきました（扇風機だけだったんです）</span>
                  </li>
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-yellow flex-shrink-0 mt-1">
                      •
                    </span>
                    <span>子どもの安全に関わる予算を守りました</span>
                  </li>
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-yellow flex-shrink-0 mt-1">
                      •
                    </span>
                    <span>子ども食堂への支援を議会で提案しました</span>
                  </li>
                </ul>
              </div>

              {/* Future Plans */}
              <div>
                <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-cdp-yellow" />
                  これからやりたいこと
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-yellow flex-shrink-0 mt-1">
                      →
                    </span>
                    <span>物価が上がっても安心できる子育て支援</span>
                  </li>
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-yellow flex-shrink-0 mt-1">
                      →
                    </span>
                    <span>どの子も同じように学べる環境づくり</span>
                  </li>
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-yellow flex-shrink-0 mt-1">
                      →
                    </span>
                    <span>「困ったとき、ここに聞けばいい」がわかる仕組み</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: 地域 */}
      <section
        id="community"
        className="w-full py-12 md:py-20 bg-white"
      >
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Content */}
            <div className="order-2 md:order-1">
              <div className="border-l-4 border-cdp-cyan pl-6 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
                  このまちで暮らし続けたい、と思えるように
                </h2>
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-text-body leading-relaxed">
                  橿原って、いいまちなんです。
                </p>
                <p className="text-text-body leading-relaxed">
                  歴史があって、人があたたかくて。
                </p>
                <p className="text-text-body leading-relaxed">
                  でも「もうちょっとこうだったらな」と
                </p>
                <p className="text-text-body leading-relaxed">
                  感じることもありますよね。
                </p>
                <p className="text-text-body leading-relaxed">
                  商店街のこと、ご近所の暮らしのこと、
                </p>
                <p className="text-text-body leading-relaxed">
                  子育ても介護も、全部つながっている。
                </p>
                <p className="text-text-body leading-relaxed font-semibold">
                  住んでいる人の声を聞いて、
                </p>
                <p className="text-text-body leading-relaxed font-semibold">
                  一緒に「もうちょっと」を良くしていきたい。
                </p>
                <p className="text-text-body leading-relaxed font-semibold">
                  そう思っています。
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-cdp-cyan" />
                  これまでやってきたこと
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-cyan flex-shrink-0 mt-1">
                      •
                    </span>
                    <span>暮らしに関わる大切な予算を守りました</span>
                  </li>
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-cyan flex-shrink-0 mt-1">
                      •
                    </span>
                    <span>地域で聞いた声を、議会に届け続けています</span>
                  </li>
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-cyan flex-shrink-0 mt-1">
                      •
                    </span>
                    <span>まちの将来について、積極的に提案しています</span>
                  </li>
                </ul>
              </div>

              {/* Future Plans */}
              <div>
                <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-cdp-cyan" />
                  これからやりたいこと
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-cyan flex-shrink-0 mt-1">
                      →
                    </span>
                    <span>商店街やお店が元気になる応援</span>
                  </li>
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-cyan flex-shrink-0 mt-1">
                      →
                    </span>
                    <span>「ここに住んでよかった」と思えるまちづくり</span>
                  </li>
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-cyan flex-shrink-0 mt-1">
                      →
                    </span>
                    <span>みなさんの声が、ちゃんと届く仕組み</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/community_kindergarten-sakura.jpg"
                  alt="地域"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: 対話と発信 */}
      <section
        id="dialogue"
        className="w-full py-12 md:py-20 bg-gray-bg"
      >
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Image */}
            <div className="order-1 md:order-1">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/dialogue_mama-meeting-main.jpg"
                  alt="対話と発信"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-2 md:order-2">
              <div className="border-l-4 border-cdp-red pl-6 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
                  気軽に声をかけてください
                </h2>
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-text-body leading-relaxed">
                  政治って、なんだか遠い感じがしますよね。
                </p>
                <p className="text-text-body leading-relaxed">
                  私もそう思っていました。
                </p>
                <p className="text-text-body leading-relaxed">
                  でも実は、毎日の暮らしと地続きなんです。
                </p>
                <p className="text-text-body leading-relaxed">
                  幼稚園のこと、ゴミ出しのこと、公園のこと。
                </p>
                <p className="text-text-body leading-relaxed">
                  「ちょっと気になるんだけど」が、ぜんぶ政治。
                </p>
                <p className="text-text-body leading-relaxed font-semibold">
                  だから気軽に話してほしいんです。
                </p>
                <p className="text-text-body leading-relaxed">
                  座談会でも、SNSでも、道でばったり会ったときでも。
                </p>
                <p className="text-text-body leading-relaxed font-semibold text-lg">
                  「いまいさん、ちょっと聞いて」——
                </p>
                <p className="text-text-body leading-relaxed font-semibold text-lg">
                  その一言が、いちばんうれしい。
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-cdp-red" />
                  これまでやってきたこと
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-red flex-shrink-0 mt-1">
                      •
                    </span>
                    <span>お母さんたちとの座談会を続けています</span>
                  </li>
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-red flex-shrink-0 mt-1">
                      •
                    </span>
                    <span>市政報告「いまいだより」を18号まで届けました</span>
                  </li>
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-red flex-shrink-0 mt-1">
                      •
                    </span>
                    <span>X（旧Twitter）やInstagramで日々の活動を発信中</span>
                  </li>
                </ul>
              </div>

              {/* Future Plans */}
              <div>
                <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-cdp-red" />
                  これからやりたいこと
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-red flex-shrink-0 mt-1">
                      →
                    </span>
                    <span>もっといろんな世代の方と話す機会を増やしたい</span>
                  </li>
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-red flex-shrink-0 mt-1">
                      →
                    </span>
                    <span>若い人にも「政治って意外と身近だな」と思ってもらいたい</span>
                  </li>
                  <li className="flex gap-3 text-text-body">
                    <span className="text-cdp-red flex-shrink-0 mt-1">
                      →
                    </span>
                    <span>「話してよかった」——そう感じてもらえる場を</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-cdp-blue py-14 md:py-20">
        <div className="mx-auto w-full max-w-content px-4 text-center md:px-6">
          <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            政策のこと、もう少し知りたいときは
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/90">
            座談会のご案内や、日々の活動のことも、お気軽にご連絡ください。
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-cdp-yellow px-8 py-3 font-bold text-cdp-blue transition-opacity hover:opacity-90"
            >
              お問い合わせ
            </a>
            <a
              href="mailto:rika.imai0411@gmail.com"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-bold text-cdp-blue transition-opacity hover:opacity-90"
            >
              メールを送る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

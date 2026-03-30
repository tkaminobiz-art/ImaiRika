import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'プロフィール',
};

export default function ProfilePage() {
  return (
    <>
      {/* Page Header */}
      <section className="w-full bg-gradient-to-r from-cdp-red/10 to-cdp-red/5 py-12 md:py-16 border-b-4 border-cdp-red">
        <div className="w-full max-w-content mx-auto px-4 md:px-6">
          <div className="space-y-2">
            <p className="text-cdp-red font-semibold text-sm md:text-base tracking-wide">Profile</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark">プロフィール</h1>
          </div>
        </div>
      </section>

      {/* Main Profile Content */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="w-full max-w-content mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column: Profile Image & Basic Info */}
            <div className="md:col-span-1">
              {/* Profile Image */}
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8 bg-gradient-to-br from-cdp-blue/10 to-cdp-cyan/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-text-body font-semibold text-sm">プロフィール写真</p>
                </div>
                <Image
                  src="/images/profile_portrait-angle-white-bg.jpg"
                  alt="今井りか"
                  fill
                  className="object-cover opacity-0"
                  priority
                />
              </div>

              {/* Basic Info Card */}
              <div className="bg-gray-bg rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-bold text-text-dark border-b-2 border-cdp-red pb-3">
                  基本情報
                </h2>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold text-cdp-red uppercase tracking-wide mb-1">
                      名前
                    </p>
                    <p className="text-lg font-bold text-text-dark">
                      今井 りか
                    </p>
                    <p className="text-sm text-text-body">
                      （いまい りか）
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-cdp-red uppercase tracking-wide mb-1">
                      生年月日
                    </p>
                    <p className="text-text-body">1986年4月11日</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-cdp-red uppercase tracking-wide mb-1">
                      出身
                    </p>
                    <p className="text-text-body">奈良県</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-cdp-red uppercase tracking-wide mb-1">
                      学歴
                    </p>
                    <p className="text-text-body">
                      奈良市立一条高等学校<br />
                      外国語科 卒業
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-cdp-red uppercase tracking-wide mb-1">
                      家族
                    </p>
                    <p className="text-text-body">2人の男の子の母</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-cdp-red uppercase tracking-wide mb-1">
                      所属
                    </p>
                    <p className="text-text-body">立憲民主党</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-cdp-red uppercase tracking-wide mb-1">
                      初当選
                    </p>
                    <p className="text-text-body">2021年2月</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-cdp-red uppercase tracking-wide mb-1">
                      現在
                    </p>
                    <p className="text-text-body">2期目</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Profile Text Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Lead Text */}
              <div className="bg-cdp-red/5 border-l-4 border-cdp-red rounded-r-lg p-6 md:p-8">
                <p className="text-lg md:text-xl leading-relaxed text-text-dark font-medium">
                  「おかしいな」と思ったこと、ありませんか。<br />
                  私もそうでした。子育てをしながら暮らす中で、<br />
                  どうしても気になることがあって、届けたくなったんです。
                </p>
              </div>

              {/* 歩み Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-cdp-red"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-dark">
                    歩み
                  </h2>
                </div>

                <div className="space-y-6 text-text-body leading-relaxed">
                  <p>
                    高校を出てから、いろんな仕事をしてきました。<br />
                    派遣、飲食店、事務、保育の現場。<br />
                    遠回りだったかもしれません。<br />
                    でも、その中で出会った人や経験が、今の私をつくっています。
                  </p>

                  <p>
                    議員になろうなんて、もともと考えてもいませんでした。<br />
                    きっかけは、子どもを公立幼稚園に預けたこと。<br />
                    テレビでは「子育てしやすい世の中に」と聞くのに、<br />
                    目の前の現実は、ちょっと違っていて。<br />
                    この声、届けたいな。そう思ったのが始まりでした。
                  </p>

                  <p>
                    32歳のとき、思い切って立候補を決めました。<br />
                    上の子が5歳、下の子はまだ1歳。<br />
                    正直、不安もたくさんありました。<br />
                    それでも「届けたい」の気持ちのほうが強かったんです。
                  </p>

                  <p>
                    2021年2月、たくさんの方に支えていただいて、初当選。<br />
                    あのとき名前を書いてくださった方々のこと、<br />
                    今も忘れたことはありません。
                  </p>
                </div>
              </div>

              {/* 議会での取り組み Section */}
              <div className="space-y-4 pt-8 border-t border-gray-bg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-cdp-red"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-dark">
                    議会での取り組み
                  </h2>
                </div>

                <div className="space-y-6 text-text-body leading-relaxed">
                  <p>
                    議員になってからは、毎日が勉強です。<br />
                    議会では、子どもたちが過ごす環境のことや、<br />
                    暮らしに関わる予算のことを中心に取り上げてきました。
                  </p>

                  <p>
                    うれしかったのは、公立幼稚園にエアコンがついたこと。<br />
                    夏、扇風機だけで過ごしていた教室が気になって、<br />
                    議会で「それっておかしくないですか」と声を上げました。<br />
                    小さなことかもしれません。<br />
                    でも、届けた声がかたちになった瞬間でした。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-cdp-blue py-14 md:py-20">
        <div className="mx-auto w-full max-w-content px-4 text-center md:px-6">
          <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            ちょっと話してみたい、というときは
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/90">
            お電話でもメールでも、SNSでも大丈夫です。お気軽にどうぞ。
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
